# js-app
===============

A starting point and build environment for javascript applications deployed to [Amazon S3](http://aws.amazon.com/documentation/s3/).

## How to Install and Run

Install NodeJS from http://nodejs.org/.

Download and install the [GruntJS](http://gruntjs.com/) command line tool.

    $ npm install -g grunt-cli

Install coffescript to cli.

    $ npm install -g coffee-script

Cd to project directory, then download and install NodeJS packages.

    $ npm install

Create compiled directory (runs default grunt task).

    $ grunt

Run server.

    $ coffee server.cofffee

Open http://localhost:9090 in a web browser.


## Development

Watch for and compile changes to sass/coffeescript.
    
    $ grunt watch

## Deployment

Grunt is used to compile and push the app to an s3 bucket. To deploy, a file named .aws.json containing your Amazon S3 authentication must be present at the project root.

.aws.json

    {
      "key": "your_s3_key",
      "secret": "your_s3_secret"
    }

Push to the bucket "my-bucket" by executing the grunt task "deploy" from the command line.

    $ grunt deploy:my-bucket

## Technologies Used
### CSS
[SASS](http://sass-lang.com/docs/yardoc/)  
[Bourbon](http://bourbon.io/docs/) - CSS Framework  
[Bourbon Neat](http://neat.bourbon.io/docs/) - Responsive Framework  

### Javascript
[CoffeeScript](http://coffeescript.org/)  
[RequireJS](http://requirejs.org/) - Dependency Management  
[Underscore](http://underscorejs.org/) - Utility  
[Backbone](http://backbonejs.org/) - Base View & Router classes  
[jQuery](http://api.jquery.com/) - DOM Interaction and AJAX  
[Handlebars](http://handlebarsjs.com/) - Templating  
[Mocha](http://visionmedia.github.io/mocha/) - Unit Testing  
[Chai](http://chaijs.com/guide/styles/) - Assertions

### Build & Development
[NodeJS](http://nodejs.org/)  
[GruntJS](http://gruntjs.com/) - Build System

### Server
[Amazon S3](http://aws.amazon.com/documentation/s3/)
[S3Ajax](http://decafbad.com/trac/wiki/S3Ajax) - Javascript S3 Library