class Stack {
  private items: any[];
  constructor (...items: any[]) {
    this.items = items;
  }

  push (item: any) : void{
    this.items.push(item);
  }

  pop () : any {
    return this.items.pop();
  }
}