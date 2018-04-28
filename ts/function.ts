// Functions.

let personName: string = "Felipe";
let personLastName: string = "López";

// Required parameters.
// You define them like this:

function sayHiTo (name: string) : void {
  console.log(`Hi ${name}`);
}

function buildName (name: string, lastName: string) : string {
  return `${name} ${lastName}`;
}

// Optional parameters.
// You define an optional parameter by appending a question mark to it.

function buildGreeting (name: string, greeting: string = "Hello there", emph?: boolean) : string {
  return `${greeting} ${name}${(emph) ? "!" : ""}`;
}


// Rest of parameters.
// This operand requires to be defined as an array of strings.

function sayHelloToEverybody(greeting: string, ...people: string[]) : void {
  people.map((person) => {
    console.log(`${greeting} ${person}`);
  });
}

// Function type.
// It is possible to define function types.

let greetingFun: (greeting: string, whom: string) => string;
greetingFun = (greeting: string, whom: string) : string => {
  return `${greeting} ${whom}`;
}

console.log(
  sayHiTo(buildName(personName, personLastName)),
  buildGreeting(personName, "Hola", true),
  sayHelloToEverybody("Hey you", "Peter", "John", "Fany"),
  greetingFun("Sup?", "personName")
);