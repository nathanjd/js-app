var file = new (require('node-static').Server)('./public'),
    fs = require('fs'),
    spawn = require('child_process').spawn,
    port = process.argv[2] || 8888,
    templateDir = 'assets/templates',
    templateFiles = fs.readdirSync(templateDir);

function compileTemplates () {
  // templates
  var handlebars = spawn('handlebars', [templateDir, '-f', 'public/templates.js']);
  handlebars.on('exit', function (code) {
    console.log('template compilation', code === 0 ? 'successfull' : 'failed');
  });
}

// compile templates on change
function watchTemplates () {
  function templateChanged (event) {
    if (event === 'change') compileTemplates();
  }
  for (var i = 0; i < templateFiles.length; i++)
    fs.watch(templateDir + '/' + templateFiles[i], templateChanged);
}

compileTemplates();
watchTemplates();

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    // Serve files!
    file.serve(request, response);
  });
}).listen(parseInt(port, 10));

console.log('Static file server running at\n  => http://localhost:' + port + '/\nCTRL + C to shutdown');