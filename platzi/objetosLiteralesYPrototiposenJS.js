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
    this.name = 'Nombre';
    this.age = 'Nombre';
    this.cursos = 'Nombre';
}
// Creando método del prototipo Student
Student.prototype.cursos = (nuevoCurso) => {
    this.cursos.push(nuevoCurso);
}
// Creando una instancia del prototipo Student
const Diego = new Student(
    'Diego', 25 , ['Programación Orientada a objetos', 'React Avanzado']
);
console.log(Diego);
