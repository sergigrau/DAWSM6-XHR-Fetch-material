/*
 * Servidor HTTP que rep una cadena i la retorna invertida
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 06.12.2015
 * format del document UTF-8
 *
 * CHANGELOG
 * 06.12.2015
 * - Servidor HTTP que rep una cadena i la retorna invertida
 *
 * 11.11.2021
 * - Actualizacions versió nodeJS 17
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
		let sortida;
        const baseURL = request.protocol + '://' + request.headers.host + '/';
        const reqUrl = new URL(request.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");
        const pathname = reqUrl.pathname;

		if (pathname == '/formulari') {
			response.writeHead(200, {
				"Content-Type" : "text/html; charset=utf-8"
			});

			fs.readFile('./M01_invertirCadena.html', function(err, sortida) {
				response.writeHead(200, {
					'Content-Type' : 'text/html'
				});
				response.write(sortida);
				response.end();
			});

		} else if (pathname == '/invertir') {
			response.writeHead(200, {
				"Content-Type" : "text/plain; charset=utf-8"
			});
			
			let cadena = reqUrl.searchParams.get('cadena')
			sortida = cadena.split("").reverse().join("");
			response.write(sortida);
			response.end();
		} else {
			response.writeHead(404, {
				"Content-Type" : "text/html; charset=utf-8"
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
