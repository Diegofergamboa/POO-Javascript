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

class FreeStudent extends Student{}
class BasicStudent extends Student{}
class ExpertStudent extends Student{}

const diego = new Student({
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