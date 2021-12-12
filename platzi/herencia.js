



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
const cursoProgramacionBasica = new Course({
    name :'Curso de Programación básica' ,
    isFree : true
});
const cursoDefinitoHTMLyCSS = new Course({
    name : 'Curso Definitivo de HTML y CSS' ,
    lang : 'English'
})
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
    name : 'diego' ,
})
const miguel = new BasicStudent({
    name : 'miguel' ,
})


