class Shape {
   constructor (anchorX, anchorY, color, size, text, textColor) {
      this.anchorX = anchorX;
      this.anchorY = anchorY;
      this.color = color;
      this.size = size;
      this.text = text;
      this.textColor = textColor;
   }

   // setColor() {

   // }
}

class Triangle extends Shape {
   constructor (color, text, textColor) {
      super(color, text, textColor);
   };

   makeTriangle = ( color, text, textColor ) =>

      `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">

      <polygon points="150, 18 244, 182 56, 182" fill= "${color}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
      </svg>`

}

class Square extends Shape {
   constructor (anchorX, anchorY, color, text, textColor, size) {
      super(anchorX, anchorY, color, text, textColor, size);
   }
}

class Circle extends Shape {
   constructor (anchorX, anchorY, color, text, textColor, size) {
      super(anchorX, anchorY, color, text, textColor, size);
   }
}

module.exports = { Shape, Triangle, Square, Circle }