// -------------------------------
// Casting.
// -------------------------------

let stringVar: string = "String value";
let stringVarLen: number = (<string> stringVar).length;

console.log(stringVarLen);