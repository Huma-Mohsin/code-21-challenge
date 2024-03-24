// //Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.

//solution
//In TypeScript, an interface is a way to define the shape or structure of an object. It's a contract that describes the properties and methods an object should have. Interfaces are purely for declaration and don't get compiled into JavaScript; they're used by the TypeScript compiler to check the types of objects during development.

//Create a blueprint for student information,
interface student {
  //interface is create like an object.
  name: string;
  age: number;
  enrolled_courses: string[];
}
//fill in this blueprint.
let fill_info: student = {
  //information is stored in an object
  name: "Huma Mohsin",
  age: 34,
  enrolled_courses: ["AI-Robotics", "GenAI", "BlockChain"],
};
console.log(fill_info);
//Author-HUMA MOHSIN
