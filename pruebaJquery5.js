var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar(){
	$("#boton").click(verificar);
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

