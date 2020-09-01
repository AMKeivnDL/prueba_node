let user = {
    firstName : "Kevin",
    lasName : "Aguirre",
    email : "amkevin@gmail.com",
    password : "Secret",
    noSirve: null,
    fullName (){
        return this.firstName+" "+this.lasName
    }
}
console.log(user.fullName());

let numeros=[1,2,3,4,5,6,7];

let impares=numeros.filter(function(n){
    return n%2!=0
})
console.log(impares)

let edades=[18,21,22,24,25,30]

let promedio=edades.reduce(function(a,b){
    return a+b
})

console.log(promedio/edades.length);

let personas=[
    {nombre: "Pepe", edad: 32},
    {nombre: "Juju", edad: 33},
    {nombre: "Pipi", edad: 15},
    {nombre: "Lala", edad: 40},
]
let [, , , ultimo]=personas
let {edad}=ultimo
console.log("El ultimo alumno tiene "+edad+" años");

let sumatoria=personas.reduce(function(a,b){
    return a+b.edad
},0)
console.log(sumatoria);

let fecha = new Date
fecha.setFullYear(2021)
console.log(fecha.getMinutes())

let semana=["Lunes","Martes","Miercoles","Jueves","Viernes"];
let finDeSemana=["Sabado","domingo"];

let [,segundo]=semana;
console.log("La variable segundo tiene "+segundo);

let semanaCompleta=[...semana,...finDeSemana];

console.log(semanaCompleta);