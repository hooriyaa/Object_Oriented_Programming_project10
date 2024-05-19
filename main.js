#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj); //push obj in student array
    }
}
const persons = new Person();
console.log("\t", "-".repeat(80), "\t");
console.log(chalk.bold.magenta("\t\tWelcome To My Cli Typescript Project - 'OBJECT ORIENTED PROGRAMMING'\t\t"));
console.log("\t", "-".repeat(80), "\t");
const programStart = async (persons) => {
    do {
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            choices: ["Staff", "Student", "Exit"],
            message: "Whom would you like to interact with?",
        });
        if (ans.select === "Staff") {
            console.log(chalk.bold.yellow("You approach the staff room. Please feel free to ask any question."));
        }
        else if (ans.select === "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Enter the student's name you wish to engage with:",
            });
            const student = persons.students.find((val) => val.name === ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`hello I am ${chalk.bold.red.italic(name.name)}, Nice to meet you!!`);
                console.log(chalk.bold.magenta("New student added.."));
                console.log(chalk.bold.blue("Current student list.."));
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${chalk.bold.red.italic(student.name)}. Nice to see you again!`);
                console.log(chalk.bold.blue("Existing Student List:"));
                console.log(persons.students);
            }
        }
        else if (ans.select === "Exit") {
            console.log(chalk.bold.red.italic("Exiting The Program...."));
            process.exit();
        }
    } while (true);
};
programStart(persons);
