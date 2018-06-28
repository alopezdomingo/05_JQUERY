var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar(){
	$("#boton").click(verificar);
	$("#boton2").click(seleccionarP);
	$(".pelis").click(seleccionarPelisII)
}
function verificar()
{
	if ($("#radio1").prop("checked"))
	{
		alert("Eres mujeeeeeee");
	}
	else
	{
		if ($("#radio2").prop("checked"))
		{
			alert("eres hombreee");
		}
		else
		{
			alert("no eres na");
		}
	}
}
function seleccionarP(){
	if ($("#radioA").prop("checked"))
	{
		$("#demo").text("Has seleccionado: películas de acción");
		$("#enlace2").attr("href", "http://decine21.com/listas-de-cine/lista/Las-100-mejores-peliculas-de-accion-93449");
		$("#enlace2").attr("target","_blank");
	}
	else
	{
		if ($("#radioB").prop("checked"))
		{
			$("#demo").text("Has seleccionado: películas de terror");
			$("#enlace2").attr("href", "https://www.esquire.com/es/actualidad/cine/g13104779/peliculas-de-terror-miedo-cine-mejores-cada-ano/");
			$("#enlace2").attr("target","_blank");
		}
		else
		{
			$("#demo").text("Has seleccionado: películas de comedia");
			$("#enlace2").attr("href", "https://www.elseptimoarte.net/peliculas/generos/comedia/");
			$("#enlace2").attr("target","_blank");
		}
	}
}
function seleccionarPelisII(){
	if ($(this).prop("checked")){
				$("#demo").text("Has seleccionado: "+ $(this).val());

	}
}
