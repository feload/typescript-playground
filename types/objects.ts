// Objects and types.
// You can assign only properties previously defined.

type Mutant = {
  name: string,
  age: number,
  powers: string[],
  perform: () => void
}

let felipeMutant:Mutant = {
  name: "Felipe",
  age: 33,
  powers: ["Pragmatism and fire"],
  perform: () => {
    console.log('Performing...');
  }
}

// Multiple  types.
let kamaleon: string | Mutant = "Kamaleon";
