/**
 * Codi que mostra el funcionament de la creació d'una promesa i el seu ús
 * @author sergi.grau@fje.edu
 * @version 1.0 20.11.2020
 */

 function func1() {
   return 'A';
 }
 function func2() {
  return 'B';
}
function func3() {
  return 'C';
}

Promise.all([func1(), func2(), func3()])
.then(([resultat1, resultat2, resultat3]) => { console.log('fet'); });
