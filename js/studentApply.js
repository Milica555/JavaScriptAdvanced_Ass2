function getStudents(studentValues) {

    let students = [];

    let name = 0;
    let address = 1;
    let phone = 2;
    let course = 3;

    const counter = 4;

    let student = new Student();
    
    for (let index = 0; index < studentValues.length; index++) {

        if (index == name) {
            student.name = studentValues[index];
            name += counter;
        }

        if (index == address) {
            student.address = studentValues[index];
            address += counter;
        }

        if (index == phone) {
            student.phone = studentValues[index];
            phone += counter;
        }

        if (index == course) {
            student.course = studentValues[index];
            course += counter;            
            students.push(student);
            student = new Student();
        }        
    }

    return students;
}