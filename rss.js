// read all files in _posts folder and use the rss package to generate rss.xml

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

function generateRss() {
  fs.readdir( path, function ( err, files ) {
    if ( err ) throw err;
    var totalFiles = files.length;

    files.forEach(function ( file ) {
      fs.readFile( path + file, 'utf-8', function ( err, data ) {
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

          fs.writeFile('public/rss.xml', feed.xml(), function (err) {
            if (err) throw err;
            console.log('public/rss.xml was created');
          });
        }
      });
    });
  });
}

module.exports = generateRss;
