// read all files in _posts folder and use the rss package to generate rss.xml
// all files must be markdown with this structure:
// {{{
//   "title" : "Node.js events",
//   "authorName": "Oren",
//   "authorLink": "https://github.com/oren",
//   "authorImage": "https://secure.gravatar.com/avatar/ea28a1533185f15e9364a8db6f9c0bae?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
//   "tags" : [ "tech" ],
//   "date" : "9-15-2012"
// }}}
//
// this is a markdown file!!
//
// parameters:
//   postsFolder - you markdown files folder.
//   rssFile - the name of the rss output file.
//   cb - callback. if a task is async, grunt uses a done function that you should call at the end of the async task.
//
// output:
// a single file named 'rssFile' which contain the rss feed.

// core module
var fs = require('fs');

// non-core packages
var RSS = require('rss');
var jsonFm  = require('json-front-matter').parse;

var path = './_posts/';
var totalFiles = 0;
var posts = [];

/* lets create an rss feed */
var feed = new RSS({
  title: 'YP Engineering Website',
  description: 'YP Engineering Website',
  feed_url: 'http://engineering.yp.com/rss.xml',
  site_url: 'http://engineering.yp.com',
  image_url: 'http://engineering.yp.com/img/rss.png',
  author: 'Yellow Pages'
});

function generateRss(postsFolder, rssFile, cb) {
  fs.readdir( postsFolder, function ( err, files ) {
    if ( err ) throw err;
    var totalFiles = files.length;

    files.forEach(function ( file ) {
      fs.readFile( postsFolder + file, 'utf-8', function ( err, data ) {
        var t = jsonFm(data);
        var fileName = file.replace( /\.[^\.]*$/, '' );

        posts.push({
            title:  t.attributes.title,
            description: t.body.replace(/\n.*/g, ''),
            url: '/post/' + fileName,
            author: t.attributes.authorName,
            date: new Date(t.attributes.date)
        });

        totalFiles -= 1;

        if(totalFiles === 0) {
          posts.sort(function( a, b ) {
            if ( a.date < b.date ) return 1;
            if ( a.date > b.date ) return -1;
            return 0;
          });

          posts.forEach(function(post) {
            feed.item(post);
          });

          fs.writeFile(rssFile, feed.xml(), function (err) {
            if (err) throw err;
            console.log(rssFile + ' was created');
            if (cb) {
              cb();
            }
          });
        }
      });
    });
  });
}

module.exports = generateRss;
