const { Shape, Triangle, Square, Circle } = require('./shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

describe('Triangle', () => {
   test('should make a red triangle with a green ass', () => {
     const triangle = new Triangle();
     expect(triangle.makeTriangle("red", "ASS", "green")).toEqual(
      `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <polygon points="150, 18 244, 182 56, 182" fill= "red" />

      <text x="150" y="160" font-size="60" text-anchor="middle" fill="green">ASS</text>
      
      </svg>`
     );
   });
});

describe('Square', () => {
   test('should make a red square with a green ass', () => {
     const square = new Square();
     expect(square.makeSquare("red", "ASS", "green")).toEqual(
      `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <rect x="70" y="20" width="160" height="160" fill= "red" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">ASS</text>
      
      </svg>`
     );
   });
});

describe('Circle', () => {
   test('should make a red circle with a green ass', () => {
     const circle = new Circle();
     expect(circle.makeCircle("red", "ASS", "green")).toEqual(
      `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill= "red" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">ASS</text>
      
      </svg>`
     );
   });
 });