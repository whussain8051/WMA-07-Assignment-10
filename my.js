// Task 1: Object Creation
document.write("<h2>Task 1: Object Creation");
// Create an empty object and assign it to a variable.
document.write("<h2>Create an empty object and assign it to a variable.</br>");

let myObject = {};

myObject.name = "Waqar";
myObject.age = 28;

document.write(`Name:  ${myObject.name} <br> Age: ${myObject.age}`);

// Introduction Data 
let myIntro = {
    Name: "Waqar",
    Age: 28,
    Profession: "Study & Job"
};

// Create an object with properties for name, age, and profession.
document.write("<h2>Create an object with properties for name, age, and profession.</br>");


document.write(`Name: ${myIntro.Name} <br> Age: ${myIntro.Age} <br> Profession: ${myIntro.Profession}`);


// Task 2: Object Properties
document.write("<h2>Task 2: Object Properties");
// Access and print the values of properties from an object.
document.write("<h2>Access and print the values of properties from an object.</br>");

// Using dot notation
document.write("Using dot notation<br>");
document.write('Name: ' + myIntro.Name + '<br>');
document.write('Age: ' + myIntro.Age + '<br>');
document.write('Profession: ' + myIntro.Profession + '<br>');

document.write("<br>")
// Using bracket notation
document.write("Using bracket notation<br>");
document.write('Name: ' + myIntro['Name'] + '<br>');
document.write('Age: ' + myIntro['Age'] + '<br>');
document.write('Profession: ' + myIntro['Profession'] + '<br>');


// Modify the value of a property in an object.
document.write("<h2>Modify the value of a property in an object.</br>");

myIntro.Name = "Waqar Hussain";

document.write(`Name: ${myIntro.Name} <br> Age: ${myIntro.Age} <br> Profession: ${myIntro.Profession}`);

// Add a new property to an existing object.
document.write("<h2>Add a new property to an existing object.</br>");

myIntro.City = "Faisalabad";

document.write(`Name: ${myIntro.Name} <br> Age: ${myIntro.Age} <br> Profession: ${myIntro.Profession} <br> City: ${myIntro.City}`);



// Task 3: Object Methods
document.write("<h2>Task 3: Object Methods");
// Create an object method that prints a message to the console.
document.write("<h2>Create an object method that prints a message to the console.</br>");

let myInfo = {
    name: "Waqar",
    age: 28,
    city: "Faisalabad"
}
console.log(`Name: ${myInfo.name} Age: ${myInfo.age} City: ${myInfo.city}`);

// Create a method that calculates and returns a value based on object properties.
document.write("<h2>Create a method that calculates and returns a value based on object properties.</br>");

let rectangle = {
    width: 10,
    height: 5,
    
    // Method to calculate the area
    calculateArea: function() {
        return this.width * this.height;
    }
};

document.write(`The area of the rectangle is: ${rectangle.calculateArea()}`);


// Task 4: Object Iteration
document.write("<h2>Task 4: Object Iteration");
// Iterate over the properties of an object and print their values.
document.write("<h2>Iterate over the properties of an object and print their values.</br>");

let person = {
    name: "Waqar",
    age: 28,
    occupation: "Student"
};

for (let property in person) {
    if (person.hasOwnProperty(property)) {
        document.write(`${property} : ${person[property]} </br>`);
    }
}

// Iterate over the properties of an object and perform a specific action for each property.
document.write("<h2>Iterate over the properties of an object and perform a specific action for each property.</br>");
// Define an example object
const person1 = {
    name: "waqar",
    age: 30,
    occupation: "student"
};

for (let property in person1) {
    if (person1.hasOwnProperty(property)) {
        let value = person1[property];
        if (typeof value === "string") {
            value = value.toUpperCase();
        }
        // console.log(property + ": " + value);
        document.write(`${property} : ${value} </br>`);
    }
}


// Task 5: Object Comparison
document.write("<h2>Task 5: Object Comparison");
// Compare two objects to check if they have the same properties and values.
document.write("<h2>Compare two objects to check if they have the same properties and values.");
