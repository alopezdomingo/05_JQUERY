var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar(){
	$("#parrafo").toggle(formato1, formato2,formato3);
	$("#pad").mousemove(verMovimiento);
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

