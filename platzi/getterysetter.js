class Course {
    constructor({
        nombre ,
        clases = []
    }) {
        this._nombre = nombre ,
        this.clases = clases
    }

    get nombre() {
        return this._nombre;
    }
    //! Se coloca un nombre diferente.

    set nombre(nuevoNombre) {
        //! Se vigilan con condicionantes
        if (nuevoNombre === "Curso malo") {
            console.error("No se actualiza así");
        } else {
            this._nombre = nuevoNombre
        }
    }
}

// cursoProgramacionBasica.name = 'nombre'
const cursoProgramacionBasica = new Course({
    nombre :'Curso de Programación básica' ,
});

