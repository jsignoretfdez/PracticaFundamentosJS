let obj = {


}

console.log(typeof obj)

obj.nombre = 'Jose'


const pi = 3.14


// Notación JSON u Objetos Literales
const user = {
    nombre: 'Jose',
    apellido: 'Signoret',
    edad: 34,
    fechaNacimiento: '13/09/1985'
}

// Funciones Constructoras

const user2 = Object()
user2.nombre = 'Carlos'
user2.edad = 27
user2.altura = 180

console.log(user2)
delete user2.edad
console.log(user2)

const datos = [1,2,3,4,5,6]
console.log(datos)
console.log(typeof datos)
const users = Array('Jose', 'Juan', 'María', 'Dulce')
console.log(users.length)
users[1] = 'Lucas'
console.log(users)

user.fechaNacimiento = new Date('1985/9/15')
console.log(user)

Math.random()

let cadena = 'Hola'

console.log(cadena.length)
console.log(typeof cadena)
console.log(cadena.toUpperCase())
