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
                         