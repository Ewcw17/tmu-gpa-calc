class GradeTable {
    constructor() {
        this.A_plus =
        {
            gpa: 4.33,
            perc: {
                from: 90,
                to: 100
            }
        };
        this.A =
        {
            gpa: 4.00,
            perc: {
                from: 85,
                to: 89
            }
        };
        this.A_min =
        {
            gpa: 3.67,
            perc: {
                from: 80,
                to: 84
            }
        };

        this.B_plus =
        {
            gpa: 3.33,
            perc: {
                from: 77,
                to: 79
            }
        };
        this.B =
        {
            gpa: 3.00,
            perc: {
                from: 73,
                to: 76
            }
        };
        this.B_min =
        {
            gpa: 2.67,
            perc: {
                from: 70,
                to: 72
            }
        };
        this.C_plus =
        {
            gpa: 2.33,
            perc: {
                from: 66,
                to: 69
            }
        };
        this.C =
        {
            gpa: 2.00,
            perc: {
                from: 63,
                to: 66
            }
        };
        this.C_min =
        {
            gpa: 1.67,
            perc: {
                from: 60,
                to: 62
            }
        };
        this.D_plus =
        {
            gpa: 1.33,
            perc: {
                from: 57,
                to: 59
            }
        };
        this.D =
        {
            gpa: 1.00,
            perc: {
                from: 53,
                to: 56
            }
        };
        this.D_min =
        {
            gpa: 0.67,
            perc: {
                from: 50,
                to: 52
            }
        };
        this.F =
        {
            gpa: 0,
            perc: {
                from: 0,
                to: 49
            }
        };
    }
    get_gpa(average) {
        let gpa = 0;
        let grade_array = [this.F, this.D_min, this.D, this.D_plus, this.C_min, this.C, this.C_plus, this.B_min, this.B, this.B_plus, this.A_min, this.A, this.A_plus];
        let i = 0;
        average = Math.round(average);

        for(i = 0; i < grade_array.length; i++){
            if(average >= grade_array[i].perc.from && average <= grade_array[i].perc.to)
            {
                gpa = grade_array[i].gpa;
            }
        }
        return gpa;
    }
    get_letter_grade(gpa) {
        let letter = "NF";

        if (this.A_plus.gpa == gpa) {
            letter = "A+";
        }

        else {
            if ((this.A_plus.gpa > gpa) && (gpa >= this.A.gpa)) {
                letter = "A";
            }

            else {
                if ((this.A.gpa > gpa) && (gpa >= this.A_min.gpa)) {
                    letter = "A-";
                }

                else {
                    if (this.A.gpa > gpa && gpa >= this.B_plus.gpa) {
                        letter = "B+";
                    }

                    else {
                        if (this.B_plus.gpa > gpa && gpa >= this.B.gpa) {
                            letter = "B";
                        }

                        else {
                            if (this.B.gpa > gpa && gpa >= this.B_min.gpa) {
                                letter = "B-";
                            }

                            else {
                                if (this.B_min.gpa > gpa && gpa >= this.C_plus.gpa) {
                                    letter = "C+";
                                }

                                else {
                                    if (this.C_plus.gpa > gpa && gpa >= this.C.gpa) {
                                        letter = "C";
                                    }

                                    else {
                                        if (this.C.gpa > gpa && gpa >= this.C_min.gpa) {
                                            letter = "C-";
                                        }

                                        else {
                                            if (this.C_min.gpa > gpa && gpa >= this.D_plus.gpa) {
                                                letter = "D+";
                                            }

                                            else {
                                                if (this.C_min.gpa > gpa && gpa >= this.D_plus.gpa) {
                                                    letter = "D+";
                                                }

                                                else {
                                                    if (this.D_plus.gpa >= gpa && gpa >= this.D.gpa) {
                                                        letter = "D";
                                                    }

                                                    else {
                                                        if (this.D.gpa > gpa && gpa >= this.D_min.gpa) {
                                                            letter = "D-";
                                                        }

                                                        else {
                                                            if (this.F.gpa >= gpa) {
                                                                letter = "F";
                                                            }

                                                            else {
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }



        // case :
        //     letter = "D";
        //     break;
        // case :
        //     letter = "D-";
        //     break; 
        // case this.F.gpa >= gpa :
        //     letter = "F";
        //     break;                        
        //     default:
        //         letter = "N.A"
        //     break;
        return letter;
    };
}

//Watchers
const addButton = document.querySelector(".course-button");
const coursename = document.querySelector(".course-name");
const coursegrade = document.querySelector(".course-grade");
const courselist = document.querySelector(".course-list");

const gpa = document.querySelector(".gpa");
gpa.setAttribute("total-gpa", 0);
gpa.setAttribute("course-num", 0);

//Listeners
addButton.addEventListener("click", addCourse);
courselist.addEventListener("click", deleteCourse);

let gradetable = new GradeTable();

//Functions
function addtototal(coursegpa){ //WORK LATER WORK LATER
    gpa.setAttribute("course-num", parseFloat(gpa.getAttribute("course-num"))+1);
    gpa.setAttribute("total-gpa", parseFloat(coursegpa) + parseFloat(gpa.getAttribute("total-gpa")));
    gpa.innerText = parseFloat(gpa.getAttribute("total-gpa"))/parseFloat(gpa.getAttribute("course-num"));
    gpa.innerText = parseFloat(gpa.innerText).toFixed(2);
}

function removefromtotal(coursegpa){
    gpa.setAttribute("course-num", parseFloat(gpa.getAttribute("course-num"))-1);
    gpa.setAttribute("total-gpa", parseFloat(gpa.getAttribute("total-gpa")) - parseFloat(coursegpa));
    gpa.innerText = parseFloat(gpa.getAttribute("total-gpa"))/parseFloat(gpa.getAttribute("course-num"));
    gpa.innerText = parseFloat(gpa.innerText).toFixed(2);
}

function addCourse(e){
    e.preventDefault(); //Prevents the page from reloading after button press

    if(coursegrade.value != "" && coursename.value != ""){
        
        const i = 0;  
        const invalids = document.querySelectorAll(".inv-txt");
        invLen = invalids.length;
        for(let i=0; i<invLen; i++){
            invalids[i].remove();
        }

        const Newitem = document.createElement("div"); //a container for textbox, and delete button
        Newitem.classList.add("crs-asmt-list-item");

        const newcourse = document.createElement("li"); // the textbox
        newcourse.classList.add("crs-asmt-text");
        let coursegpa = gradetable.get_gpa(parseFloat(coursegrade.value)); //Converting to gpa/letter grade
        Newitem.setAttribute("gpa", coursegpa);
        newcourse.innerText = coursename.value + ": " + coursegrade.value + "%; GPA: " + coursegpa + " (" + gradetable.get_letter_grade(coursegpa) + ")";
        Newitem.appendChild(newcourse);

        const trashButton = document.createElement("button"); //delete button
        trashButton.innerHTML = '<i class="fas fa-trash"><i>';
        trashButton.classList.add("trash-btn");
        Newitem.appendChild(trashButton);

        courselist.appendChild(Newitem);
        addtototal(coursegpa);
        coursename.value = "";
        coursegrade.value = "";

    } else{
        const invTxt = document.createElement("p");
        invTxt.classList.add("inv-txt");
        invTxt.innerText = "Invalid Input";
        courselist.appendChild(invTxt);
    }
}

function deleteCourse(e){ //target determines what you pressed
    if (e.target.classList[0] === "trash-btn") { //checks if specifically the delete button was pressed
    let course = e.target.parentElement; //finds the value inside the textbox
    removefromtotal(course.getAttribute("gpa"));
    e.target.parentElement.remove();
    }
}