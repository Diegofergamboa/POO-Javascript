class Student {
    constructor({
        name ,
        username ,
        point ,
        twitter = undefined ,
        facebook = undefined ,
        aprovesCourses = [] ,
    }) {
        this.name = name;
        this.username = username;
        this.point = point ;
        this.socialMedia = {
            twitter ,
            facebook
        } ;
        this.aprovesCourses = aprovesCourses ;
    }
}

//! Clase de learningPath

class learningPath {
    constructor({
        nombre ,
        cursos = 0,
        cantidadCursosAprobados ,
        clasificacionCursos ,
        avanceEstudiante = 0
        }) 
        // Inicializaciones de atributos con this.
        {
        this.nombre = nombre;
        this.cursos = cursos; 
        this.cantidadCursosAprobados = cantidadCursosAprobados;
        this.clasificacionCursos = clasificacionCursos;
        this.avanceEstudiante = avanceEstudiante;
        }
};

//! Instancias.

//* Desarollo Web.

const desarrolloWeb = new learningPath({
    nombre : 'Desarrollo Web' ,
    cursos : 107 ,
    cantidadCursosAprobados : 15 ,
    clasificacionCursos = ['Básica' , 'Intermedia' , 'Avanzado' , 'Complementario'] ,
    avanceEstudiante = 10
});

console.table(desarrolloWeb);
