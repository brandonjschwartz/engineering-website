var express  = require( 'express' );
var app      = express();
var poet     = require( 'poet' )( app );
var config  = require('./config.js');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

poet.set({
  postsPerPage : 10,
  posts        : __dirname + '/_posts',
  metaFormat   : 'json'
}).createPostRoute( '/post/:post', 'post' )
  .createPageRoute( '/page/:page', 'page' )
  .createTagRoute( '/tag/:tag', 'tag' )
  .init();

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'jade' );
app.use( express.static( __dirname + '/public' ));
app.use( app.router );
app.use( notFoundFn );

app.configure('development', function () {
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }) );
});

app.configure( 'production', function () {
  app.use( express.errorHandler() );
});

require( './routes' )( app );

app.listen( config.port );

function notFoundFn ( req, res ) {
  if ( req.accepts( 'html' )) {
    res.status( 404 );
    res.render( '404', { url: req.url });
    return;
  }
}

console.log('Server listening on port ' + config.port, ' Environment: ', process.env.NODE_ENV);
