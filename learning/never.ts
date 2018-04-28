// Error.
// Ok, this "never" type is super weird and it doesn't make any sense to me up to now.
// It specifies something that should never be executed on a normal flow.

function error (msg: string) : never {
  throw new Error(msg);
}

error ("Critical error");