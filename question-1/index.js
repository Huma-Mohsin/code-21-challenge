// //Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
//solution.
//An enum, short for "enumeration," is a data type in many programming languages used to define a set of named constants. These constants are typically used to represent a fixed number of possible values that a variable can take. Enumerations provide a way to make code more readable, maintainable, and less error-prone by giving meaningful names to values.
//Let's create categories for vehicles like cars, trucks, and motorcycles using enums.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
    vehicles[vehicles["aeroplane"] = 3] = "aeroplane";
    vehicles[vehicles["train"] = 4] = "train";
    vehicles[vehicles["bicycles"] = 5] = "bicycles";
})(vehicles || (vehicles = {}));
console.log("\n");
//show one example.
console.log("In Vehicles variable,train is stored at Index", vehicles.train); //shows the index that in vehicles variable,train is placed at 4 index.
console.log("\n");
console.log("In Vehicles variable,train is stored at Index", vehicles.motorcycles);
//Author-HUMA MOHSIN
