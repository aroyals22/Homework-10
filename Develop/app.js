const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");
const renderEngineer = require("./lib/htmlRenderer");


const staff = [];

const getRole = () => {
    inquirer.prompt(
        {name:    "role",
         type:    "list",
         message: "Please select your Employee title below:",
         choices:[
             {name:  "Intern",
              value: "intern",
             },
             {name:  "Engineer",
              value: "engineer",
             },
             {name:  "Manager",
              value: "manager"
             }]
        }).then(answer =>{
            console.log(answer)
            if(answer.role === "intern"){
                return getIntern()
            }
            else if (answer.role === "engineer"){
                return getEngineer()
            }
            else if (answer.role === "manager"){
                return getManager()
            }
        })
    }

const getIntern = () =>{
    inquirer.prompt([
        
        {name:    "name",
         type:    "input",
         message: "Please enter your first and last name:"
        },
        {name:    "id",
         type:    "input",
         message: "Please enter your ID number:"
        },
        {name:    "email",
         type:    "input",
         message: "Enter your email:"
        },
        {name:    "college",
         type:    "input",
         message: "Please enter your university:"
        }
     ]).then(data =>{
         console.log(data)
        staff.push(new Intern (data.name, data.id, data.email, data.college))
        closeOut();
    })}

const getEngineer = () =>{
    inquirer.prompt([
        
        {name:    "name",
         type:    "input",
         message: "Please enter your first and last name:"
        },
        {name:    "id",
         type:    "input",
         message: "Please enter your ID number:"
        },
        {name:    "email",
         type:    "input",
         message: "Enter your email:"
        },
        {name:    "github",
         type:    "input",
         message: "Please enter your GitHub username:"
        }
     ]).then(data =>{
         console.log(data)
        staff.push(new Engineer (data.name, data.id, data.email, data.github));
        
        closeOut();
    })}


const getManager = () =>{
    inquirer.prompt([
        
        {name:    "name",
         type:    "input",
         message: "Please enter your first and last name:"
        },
        {name:    "id",
         type:    "input",
         message: "Please enter your ID number:"
        },
        {name:    "email",
         type:    "input",
         message: "Enter your email:"
        },
        {name:    "officeNum",
         type:    "input",
         message: "Please enter your office number:"
        }
     ]).then(data =>{
         console.log(data)
        staff.push(new Manager (data.name, data.id, data.email, data.officeNum))
        closeOut(data);
    })}


    const closeOut = () =>{
        inquirer.prompt([
            {name: "next",
             type: "confirm",
             message: "Would you like to add another Employee?"
        }
        ]).then(ans =>{
            if(ans.next===true){
                getRole();
            }
            else{
                render(staff)
                console.log(staff)
            }
            
        })


    }
    getRole()