// class Square {
//     //정적 메서드 
//     static area(width, height) {
//         return width * height;
//     }
// }

// console.log(Square.area(10,10));

class Square{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    //프로토타입 메서드 
    area(){
        return this.width * this.height
    }
}

const square = new Square(10, 10);
console.log(square.area())

// 예제 25-31
Math.max(1,2,3)
Number.isNaN(NaN)
JSON.stringify({a:1})
Object.is({},{})
Reflect.has({a:1},'a')