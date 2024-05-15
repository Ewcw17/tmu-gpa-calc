// constants and variables
let number = 0;
const seasons = ["Fall GPA", "Winter GPA", "Spring/Summer GPA","Calculate"]
const main_container = document.querySelector(".container");
const add_year_button = document.querySelector(".add_button");
//add year


function add_year(e) {
    console.log("here")
    e.preventDefault();
   
    // take input from inputs 
    
    number+=1;
    // div
    const form_container = document.createElement("div");
    const year = document.createElement("div");
    const card = document.createElement("div")
    const term1_container = document.createElement("div");
    const term2_container = document.createElement("div");
    const term3_container = document.createElement("div");
    const term4_container = document.createElement("div");
    // bold (Text in bold)
    const bold_year = document.createElement("b");
    const b_term1 = document.createElement("b");
    const b_term2 = document.createElement("b");
    const b_term3 = document.createElement("b");
    const b_term4 = document.createElement("b");
    //h1
    const h1_year = document.createElement("h1");
    const h1_fall = document.createElement("h1");
    const h1_winter = document.createElement("h1");
    const h1_summer = document.createElement("h1");
    const h1_calculate = document.createElement("h1");
    //Inputs
    const gpa_input_1 = document.createElement("input");
    const gpa_input_2 = document.createElement("input");
    const gpa_input_3 = document.createElement("input");
    const calc_icon = document.createElement("i"); 
    // Inner Text
    
    bold_year.innerText = "Year " + number + " GPA ";
    bold_year.appendChild(calc_icon);
    b_term1.innerText = seasons[0];
    b_term2.innerText = seasons[1];
    b_term3.innerText = seasons[2];
    // styling
    form_container.classList.add("form-container"+number);
    form_container.style.gridColumn = number; 
    form_container.style.gridRow = 2;
    card.classList.add("card");
    term1_container.classList.add("term-card-1-container");
    term2_container.classList.add("term-card-2-container");
    term3_container.classList.add("term-card-3-container");
    term4_container.classList.add("term-card-4-container");
    h1_fall.classList.add("term-h-1");
    h1_winter.classList.add("term-h-2");
    h1_summer.classList.add("term-h-3");
    h1_year.classList.add("year-number")
    calc_icon.className = "fa-solid fa-calculator" ;
    

    // Putting it all together
    h1_year.appendChild(bold_year);
    card.appendChild(h1_year);
    h1_fall.appendChild(b_term1);
    h1_winter.appendChild(b_term2);
    h1_summer.appendChild(b_term3);
    term1_container.appendChild(h1_fall);
    term1_container.appendChild(gpa_input_1);
    term2_container.appendChild(h1_winter);
    term2_container.appendChild(gpa_input_2);
    term3_container.appendChild(h1_summer);
    term3_container.appendChild(gpa_input_3); 
    card.appendChild(term1_container);
    card.appendChild(term2_container);
    card.appendChild(term3_container);  
    form_container.appendChild(card);
    main_container.appendChild(form_container)
  }
  add_year_button.addEventListener("click", add_year);


// calculate average

//calculate cum_avg