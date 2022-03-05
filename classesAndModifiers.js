"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greet = function () {
        console.log("o employee ".concat(this.name, " disse oi"));
    };
    return Employee;
}());
var emp1 = new Employee("Bruno");
console.log(emp1.name);
emp1.greet();
console.log(emp1.constructor.name);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, grau) {
        var _this = _super.call(this, managerName) || this;
        _this.grau = grau;
        return _this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("He is delegating!");
    };
    return Manager;
}(Employee));
var chef = new Manager("Bruno", 10);
var MinhasCoisas = /** @class */ (function (_super) {
    __extends(MinhasCoisas, _super);
    function MinhasCoisas(name) {
        return _super.call(this, name) || this;
    }
    return MinhasCoisas;
}(Employee));
var mC1 = new MinhasCoisas("Gouveia");
mC1.greet();
/// -----------------------------------------------------------------------------
var Paises = /** @class */ (function () {
    function Paises() {
    }
    // Não são chamados na classe
    Paises.methods = function () {
    };
    return Paises;
}());
