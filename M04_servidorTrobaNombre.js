/*
 * Aplicació amb Node.js HTTP que demana que s'encerti un numero al usuari
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 06.12.2015
 * format del document UTF-8
 *
 * CHANGELOG
 * 06.12.2015
 * - Aplicació amb Node.js HTTP que demana que s'encerti un numero al usuari
 * 11.11.2021
 * - Actualizacions versió nodeJS 17
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");
var fs = require('fs');
var aleatori = Math.ceil(Math.random()*10);
function iniciar() {
	function onRequest(request, response) {
		let sortida;
        const baseURL = request.protocol + '://' + request.headers.host + '/';
        const reqUrl = new URL(request.url, baseURL);
        console.log("Petició per a  " + reqUrl.pathname + " rebuda.");
        const pathname = reqUrl.pathname;
		
		let res = reqUrl.searchParams.get('res');

		console.log("Petició per a  " + pathname + " rebuda.");
		if (pathname == '/inici') {
			response.writeHead(200, {
				"Content-Type" : "text/html; charset=utf-8"
			});

			fs.readFile('./M04_trobaNombre.html', function(err, sortida) {
				response.writeHead(200, {
					'Content-Type' : 'text/html'
				});
				console.log(aleatori);
				response.write(sortida);
				response.end();
			});

		} else if (pathname == '/verificar') {
			response.writeHead(200, {
				"Content-Type" : "text/html; charset=utf-8"
			});
			if (res==aleatori) {
				response.write('CORRECTE');

			} else {
				response.write('INCORRECTE');

			}
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
