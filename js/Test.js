// import {expect, jest, test} from '@jest/globals';
const {Course,Semester,Year,DegreeTerm,Assessment} = require('./tmu-gpa.js');
const {GradeTable} = require('./GradeTable.js');
// g = new GradeTable();
console.log("Unit Tests") 
let d = new DegreeTerm("Computer Engineer");
console.log("Testing out Adding Years");
let y1 = new Year(1);
let y2 = new Year(2);
let y3 = new Year(3);
let y4 = new Year(4);
d.add_year(y1); 
d.add_year(y2);
d.add_year(y3);
d.add_year(y4);
console.log(d)

console.log("\n\nTesting out Adding Semester");
let s2 = new Semester("Fall",2)
let y_1 =d.get_year(1)
y_1.add_semester(s2);
console.log(d)


console.log("\n\nTesting out Adding Courses");
c1 = new Course("PCS125",12,true)
c2 = new Course("MTH240",17,true)
c3 = new Course("ECN100",13,true)
c4 = new Course("CPS188",12,true)
c5 = new Course("ELE202",16,true)
let s_2  =  y_1.get_semester(2);
s_2.add_course(c1);
s_2.add_course(c2);
s_2.add_course(c3);
s_2.add_course(c4);
s_2.add_course(c5);

console.log(" Test Find Course")
console.log(s2.get_course("PCS125"))

console.log("\n\nTesting Adding Semesters");
console.log(d.get_year(1).get_semester(2) );
// console.log (s1)
// console.log (y1);

// console.log("Testing out DegreeTerm Class");

// console.log (d);
// curryear = 1;
// let y = new Year(curryear)
// d.add_year(y1); // adding the year array with
// d.add_year(y);
// console.log (d);
// console.log("GPA for year 1: " + y1.get_cum_gpa()) // Dont make no jokes eyy
// c = new GradeTable()1
// console.log("Letter Grade corresponding to GPA above: " + c.get_letter_grade(y1.get_cum_gpa()))

// console.log("Testing out Semester/course/assessment classes");
// // I probably messed up your previous test cases
// let sem1 = new Semester("Winter", 3);
// let cour1 = new Course("COE 318", 3, true);
// let cour2 = new Course("COE 328", 2, true);
// cour1.add_assessment(new Assessment("Quizzes", 89, 20));
// cour1.add_assessment(new Assessment("Midterm", 67, 30));
// cour1.add_assessment(new Assessment("Final", 87, 50));
// sem1.add_course(cour1);
// cour2.add_assessment(new Assessment("Midterm", 77, 40));
// cour2.add_assessment(new Assessment("Final", 65, 60));
// sem1.add_course(cour2);
// console.log(cour1.get_weighted_average());
// console.log(cour1.gpa);
// console.log(cour2.get_weighted_average());
// console.log(cour2.gpa);
// console.log(sem1.get_term_gpa()); //Expected output 3.17
