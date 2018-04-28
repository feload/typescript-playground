// Classes

// Animal class.
class Animal {
  constructor () { }
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

const tigger = new Tiger();
tigger.eatMeat();
tigger.roar();