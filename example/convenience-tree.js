var git = require( '../' );

git.repo( '../.git', function( err, repo ) {
  if( err ) { throw err; }

  repo.branch( 'master', function( err, branch ) {
    if( err ) { throw err; }

    branch.tree().walk( function( idx, entry ) {
      console.log( entry.name );
      console.log( entry.content );
    });
  });
});
