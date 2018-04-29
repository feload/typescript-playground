// -------------------------------
// Generics
// -------------------------------

function getParam<T> ( arg: T) {
  return arg;
}

console.log(getParam(14.322).toFixed(2));
console.log(getParam("Somebody").charAt(0));
console.log(getParam(new Date()).getTime());

type Hero = {
  name: string;
}

type Villain = {
  power: string;
}