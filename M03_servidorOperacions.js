/*
 * Servidor HTTP que presenta diverses operacions artimètiques a l'usuari
 * @author  sergi.grau@fje.edu
 * @version 1.0
 * date 06.12.2015
 * format del document UTF-8
 *
 * CHANGELOG
 * 06.12.2015
 * - Servidor HTTP que presenta diverses operacions artimètiques a l'usuari
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes el Clot
 */
var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require('fs');
var operacions = ['1+2', '2*2'];
var numOperacio = 0;
var encertades = 0;
function iniciar() {
	function onRequest(request, response) {
		var sortida;
		var pathname = url.parse(request.url).pathname;
		var consulta = url.parse(request.url, true).query;
		var res = parseInt(consulta['res']);

		console.log("Petició per a  " + pathname + " rebuda.");
		if (pathname == '/inici') {
			response.writeHead(200, {
				"Content-Type" : "text/html; charset=utf-8"
			});

			fs.readFile('./M03_operacions.html', function(err, sortida) {
				response.writeHead(200, {
					'Content-Type' : 'text/html'
				});
				numOperacio = 0;
				encertades=0;
				response.write(sortida);
				response.end();
			});

		} else if (pathname == '/obtenirOperacio') {
			response.writeHead(200, {
				"Content-Type" : "text/html; charset=utf-8"
			});
			if (numOperacio == 0) {
				response.write(operacions[numOperacio++]);
			} else if (numOperacio < operacions.length) {
				//abans de proposar la seguent, verifiquem l'anterior
				if(res==eval(operacions[numOperacio - 1])) encertades++;

				response.write(operacions[numOperacio++]);

			} else {
				//verfiquem la ultima pregunta
				if(res==eval(operacions[numOperacio - 1])) encertades++;
				response.write('FINAL = '+encertades);
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
