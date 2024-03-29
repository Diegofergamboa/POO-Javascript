
//! Prototipos en la sintaxis de clases.

class Student {
    //! Al colocar dentro de los atributos de nuestra clase, un objeto. Nos permitirá realizar construcciones de atributos de instancias que no existen. Por ejemplo
    constructor({
        name , 
        age , 
        cursos = []
    }) 
    {
        this.name = name ;
        this.age = age ;
        this.cursos = cursos ;
    }

    aprobarCursos(nuevoCurso) {
        this.cursos.push(nuevoCurso);
    }
}

// Elemento instancia de un prototipo.
const miguel = new Student('Miguel', 26, ['React Hooks', 'Node.JS']);

//! Ejemplo de construcción con un objeto como atributo de clase.

const diego = new Student(
    {
        name : 'Diego' ,
        age : 25 ,
        cursos : ['Programación orientada a objetos' , 'Fundamentos de bases de Datos'] ,
        github : 'DiegoFerGamboa'
    }

)