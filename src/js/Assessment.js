//Watchers
const addButton = document.querySelector(".assess-button");
const assessname = document.querySelector(".assess-name");
const assessgrade = document.querySelector(".assess-grade");
const assessweight = document.querySelector(".assess-weight");
const assesslist = document.querySelector(".assess-list");

const weightAverage = document.querySelector(".average");
const weightAchieved = document.querySelector(".total-weight")

//Listeners
addButton.addEventListener("click", addassessment);
assesslist.addEventListener("click", deleteAssessment);


//Functions
function addtototal(){
    weightAverage.innerText = parseFloat(weightAverage.innerText.replace("%", "")) + (assessgrade.value * (assessweight.value*0.01));
    weightAverage.innerText = parseFloat(weightAverage.innerText).toFixed(3) + "%";
    weightAchieved.innerText = parseFloat(weightAchieved.innerText.replace("%", "")) + (assessweight.value*1);
    weightAchieved.innerText = parseFloat(weightAchieved.innerText).toFixed(3) + "%";
}

function removefromtotal(grade, weight){
    weightAverage.innerText = parseFloat(weightAverage.innerText.replace("%", "")) - (grade * (weight*0.01));
    weightAverage.innerText = parseFloat(weightAverage.innerText).toFixed(3) + "%";
    weightAchieved.innerText = parseFloat(weightAchieved.innerText.replace("%", "")) - weight;
    weightAchieved.innerText = parseFloat(weightAchieved.innerText).toFixed(3) + "%";
}

function addassessment(e){
    e.preventDefault(); //Prevents the page from reloading after button press

    if(assessgrade.value != "" && assessname.value != "" && assessweight.value != ""){
        
        const i = 0;  
        const invalids = document.querySelectorAll(".inv-txt");
        invLen = invalids.length;
        for(let i=0; i<invLen; i++){
            invalids[i].remove();
        }

        const Newitem = document.createElement("div"); //a container for textbox, and delete button
        Newitem.classList.add("crs-asmt-list-item");

        const newassess = document.createElement("li"); // the textbox
        newassess.classList.add("crs-asmt-text");
        Newitem.setAttribute("grade", assessgrade.value);
        Newitem.setAttribute("weight", assessweight.value);
        newassess.innerText = assessname.value + ": " + assessgrade.value + "% (" + assessweight.value + "%)";
        Newitem.appendChild(newassess);

        const trashButton = document.createElement("button"); //delete button
        trashButton.innerHTML = '<i class="fas fa-trash"><i>';
        trashButton.classList.add("trash-btn");
        Newitem.appendChild(trashButton);

        assesslist.appendChild(Newitem);
        addtototal();
        assessname.value = "";
        assessgrade.value = "";
        assessweight.value = "";

    } else{
        const invTxt = document.createElement("p");
        invTxt.classList.add("inv-txt");
        invTxt.innerText = "Invalid Input";
        assesslist.appendChild(invTxt);
    }
}

function deleteAssessment(e){ //target determines what you pressed
    if (e.target.classList[0] === "trash-btn") { //checks if specifically the delete button was pressed
    let assessment = e.target.parentElement; //finds the value inside the textbox
    removefromtotal(assessment.getAttribute("grade"), assessment.getAttribute("weight"));
    e.target.parentElement.remove();
    }
}