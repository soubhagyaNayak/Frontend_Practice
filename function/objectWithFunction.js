const user={
    name:'Soubhagya',
    price:20000
}

function handleObject(user){
    return `${user.name} is just Logged in with ${user.price}`;
}

console.log(handleObject(user));