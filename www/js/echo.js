// This file allows you to configure ESLint according to your project's needs, so that you
// can control the strictness of the linter, the plugins to use, and more.

// For more information about configuring ESLint, visit https://eslint.org/docs/user-guide/configuring/

var ipServeur = '172.17.50.133';     // Adresse ip du serveur  
var ws;                             // Variable pour l'instance de la WebSocket.

window.onload = function () {
    if (TesterLaCompatibilite()) {
        ConnexionAuServeurWebsocket();
    }
    ControleIHM();
};

function TesterLaCompatibilite() {
    let estCompatible = true;
    if (!('WebSocket' in window)) {
        window.alert('WebSocket non supporté par le navigateur');
        estCompatible = false;
    }
    return estCompatible;
}


/*  ***************** Connexion au serveur WebSocket ********************   */
// 
function ConnexionAuServeurWebsocket() {
    ws = new WebSocket('ws://' + ipServeur + '/echo');

    ws.onclose = function (evt) {
        window.alert('WebSocket close');
    };

    ws.onopen = function () {
        console.log('WebSocket open');
    };

    ws.onmessage = function (evt) {
        document.getElementById('messageRecu').value = evt.data;
    };
}

function ControleIHM() {
    document.getElementById('Envoyer').onclick = BPEnvoyer;
}

function BPEnvoyer() {
    ws.send(document.getElementById('messageEnvoi').value);
}  