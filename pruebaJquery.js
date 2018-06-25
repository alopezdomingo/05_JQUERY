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
	var h2color;
	h2color = $('h2');
	h2color.click(cambiarColor2);
	var pi;
	pi = $('.importante');
	pi.click(marcar);
	var filaTabla;
	filaTabla = $('tr');
	filaTabla.click(cambiarColorTabla);
	var aumento;
	aumento = $('#aumentar2');
	aumento.click(aumentarTexto);
	var boton;
	boton = $('#boton');
	boton.click(cargarEncuesta);
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
function cambiarColorTabla()
{
	var filaTabla;
	filaTabla = $(this);
	filaTabla.css("background-color", "powderblue");
}
function cambiarColor2(){
	var h2color;
	h2color = $(this);
	h2color.css("color","orange");
}
function aumentarTexto(){
	var aumento;
	aumento = $('#aumentar2');
	aumento.css("font-size","50px ");
}
function cargarEncuesta(){
	var encuesta;
	encuesta = $('#encuesta');
	encuesta.html('<form> <div class="form-group"><input type="text" class="form-control" placeholder="Nombre"></div><div class="form-group"><input type="text" class="form-control" placeholder="Provincia"></div></form>');
}
