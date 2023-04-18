const { Shape, Triangle, Square, Circle } = require('./lib/shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

describe('Triangle', () => {
   test('should make a triangle', () => {
     const triangle = new Triangle();
     expect(triangle.makeTriangle("red", "ASS", "green")).toEqual(
      `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill= "red" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">ASS</text>
      
      </svg>`
     );
   });
 });