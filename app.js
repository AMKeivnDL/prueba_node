let persona={
    nombre: "Kevin",
    apellido: "Aguirre",
    edad: 27,
    oficio: "Trolazo",
    saludo: function(){
        return  "Mi nombre es "+this.nombre;
    }
}

let curso={
    cantida_de_alumnos: 32,
    docentes: "Nacho, Javi",
    horario: "8.30 a 12hs.",
    notificaciones: function(){
        return  "El horario de tu comision es " + this.horario;
    }
}

function Curso(tipo,cantida_de_alumnos, docentes, horario){
    this.tipo=tipo
    this.cantida_de_alumnos=cantida_de_alumnos,
    this.docentes=docentes,
    this.horario=horario
}
let curso_1=new Curso("Curso de Programacion web",40,"Javi y Lando","De 18.30 a 22hs.")
let curso_2=new Curso("Curso de Diseño UX",32,"Ale y Kenyi","14 a 17.30hs.")

function entro(web,ux){
    if(web=="Web"){
        console.log(curso_1)
    }else if(ux="UX"){
        console.log(curso_2)
    }
}//console.log(entro("Web"));

//arrow function

let laMitad = numero => numero/2;
//console.log(laMitad(8))

let dividir = (numeroA,numeroB) => numeroA/numeroB;
//console.log(dividir(20,4));

let tengoQueTrabajar = dia => {
    if(dia=="sabado"||dia=="domingo"){
        return "No tengo que trabajar"
    }else if(dia=="lunes"||dia=="martes"||dia=="miercoles"||dia=="jueves"||dia=="viernes"){
        return "Diablos debo trabajar"
    }else{
        return "No es un dia"
    }
}
//console.log(tengoQueTrabajar("martes"))

let dame_cinco = cinco => [1,2,3,4,5]
//console.log(dame_cinco())

let multiplicar_por_Dos = num => num *2;
//console.log(multiplicar_por_Dos(123))

let mostrar_nombre = () => "Mi nombre es Hernán";
//console.log(mostrar_nombre())

function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}

let saludo = nombre=>"Hola " + nombre + "!"
//console.log(saludo);

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}

let saludarDos = (nombre,apellido) => "Hola, " + nombre + " " + apellido;
//console.log(saludarDos("Kevin","Aguirre"))

//if ternario y switch
let fruta = "Manzana";

let resultado = fruta == "Manzana"?"Buenisimo me gustan las manzanas":"Ufa, queria manzana"
//console.log(resultado);

//switch

//let semaforo = "Otro color"
//switch(semaforo){
    //case "Verde":
        //console.log("Puedo cruzar");
        //break;
    //case "Amarillo":
        //console.log("Tener precaucion");
        //break;
    //case "Rojo":
        //console.log("No cruces, hay que esperar");
        //break;
    //default:
        //console.log("No funciona el semaforo");
        //break;
//}
//console.log(" ");

let es_mayor=10

let resultado_dos =  es_mayor>9?"Si, es mayor":"No no es mayor"

//console.log(resultado_dos);

let dia="lunes"
function finDeSemana(dia){
switch(dia){
    case "viernes":
        console.log("buen finde");
        break;
    case "lunes":
        console.log("buena semana");
        break;
    default:
        console.log("buen dia")
}
}//console.log(finDeSemana())

let dia_de_clases="martes"
function tengoClases(dia_de_clases){
    switch(dia_de_clases){
        case "lunes":
        console.log("tienes clases");
        break;
        case "miercoles":
        console.log("tienes clases");
        break;
        case "viernes":
        console.log("tienes clases");
        break;
        default:
        console.log("no tienes clases");
        break;
    }
}//console.log(tengoClases("lunes"));

let frut = "Manzana";

let resulta = frut == "Manzana"?"Buenisimo me gustan las manzanas":"Ufa, queria manzana"

function puedePasar(nombre){
    switch(nombre){
        case "Cosme fulanito":
            console.log(false);
            break;
        default:
            console.log(true);
            break;
    }
}
//console.log(puedePasar("Cosme Fulanito"))

function puedePasar(nombre){
    nombre!="Cosme Fulanito"?true:false
}
console.log(puedePasar("Culo roto"))
function pasa(nomb){
    if(nomb!="Cosme"){
        return true
    }else{
        return false
    }
}//console.log(pasa("Cosme"))

//ciclos for repaso


function loro(palabra){
    for(i=1;i<=5;i++){
        console.log(palabra);
    };
}
//console.log(loro("Rulo"))

//while dowhile
let clase=6;
//do{
    //console.log("Bienvenidx a la clase numero: "+clase);
    //clase++;
//while(clase<=5)

let array=[]
function busco(){
    do{
        array++
        console.log("numero "+array)
    }while(array<10);
}
//console.log(busco([1,2,3,4,5,6]))

console.log("Prueba git status");
