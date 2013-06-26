module.exports = function ( app ) {

  app.get( '/', function ( req, res ) {
    res.render( 'index', {
      title: 'Home | YP Engineering'
    });
  });

  app.get( '/projects', function ( req, res ) {
    res.render( 'projects', {
      title: 'Projects | YP Engineering'
    });
  });

  app.get( '/tags', function ( req, res ) {
    res.render( 'tags', {
      title: 'Tags | YP Engineering'
    });
  });

};
