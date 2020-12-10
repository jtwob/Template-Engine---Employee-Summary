const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {

    constructor(name = "", id = -1, email = "", officeNumber = -1) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }

    setOffice(newOffice) {
        this.officeNumber = newOffice;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;