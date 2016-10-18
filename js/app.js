$(document).ready(function() {
	$(".num_1").focus();
	$("#numero").focus();
	$("#numero").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});
	$("#numero").keyup(function(evento) {
		var numeroCelular=$(this).val();
		var longitud = numeroCelular.length;
		localStorage.setItem("numeroCelular", numeroCelular);
		if (longitud == 9) {
			$("#next").attr("href", "verify.html");
			$(this).attr("maxlength","9"); 
		} else {
			$("#next").removeAttr("href");
		}
	});
	$("#next").click(function(evento){
		var longitud=$("#numero").val().length;
		var codigo=Math.round(Math.random()*890+100);
		localStorage.setItem("clave",codigo);
		if(longitud==9){
			$(this).attr("href", "verify.html");
			var mensaje="Lab - "+codigo;
     		alert(mensaje);
		}	
	});
	var numeroValido=localStorage.getItem("numeroCelular");
	$("#cop_num").append(numeroValido);

	$("#next-2").click(function(evento){
		var numeroClave=$(".num_clave").eq(0).val()+$(".num_clave").eq(1).val()+$(".num_clave").eq(2).val();
		var num_1=$(".num_clave").eq(0).val().length;
		var numeroRandon=localStorage.getItem("clave");
		if(numeroClave==numeroRandon){
			$(this).attr("href","datos.html");
		}
		if(num_1==0){
			alert("Ingrese la clave");
		}
		if(numeroClave!=numeroRandon && num_1!=0){
			alert("Su clave es incorrecto");
		}

	});
	$("#next3").click(function(evento){
		if($("#check").is(":checked")){
			if(validar()){
				$("#next3").attr("href","localizacion.html");
			}

		}else{
			alert("mal");
		}
		
	});
});
function validar(){
	var nombre=$("#name").val();
		var apellido=$("#lastName").val();
		var regexNombre = /^[a-zñáéíóúü]+$/gi;
		var regexApellido = /^[a-zñáéíóúü]+$/gi;
		if ((regexNombre.test(nombre))&&(regexApellido.test(apellido))) {
			if((nombre.length>=2 && nombre.length<=20) && (apellido.length>=2 && apellido.length<=20)){
					return true;
			}else{
				alert("cantidad de letras no admitidas");
			}
		}
		else{
			alert("ingrese solo letras");
		}
}

