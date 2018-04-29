// -------------------------------
// Interfaces.
// -------------------------------

const employees: Employee[] = [];
type EmployeeOrNull = Employee | null;

interface IEmployee {
  id: number;
  name: string;
  department: number;
  boss?: number;
  findBoss(): EmployeeOrNull
  getId(): number
}

class EmployeeBase implements IEmployee {
  id: number;
  name: string;
  department: number;
  boss?: number;

  constructor(name: string, department: number, boss?: number) {
    this.id = Math.round(Math.random() * 1000);
    this.name = name;
    this.department = department;
    if (boss) this.boss = boss;
  }

  getId () : number {
    return this.id;
  }

  findBoss(): EmployeeOrNull {
    if(!this.boss) return null;

    let hisBoss = null;
    return employees.filter((e) => {
      return (e.id === this.boss);
    })[0];
  }
}

class Employee extends EmployeeBase  {
  constructor (name: string, department: number, boss?: number) {
    super(name, department, boss);
  }
}

const e1 = new Employee("Felipe", 1);
const e2 = new Employee("Juan", 1, e1.getId());
const e3 = new Employee("Luisa", 1, e2.getId());
const e4 = new Employee("Martina", 1, e1.getId());

employees.push(e1, e2, e3, e4);

console.log(`${e3.name}'s Boss: (${e3.boss})`, e3.findBoss());

// -------------------------------
// Interfaces for functions.
// -------------------------------

interface CheckNumbersFun {
  (num1: number, num2: number) : number
}

let check: CheckNumbersFun;
check = function (a: number, b: number){
  return a + b;
}