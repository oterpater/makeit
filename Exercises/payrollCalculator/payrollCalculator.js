// Payroll calculator

// // For this project you are going to create a payroll calculator. 
// There are employees and managers. 

// // An employee has a name and a base salary. To calculate the 
// salary of an employee take the base salary and deduct 4% for
//  health and 8% for retirement. 

// // A manager is like and employee but has an additional bonus. 
// The salary is calculated like the employee but the bonus is
//  added after deductions.


//     const e1 = new Employee("Pedro", 2300);
//     const e2 = new Employee("Pablo", 3500);
//     const m1 = new Manager("Maria", 5000, 2500);
    
//     const company = new Company();
//     company.addEmployees(e1, e2, m1);
//     company.generatePayroll(); // 2024 + 3080 + 6900 = 12004
    
//     company.healthFund; // 92 + 140 + 200 = 432
//     company.retirementFund; // 184 + 280 + 400 = 864
    
//     company.generatePayroll(); // 12004
//     company.healthFund; // 432 + 432 = 864
//     company.retirementFund; // 864 + 864 = 1728

// Crear empleados: nombre y salario

class Employees{
    constructor(name,baseSalary){
        this.name = name;
        this.baseSalary = baseSalary;
        this.salariesSum = 0;
        this.healthFund = 0;
        this.retirementFund = 0;
    }
};

class Managers{
    constructor(name,baseSalary,bonus){
        this.name = name;
        this.baseSalary = baseSalary;
        this.bonus = bonus;
        this.salariesSum = 0;
        this.healthFund = 0;
        this.retirementFund = 0;
    };
};

// class Managers extends Employees {
//     constructor(name,baseSalary,bonus){
//         super(name,baseSalary,salariesSum,healthFund,retirementFund);
//         this.bonus = bonus;
//     };
// };


const e1 = new Employees("Nathaly",31);
const e2 = new Employees("Sara",31);
const m1 = new Managers("Simon", 234, 3);
// console.log(e1);
// console.log(e2);
// console.log(m1);


class Company{
    constructor(){
        this.employees = [];
        // this.managers = [];
        this.paymentsSum = 0;
        this.healthFund = 0;
        this.retirementFund = 0;
    };

    addEmployees(){    
        for(let employee in arguments){
            this.employees = this.employees.concat(arguments[employee]);        
        };        
    };

    generatePayroll(){
        const payments = this.employees.map(elem => elem.baseSalary * 0.88);
        const payment = payments.reduce((acc,cur) => acc + cur);
        this.employees.map(elem => elem.salariesSum += elem.baseSalary * 0.88);
        this.employees.map(elem => elem.healthFund += elem.baseSalary * 0.04);
        this.employees.map(elem => elem.retirementFund += elem.baseSalary * 0.08);

        // const paymentsM = this.managers.map(elem => elem.baseSalary + elem.bonus);
        // const paymentM = paymentsM.reduce((acc,cur) => acc + cur);
        // this.managers.map(elem => elem.salariesSum += elem.baseSalary * 0.88);
        // this.managers.map(elem => elem.healthFund += elem.baseSalary * 0.04);
        // this.managers.map(elem => elem.retirementFund += elem.baseSalary * 0.08);

        const result = payment;
        // paymentE + paymentM;
        this.paymentsSum += result;
        this.healthFund += 0.04*(result/0.88);
        this.retirementFund+= 0.08*(result/0.88);
        return result;

    };
};

const company = new Company();
company.addEmployees(e1,e2,m1);
// company.addEmployees(e2);
// company.addEmployees(m1);
console.log("Pago 0");
console.log(company.employees);
console.log(company.paymentsSum);
console.log(company.healthFund);
console.log(company.retirementFund);
console.log("Pago 1");
console.log(company.generatePayroll());
console.log(company.employees);
console.log(company.paymentsSum);
console.log(company.healthFund);
console.log(company.retirementFund);
console.log("Pago 2");
console.log(company.generatePayroll());
console.log(company.employees);
console.log(company.paymentsSum);
console.log(company.healthFund);
console.log(company.retirementFund);






// 












































