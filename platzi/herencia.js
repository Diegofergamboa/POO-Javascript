class Course {
    constructor({
        name ,
        clases = [] ,
        isFree = false ,
        lang = "Spanish"
    }) {
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }
    //! Se coloca un nombre diferente.

    set name(nuevoNombre) {
        //! Se vigilan con condicionantes
        if (nuevoNombre === "Curso malo") {
            console.error("No se actualiza así");
        } else {
            this._name = nuevoNombre
        }
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
    ] ,
    isFree = true
})

const cursoDefinitoHTMLyCSS = new Course({
    nombre : 'Curso Definitivo de HTML y CSS' ,
    clases : [
        claseIntroduccionPoo ,
        clasedeIntroduccioaEso
    ] ,
    lang = 'English'
})


//! Clase madre.
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

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }

    aprovedCourse(newCourse) {
        if (newCourse.isFree) {
            this.aprovedCourse.push(newCourse);
        } else {
            console.warn('Lo sentimos pero este curso ' + this.name);
        }
    }
}
class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }

    aprovedCourse(newCourse) {
        if (newCourse.lang !== 'English') {
            this.aprovedCourse.push(newCourse);
        } else {
            console.warn('Lo sentimos pero este curso ' + this.name);
        }
    }
}
class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }
    aprovedCourse(newCourse) {
            this.aprovedCourse.push(newCourse);
    }
}

const diego = new FreeStudent({
    name : 'Diego' ,
    username : 'diegofergamboa' ,
    point : 10000 ,
    socialMedia : {
        twitter : 'diegogamboaor' ,
        facebook : '¿Quién usa Facebook? xD'
    } ,
    learningPaths: [
        {
            name : 'Escuela de Desarollo Web' ,
            courses : ['Responsive design' , 'HTML' , 'CSS']
        } ,
        {
            name : 'Escuela de DataScience' ,
            courses : ['Básico de Python' , 'POO con Python' , 'Rankers']
        } ,
    ]
})
const miguel = new BasicStudent({
    name : 'Diego' ,
    username : 'diegofergamboa' ,
    point : 10000 ,
    socialMedia : {
        twitter : 'diegogamboaor' ,
        facebook : '¿Quién usa Facebook? xD'
    } ,
    aprovesCourses : ['Cursos definitivo de CSS' , 'Mateámtica financiera'] ,
    learningPaths: [
        {
            name : 'Escuela de Desarollo Web' ,
            courses : ['Responsive design' , 'HTML' , 'CSS']
        } ,
        {
            name : 'Escuela de DataScience' ,
            courses : ['Básico de Python' , 'POO con Python' , 'Rankers']
        } ,
    ]
})


