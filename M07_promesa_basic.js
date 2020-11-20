let promesa = new Promise((resolve, reject) => {
    // Fem una crida a resolve (...) quan el que estàvem fent finalitza amb èxit, i reject (...) quan falla.
    // En aquest exemple, fem servir setTimeout (...) per simular codi asíncron.
    // A la vida real, probablement facis servir alguna cosa com XHR o una API HTML5.
    setTimeout(function(){
      resolve("OK!"); 
    }, 250);
  });
  
  promesa.then((enCasExit) => {
    // succesMessage és el que sigui que passem a la funció resolve (...) de dalt.
    // No té per què ser un string, però si només és un missatge d'èxit, probablement ho sigui.
    console.log("¡Sí! " + enCasExit);
  });