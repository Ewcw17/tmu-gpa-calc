

const {GradeTable} = require('./GradeTable');
// import{GradeTable}  from './GradeTable.js'

class DegreeTerm
 {
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

    get_cum_gpa(){
        let sum = 0;
       for (const iterator of this.year_array) {
        sum +=  iterator.gpa
       }
       return sum/this.semester_count;
    }
    get_year(yearnum){
        return this.year_array.find(year => year.yearnumber === yearnum)
    }
}
class Year 
{

    constructor(yearnumber)
    {
        this.yearnumber = yearnumber; // what year is it --> like First year
        this.semester_array =  new Array();
        this.semester_count=0;
    }
    add_semester(Semester)
    {
        this.semester_array.push(Semester);
        this.semester_count++;
    }
    get_semester(semnum){
        return this.semester_array.find(semester => semester.semnum === semnum)
    }
    get_cum_gpa()
    {
       let sum = 0;
       for (const iterator of this.semester_array) 
       {
            iterator.get_term_gpa(); //This is here to set the value of semester.gpa
            sum +=  iterator.gpa
       }
       return sum/this.semester_count;
    }

}

class Semester 
{
    constructor (sem_season, semnum) //just made to finish my methods above rewrite when needed
    {
    this.sem_season = sem_season; //Like Fall, Winter, Spring or Summer
    this.semnum = semnum; //Which semester, like semester 1, 2, 3, etc
    this.num_courses = 0;
    this.course_array = new Array();
    this.gpa = 0;
    this.letter_grade = "F"; // How can we change this
    }
    add_course(Course)
    {
        this.course_array.push(Course);
        this.num_courses++;
    }

    get_course(name){
        return this.course_array.find(course => course.name === name)
    }
    get_term_gpa() //Gets the weighted average, gpa and letter grade all at once
    {
        for(const course of this.course_array)
        {
            course.get_weighted_average();
            this.gpa += course.gpa;
        }
        this.gpa = this.gpa/this.num_courses;
        let gradetable = new GradeTable();
        this.letter_grade = gradetable.get_letter_grade(this.gpa);
        return this.gpa;
    }

 
}

class Course
{
    constructor(name, num_assessments, required){
        this.name = name;
        this.num_assessments = num_assessments;
        this.required = required;
        this.assessment_array = new Array();
        this.weighted_average = 0
        this.gpa = 0;
        this.letter_grade = "F";
    }

    add_assessment(Assessment){
        this.assessment_array.push(Assessment);
        this.num_assessments++;
    }

    get_assessment(name){
        return this.assessment_array.find(assessment => assessment.name = name)
    }
    get_weighted_average() //gpa, weighted_average and letter grade are determined all at once with this function
    {
        let i = 0;
        this.weighted_average = 0;
        for(i = 0; i < this.assessment_array.length; i++)
        {
            let current_assessment = this.assessment_array[i];
            this.weighted_average += (current_assessment.grade * current_assessment.weight * 0.01) //multiplying by 0.01 to convert to decimal
        }
        let gradetable = new GradeTable();
        this.gpa = gradetable.get_gpa(this.weighted_average);
        this.letter_grade = gradetable.get_letter_grade(this.gpa);
        return this.weighted_average;
    }
}

class Assessment
{
    constructor(name, grade, weight)
    {
        this.name = name; // A name
        this.grade = grade; //In the form of a percentage
        this.weight = weight; //In the form of a percentage
    }

}

class GPAMarker {
constructor(name, desc,gpa){
this.name = name; 
this.desc = desc; 
this.gpa = gpa;
}
}

module.exports = { Course, Assessment,Semester,Year,DegreeTerm,GPAMarker };
// export{ Course, Assessment,Semester,Year,DegreeTerm,GPAMarker };