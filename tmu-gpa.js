/* / # Getting Started with Javascript
// ## Developing the core module in javascript for the TMU GPA App
// ### Layout

// #### Inspired by Excel File
// * **DegreeTerm (object)** &larr; **highest object on the hierarchy** 
//     
//     * numyears Done
//     * cumulative GPA Done C(calculated in a function)
//     * **collection of Year objects of count (numyears)**
//     * name of degree - optional Done
//     * fail_gpa - optional may add later and find a better way to add
//     * probation_gpa - optional may add later and find a better way to add

//         * **Year (object)**
//             * numsemesters - input don
//             * cumulative GPA - calculated (In progress)
//             * **collection of semesters objects of count (numsemesters)** - create a function
//             * year number input done
//                 * **Semester (object)**
//                     * numcourses
//                     * cumulative GPA (In progress)
//                     * collection of course objects of count (numcourses)
//                     * semester number
//                     * max gpa attainable
//                     * IsActive 
//                         * **Course (object)** Ethan
//                             * numassessments
//                             * GPA
//                             * **collection of Assessment objects of count (numassessments)**
//                             * coursename
//                             * max gpa attainable
//                                  * **Assessment (object)** &larr; Simplest Object Ethan
//                                             * weight
//                                             * mark
//                                             * name
                                               * letter grade - maybe a function 

*/
class DegreeTerm {
    constructor(nameofdegree,numberofyears)
    {
        this.nameofdegree = nameofdegree;
        this.numberofyears = numberofyears;
        this.year_array =  new Array();
    }
    get_average_mark( ){
        

    }
    get_cum_gpa(sum_allyears_gpa)  
    {
        return (sum_allyears_gpa/this.numberofyears);
    }
    get_average_mark( )
    {
        // to be continued

    }
    add_year(Year)
    {
        this.year_array.push(Year)
    }
    sum_years_gpa() // get the sum of all years to be used in get_cum_gpa --> will use array here
    {
        let sum = 0;
        for (const i of this.year_array)
         {
            sum += i.gpa; // will be defined in Year GPA
        }
    }
}

class Year {

    constructor(semestercount,yearnumber)
    {
        this.semestercount = semestercount;
        this.yearnumber = yearnumber;
        this.semester_array =  new Array();
    };

     
   get_cum_gpa(sum_allsem_gpa) //sum_all functoin
    {
        return (sum_allsem_gpa/this.numberofyears);
    };
    get_average_mark( ){
    // to be continued        

    }
    add_sem(Semester)
    {
        this.semester_array.push(Semester)
    };

    sum_sem_gpa() // get the sum of all years to be used in get_cum_gpa --> will use array 
    {
        let sum = 0;
        for (const i of this.semester_array) {
            sum += i.gpa; // will be defined in Year GPA
        }
    }
}

class Semester {

}

class Course {

}
class Assessment {


}
