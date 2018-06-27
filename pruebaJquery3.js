var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar(){
	$("#bAlternar").click(mostrarOcultar);
	$("p").mouseover(cambiarFormato);
	$("p").dblclick(ocultarP);
	$("p").hover(cambiarFormato, cambiarOriginal);
	$("h5").hover(cambiarColorA, cambiarColorB);
}
function mostrarOcultar(){
	$("#prueba").toggle("slow");
}
function cambiarFormato(){
	var tamanio;
	tamanio = $(this).text().length;
	if (tamanio>200) {
		$(this).css("color","#FF777A")
		$(this).css("background-color","#EEEEED")
		$(this).css("padding","20px")
	}else{
		$(this).css("color","#90468D");
		$(this).css("background-color","#EEEEED")
		$(this).css("padding","20px")
	}
}
function ocultarP(){
	$("p").fadeOut("slow")
}
function cambiarOriginal(){
	$("p").css("color", "black");
	$("p").css("background-color", "white");
	$("p").css("padding","0px")
}
function cambiarColorA(){
	var selTitulo = $(this);
	$(this).css("color", "#B3CDD2");
	$(this).css("background-color", "black");
	$(this).css("padding","20px")
}
function cambiarColorB(){
	var selTitulo = $(this);
	$(this).css("color", "#E5DD95");
	$(this).css("background-color", "black");
	$(this).css("padding","20px")
}
