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
//                     * numcourses
//                     * cumulative GPA
//                     * collection of course objects of count (numcourses)
//                     * semester number
//                     * max gpa attainable
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

class DegreeTerm {
    constructor(nameofdegree)
    {
        this.nameofdegree = nameofdegree;
        this.numberofyears = 0
        this.year_array =  new Array();
        
    }
    add_year(Year){
        this.year_array.push(Year);
        this.numberofyears++;
    }
    get_sum_yearlygpa(){

    }
    get_mark()
    {

    }
    get_cum_gpa (sum_allyears_gpa)
    {
        // to be conituded
        return (sum_allyears_gpa/this.numberofyears);
    }

}
class Year {

    constructor(yearnumber)
    {
        this.yearnumber = yearnumber;
        this.semester_array =  new Array();
        this.semester_count++;
    }
    add_year(Semester){
        this.semester_array.push(Semester);
    }
    get_mark()
    {
        
    }
    get_sum_sem_gpa(){
        // to be continued
    }
    get_cum_gpa(sum_allsem_gpa) 
    {
        return (sum_allsem_gpa/this.numberofyears);
    }
}

class Semester 
{
    //code
}

class Course
{
    //code
}

class Assessment
{
    //code
}

console.log("Testing out Year Class");
let d = new DegreeTerm("Computer Engineer");
console.log (d);
curryear = 1;
let y = new Year(curryear)
d.add_year(y);
d.add_year(y);
d.add_year(y);
d.add_year(y);
console.log (d);

console.log("Testing out Year Class");
let y1 = new Year(1);
console.log (y1);
curryear = 1;
let s1 = new Semester()
y1.add_year(s1);
y1.add_year(s1);
y1.add_year(s1);
y1.add_year(s1);
console.log (s1)
console.log (y1);