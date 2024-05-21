async function createPDF() {
    //Obtener el elemento de entrada de archivo
    let fileInput = document.getElementById('JSFile');
    let file = fileInput.files[0];
    let result = await readFile(file);

    //Bucle para cada estudiante
    let students = result;
    students.forEach(function (student, i) {
        document.write("Nombre: " + student.Apellidos + " " + student.Nombre + "\n" + student.Respuesta1 + "\n" + student.Respuesta2 + "\n" + student.Respuesta3 + "\n" + "FIN")
    });
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        //Se crea un FileReader
        let lector = new FileReader();

        lector.onload = function (evento) {
            let content = evento.target.result;
            result = JSON.parse(content);
            resolve(result);
        };
        lector.onerror = function (evento) {
            reject(new Error("Error"));
        }

        lector.readAsText(file);
    })
}