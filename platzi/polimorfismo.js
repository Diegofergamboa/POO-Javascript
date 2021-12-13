class Comment {
    constructor({
        content ,
        studentName,
        studentRole = 'estudiante'
    }) {
        this.content = content;
        this.studentName = studentName;
        studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(`
            ${this.studentName}, con rol , ${this.studentRole}
        `);
        console.log(this.likes);
        console.log(this.content);
    }
}

class Student {
    constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
    }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
    twitter,
    instagram,
    facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    }

    publicarComentario(commentContent) {
    const comment = new Comment({
        content: commentContent,
        studentName: this.name,
    });
    comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props) {
    super(props);
    }

    approveCourse(newCourse) {
    if (newCourse.isFree) {
        this.approvedCourses.push(newCourse);
    } else {
        console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
    }
}
}

class BasicStudent extends Student {
    constructor(props) {
    super(props);
    }

    approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse);
    } else {
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
    }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
    super(props);
    }

    approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
    super(props);
    }

    approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
    const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole : "profesor"
    });
    comment.publicar();
    }
}

const diego = new TeacherStudent({
    name :'Diego' ,
    username: 'diegop' ,
    email: 'diegoœiego.com',
    instagram :'diegoaaaaa'
})

