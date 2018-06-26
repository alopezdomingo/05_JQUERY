var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar()
{
	var ocultar = $('#bOcultar');
	var mostrar = $('#bMostrar');
	ocultar.click(ocultarElemento);
	mostrar.click(mostrarElemento);
	
	var mostrarC = $('#cuadro');
	mostrarC.click(cambiarForm1);

	var mostrarD = $('#cuadro');
	mostrarD.click(cambiarForm2);

	var ocultarH = $('#ocultarH');
	var mostrarH = $('#mostrarH');
	ocultarH.click('ocultarH');
	mostrarH.click('mostrarH');

	var botonFOut = $('#bFout');
	var mostrar2 = $('#bFin');
	botonFOut.click(elementoFadeout);
	mostrar2.click(elementoFadein);
}

function ocultarElemento(){
	var capa = $("#fondo");
	capa.hide("low");//fast/slow/normal
}

function mostrarElemento(){
	var capa = $("#fondo");
	capa.show("fast");
}
function ocultarH(){
	var titulos = $('h2');
	titulos.hide("low");
}
function mostrarH(){
	var titulos = $('h2');
	titulos.show("low");
}
function cambiarClase(){
	var par = $("#cuadro");
	par.toggleClass("formato2");
}
function cambiarForm1(){
	var formato = $("#cuadro");
	formato.toggleClass("formato1");
}
function cambiarForm2(){
	var formato = $("#cuadro");
	formato.toggleClass("formato2");
}
function elementoFadeout(){
	var capa = $("#fondoFade");
	capa.fadeOut("slow");
}
function elementoFadein(){
	var capa = $("#fondoFade");
	capa.fadeIn("slow");
}