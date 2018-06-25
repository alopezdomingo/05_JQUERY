var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar()
{
	var p;
	p = $('#parrafo');
	p.click(cambiarColor);
	var ps;
	ps = $('p');
	ps.click(cambiarTamanio);
	var pi;
	pi = $('.importante');
	pi.click(marcar);
}
function marcar()
{
	var pi;
	pi=$(this);
	pi.css("background-color","green");
}
function cambiarTamanio()
{
	var ps;
	ps = $(this);
	ps.css("font-size","50px");
	
}
function cambiarColor()
{
	var p;
	p = $('#parrafo');
	p.css("color","red");
	p.css("background-color","yellow");
	p.text("ESE CLICKKK QUE NO FALTEEE");
}