require.config({
    paths: {
        // DOM manipulation and AJAX
        jquery: 'lib/jquery',

        // Routing
        crossroads: 'lib/crossroads',
        signals: 'lib/signals',
        hasher: 'lib/hasher',

        // Templating
        handlebars: 'lib/handlebars.runtime',

        // Utility
        lodash: 'lib/lodash',

        // Amazon S3
        S3Ajax: 'lib/S3Ajax',
        sha1: 'lib/sha1'
    }
});

require([
    'jquery', 'lodash', 'crossroads', 'hasher', 'templates',  'bucket', 'S3Ajax'
],
function($, _, crossroads, hasher, templates, bucket, S3) {
    // set up s3 library
    //var s3 = new S3(credentials);

    // setup crossroads
    crossroads.addRoute('home');
    crossroads.addRoute('lorem');
    crossroads.addRoute('lorem/ipsum');
    crossroads.routed.add(console.log, console); // log all routes

    // setup hasher
    function parseHash(newHash, oldHash){
      crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); // parse initial hash
    hasher.changed.add(parseHash); // parse hash changes
    hasher.init(); // start listening for history change

    console.log('hello');
});
