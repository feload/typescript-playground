// -------------------------------------
// Decorators.
// -------------------------------------

function consl(constructor: Function){
  console.log(constructor);
}

@consl   // This gets executed automatically even without creating an instance.
class Villager {
  public name: string;
  constructor (name: string) {
    this.name = name;
  }
}