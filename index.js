const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
    return drivers
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
    return drivers
}
function destructivelyRemoveLastDriver() {
    drivers.splice(-1)
    return drivers
}
function destructivelyRemoveFirstDriver() {
    drivers.shift()
    return drivers
}
function appendDriver(name) {
    return [...drivers, name]
}
function prependDriver(name) {
    return [name, ...drivers]
}
function removeLastDriver(name) {
    return drivers.slice(0, -1)
}
function removeFirstDriver() {
    return drivers.slice(1)
}