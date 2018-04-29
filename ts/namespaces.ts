// With this, you can create a reference to a certain functions in a ns.
/// <reference path="validators/file.ts" />

namespace Validators {
  // You must export this in order to make it
  // accessible from outside.

  export function validateLength(str: string): boolean {
    return (str.length > 0);
  }
}

console.log(Validators.validateLength("hi"));