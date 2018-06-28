var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar(){
	$("#parrafo").toggle(formato1, formato2,formato3);
	$("#pad").mousemove(verMovimiento);
	$("#pad2").mousemove(verMovimiento2);

	$("#boton1").click(agregarBorde);
	$("#boton2").click(quitarBorde);

	$("#enlace").attr("href","www.google.es");
}
function formato1(){
	$("#parrafo").css("background-color","yellow");
}
function formato2(){
	$("#parrafo").css("color", "#D35938");
}
function formato3(){
	$("#parrafo").css("color", "#DC747C");
}
function verMovimiento(evt){
	$("#movimientox").text("Coordenada x: " + evt.clientX);
	$("#movimientoy").text("Coordenada y: " + evt.clientY);
}
function verMovimiento2(evt){
	$("#movimientox").text("Coordenada x: " + evt.clientX);
	$("#movimientoy").text("Coordenada y: " + evt.clientY);
	if (evt.clientX>800){
		$("#movimientox").text("Coordenada x: " + evt.clientX + " TE ESTÁS ALEJANDO MUCHO");
	}
}
function agregarBorde(){
	$("#tabla").attr("border","3");
}
function quitarBorde(){
	$("#tabla").removeAttr("border");
}


