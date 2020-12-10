const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    // constructor(name, email, github) {
    //     super(name, email, "Engineer");
    //     this.github = github;
    // }
    constructor() {
        super();
        this.role = "Engineer";
        this.github = "";
    }

    setGithub(newGithub) {
        this.github = newGithub;
    }
}
module.exports = Engineer;