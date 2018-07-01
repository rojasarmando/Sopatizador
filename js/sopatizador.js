/*

	Sopatizador 

	By: Armando Jose Rojas Querales - 2018

	Clase para elaboracion de Sopa de Letras  
 */


class Sopatizador{

	
	// inicializa el array del ABC 
	constructor( m = 12 , n = 12  ){

		this.abc = []
		

		// disponibilidad de posiciones en la tabla 
		this.disponibilidad = []
		this.posicion = []

		this.sopaDeLetras = []

		this.n = n 
		this.m = m 

		this.initAbc()

		this.initTabla(m , n)


	}


	// devuelve la sopa de letras 
	getSopaDeLetras(){

		return this.sopaDeLetras; 
	}

	// agregar una palabra a la sopa de letras
	
	addSopaDeLetras(texto){

		let control = false 
		
		while (!control) {

			let posicion = this.generadorDePosiciones(texto.length)

			if( this.verificarDisponibilidad(posicion) ) {

				control = true 

				this.asignarEspacio(texto , posicion)
			}
		}

	}


	// genera un objecto de posiciones para ser usados posteriormente 
	generadorDePosiciones(size){

		let control = false 
		let posiciones = []

		while(!control){

		let orientacion = this.random(1,8)
	
		
		let posX = this.random(0, (this.n -1 ) )
		let posY = this.random(0, (this.m -1 ) )

		

		posiciones[0]  = { x : posX , y : posY}

			for (let i = 1; i< size; i++) {

				switch (orientacion) {
					
					case 1: // horizontal hacia la derecha 
							
							posiciones[i] = { x : ++posX , y : posY}
						
					break; //case 1

					case 2: // horizontal hacia la izquierda
							
							posiciones[i] = { x : --posX , y : posY}
		

					break; //case 2

					case 3: // vertical hacia arriba
							
							posiciones[i] = { x : posX , y : ++posY}
				
					break; //case 3

					case 4: // vertical hacia arriba
							
							posiciones[i] = { x : posX , y : --posY}
				
					break; //case 4

					case 5: // diagonal descendente hacia la derecha 
							
							posiciones[i] = { x : ++posX , y : ++posY}
				
					break; 


					case 6: // diagonal ascendente hacia la izquierda 
							
							posiciones[i] = { x : --posX , y : --posY}
				
					break; 

					case 7: // diagonal descendente hacia la izquierda 
							
							posiciones[i] = { x : ++posX , y : --posY}
				
					break; 

					case 8: // diagonal ascendente hacia la derecha 
							
							posiciones[i] = { x : --posX , y : ++posY}
				
					break; 


				}//switch
			}//for


		if (posiciones[posiciones.length - 1].y < this.m && posiciones[posiciones.length - 1].x < this.n && posiciones[posiciones.length - 1].y > -1  && posiciones[posiciones.length - 1].x > -1 ){

					control = true 

		} // if

		}// while 

		return posiciones; 
	}



	//asignar espacion dentro del array dispònibilidad y dentro de el array tabla 
	asignarEspacio( texto , posiciones ){


		for (let i = 0; i < posiciones.length; i++){
				
				// obtener puntos x & y
				let x = posiciones[i].x 
				let y = posiciones[i].y 

				// quitar disponibilidad al espacio 
				this.disponibilidad[y][x] = false 
				
				// asignar la letra de la palabra 
				this.sopaDeLetras[y][x] = { texto : texto[i] , decorar : true } 
			
		}



	}



	//verifica si se encuentra disponible el espacio en la matriz 
	verificarDisponibilidad( posiciones ){

		let control = true 

		for (let i = 0; i < posiciones.length; i++){
			
				let x = posiciones[i].x 
				let y = posiciones[i].y 

				if ( !this.disponibilidad[y][x] ) control = false 
			
		}


		return control 

	}




	//obtener un array bidimencional de letras al azar
	// m es el numero de columnas
	// n el numero de filas 
	initTabla(  m , n  ){

		let arreglo = []


		for (let i = 0; i < m; i++){

			arreglo[i] = []
			this.disponibilidad[i] = []
		
			for (let k = 0; k < n; k++){

				arreglo[i][k] =  { texto : this.getLetra() , decorar : false}
				this.disponibilidad[i][k] = true

			}
		}

		this.sopaDeLetras = arreglo;
	}


	//obtener una letra del ABC aleatoriamente 
	getLetra(){

		return this.abc[this.random(0,24)]
	}


	// funcion para obtener numeros aleatorios
	random(inferior,superior){ 
   	
	   	let numPosibilidades = superior - inferior 
	   	
	   	let aleat = Math.random() * numPosibilidades 
	   	aleat = Math.round(aleat) 

	   	return parseInt(inferior) + aleat 
	}


	//funcion para obtener el abc en un array
	initAbc(){
		let i = 0

		this.abc[i] = 'A'
		this.abc[++i] = 'B'
		this.abc[++i] = 'C'
		this.abc[++i] = 'D'
		this.abc[++i] = 'E'
		this.abc[++i] = 'F'
		this.abc[++i] = 'G'
		this.abc[++i] = 'H'
		this.abc[++i] = 'I'
		this.abc[++i] = 'J'
		this.abc[++i] = 'K'
		this.abc[++i] = 'L'
		this.abc[++i] = 'M'
		this.abc[++i] = 'N'
		this.abc[++i] = 'Ñ'
		this.abc[++i] = 'O'
		this.abc[++i] = 'P'
		this.abc[++i] = 'Q'
		this.abc[++i] = 'R'
		this.abc[++i] = 'S'
		this.abc[++i] = 'T'
		this.abc[++i] = 'U'
		this.abc[++i] = 'V'
		this.abc[++i] = 'W'
		this.abc[++i] = 'X'
		this.abc[++i] = 'Y'
		this.abc[++i] = 'Z'
	}




}


var Sopa = new Sopatizador(6,5)

