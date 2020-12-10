const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class. HINT: This class should inherit from Employee.
class Intern extends Employee {
    // constructor(name, email, school) {
    //     super(name, email, "Intern");
    //     this.school = school;
    // }
    constructor() {
        super();
        this.role = "Intern";
        this.school = "";
    }

    setSchool(newSchool) {
        this.school = newSchool;
    }
}

module.exports = Intern;
