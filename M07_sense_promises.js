/* exemple d'utilització de promeses (sense promeses)
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

    // exemple de crida asíncrona
    window.setTimeout(
        function () {
            log.insertAdjacentHTML('beforeend', valorActualPromesa +
                ') promesa iniciada (<small>codi asincron Iniciat</small>)<br/>');

        }, Math.random() * 2000 + 1000);

        	log.insertAdjacentHTML('beforeend', valorActualPromesa +
				') promesa realitzada (<small>codi sincron acabat</small>)<br/>');		
}

var btn = document.getElementById("btn");
btn.addEventListener("click", provarPromesa);
