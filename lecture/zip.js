function isMinnesotaZip(code) {
    // all MN zip are between 55001 - 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

console.log(isMinnesotaZip(55415))  // true
console.log(isMinnesotaZip('55403'))  // type coercion - true
console.log(isMinnesotaZip(53120))  // false
console.log(isMinnesotaZip('999999999'))  // false
console.log(isMinnesotaZip(-1))  // false