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
                         