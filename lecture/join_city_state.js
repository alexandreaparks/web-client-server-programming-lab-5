function cityStateAddress(city, state) {
    let address = `${city}, ${state.toUpperCase()}`  // backtick - template string
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'wA')
console.log(address)