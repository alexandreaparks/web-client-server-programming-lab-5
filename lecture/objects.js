// use { } to define an object
// objects contain properties, which are name: value pairs
// separate names and values with :

let user = { username: 'Alexandrea', password: 'testing123'}

for (let name in user) {
    console.log(name, user[name])
}

console.log(user.username)
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

// objects and JSON
// define object variables and data with JSON syntax
// JavaScript Object Notation
// dictionary like structure
// { name : value, name2 : value2 }
// values can be any type - strings, numbers, lists, other objects

user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'alparks@gmail.com'
console.log(user)
console.log(user.email)




