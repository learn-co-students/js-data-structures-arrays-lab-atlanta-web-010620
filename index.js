let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name); 
}

function destructivelyRemoveLastDriver(){
    drivers.pop(); 
}

function destructivelyRemoveFirstDriver(){
    drivers.shift(); 
}

function appendDriver(name){
    let new_array = drivers.slice(); 
    new_array.push(name); 
    return new_array; 
}

function prependDriver(name){
    let new_array = drivers.slice(); 
    new_array.unshift(name); 
    return new_array; 
}

function removeLastDriver(){
    let new_array = drivers.slice(0,-1); 
    return new_array; 
}

function removeFirstDriver(){
    let new_array = drivers.slice(1,drivers.length); 
    return new_array; 
}