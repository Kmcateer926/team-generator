// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// extending employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    //methods 
    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

// defining manager 
const manager = new Manager();
manager.getRole();
manager.getOfficeNumber();

// export information
module.exports = Manager;