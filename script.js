// let nombre = prompt("Escriba su nombre");

// alert(`"Hola " ${nombre}`);


let animales = ["perro","gato","conejo","caballo","pajaro"];
let numero = 1;
let i;

document.write(numero + "<br>");

while (numero <= 15) {
    numero++;
    document.write(numero  + "<br>");
    if (numero == 13) {
        break;
    }
}

document.write("<hr>");

for (let i = 1; i <= 6 ; i++) {
    if (i == 5) {
        break;
    }
    document.write(`<h${i}>Encabezado de nivel ${i}</h${i}>`);
}

document.write("<hr>");

for (animal in animales) {
    document.write(animal + "<br>");
}

document.write("<hr>");

for (animal of animales) {
    document.write(`${animal}<br>`);    
}