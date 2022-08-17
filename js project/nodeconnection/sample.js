var http = require('http');

var url = require('url');




http.createServer(function(req, res)

 {

    var route = req.url

    if(route==='/getusernames')
    {
        var usernames = ['salman Khan', 'shahrukh khan', 'Aamir khan']
        res.end(JSON.stringify(usernames))
    }

    console.log('server connected')

}).listen(7000);