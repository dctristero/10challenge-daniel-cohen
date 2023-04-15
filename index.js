const { Shape, Triangle, Square, Circle } = require('./lib/shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");






//   `${Triangle} ffff`;
//   <div class="container">
//       <h1 class="display-4">Hi! My name is ${name}</h1>
//       <p class="lead">I am from ${location}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${github}</li>
//         <li class="list-group-item">LinkedIn: ${linkedin}</li>
//       </ul>
      

inquirer
  .prompt([
   {
      type: "checkbox", 
      name: "shape",
      message: "PICK A SHAPE RIGHT NOW",
      choices: ["Triangle", "Square", "Circle"],
  },
    {
      type: "input",
      name: "color",
      message: "MAKE THE SHAPE A COLOR",
    },
    {
      type: "input",
      name: "text",
      message: "PICK SOME LETTERS BUT IT HAS TO BE LESS THAN FOUR OR I WILL BE SO ANGRY",
    },
    {
      type: "input",
      name: "textColor",
      message: "MAKE THE LETTERS A COLOR",
    },
    {
      type: "checkbox", 
      name: "apology",
      message: "I'm sorry I yelled at you, I've just been really stressed out lately",
      choices: ["That's okay", "I understand", "I love you"],
  },
  ])
  .then((answers) => {

   if ("shape" === "Triangle") {
      const triangle =  new Triangle(answers.color, answers.text, answers.textColor);
      output = triangle.makeTriangle();
      console.log(output);
   }

   //    const htmlPageContent = generateHTML(answers);

   //    fs.writeFile('index.html', htmlPageContent, (err) =>
   //       err ? console.log(err) : console.log('Successfully created index.html!')
   //  );
  });