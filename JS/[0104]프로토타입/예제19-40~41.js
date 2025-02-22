const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // (1) 생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체 
    Person.prototype = {
        sayHello() {
            console.log(`Hi my name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Boram');

console.log(me.constructor === Person); // false
// 프로토타입 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다 
console.log(me.constructor === Object); // true
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색된다 

