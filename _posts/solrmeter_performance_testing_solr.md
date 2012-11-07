{{{
 "title" : "Evaluating SolrMeter for Performance Testing",
 "authorName" : "Pradeep Teregowda",
 "authorLink" :"",
 "authorImage" :"",
 "tags": ["tech"],
 "date": "10-30-2012"
}}}

In this post I’m going to review SolrMeter, a performance measurement and testing tool for the popular Solr platform. Currently, there is a lack of such tools for systems using Solr. In case you are not familiar with Solr, it is best described as an enterprise search platform built on top of Apache Lucene.

Unlike most tools available for Web load testing and performance monitoring, SolrMeter includes both a loading component and a monitoring component in a single package. An integrated console in SolrMeter provides readouts for queries, updates, commits optimization and performance results on the same application screen as seen below.



![Operation Time Line in SolrMeter](http://i.imgur.com/FyjjL.png)
### Operation Time Line in SolrMeter

On this integrated console, you only need to provide a single parameter for Intended Queries per Minute to fire-off a performance test. All other parameters to run this test are available through Settings in the Edit menu. In the same way, we only need to input Intended Updates per Minute to kick-off a performance test on Updates. You can set additional parameters, HTTP Method Utilized, including through Advanced Settings menu in the Settings screen.
 
To specify query inputs to Query Console, we can use simple keywords, phrases or Boolean expressions along with filters and query faceting with the input query file. That aside, SolrMeter offers only limited support for an external parameter file. Only a few file formats for Update Console are acceptable and they must use (key,value) pairs to specify params.

SolrMeter displays performance test results on tabs for Histogram, Pie-charts, Query Time History and more. Along with Query Statistics, these charts provide a complete view of query performance. The cache history panel is pretty useful in tuning cache performance for queries. And, overall information for updates and queries is represented on Operation Time Line tab.

One minor inconvenience in all this is that unlike JMeter and openSTA, SolrMeter randomizes the number of queries generated per second while achieving the specified QPM target. This is easily alleviated by modifying software settings in Settings menu OR modifying SolrMeter source-code.

Overall, SolrMeter offers several features useful for performance tuning Solr instances. And, because SolrMeter is open-source, features can be added and existing features can be refined easily.

References:

* SolrMeter http://code.google.com/p/solrmeter/
* Solr http://lucene.apache.org/solr/
 
