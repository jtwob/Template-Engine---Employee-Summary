const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    // constructor(name, email, office) {
    //     super(name, email, "Manager");
    //     this.office = office;
    // }
    constructor() {
        super();
        this.role = "Manager";
        this.office = -1;
    }

    setOffice(newOffice) {
        this.office = newOffice;
    }
    getOfficeNumber() {
        return this.office;
    }
}

module.exports = Manager;