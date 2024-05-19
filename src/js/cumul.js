// constants and variables
let number = 0;

let listofyeargpa = new Array()
const cumulative_gpa = 0;
const regex = "/(\d+)/)[0]"
const seasons = ["Fall GPA", "Winter GPA", "Spring/Summer GPA","Calculate"]
const main_container = document.querySelector(".container");
const add_year_button = document.querySelector(".add_button");
const remove_year_button = document.querySelector(".remove_button");
const cumm_gpa = document.querySelector(".cum_gpa");

//add year


function add_year(e) {
    console.log("here")
    e.preventDefault();
    // take input from inputs 
  
    number+=1;
    //p
    const year_gpa = document.createElement('p');
    year_gpa.innerText = 0;
    year_gpa.classList.add("yeargpa-" + number );
    listofyeargpa.push(year_gpa);

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
    bold_year.append(":");
    bold_year.appendChild(year_gpa)
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
    gpa_input_1.classList.add("gpa_input-1");
    gpa_input_2.classList.add("gpa_input-2");
    gpa_input_3.classList.add("gpa_input-3");
    gpa_input_1.id = number + "-input-1";
    gpa_input_2.id = number + "-input-2";
    gpa_input_3.id = number + "-input-3";

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

    gpa_input_1.addEventListener("change",year_avg)
    gpa_input_2.addEventListener("change",year_avg)
    gpa_input_3.addEventListener("change",year_avg)
    year_gpa.addEventListener("change",cum_gpa);
  }



// remove year
 function remove_year(e){
  e.preventDefault();
  let form_container = document.querySelector(".form-container"+number)
  main_container.removeChild(form_container)
  number-=1;
  listofyeargpa.pop()
  cum_gpa();
 }


 function year_avg(e){
  e.preventDefault();
  let allinputs = new Array()
  let index = this.id.match(/(\d+)/);
  num = parseInt(index);
  allinputs.push(document.getElementById(num + "-input-1").value);
  allinputs.push(document.getElementById(num + "-input-2").value);
  allinputs.push(document.getElementById(num + "-input-3").value);
  let sum = 0;
  let numofnonzeroes = 0;
  console.log(sum);
  for (const iterator of allinputs) {
    if(iterator != 0)
      {
        sum += parseFloat(iterator);
        numofnonzeroes ++;
      }
  }
  listofyeargpa[num-1].innerText =  Math.round((sum/numofnonzeroes)* 100) / 100 ;   
  console.log(listofyeargpa)
  cum_gpa();
 }


  //
  function cum_gpa(){
    let sum =  0;
    for (const iterator of listofyeargpa) {
      sum += parseFloat(iterator.innerText)
    }
    cumm_gpa.innerText =  Math.round( (sum/listofyeargpa.length) * 100) / 100 ;

  }


   //event listeners
   add_year_button.addEventListener("click", add_year);
   remove_year_button.addEventListener("click", remove_year)