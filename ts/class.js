// Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Animal class.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.itsType = function () {
        return typeof this;
    };
    Animal.prototype.breath = function () {
        console.log("Breathing...");
    };
    Animal.prototype.eat = function () {
        console.log("Eating...");
    };
    return Animal;
}());
// Mammal class.
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super.call(this) || this;
    }
    Mammal.prototype.giveBirth = function () {
        console.log('Giving birth...');
    };
    return Mammal;
}(Animal));
// Tiger class.
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super.call(this) || this;
    }
    Tiger.prototype.eatMeat = function () {
        this.eat();
    };
    Tiger.prototype.roar = function () {
        console.log("Rooooar!");
    };
    return Tiger;
}(Mammal));
// const tigger = new Tiger();
// tigger.eatMeat();
// tigger.roar();
// console.log(Animal.itsType()); // function
// Abstract classes.
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.move = function () {
        console.log('Moving');
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super.call(this) || this;
    }
    return Car;
}(Vehicle));
var beetle = new Car();
// const car = new Vehicle(); => Error
beetle.move();
// Singleton.
var Session = /** @class */ (function () {
    function Session() {
        this.id = Math.random().toString();
    }
    Session.getSession = function () {
        if (!Session.instance)
            Session.instance = new Session();
        return Session.instance;
    };
    return Session;
}());
console.log(Session.getSession());
console.log(Session.getSession());
console.log(Session.getSession());
