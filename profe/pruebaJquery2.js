var documento;
documento = $(document);
documento.ready(iniciar);

function iniciar()
{
	var boton;
	boton = $('#boton');
	boton.click(cargarEncuesta);
}
function cargarEncuesta()
{
	var encuesta;
	encuesta = $('#encuesta');
	encuesta.html('<form><input type="text" placeholder="ingrese nombre"><br><br><input type="text" placeholder="ingrese provincia"></form>');
}