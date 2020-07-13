//Tipos Primitivos

console.log(typeof undefined)
console.log(typeof 32)
console.log(typeof 'Pepe')
console.log(typeof true)

// Tipos Referenciados

console.log(typeof {nombre: 'Pepe', edad: 32})
console.log(typeof [])

// Variables

console.log('Creamos una variable')

let variable

console.log(typeof variable)

variable = 32

console.log(typeof variable)

// Números especiales

let x = 2e500
console.log(x * x)

// String

let nombre = 'Juan'

// ES6 Template String

let saludo = `Hola ${nombre}, encatado`
console.log(saludo)