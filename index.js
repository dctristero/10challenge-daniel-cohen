const { Shape, Triangle, Square, Circle } = require('./lib/shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
      
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
   let newShape = answers.shape;
   let newColor = answers.color;
   let newText = answers.text;
   let newTextColor = answers.textColor;
   console.log(newShape, newColor, newText, newTextColor);
   if (newShape == "Triangle") {
      const triangle =  new Triangle(newColor, newText, newTextColor);
      const output = triangle.makeTriangle(triangle.color, triangle.text, triangle.textColor);
      console.log(output);
         fs.writeFile(`./examples/tri-${newText}.svg`, output, (err) =>
         err ? console.log(err) : console.log('Successfully created triangle!')
    );
      }
      else if (newShape == "Square") {
         const square =  new Square(newColor, newText, newTextColor);
         const output = square.makeSquare(square.color, square.text, square.textColor);
         console.log(output);
            fs.writeFile(`./examples/sq-${newText}.svg`, output, (err) =>
            err ? console.log(err) : console.log('Successfully created square!')
       );
         }
         else if (newShape == "Circle") {
            const circle =  new Circle(newColor, newText, newTextColor);
            const output = circle.makeCircle(circle.color, circle.text, circle.textColor);
            console.log(output);
               fs.writeFile(`./examples/cir-${newText}.svg`, output, (err) =>
               err ? console.log(err) : console.log('Successfully created circle!')
          );
            }

  });