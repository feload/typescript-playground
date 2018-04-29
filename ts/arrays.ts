// -------------------------------
// Arrays
// -------------------------------

let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: string[] = ["1"];

strArr.push("1");

// Notice that the paremeter received by this function should be string type.
function trick (value: string) {
  strArr.push(value);
}

// Anyway, be careful while using dynamic values.
// Whenever you run this code: trick(1);
// You'll end up with an array like this one: ["1", 1]