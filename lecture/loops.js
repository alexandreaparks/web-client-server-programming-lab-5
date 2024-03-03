let birds = ['Owl', 'Robin', 'Eagle']  // JavaScript array - like a python list
console.log(birds)

birds.forEach( function (bird, index) {
    // repeat once for each object in array
    // function will be called for each object in array - so pass it the object (bird)
    console.log(index, bird.toUpperCase())
})

// traditional for loop
for ( let x = 0; x < birds.length; x++) {
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}