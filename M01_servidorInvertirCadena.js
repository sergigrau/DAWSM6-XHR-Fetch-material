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
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');

function iniciar() {
	function onRequest(request, response) {
		var sortida;
		var pathname = url.parse(request.url).pathname;
		console.log("Petició per a  " + pathname + " rebuda.");
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
			var consulta = url.parse(request.url, true).query;
			for (var clau in consulta) {

				if (consulta.hasOwnProperty('cadena')) {
					sortida = consulta['cadena'].split("").reverse().join("");
				}

			}
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
