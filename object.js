/*Creating and Accessing an Object and its Properties
const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic"
};

console.log(pen.type);  // "ballpoint"
console.log(pen.color); // "blue"
console.log(pen.brand); // "Bic"

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

Once an object is created, you can change the value of its properties with the syntax:
myObject.myProperty = newValue

JavaScript even offers the ability to dynamically add new properties to an already created object.
pen.price = "2.5"; // Set the pen price property


Aurora is about to start a series of great adventures, some of which will update her attributes.
***Check out the following example of a simple game using objects:***

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

Aurora is harmed by an arrow
aurora.health -= 20;

Aurora equips a strength necklace
aurora.strength += 10;

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);
 
Adding a method to an object
*******Observe the following example:*******

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};

Return the character description
function describe(character) {
    return `${character.name} has ${character.health} health points and ${character.strength} as strength`;
}

console.log(describe(aurora));

*/

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

pen.color="red";//Modify the pen color property

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.price = "2.5"; // Set the pen price property

console.log(`My pen costs ${pen.price}`);


/**********Example of an RPG Game using JS Object**********/

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};

console.log(`${aurora.name} has ${aurora.health}
health points and ${aurora.strength} as strength`);
//Aurora is harmed by an arrow - reduce health by 20
aurora.health -= 20;

//Aurora equips a strength necklace - increase strength by 10
aurora.strength += 10;
console.log(`${aurora.name} has ${aurora.health}
health points and ${aurora.strength} as strength`);


// Return the character description
function describe(character) {
    console.log(`${character.name} has ${character.health} health points and ${character.strength} as strength`);
}

describe(aurora);


const ryu = {
    name: "Ryu",
    health: 150,
    strength: 25,
    describe(){
        return `${this.name} has ${this.health} health points and ${this
      .strength} as strength.`;
    }
}
console.log(ryu.describe());

//notes curtosy of Frankie I missed this day and just copied his notes
