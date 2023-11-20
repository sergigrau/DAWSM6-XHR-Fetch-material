let xhr;

function inici() {
    document.getElementById('carregar').addEventListener('click', obtenirProductes);
    document.getElementById('afegir').addEventListener('click', afegirProducte);

    xhr = new XMLHttpRequest();

}

function obtenirProductes() {
    //callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.getElementById("llista").innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', '/api/productes');
    xhr.send(null);
}

function afegirProducte() {
    // WARNING: For POST requests, body is set to null by browsers.
    var data = "cat=ORD&nom=Macbook&preu=1700";

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log('producte afegit');
        }
    });

    xhr.open("POST", "http://localhost:3000/api/productes");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}

window.addEventListener("load", inici, true);