const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
const roleSelect = [
    {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

function newRolePrompt (){
    inquirer.prompt(roleSelect).then(function(response){
        if(response.role === "Manager"){
            console.log("Manager");
            return createManager();
        }else if(response.role === "Engineer"){
            console.log("Engineer");
            return createEngineer();
        } else if(response.role === "Intern"){
            console.log("Intern");
            return createIntern();
        }
    });
}
newRolePrompt();




const manager = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
]

function createManager(){
    inquirer.prompt(manager).then(function(response){
        const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber
        );
        teamArray.push(manager);
        console.log(teamArray);
        addMember();
    });
}



const engineer = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github account?",
      },
]

function createEngineer(){
    inquirer.prompt(engineer).then(function(response){
        const engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
        );
        teamArray.push(engineer);
        console.log(teamArray);
        addMember();
    });
}



const intern = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "school",
        message: "what school are you currently attending?",
      },
]

function createIntern(){
    inquirer.prompt(intern).then(function(response){
        const intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
        );
        teamArray.push(intern);
        console.log(teamArray);
        addMember();
    });
}

const additionalMember = [
    {
    type: "list",
    name: "newMember",
    message: "Would you like to add another team memeber?",
    choices: ["YES","NO"]    
    }
]

function addMember(){
    inquirer.prompt(additionalMember).then(function(response){
        console.log(response);
        if(response.newMember === "YES"){
            return newRolePrompt();
        }
        else{
            console.log(teamArray);
           createTeam();
            console.log("success!");
        }

    })
}

function createTeam(){
    fs.writeFile(outputPath,render(teamArray),err =>{
        if (err){
            throw err;
        } else {
            console.log("Success!");
        }
    })
};