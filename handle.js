function handle(request, response) {
    response.writeHead(200, {
        'Content-type': 'text/html'
    });
    response.write(
        '<!DOCTTYPE "html"' +
        '<html>' +
        '<head><title>HTTP Module</title></head>' +
        '<body>' +
        '<h1>Hello from http module</h1>' +
        '</body>' +
        '</html>'
    );
    response.end();
}

module.exports = handle;