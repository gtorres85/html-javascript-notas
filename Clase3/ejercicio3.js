var nota1 = prompt("Primera nota");
var nota2 = prompt("Segunda nota");
var nota3 = prompt("Tercera nota");

var n1 = parseInt(nota1);
var n2 = parseInt(nota2);
var n3 = parseInt(nota3);

var promedio = (n1 + n2 + n3)/3;

if(promedio >= 5){
	document.write("<h1>Nota: "+promedio+"</h1>");
}
else{
	document.write("<h1>El alumno está suspenso</h1>");
}
