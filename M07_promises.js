/* exemple d'utilització de promeses
	@author sergi grau, sergi.grau@fje.edu
	@version 1.0
	date 20.02.2017
	format del document UTF-8

	CHANGELOG
	20.02.2017
	exemple d'utilització de promeses

	NOTES
	ORIGEN
    Desenvolupament Aplicacions Web. Jesuïtes el Clot
    */
'use strict';
		var comptadorPromesa = 0;

		function provarPromesa() {
			var valorActualPromesa = ++comptadorPromesa;

			var log = document.getElementById('log');
			log.insertAdjacentHTML('beforeend', valorActualPromesa +
				') Iniciat (<small>codi síncron</small>)<br/>');

			// creem una promesa
			var p1 = new Promise(
				// funció que pot finalitzar amb exit o fracàs la promesa
				function (resolve, reject) {
					log.insertAdjacentHTML('beforeend', valorActualPromesa +
						') promesa iniciada (<small>codi asincron Iniciat</small>)<br/>');
					// exemple de crida asíncrona
					window.setTimeout(
						function () {
							// aquesta funció està garantida que s'executarà
							resolve(valorActualPromesa);
						}, Math.random() * 2000 + 1000);
				}
			);

			// Programem que cal fe quan la funció resolved/fulfilled es retornada amb la crida then() ,
			// i el catch() en el cas de rebutjada.
			p1.then(
				// Log per al cas d'exit
				function (val) {
					log.insertAdjacentHTML('beforeend', val +
						') promesa completada (<small>codi asincron acabat</small>)<br/>');
				})
				.catch(
				// Log del motiu pel qual s'ha rebutjat
				function (rao) {
					console.log('promesa rebutjada (' + rao + ').');
				});

			log.insertAdjacentHTML('beforeend', valorActualPromesa +
				') promesa realitzada (<small>codi sincron acabat</small>)<br/>');
		} if ("Promise" in window) {
			var btn = document.getElementById("btn");
			btn.addEventListener("click", provarPromesa);
		} else {
			log = document.getElementById('log');
			log.innerHTML = "promeses no suportades.";
		}