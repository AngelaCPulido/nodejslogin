console.log("arrancando servidor");
var pepito = "Madrid";
var basededatos={
	usuario: "LoreleyXD",
	password: "biri"
};

var express = require("express");
var parcero = require("body-parser");
var web = express();

web.use(parcero.urlencoded());

var servidor;
servidor = web.listen(8080, function (){
	console.log("servidor arrancado");
});

//Home
web.get("/", function (req,res){
	res.sendfile("formulario.html");	
});

web.post("/entrar", function (req,res){
	if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password)
	{
		res.send("Bienvenido a la base secreta de Platzi buajajaja");
	}
	else
	{
		res.send("SHuuuuu tu no eres de aquí");
	}
});

//Prueba de URLS amigables
//Prueba de variables get y variabloes globales

web.get("/test", function (req,res){
	res.send("Tu avión es el " + req.query.avion + " y tu edad es " + req.query.edad);	
});

web.get("/hola/mama-es-linda", function (req,res){
	res.send("hola mamá estoy triunfando");
});