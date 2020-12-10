const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {

    constructor(name = "", id = -1, email = "", github = "") {
        super(name, id, email, "Engineer");
        this.github = github;
    }

    setGithub(newGithub) {
        this.github = newGithub;
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;