// use [] to define an array
// length is not fixed, can add/delete elements
// array[index] used to access and modify elements
// can store same type, or mix of types

let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])  // undefined

animals[3] = 'giraffe'
// animals[6] = 'giraffe'  // makes array bigger, fills in empty elements with undefined
console.log(animals)  // [ 'lion', 'tiger', 'cheetah', <3 empty items>, 'giraffe' ]

console.log(animals[5])

animals[1] = 'zebra'
console.log(animals)  // [ 'lion', 'zebra', 'cheetah', <3 empty items>, 'giraffe' ]

animals.push('elephant')  // adds to end
console.log(animals)

animals.unshift('deer')  // adds to beginning
console.log(animals)

let firstAnimals = animals.shift()  // remove first element - returns the removed element
console.log(firstAnimals, animals)

let lastAnimal = animals.pop()  // remove last element - returns removed element
console.log(lastAnimal, animals)

animals.reverse()  // reverse order of array
console.log(animals)

animals.sort()  // alphabetical order
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

console.log(animals.indexOf('lion'))
console.log(animals.indexOf('walrus'))  // returns -1 when not found

if (animals.indexOf('walrus') === -1) {
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {  // .includes() returns true or false
    console.log('cheetah is in the array')
}

console.log(animals.join(' * '))

animals.forEach( function(animal) {
    console.log(animal.toUpperCase())
})

animals.forEach( function(animal) {
    console.log(animal.length, animal)
})

animals.push('alligator')

let lengthOfEachAnimalName = []
animals.forEach( function(animal) {
    lengthOfEachAnimalName.push(animal.length)
})

console.log(lengthOfEachAnimalName)