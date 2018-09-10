const hello = function(name)
        {
            const message = `Hello, ${name}!`
            return message;
        }
console.log(hello("Dory"));

//fat arrow functions
const aloha = (name) => {
    console.log(name);
}

aloha("Nemo");

//**************************/

const howzit = name => `Howzit, ${name}!`;
console.log(howzit("Nani")); //Howzit Nani!

console.log(Math.min(4.5,5));
console.log(Math.max(4.5,5));
console.log(Math.pow(6,2));
console.log(Math.ceil(Math.random()*3));
