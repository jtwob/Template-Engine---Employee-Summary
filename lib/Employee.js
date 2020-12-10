// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name = "", id = -1, email = "", role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    setID(newID) {
        this.id = newID;
    }
    getId() {
        return this.id;
    }

    setName(newName) {
        this.name = newName;
    }
    getName() {
        return this.name;
    }

    setEmail(newEmail) {
        this.email = newEmail;
    }
    getEmail() {
        return this.email;
    }

    setRole(newRole) {
        this.role = newRole;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;