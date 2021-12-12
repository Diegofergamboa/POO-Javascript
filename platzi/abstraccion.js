class Course {
    constructor({
        nombre ,
        clases = []
    }) {
        this.nombre = nombre ,
        this.clases = clases
    }
}


class Clases {
    constructor({
        nombreClase ,
        duracion
    }) {
        this.nombreClase = nombreClase;
        this.duracion = duracion;
    }
}

const claseIntroduccionPoo = new Clases ({
    nombreClase : "Introducción a la Programación Orientada a Objetos" ,
    duracion : 120
}),
const claseintroduccionFinanzas = new Clases ({
    nombreClase : "Clase de Introduccion a las Finanzas" ,
    duracion : 130
}),
const clasedeIntroduccioaEso = new Clases ({
    nombreClase : "Eso" ,
    duracion : 40
}),

const cursoProgramacionBasica = new Course({
    nombre :'Curso de Programación básica' ,
    clases : [
        claseIntroduccionPoo ,
        claseintroduccionFinanzas ,
        clasedeIntroduccioaEso
    ]
})

const cursoDefinitoHTMLyCSS = new Course({
    nombre : 'Curso Definitivo de HTML y CSS' ,
    clases : [
        claseIntroduccionPoo ,
        clasedeIntroduccioaEso
    ]
})

class LearningPath {
    constructor({
        nombre ,
        Cursos = 0,
        }) 
        // Inicializaciones de atributos con this.
        {
        this.nombre = nombre;
        this.Cursos = Cursos; 
        }
};

const desarrolloWeb = new LearningPath({
    nombre : 'Desarrollo Web' ,
    Cursos : [
        cursoProgramacionBasica ,
        cursoDefinitoHTMLyCSS
    ]
});


