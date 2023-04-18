class Shape {
   constructor (color, text, textColor) {
      this.color = color;
      this.text = text;
      this.textColor = textColor;
   }

   // setColor() {

   // }
}

class Triangle extends Shape {
   makeTriangle = ( color, text, textColor ) => {
      return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <polygon points="150, 18 244, 182 56, 182" fill= "${color}" />

      <text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`
      
}}

class Circle extends Shape {
   makeCircle = ( color, text, textColor ) => {
      return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill= "${color}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`
      
}}

class Square extends Shape {
   makeSquare = ( color, text, textColor ) => {
      return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <rect x="70" y="20" width="160" height="160" fill= "${color}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`
      
}}

module.exports = { Shape, Triangle, Square, Circle }