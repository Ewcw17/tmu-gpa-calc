// For ethan - the grades table is mostly for transferring weighted average to gpa or letter grade 
// # Getting Started with Javascript
// ## Developing the core module in javascript for the TMU GPA App
// ### Layout
// #### Inspired by Excel File
// * **DegreeTerm (object)** &larr; **highest object on the hierarchy** 
//     * numyears
//     * cumulative GPA
//     * **collection of Year objects of count (numyears)**
//     * name of degree - optional
//     * fail_gpa
//     * probation_gpa
//         * **Year (object)**
//             * numsemesters
//             * cumulative GPA
//             * **collection of semesters objects of count (numsemesters)**
//             * year number 
//                 * **Semester (object)**
//                   
//                         * **Course (object)**
//                             * numassessments
//                             * GPA
//                             * **collection of Assessment objects of count (numassessments)**
//                             * coursename
//                             * max gpa attainable
//                                  * **Assessment (object)** &larr; Simplest Object 
//                                             * weight
//                                             * mark
//                                             * name
// Working on it  

const {GradeTable} = require('./GradeTable');

gradetable = new GradeTable;

class DegreeTerm {
    constructor(nameofdegree)
    {
        this.nameofdegree = nameofdegree;
        this.numberofyears = 0
        this.year_array = new Array();
        
    }
    add_year(Year){
        this.year_array.push(Year);
        this.numberofyears++;
    }

    get_cum_gpa(){
        let sum = 0;
       for (const iterator of this.year_array) {
        sum +=  iterator.gpa
       }
       return sum/this.semester_count;
    }

}
class Year {

    constructor(yearnumber)
    {
        this.yearnumber = yearnumber; // what year is it --> like First year
        this.semester_array = new Array();
        this.semester_count = 0;
    }
    add_year(Semester)
    {
        this.semester_array.push(Semester);
        this.semester_count++;
    }
    get_cum_gpa()
    {
       let sum = 0;
       for (const iterator of this.semester_array) 
       {
            sum +=  iterator.gpa
       }
       return sum/this.semester_count;
    }

}

class Semester 
{
    constructor (gpa, num_courses) //just made to finish my methods above rewrite when needed
    {
    this.gpa = gpa; // should be cumulative gpa 
    this.num_courses = num_courses;
    this.semnum = 0

    }// This is just a test  

    // needs to have
    // * cumulative GPA
    // * collection of course objects of count (numcourses)
    // * semester numbe
    // GPA according to weighted average
    // (weighted average as input) -->  function --> ( [GPA or letter] output) --> use grades_table unless you find a more efficient way dm me if you need help
    // * What section --> fall, winter, (summer or spring)  --> maybe an object and function that sets what what section the semester is
}

class Course
{
    constructor(name, num_assessments, required){
        this.name = name;
        this.num_assessments = num_assessments;
        this.required = required;
        this.assessments = new Array();
        this.weighted_average = 0
        this.gpa = 0;
        this.letter_grade = "";
    }

    add_assessment(Assessment){
        this.assessments.push(Assessment);
        this.num_assessments++;
    }

    get_weighted_average()
    {
        let i = 0;
        this.weighted_average = 0;
        for(i = 0; i <= this.assessments.length; i++)
        {
            current_assessment = this.assessments[i];
            this.weighted_average += (current_assessment.grade * current_assessment.weight * 0.01) //multiplying by 0.01 to convert to decimal
        }
        this.gpa = gradetable.get_gpa(this.weighted_average);
        this.letter_grade = gradetable.get_letter_grade(this.gpa);
        return this.weighted_average;
    }
}

class Assessment
{
    constructor(assessment, grade, weight)
    {
        this.assessment = assessment; // A name
        this.grade = grade; //In the form of a percentage
        this.weight = weight; //In the form of a percentage
    }
}

console.log("Testing out Year Class");
let y1 = new Year(1);
console.log (y1);
curryear = 1;
let s1 = new Semester(3.2)
let s2 = new Semester(3.3)
let s3 = new Semester(3.6)
let s4 = new Semester(3.7)
y1.add_year(s1);
y1.add_year(s2);
y1.add_year(s3);
y1.add_year(s4);
console.log (s1);
console.log (y1);

console.log("Testing out DegreeTerm Class");
let d = new DegreeTerm("Computer Engineer");
console.log (d);
curryear = 1;
let y = new Year(curryear)
d.add_year(y1); // adding the year array with
d.add_year(y);
console.log (d);
console.log("GPA for year 1: " + y1.get_cum_gpa()) // Dont make no jokes eyy
c = new GradeTable()
console.log("Letter Grade corresponding to GPA above: " + c.get_letter_grade(y1.get_cum_gpa()))