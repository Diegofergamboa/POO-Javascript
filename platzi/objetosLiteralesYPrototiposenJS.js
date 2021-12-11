const natalia = {
    name: "Natalia" ,
    age: 20 ,
    cursos: [
        'Inglés' ,
        'HTML y CSS'
    ] ,
    aprobarCurso(nuevoCurso) { // Se crea método para agregar cursos
        this.cursos.push(nuevoCurso); //This para hacer referencia al atributo del objeto
    }
};

// Agregar valores a los atributos. 
console.log(natalia);
natalia.cursos.push('Matemáticas');

// Cambiar valores de los atributos.
natalia.name = 'Nath';

// Probar el método.
natalia.aprobarCurso('Finanzas');

function Student(name, age, cursos) {
    this.name = name;
    this.age = age;
    this.cursos = cursos;
}
// Creando método del prototipo Student
Student.prototype.cursos = function aprobarCurso (nuevoCurso) {
    this.cursos.push(nuevoCurso);
}
// Creando una instancia del prototipo Student
const diego = new Student(
    'Diego',25,[
                    'Programación Orientada a objetos' , 
                    'React Avanzado'
                ]
);


