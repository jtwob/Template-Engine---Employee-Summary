// TODO: Write code to define and export the Employee class
class Employee {
    // constructor(name, email, role) {
    //     this.name = name;
    //     this.email = email;
    //     this.role = role;
    // }
    constructor() {
        this.name = "";
        this.email = "";
        this.role = "";
    }

    setName(newName) {
        this.name = newName;
    }

    setEmail(newEmail) {
        this.email = newEmail;
    }

    setRole(newRole) {
        this.role = newRole;
    }
}

module.exports = Employee;