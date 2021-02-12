const Employee = require("./employee.js");

class Manager extends Employee{
    constructor(name, email, id, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager" 
     }
}

module.exports = Manager; 