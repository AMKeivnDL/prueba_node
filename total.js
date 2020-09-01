let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]

let indiceJuan=alumnos.lastIndexOf("Juan");
let indiceFrancisco=alumnos.indexOf("Francisco");
console.log(indiceJuan);
console.log(indiceFrancisco);

let estudiantes = [
	{
	  nombre: "Alvaro",
	  promedio: 9,
	  curso: "Android"
	},
	{
	  nombre: "Daniel",
	  promedio: 6,
	  curso: "Full Stack"
	},
	{
	  nombre: "Alexis",
	  promedio: 3,
	  curso: "iOS"
	}
  ];

  let alumnoEgresado=estudiantes.pop();
  console.log("El alumno "+alumnoEgresado.nombre+" se graduo");

  estudiantes.push({
	  nombre: "Juan",
	  promedio: 5,
	  curso: "iOS"
  })
  estudiantes.push({
	  nombre: "Miguel",
	  promedio: 2,
	  curso: "Android"
  })
  console.log(estudiantes);
  console.log("El alumno Alvaro se dio de baja");
  let alumnoDeBaja=estudiantes.shift();
  console.log(estudiantes);
  console.log("Se reincorporaron dos alumnos, Mariana y Francisco");
  estudiantes.unshift({
	  nombre:  "Mariana",
	  promedio: 9,
	  curso: "Full Stack"
  })
  estudiantes.unshift({
	  nombre: "Francisco",
	  promedio: 2,
	  curso: "Android"
  })
  console.log(estudiantes);

  let lenguaje = "javascript";
if(lenguaje!="javascript"){
    console.log("Lo aprendere mas adelante");
}else{
    console.log("Estoy aprendiendo");
}
function puedePasar(nombre){
    if(nombre!="Cosme Fulanito"){
		return true
    }else{
        return false
    }
	}console.log(puedePasar("Cosme Fulanito"))
	console.log(" ")

	let amigos=["Alan","Pablo","Dani","Ivo"];
	let amigosJSON=JSON.stringify(amigos);
	console.log(amigosJSON);

	let amigosOriginal=JSON.parse(amigosJSON);
	console.log(amigosOriginal);
	console.log(" ");
	let persona={
		nombre: "Alan",
		apellido: "Rios",
		edad: 28,
		ciudad: "Barcelona"
	}
	console.log(persona);
	console.log(" ");
	let personaJSON=JSON.stringify(persona);
	console.log(personaJSON);
	let variableOriginal=JSON.parse(personaJSON);
	console.log(variableOriginal);
	console.log(" ");
	console.log(" ");
	console.log(" ");
	console.log(" ");
	console.log("BARRA SEPARADORA ");
	console.log(" ");
	/////////////////////////////////////////////
	//Ejemplo de Length
	let mensaje="Gran dia para practicar JavaScript!";
	console.log(mensaje.length);
	//Ejemplo de indexOf
	console.log(mensaje.indexOf("dia"))
	//Ejemplo de slice
	console.log(mensaje.slice(0,24));
	console.log(mensaje);
	//Otro ejemplo
	let otroMensaje="    Soy un ser humano   ";
	console.log(otroMensaje.trim());
	//Metodo Split
	let planeta="Soy del planeta tierra";
	console.log(planeta.split(" "));
	//nnetodo replace
	let pruebo="Aguante Python";
	console.log(pruebo.replace("Python","JavaScript"));
	console.log(" ");
	console.log("BARRA SEPARADORA ");
	console.log(" ");
	//
	let curso={
		cantidadDeAlumnos: 32,
		docentes: "Nacho, Javi",
		horariom: "8.30 a 12.00",
		horariot: "1.30 a 4.00",
		notificaciones: function(){
			return "El horario de tu comision es "+this.horariom
		}
	}
	function Curso(tipo,cantidadDeAlumnos,docentes,){
		this.tipo=tipo
		this.cantidadDeAlumnos=cantidadDeAlumnos,
		this.docentes=docentes
	}
	let cursoUno=new Curso("Diseño UX",40,"Javi y Lando");
	let cursoDos=new Curso("Desarollo Web",32,"Tini y Kenshi");
	console.log(cursoUno);
	console.log(cursoDos);
	console.log(" ");
	console.log(" ");

	function Menu(tipo,precio,dias){
		this.tipo=tipo,
		this.precio=precio,
		this.dias=dias
	}
	let menuUno=new Menu("Ejecutivo",800,"Lunes a viernes");
	let menuDos=new Menu("Deli",1000,"Sabados y Domingos");
	let menuTres=new Menu("Infantil",500,"Todos los Dias");

	console.log(menuUno);
	console.log(menuDos);
	console.log(menuTres);
	// Fin