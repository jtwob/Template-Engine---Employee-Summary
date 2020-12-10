const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class. HINT: This class should inherit from Employee.
class Intern extends Employee {

    constructor(name = "", id = -1, email = "", school = "") {
        super(name, id, email, "Intern");
        this.school = school;
    }

    setSchool(newSchool) {
        this.school = newSchool;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
