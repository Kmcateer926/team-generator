// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// grabbing info from the employee file
const Employee = require("./Employee");

// extending the class of employee to intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = "Intern";
        this.school = school;
    }

    //methods 
    getRole() {
      return this.role;
  }

  getSchool() {
      return this.school;
  }

};

// defining intern 
// const intern = new Intern();
// intern.getRole();
// intern.getSchool();

//export information
module.exports = Intern;