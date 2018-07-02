angular.module('sopatizador' , []).controller( 'principal' , principal_f  )


function principal_f( $scope ){
	v = this

	v.titulo = "Panel de Control"
	v.titulo2 = "Listas de Palabras en la Sopa de Letras"
	v.t  = 'Sopa de Letras'
	v.footer = ' Armando Rojas - 2018'

	// iniciarlizar variables
	v.filas = 12 
	v.columnas = 12

	v.lista = []; 
	v.nuevaPalabra = ''
	v.resaltar = ''

	// Activar y Desactivar botones
	v.control = false
	v.control2 = false


// filtrado 

$scope.$watchGroup(['v.nuevaPalabra' , 'v.columnas' , 'v.filas'  ], (nuevo , anterior) =>{

	v.control2 = true
	v.control = true
	
	if(nuevo[0].length >  nuevo[1] -1   || nuevo[0].length >  nuevo[2] -1 ){
		v.control2 = false
		v.mensajeError1 = "Menor a maximo de Fila o Columna"
		}
	else if(nuevo[0].length < 4){
		v.control2 = false
		v.mensajeError1 = "4 caracteres minimo"

	}
	else if(nuevo[0].length > 12 ){
		v.control2 = false
		v.mensajeError1 = "Maximo 12 Caracteres"

	}else{
		v.mensajeError1 = "Agregar"
	}


	if(nuevo[1] < 12  || nuevo[2] < 12 ){

		v.control = false 
		v.mensajeError2 = "Minimo 12 x 12"

	}else if(nuevo[1] > 35  || nuevo[2] > 500 ){

		v.control = false 
		v.mensajeError2 = "Maximo 35 x 500"
	}else{

		v.mensajeError2 = "Marcar Respuestas"
	}


	
	

})



/*Funciones de los botones */


	v.btnImprimir = () =>{

		window.print()
	}


	// boton para eliminar
	// un elemento de la lista 


	v.btnEliminar = (texto)=>{

		v.lista = v.lista.filter( (e) => e != texto )
		mensajeOk("Palabra eliminada de la lista...")
	}



	// boton generar
	v.btnGenerar = ()=>{

		
		v.Sopa = new Sopatizador( v.filas , v.columnas )
		

		v.lista.filter( (e) => {

			v.Sopa.addSopaDeLetras(e)
		} )


		v.tabla = v.Sopa.getSopaDeLetras() 
	}

	v.addPalabra = () => {

		// verifica que la palabra no exista 
		let control = v.lista.filter( (e) => e == v.nuevaPalabra || false )[0]

		if(!control){

			//agregar palabra al array
			v.lista.push(v.nuevaPalabra)
			// limpiar el input
			v.nuevaPalabra = ''


		}else{
			mensajeError("Ya Esta Registrada esta palabra en la lista")
		}
	}


	// Resaltar los elementos a buscar 
	v.btnResaltar = ()=>{

		v.resaltar = (v.resaltar == 'yellow') ? '' : 'yellow'
	}

	v.btnSopa = ()=>{
		alert()
	}


}





