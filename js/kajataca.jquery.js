 /*

	Kajataca.js
 

	Autor = Armando Rojas - UNEFA 2017 

*/
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, "")}



;(function($){

	$.fn.extend({



		/*Validacion de Formularios*/
		
		// no permite copiar y pegar en la caja de texto
		noCopiar: function(){

			return this.each(function(){
				$(this).bind("cut copy paste", function(e){
				e.preventDefault();
				return false;
				});
			});
		},

		// transformar letras a mayuscula 
		mayuscula: function(){

			return this.each(function() {
				$(this).keyup(function(event) {
   					$(this).val($(this).val().toUpperCase());
  				 });
			});
		},

		// validar entrada por teclado
		validCampo: function(b){
			$(this).on(
				{
					keypress:function(a){
					var c=a.which,
					d=a.keyCode,
					e=String.fromCharCode(c).toLowerCase(),
					f=b;
					(-1!=f.indexOf(e)||9==d||37!=c&&37==d||39==d&&39!=c||8==d||46==d&&46!=c)&&161!=c||a.preventDefault();
					
					}
			});
		},

		// validar maximo de cadena 	

	

	});
})(jQuery);


/*	Libreria para Mostrar Hora y Fecha */

const miTiempo = {

	hora_local : function(){

		var data = new Date(); // obtener la hora y fecha del sistema
		var hora = data.getHours(); // obtener hora
		var minutos = data.getMinutes(); // obtener minutos 
		var segundos = data.getSeconds(); 

		var regimen = "am"; 
		
		/* Agregar un 0 al izquiera si es necesario*/
		if(hora < 10) hora = "0"+hora.toString();
		if(minutos < 10) minutos = "0"+minutos.toString();
		if(segundos < 10) segundos = "0"+segundos.toString();

		/*Cambiar Regimen y establecer formato 12h*/
		if(hora > 12) {
			regimen = "pm"; 
			hora -= 12; 
		}

			/*Devuelve Formato*/
		return hora+":"+minutos+":"+segundos+regimen;
	}
};

/*
	Expresiones Regulares 
 */

function soloLetras(){

	return "{ABCDEFGHIJKMNLOPQRSTUVWXYZÑabcdefghijklmnopqrstuvwxyzñ}"
}

function soloNumeros(){

	return "{1234567890}"
}

/* Invocar ayuda */