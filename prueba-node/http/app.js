const http = require(`http`);
const PORT = 3036;
const HOST = `127.0.0.1`;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {`Content-Type`:`text/plain; charset=utf-8`});
    res.end(`Hola mundo`);
});

server.listen(PORT, HOST, ()=>{
    console.log(`http://${HOST}:${PORT}`);
    
})