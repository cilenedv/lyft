// geolocalización
	var cargarPagina = function() {
	if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};


var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
  var lon = posicion.coords.longitude;
  new GMaps({
	  div: '#map',
	  lat: lat,
	  lng: lon
	});
      
};

var funcionError = function (error) {
	console.log(error);
};
$(document).ready(cargarPagina);