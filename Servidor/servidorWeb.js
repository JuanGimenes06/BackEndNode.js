const http = require('http');
const path = require('path');
//const {URL} = require('url'); 
//é o mesmo
const URL = require('url').URL;
const fs = require('fs');

const porta = 3000;

const servidor = http.createServer((req, res) => {
    const urlParseada = new URL(req.url, "http://localhost");
    const caminho = urlParseada.pathname;

    if(caminho === '/'){

        const caminhoDoIndex = path.join(__dirname, 'paginas', 'index.html');

        fs.readFile(caminhoDoIndex, 'utf8', (err,conteudo) => {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'});
                res.end('Erro interno do servidor');
                return
            }

            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end(conteudo);
        })

        
    }
    else if(caminho === '/sobre'){
        const caminhoDoIndex = path.join(__dirname, 'paginas', 'sobre.html');

        fs.readFile(caminhoDoIndex, 'utf8', (err,conteudo) => {
            if (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'});
                res.end('Erro interno do servidor');
                return
            }

            res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            res.end(conteudo);
        })
    } else{
        res.writeHead(404, {'Content-Type' : 'text/plain; charset=utf-8'});
        res.end('Página não encontrada');
    }
    
});

servidor.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})