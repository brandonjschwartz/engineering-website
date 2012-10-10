{{{
  "title" : "Performance Testing with Httperf",
  "authorName": "Josh",
  "authorLink": "http://github.com/jmervine",
  "authorImage": "https://secure.gravatar.com/avatar/ed808193b8c2c8516715816f90a005b2?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
  "tags" : [ "tech" ],
  "date" : "9-18-2012"
}}}


### Introduction

> *"[Httperf](http://www.hpl.hp.com/research/linux/httperf/) -- a tool for measuring web server performance. It provides a flexible facility for generating various HTTP workloads and for measuring server performance. The focus of httperf is not on implementing one particular benchmark but on providing a robust, high-performance tool that facilitates the construction of both micro- and macro-level benchmarks. The three distinguishing characteristics of httperf are its robustness, which includes the ability to generate and sustain server overload, support for the HTTP/1.1 and SSL protocols, and its extensibility to new workload generators and performance measurements."*
>
> *Source: [Httperf Homepage](http://www.hpl.hp.com/research/linux/httperf/)*

##### Httperf's Default Scope
It's important to note that by default httperf only tests the standard http payload of your application -- e.g. the rendered HTML of the URL you are testing. Much like "curl", it does not load assets (images, javascript or css) by default. In this document, I will be referring to this as the "**base payload**". There are ways to configure it to load additional requests as part of the same session, which I will be covering. 


### Standard Usage
**Basic command-line usage:**

    $ httperf --server www.rubyops.net --port 80 --num-conns 10 --rate 1

**Results:**

    httperf --client=0/1 --server=www.rubyops.net --port=80 --uri=/ --rate=1 \ 
            --send-buffer=4096 --recv-buffer=16384 --num-conns=10 --num-calls=1

    Maximum connect burst length: 1

    Total: connections 10 requests 10 replies 10 test-duration 9.286 s

    Connection rate: 1.1 conn/s (928.6 ms/conn, <=1 concurrent connections)
    Connection time [ms]: min 284.2 avg 303.2 max 376.2 median 284.5 stddev 38.4
    Connection time [ms]: connect 91.8
    Connection length [replies/conn]: 1.000

    Request rate: 1.1 req/s (928.6 ms/req)
    Request size [B]: 68.0

    Reply rate [replies/s]: min 1.0 avg 1.0 max 1.0 stddev 0.0 (1 samples)
    Reply time [ms]: response 99.1 transfer 112.3
    Reply size [B]: header 241.0 content 29147.0 footer 0.0 (total 29388.0)
    Reply status: 1xx=0 2xx=10 3xx=0 4xx=0 5xx=0

    CPU time [s]: user 1.99 system 7.27 (user 21.5% system 78.3% total 99.7%)
    Net I/O: 31.0 KB/s (0.3*10^6 bps)

    Errors: total 0 client-timo 0 socket-timo 0 connrefused 0 connreset 0
    Errors: fd-unavail 0 addrunavail 0 ftab-full 0 other 0


In this example, I'm running ten connections _[\-\-num-conns 10]_ through [www.rubyops.net](http://www.rubyops.net/) _[\-\-server www.rubyops.net]_ at a rate of one connection per second _[\-\-rate 1]_. 

Breaking down the results, I typically focus on the following rows:

1. "Connection rate" -- this is mostly useful when not passing "--rate", which sends connections as fast as possible.
1. "Connection time [ms]" -- this is the meat of the test. It's a breakdown of various metrics related to the test against your base payload.
1. "Reply size" -- this is useful when testing change which are geared towards reducing the base payload of your application. Things like adding 'gzip' compression, uglifying JavaScript or 'haml', etc.
1. "Reply status" -- it's important to ensure that you're getting 200's when testing (or perhaps 302s if that's expected).

#### Being a Hog!

While my examples don't include this, using the "\-\-hog" flag when running httperf on a host dedicated to generating load is a very good idea. This tells httperf to use as many TCP connections as possible, thus avoiding bottlenecks. This flag should probably be omitted if generating load on the same box your application is running on.

### Testing Pages with AJAX

In more advanced usages you can create a a series of URIs to pass to emulate a single session. This is particularly useful when you're performance testing a page with several AJAX calls. 

To do this, you need to create a connections file with all URIs you want to hit.

**sessions.log**

    /
            /foo
            /bar
            /bah

You then need specify the log file you want to use in the place of "\-\-uri" to tell 'httperf' what paths to use.

    httperf --server www.rubyops.net --wsesslog 10,1,sessions.log


Obviously, I'm not implementing "/foo", "/bar" and "/bah" as AJAX on my site, but you get the idea. 

So what am I doing here? With "\-\-wsesslog", the first to field is the number of connections to make, basically the same as "\-\-num-conns" from the previous example. The second field is defined as "burst-to-burst user think time", which most simply means the number of times to access the URI before moving on to the next -- e.g. 1 would be one request per cycle through the list, 0.25 would be four requests per cycle through the list. 

Okay, simple enough. So what does 'httperf' do with that? Well instead of trying to explain it myself, I'm going quote  [httperf's man page](http://www.hpl.hp.com/research/linux/httperf/httperf-man.txt); *"When \-\-wsess or \-\-wsesslog is specified, httperf generates and measures sessions instead of individual calls and additional statistics are printed at the end of a test."*

### Replaying Production Logs

Httperf makes replaying production logs somewhat simple with the "\-\-wlog" option, which is used to generate a sequence of URIs to access. The one oddity, and why I say "somewhat simple" is that it expects an ASCII NUL separated [\0] file (as opposed to "new line" separated [\n], see examples below for details).

The first step is to generate your list. I use [Nginx](/tag/nginx), so that's what I'm going to focus on here. That said, this should be pretty adaptable to most web servers. Here's the command I use to generate a traffic log from Nginx's access.log:

    $ awk '{ print $7 }' /path/to/logs/access.log > urls.log

This assumes -- of course -- that your request path is in the seventh column.

In rare caces you need to clean up a leading or trailing quote like so:

    $ awk '{ print $7 }' /path/to/logs/access.log | sed 's/^\"//g' | \
      sed 's/\"$//g' > urls.log


So with that, we have a list of URIs from [www.rubyops.net](http://www.rubyops.net/), which we've called "urls.log". From this, we need to generate a file which is ASCII NUL separated which we'll call "wlog.log":

Start with urls.log.

     /
     /tag
     /tag/ruby
     /archive
     /2012
     /2012/07

Convert it to wlog.log -- replace line breaks with ASCII NUL characters.

        $ tr "\n" "\0" < urls.log > wlog.log

Now we can run our test.

        $ httperf --server www.rubyops.net --wlog Y,wlog.log
        
Note, the "Y" (or "N") switch is simply telling httperf to loop through the urls in your log file (or not).

### Best Practices

I don't claim to be an expert in this area (**AT ALL**), however, here a few things I've picked up in my travels, which has made my life easier in regards to performance testing best practices. They aren't always hard rules and I've broken all of them out of necessity at one point or another.

5. Don't performance test against production applications!
6. Don't performance test against production services!
7. Don't performance test against production databases!
7. **Don't performance test against production ANYTHING!**
4. If possible, try to performance test in an environment which is identical to production in every way -- same configuration, same network, same OS, same hardware (including CPU, RAM, etc.) -- to make your tests as accurate as possible.
1. Whenever possible, generate load (i.e. run httperf) on a separate machine from the host that the application is running on. This seems like a no-brainer, but you'd be surprised…
2. Use "\-\-hog" any time you're generating load from a separate host and your request rate is high. Eat up those TCP connections, don't be shy!
3. Generating load from an external connection can be good to test your overall network latency, but be sure your starting point connection can handle large amounts of traffic. For example, generating 100,000 connections at 100QPS from a Cable or DSL line probably isn't the best idea.
1. Oh and **don't performance test against production!**


