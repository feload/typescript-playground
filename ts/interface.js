// -------------------------------
// Interfaces.
// -------------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employees = [];
var EmployeeBase = /** @class */ (function () {
    function EmployeeBase(name, department, boss) {
        this.id = Math.round(Math.random() * 1000);
        this.name = name;
        this.department = department;
        if (boss)
            this.boss = boss;
    }
    EmployeeBase.prototype.getId = function () {
        return this.id;
    };
    EmployeeBase.prototype.findBoss = function () {
        var _this = this;
        if (!this.boss)
            return null;
        var hisBoss = null;
        return employees.filter(function (e) {
            return (e.id === _this.boss);
        })[0];
    };
    return EmployeeBase;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department, boss) {
        return _super.call(this, name, department, boss) || this;
    }
    return Employee;
}(EmployeeBase));
var e1 = new Employee("Felipe", 1);
var e2 = new Employee("Juan", 1, e1.getId());
var e3 = new Employee("Luisa", 1, e2.getId());
var e4 = new Employee("Martina", 1, e1.getId());
employees.push(e1, e2, e3, e4);
console.log(e3.name + "'s Boss: (" + e3.boss + ")", e3.findBoss());
var check;
check = function (a, b) {
    return a + b;
};
