{{{
 "title" : "SolrMeter: Performance Testing for Solr",
 "authorName" : "Pradeep Teregowda",
 "authorLink" : "",
 "authorImage" : "",
 "tags": ["tech"],
 "date": "10-30-2012"
}}}


Testing is an integral to development. For those working with information retrieval systems, 
there have not been many tools or support for testing available. In this regard, SolrMeter 
is a particularly welcome tool.  In terms of existing performance monitoring and testing 
tools for Solr, availability has been patchy and many of the tools available are not free.
With the growing popularity of Solr based applications, the ability to identify and improve 
performance of Solr instances is valuable.

There are several differences between web load testing, performance monitoring tools and 
SolrMeter. SolrMeter includes both a loading component and a monitoring component in a single 
package. The integrated console provides access to sub consoles for queries, updates, commits, 
optimization and results in the same page.  
For setting up a test, the console provides us with access to only the intended queries per 
minute parameter, other parameters being accessible through the settings menu. Drill downs to 
modify a wider set of parameters are available through advanced settings. This includes 
settings for the HTTP method utilized and all parameters available through the SolrMeter 
settings menu. 


[![solr](http://i.imgur.com/FyjjL.png)](http://i.imgur.com/FyjjL.png)

The load testing component of SolrMeter is driven by queries provided by the user.  To 
help the user generate queries, a tool for extracting queries from Solr log files is available 
under the Tools tab.  One of the major differences to other web application load testing tools 
such as Jmeter or openSTA, which provide a ramp up of load over time, is that by default 
queries are made to the instance in a randomized manner (hence the need for tracking actual 
queries per minute). This can somewhat be confusing, and makes it difficult to under stand 
the results generated.

In terms of inputs, the query file allows both simple keywords, phrases and boolean expressions, 
to be used along with faceting and filters. More complex queries can be emulated with faceting and 
filters provided within the file. There is limited support for parameterization through the extra 
params file.  For updates, the file format is limited and uses a semicolon separated values with 
colon separated key value pairs.

Results from running queries are shown through a series of graphs, tables, available as a sub console 
in the main window.  The Histogram, Pie Chart, Query Time history are the most relevant when a query 
load test is performed and these graphs along with the query statistics table provide a overview of 
the query performance of the instance. In addition, the cache history panel, which obtains cache
 performance data from Solr interface, can be useful in tuning cache performance for queries. The 
overall information for updates and queries is available with the operation time line. Results for 
individual sub consoles such as query, updates are also available at the sub consoles, these are 
particularly relevant when the query mechanism is set to random.

Overall, SolrMeter provides several features which can be useful for performance tuning Solr 
instances, the open source nature of SolrMeter means that features can be added and existing 
features fine tuned.


References:

* [SolrMeter](http://code.google.com/p/solrmeter)
* [Solr](http://lucene.apache.org/solr)
 
