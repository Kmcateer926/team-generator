// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// constructor info from the js file
const Employee = require("./Employee");

// extending the employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }
    // methods 
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }

};
// defining engineer 
// const engineer = new Engineer();
// engineer.getRole();
// engineer.getGithub();
// exportinformation
module.exports = Engineer;
