document.write("<h2>Task 1: Object Creation");
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

document.write("<h2>Create an object with properties for name, age, and profession.</br>");


document.write(`Name: ${myIntro.Name} <br> Age: ${myIntro.Age} <br> Profession: ${myIntro.Profession}`);



document.write("<h2>Task 2: Object Properties");
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


document.write("<h2>Modify the value of a property in an object.</br>");

myIntro.Name = "Waqar Hussain";

document.write(`Name: ${myIntro.Name} <br> Age: ${myIntro.Age} <br> Profession: ${myIntro.Profession}`);

document.write("<h2>Add a new property to an existing object.</br>");

myIntro.City = "Faisalabad";

document.write(`Name: ${myIntro.Name} <br> Age: ${myIntro.Age} <br> Profession: ${myIntro.Profession} <br> City: ${myIntro.City}`);

