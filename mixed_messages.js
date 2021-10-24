/*
const message = "This is a test to see if Node.js is set up on this computer and can run this Javascript code. I'll be using this file to create the Mixed Messages Project for Codecademy.";
console.log(message);
*/

const messageComponents = {
    comp1: ["January", "February", "March", "April", "May", "June", "July"],
    comp2: ["I", "Am", "Daniel"],
    comp3: ["This", "is", "Sparta!"]
};  

const values = Object.values(messageComponents);
console.log(values);

const messageBits = values.map(val => {
    const random = Math.floor(Math.random() * val.length);
    return val[random];
});

console.log(`Today is my: ${messageBits[0]}. Because of ${messageBits[1]}. And Tristan said ${messageBits[2]}`);

/*
for (let components in messageComponents) {
    for (let i = 0; i < components.length - 2; i++) {
        components = messageComponents.comp'\i'[Math.floor(Math.random() * messageComponents.comp[i].length)]
        console.log(`${messageComponents[components]}`);
    }
};
*/

//const keys = Object.keys(messageComponents);
//console.log(keys);



/*
for (let components in messageComponents) {
    const values = Object.values(messageComponents);
    const random = Math.floor(Math.random() * values.length);

    console.log(random, values[random])
};
*/





/*
let composeMessage = obj => {
    const random = Math.floor(Math.random() * messageComponents.length);
    return console.log(random, messageComponents[random]);
};
*/
