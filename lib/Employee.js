// TODO: Write code to define and export the Employee class
class Employee {
    // constructor(name, email, role) {
    //     this.name = name;
    //     this.email = email;
    //     this.role = role;
    // }
    constructor(name = "", id = -1, email = "", role = ) {
        this.id = -1;
        this.name = "";
        this.email = "";
        this.role = "";
    }
    setID(newID) {
        this.id = newID;
    }
    getID() {
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