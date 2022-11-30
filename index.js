'use strict'
//////AIXÒ JA HO TENÍEM
const express = require('express')
const bodyParser=require('body-parser')


const path = require('path'); 


const app=express()
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//////AIXÒ ÉS NOU I SERIA PER TREBALLAR AMB MYSQL
//COMPTE: hem d'instal·lar mysql per a Node Express amb npm i -S mysql
//importem mysql
const mysql = require('mysql');
//declarem els paràmetres de connexió (millor si l’usuari de connexió no és root sinó un usuari específic per aquesta BBDD
// i amb permissos restringits
var connection = mysql.createConnection({
host: 'localhost',
database: 'bank',
user: 'root',
password: ''
});
//fem servir la BBDD que tenim
app.get('/api/login', function (req, res) {
console.log("estem a login");
//provem de connectar-nos i capturar possibles errors
connection.connect(function(err) {
console.log(err);
if (err) {
console.error('Error connecting: ' + err.stack);
return;
}
console.log('Connected as id ' + connection.threadId);
});
connection.query('SELECT * FROM accounts', function(error, results,field){
if (error){
res.status(400).send({resultats: null})
}else{
/*COMPROVACIÓ DE DADES PER CONSOLA DE NODE*/
// console.log(results);
// results.forEach(result => {
// console.log(result.user);
// })
// res.status(200).send({resultats: results}) esto estava antes
res.status(200).send(results)
}
});
connection.end();
})
app.listen(3000, ()=>{
console.log('Aquesta és la nostra API-REST que corre en http://localhost:3000')
})