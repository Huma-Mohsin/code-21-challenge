// // //Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// // Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for describing more complex information, such as the details of different shapes.

// //solution.

// A type alias is a way to give a name to a type. It allows you to create a new name for any type.Type aliases are useful for improving code readability, reducing redundancy, and simplifying complex type definitions.
// we can define a type alias using the type keyword followed by the name we want to assign to the type and then the type definition.

//using a special type alias:-
type Shape = {
  kind: "circle" | "square" | "rectangle";
  radius?: number; // Required for circle
  length?: number; // Required for square and rectangle
  breadth?: number; // Required for square and rectangle
};
//defining values in each kind
let circle: Shape = {
  kind: "circle",
  radius: 5,
};

let square: Shape = {
  kind: "square",
  length: 23,
  breadth: 23,
};

let rectangle: Shape = {
  kind: "rectangle",
  length: 30,
  breadth: 78,
};

console.log(circle);//produce an output in the form of an object.
console.log(square);
console.log(rectangle);
//Author-HUMA MOHSIN

