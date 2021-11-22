let nombre = prompt("Escriba su nombre");

saludo = () => {
    if (nombre == "") {
        nombre = "invitado";
    } else {
        alert(`Hola ${nombre}`);
        return nombre;
    }
}

// function sinNombre() {
//     if (nombre == "") {
//         return nombre = "invitado"
//     }
// }

// function conNombre() {
//     alert(`Hola ${nombre}`);
//     if (nombre == "") {
//         return nombre = "invitado";
//     }
// }

saludo()

// COMENTADO

// let animales = ["perro", "gato", "conejo", "caballo", "pajaro"];
// let numero = 1;
// let i;

// document.write(numero + "<br>");

// function numeros() {
//     while (numero <= 15) {
//         numero++;
//         document.write(numero + "<br>");
//         if (numero == 13) {
//             break;
//         }
//     }
// }

// // Aca se ejecuta la funcion "numeros"
// numeros()

// document.write("<hr>");

// for (let i = 1; i <= 6; i++) {
//     if (i == 5) {
//         break;
//     }
//     document.write(`<h${i}>Encabezado de nivel ${i}</h${i}>`);
// }

// document.write("<hr>");

// for (animal in animales) {
//     document.write(animal + "<br>");
// }

// document.write("<hr>");

// for (animal of animales) {
//     document.write(`${animal}<br>`);
// }