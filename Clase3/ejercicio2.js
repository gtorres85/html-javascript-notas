var nota = prompt("Entre la nota del alumno");

if(nota >= 0 && nota <= 3){
	document.write("<h1>Muy deficiente</h1>");
}

if(nota >= 3 && nota <= 5){
	document.write("<h1>Insuficiente</h1>");
}