const numbers = [1,9,4,7,2];

let suma = 0; // la acumuladora está afuera
numbers.forEach( num => {
    suma = suma + num
    // acc = acc + num; Es impura; afecta elem que están fuera de su scope
})

console.log(suma);

const suma1 = numbers.reduce((acumuladora, valorActual) => {
    console.log("acumuladora", acumuladora)
    console.log("valor actual", valorActual)
    return acumuladora
})

const suma2 = numbers.reduce((acumuladora, valorActual) => {
    return acumuladora + valorActual
    // es lo mismo que:
    // acumuladora = acumuladora + valorActual
})

console.log(suma2)

const personas = [
    {
        nombre: "lili",
        edad: 29
},
{
    nombre: "lili",
    edad: 26
},
{
    nombre: "lili",
    edad: 54
}];

let suma3 = personas.reduce((acc, curr) => {
    console.log("acumuladora", acc)
    console.log("valor actual", curr.edad)
    return acc + curr.edad
}, 0);

/// ***************

console.log("EMPIEZAN LOS EJERCICIOS")
console.log("Ej1")

const numbers1 = [6, 1, 34, 94, 3, 17];

let suma4 = numbers1.reduce((acc1, curr1) => {
    return acc1 + curr1
});
console.log(suma4)

/// ***************

console.log("Ej2")

const numbers2 = [6, 1, 34, 94, 3, 17];

let multiply = numbers2.reduce((acc2, curr2) => {
    return acc2 * curr2
});
console.log(multiply);

/// ***************

console.log("Ej3")