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
var tigger = new Tiger();
tigger.eatMeat();
tigger.roar();
