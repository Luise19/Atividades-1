var x = 2;
var y = 3;
console.log(x*y);
var http = requer('http')

http.createServer(função (req, res){
    res.writeHead(200, {'Tipo de conteúdo': 'texto/html'})
    res.end('<center><h2>Boa tarde!</h2></center>');
}).listen(80);