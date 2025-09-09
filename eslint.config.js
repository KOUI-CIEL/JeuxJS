// eslint.config.cjs 
const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
    {
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            "indent": ["warn", 4],          // avertir une indentation de 4 espaces 
            "linebreak-style": ["error", "windows"], // impose les fins de ligne Windows (\r\n) 
            "quotes": ["error", "single"],   // impose l'usage de guillemets simples (' ') 
            "semi": ["error", "always"]      // impose le point-virgule obligatoire 
        },
    },
    pluginJs.configs.recommended,
]; 

/*  *********************** Serveur Web ***************************   */
// 
var express = require('express'); 
 
var exp = express(); 

exp.use(express.static(__dirname + '/www'));

exp.get('/', function (req, res) {
    console.log(‘Reponse a un client'); 
    res.sendFile(__dirname + '/www/index.html');
}); 