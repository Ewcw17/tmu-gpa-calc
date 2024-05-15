
// Letter Grade|	Percentage|	TMU GPA
//   | --------     | ------- | ------- |
// A+	| 90-100|	4.33
// A	| 85-89|	4.00
// A-	| 80-84|	3.67
// B+	| 77-79|	3.33
// B	| 73-76|	3.00
// B-	| 70-72|	2.67
// C+	| 67-69|	2.33
// C	| 63-66|	2.00
// C-	| 60-62|	1.67
// D+	| 57-59|	1.33
// D	| 53-56|	1.00
// D-	| 50-52|	.67
// F	| 0-49|	0
// GPA Corresponding to Letter grade
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
            gpa: 4.00,
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
            gpa: 1.67,
            perc: {
                from: 57,
                to: 59
            }
        };
        this.D =
        {
            gpa: 1.67,
            perc: {
                from: 53,
                to: 56
            }
        };
        this.D_min =
        {
            gpa: 1.67,
            perc: {
                from: 50,
                to: 52
            }
        };
        this.F =
        {
            gpa: 1.67,
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

module.exports = { GradeTable };
// export {GradeTable};