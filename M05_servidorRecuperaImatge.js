/*
 * Aplicació amb Node.js HTTP que permet recuperar una imatge per AJAX
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 12.12.16
 * format del document UTF-8
 *
 * CHANGELOG
 * 12.12.16
 * - Aplicació amb Node.js HTTP que permet recuperar una imatge per AJAX
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");
var fs = require('fs');

function iniciar() {
    function onRequest(request, response) {
        var sortida;
        var pathname = url.parse(request.url).pathname;

        console.log("Petició per a  " + pathname + " rebuda.");
        if (pathname == '/inici') {
            fs.readFile('./M05_recuperaImatge.html', function(err, sortida) {
                response.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
                });
                response.write(sortida);
                response.end();
            });

        } else if (pathname == '/imatge') {
            fs.readFile('./M05_ajax.png', function(err, sortida) {
                response.writeHead(200, {
                    'Content-Type': 'image/png'
                });
                response.write(sortida);
                response.end();
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
