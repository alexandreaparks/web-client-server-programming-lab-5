// 3 requirements to be a senator:
// at least 30 years old
// US citizen for 9 or more years
// must live in state you want to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'


if (age >+ 30 && usCitizenTime >=9 && stateOfResidence === stateWantToRepresent) {
    console.log('You are eligible to be a senator')
} else {
    console.log('Sorry, you are not eligible')
}

// using == will allow for type coercion
// using === must be an exact match - will not change types

// falsy values - undefined, null, empty lists, empty objects, 0, false
if ('' === 0) {  // using == would console.log 'same'
    console.log('same')
} else {
    console.log('not the same')
}