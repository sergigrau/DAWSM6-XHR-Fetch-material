/*
 * Aplicació amb Node.js HTTP que permet recuperar dades d'un formulari per XHR2 amb progrés
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 13.11.20
 * format del document UTF-8
 *
 * CHANGELOG
 * date 13.11.20
 * - Aplicació amb Node.js HTTP que permet recuperar dades d'un formulari per XHR2
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
const http = require("http");
const url = require("url");
const fs = require('fs');
const formidable = require('formidable');

function iniciar() {
    function onRequest(request, response) {
        var sortida;
        var pathname = url.parse(request.url).pathname;

        console.log("Petició per a  " + pathname + " rebuda.");
        if (pathname == '/inici') {
            fs.readFile('./M08_formulariProgresXHR.html', function (err, sortida) {
                response.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                response.write(sortida);
                response.end();
            });

        } else if (pathname == '/enviar') {

            const form = formidable({ multiples: true });

            form.parse(request, (err, fields, files) => {
                response.writeHead(200, { 'content-type': 'application/json' });
                response.end(JSON.stringify({ fields, files }, null, 2));
            });


        } else {
            response.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });
            sortida = "404 NOT FOUND";
            response.write(sortida);
            response.end();
        }

    }


    http.createServer(onRequest).listen(8888);
    console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;
