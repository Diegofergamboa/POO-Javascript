var persona = {
    //! Propiedades del objeto.
    nombre: ['Bob', 'Smith'],
    edad: 32 ,
    genero: 'masculino' ,
    intereses: ['musica', 'esqui'] ,
    //! Métodos del objeto.
    bio() {
        console.log(
        this.nombre[0] + '' +
        this.nombre[1] + ' tiene ' + this.edad);
    } ,
    saludo() {
        console.log('hola soy ' + this.nombre[0] + '.');
    }
};

// console.log(persona.nombre);
// console.log(persona.nombre[0]);
// console.log(persona.edad);
// console.log(persona.intereses);
// console.log(persona.bio());
// console.log(persona.saludo());

//! ###########################################

//* Hacer esto es dot notation

persona.nombre[0];

//* Hacer que el valor de un miembro del objeto sea otro objeto.

persona.nombre[0] = {pila: 'Bob'};
persona.nombre[1] = {apellido: 'Bob'};

//! Namespace ordinario.
const namespace = persona.edad;
console.log(namespace);
//! Sub-namespace ordinario.
const subNameSpace = persona.nombre.apellido;


let a = persona.edad = 45 ;
let b = persona['nombre']['apellido'] = 'Cratchit';
console.log(a);
console.log(b);



//! ###########################################
//* Creación de nuevos miembros.

//! Creando propiedad nueva para el objeto persona.
persona['ojos'] = 'avellana';
console.log(persona.ojos); // Avelllana.
//! Crear métodos para los objetos.
persona.despedida = function () {
    console.log('Adios!');
}
persona.despedida(); // Adios!.


//* Con la notación de corchetes se pueden añadir valores personalizados.

var nombrePersonalizado = 'altura';
var valorPersonalizado = 1.98;
persona[nombrePersonalizado] = valorPersonalizado;

let h =  persona.altura;
console.log(h);




