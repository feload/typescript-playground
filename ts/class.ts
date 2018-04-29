// -------------------------------
// Classes.
// -------------------------------

// Animal class.
class Animal {
  constructor () { }

  static itsType () : string {
    return typeof this;
  }

  protected breath () : void {
    console.log("Breathing...");
  }

  protected eat () : void {
    console.log("Eating...");
  }
}

// Mammal class.
class Mammal extends Animal{
  constructor () {
    super();
  }

  protected giveBirth () : void {
    console.log('Giving birth...');
  }
}

// Tiger class.
class Tiger extends Mammal {
  constructor () {
    super();
  }

  public eatMeat () : void {
    this.eat();
  }

  public roar () : void {
    console.log("Rooooar!");
  }
}

// const tigger = new Tiger();
// tigger.eatMeat();
// tigger.roar();
// console.log(Animal.itsType()); // function

// Abstract classes.
abstract class Vehicle {
  constructor () {}
  public move () : void {
    console.log('Moving');
  }
}

class Car extends Vehicle {
  constructor () {
    super();
  }
}

const beetle = new Car();
// const car = new Vehicle(); => Error
beetle.move();

// Singleton.

class Session {
  static instance: Session;
  public id:string;

  private constructor (){
    this.id = Math.random().toString();
  }
  static getSession (){
    if (!Session.instance)
      Session.instance = new Session();

    return Session.instance;
  }
}

console.log(Session.getSession());
console.log(Session.getSession());
console.log(Session.getSession());