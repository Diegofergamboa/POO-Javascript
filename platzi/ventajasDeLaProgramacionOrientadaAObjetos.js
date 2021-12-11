// const juan = {
//     name : "JuanDC" ,
//     username : 'juanDC' ,
//     points : 100 ,
//     socialMedia : {
//         twitter : 'juanDC' ,
//         facebook : 'facebook.com/JC'
//     } ,
//     aprovedCourses : [
//         'Cursos definitivo de CSS' ,
//         'Mateámtica financiera'
//     ] ,
    // learningPaths: [
    //     {
    //         name : 'Escuela de Desarollo Web' ,
    //         courses : ['Responsive design' , 'HTML' , 'CSS']
    //     } ,
    //     {
    //         name : 'Escuela de DataScience' ,
    //         courses : ['Básico de Python' , 'POO con Python' , 'Rankers']
    //     } ,
    // ]
// }
// const miguel = {
//     name : "Jmiguel" ,
//     username : 'miguelin' ,
//     points : 1000 ,
//     socialMedia : {
//         twitter : 'miguelDC' ,
//         facebook : null
//     } ,
//     aprovedCourses : [
//         'Cursos definitivo de CSS' ,
//         'Finanzas'
//     ] ,
//     learningPaths: [
//         {
//             name : 'ANCD' ,
//             courses : ['Responsive Design' , 'HTML' , 'CSS']
//         } ,
//         {
//             name : 'Escuela de VideoJuegos' ,
//             courses : ['Tabloi' , 'POO básico' , 'Uniti']
//         } ,
//     ]
// }


//! Construcción del objeto Student.


class Student {
    constructor({
        name ,
        username ,
        point ,
        twitter = undefined ,
        facebook = undefined ,
        aprovesCourses = [] ,
        learningPaths = [] ,
    }) {
        this.name = name;
        this.username = username;
        this.point = point ;
        this.socialMedia = {
            twitter ,
            facebook
        } ;
        this.aprovesCourses = aprovesCourses ;
        this.learningPaths = learningPaths;
    }
}

//! Construyendolos por instancias.

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