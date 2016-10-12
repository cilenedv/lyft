$(document).ready(function() {
	$("#numero").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});

	$("#numero").keyup(function(evento) {
		var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#next").attr("href", "https://www.facebook.com/");
			$(this).attr("maxlength","9");
			$("#next").click(function(){
				var codigo=Math.round(Math.random()*890+100);
				var mensaje="Lab - "+codigo;
				alert(mensaje);
			}); 
		} else {
			$("#siguiente").removeAttr("href");
		}
	});
});