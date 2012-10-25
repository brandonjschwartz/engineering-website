{{{
  "title" : "Benchmarking in Ruby",
  "authorName": "Josh",
  "authorLink": "http://github.com/jmervine",
  "authorImage": "https://secure.gravatar.com/avatar/ed808193b8c2c8516715816f90a005b2?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
  "tags" : [ "tech" ],
  "date" : "10-23-2012"
}}}

Benchmark (per [Dictionary.com](http://dictionary.reference.com/browse/benchmark)) - *"an established point of reference against which computers or programs can be measured in tests comparing their performance, reliability, etc."*

In my recent work with [caches](http://www.rubyops.net/caching), I've been making sure to benchmark my code before releasing it. It's pretty evident, that anyone working with caches cares about speed and for larger sites, every millisecond (and sometimes even microsecond) can count.

[Ruby] has built in benchmarking capibilities (see [the API for Benchmark](http://www.ruby-doc.org/stdlib-1.9.3/libdoc/benchmark/rdoc/Benchmark.html) for details beyond what I cover here). While Benchmark has several different methods of running benchmarks, I tend to focus on *Benchmark.bm*, which is a pretty straigh forward iteration through your code samples.

You can easily find good basic examples in the documentation, but I'll include them here for your convience.

### Basic Example

Benchmark Code:

    1: require 'benchmark'
    2: n = 50000
    3: Benchmark.bm do |x|
    4:   x.report { for i in 1..n; a = "1"; end }
    5:   x.report { n.times do   ; a = "1"; end }
    6:   x.report { 1.upto(n) do ; a = "1"; end }
    7: end


Which results in (depending on your machine specs):

        user     system      total        real
    1.033333   0.016667   1.016667 (  0.492106)
    1.483333   0.000000   1.483333 (  0.694605)
    1.516667   0.000000   1.516667 (  0.711077)


Great, so what's it all mean?

Well, if we look at the code sample line by line:

1. we require benchmark so it's availble for use
2. we set *n* to *50000* to defie the number of times to itterate the various loops were going to be benchmarking in this run
3. we open a *Benchmark.bm* block with *x*
4. define a report block, which contains your first loop -- a *for* loop
5. define your second loop -- *n.times*
6. define your thrid loop -- *upto(n)*
7. close your benchmark block

Simple enough -- we've started a benchmark block and defined thee things to benchmark.

Now for the results -- there's four columns of output here, "user" (or user CPU time), "system" (or system CPU time), "total" (or the sum of user and system CPU time) and "real" (or the actual real time elapsed).

So simply put, the conclusion of this test is that the *for* loop is going to be the fastest.

### Advanced Example

This is a simplified version of what I'm using for [Duality], [Mongocached] and [Diskcached]. All of which benchmark themselves against [Memcached] and in some cases eachother.


In this example, I'll be running a benchmark of [Diskcached], [Mongocached] and [Memcached] running a cache request, or *get('some_key')*.


Benchmark Code:

    require 'benchmark'
    require 'diskcached'
    require 'mongocached'
    require 'memcached'

    # init diskcached
    diskcache = Diskcached.new('/tmp/bm_cache')

    # init mongocached with defaults -- localhost
    mongocache = Mongocached.new()

    # init memcached
    memcache = Memcached.new("localhost:11211")

    # create a data object to be cached
    cache_content = "some string to be saved in cached"

    # set the number of times to itterate over the cache get
    #   I do this because these actions are very fast, so a
    #   single call, isn't really enough to show a difference.
    #
    #   For this, I typically use 100,000, as it allows you to
    #   easily translate all interations into a single
    #   intteration.
    #
    #   1 second for all, is 1 microsecond for a single iteration
    #   using "fuzzy logic".
    iterations = 100000

    # set each cache, so we have something to get
    diskcache.set("bm_key", cache_content)
    mongocache.set("bm_key", cache_content)
    memcache.set("bm_key", cache_content)

    # now for the meat
    Benchmark.bm do |bm|
      # first report - diskcached
      bm.report('disk') do
        (1..iterations).each do
          diskcache.get("bm_key")
        end
      end

      # second report - mongocached
      bm.report('mong') do
        (1..iterations).each do
          mongocache.get("bm_key")
        end
      end

      # third report - memcached
      bm.report('memc') do
        (1..iterations).each do
          memcache.get("bm_key")
        end
      end
    end


So what are we doing here?

* First we setup our caches to be benchmarked by initializing them and inserting some data to be fetched.
* Inside *Benchmark.bm* we create a report for each cache, and run *100000* cache fetches as fast as we can.

It's pretty much that simple.

It should be noted that this isn't a real emualtion of how this code will preform in production, but it should make it pretty clear which is faster and possible surface any gross inefficiencies.


Now, the results of this test for those that are curious (and to prove it all works):
> Note: this was run on a Debian virtual host with 8 cores.


          user       system    total       real
    disk  6.130000   2.180000   8.310000 (  8.501748)
    mong  29.650000  4.150000  33.800000 ( 49.266912)
    memc  2.330000   2.720000   5.050000 (  9.508415)


Okay, now what are our takeaway from this. Diskcached is quite a bit faster with reads, while mongocached and memcached are about the same.


### Closing

This is my little write up on how I benchmark. I would love comments and feedback from those who know more about it. I'm always down to learn.

Also, I have a template I use for benchmarking small samples of code in a gist -- I call it my [Benchmark A/B Test Suite](https://gist.github.com/3157875) -- enjoy!

> Note: This post was cross-posted from the [RubyOps.net blog entry by the same name](http://www.rubyops.net/benchmarking-in-ruby).


[Ruby]: http://www.rubyops.net/ruby
[Duality]: http://www.rubyops.net/duality-two-caches-at-once
[Mongocached]: http://www.rubyops.net/mongocached-simple-cache-using-mongodb
[Diskcached]: http://www.rubyops.net/diskcached-simple-disk-cacheing-for-ruby
[Memcached]: http://memcached.org/
