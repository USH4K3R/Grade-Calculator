function addRow(btn){
let section = btn.parentElement;
let table = section.querySelector(".sectionTable");
let row = table.insertRow();
row.innerHTML = `
<td><input type="text" placeholder="Title"></td>
<td><input type="number" class="total"></td>
<td><input type="number" class="obtained"></td>
<td class="result">0</td>
`;
}

function calculate(){
let sections = document.querySelectorAll(".section");
let totalPercentage = 0;

sections.forEach(section=>{
let weightInput = section.querySelector(".sectionWeight");
let weight = parseFloat(weightInput.value);

let totals = section.querySelectorAll(".total");
let obtaineds = section.querySelectorAll(".obtained");
let results = section.querySelectorAll(".result");

let sectionObtained=0;
let sectionTotal=0;

for(let i=0;i<totals.length;i++){
let t = parseFloat(totals[i].value);
let o = parseFloat(obtaineds[i].value);
if(!isNaN(t) && !isNaN(o)){
sectionObtained += o;
sectionTotal += t;
}
}

// calculate section contribution
let sectionResult = sectionTotal>0 ? (sectionObtained/sectionTotal)*weight : 0;

// show marks by section weightage in each row
results.forEach(r=>{
r.innerHTML = sectionTotal>0 ? ((sectionObtained/sectionTotal)*weight).toFixed(2) : 0;
})

totalPercentage += sectionResult;
});

// show total percentage
document.getElementById("percentage").innerHTML = "Total Percentage: "+totalPercentage.toFixed(2)+"%";

// calculate grade & gpa
let grade="";
let gpa=0;

if(totalPercentage>=85){grade="A"; gpa=4.0;}
else if(totalPercentage>=80){grade="A-"; gpa=3.7;}
else if(totalPercentage>=74){grade="B+"; gpa=3.3;}
else if(totalPercentage>=70){grade="B"; gpa=3.0;}
else if(totalPercentage>=65){grade="B-"; gpa=2.7;}
else if(totalPercentage>=61){grade="C+"; gpa=2.3;}
else if(totalPercentage>=58){grade="C"; gpa=2.0;}
else if(totalPercentage>=55){grade="C-"; gpa=1.7;}
else if(totalPercentage>=50){grade="D"; gpa=1.0;}
else{grade="F"; gpa=0;}

document.getElementById("grade").innerHTML="Grade: "+grade;
document.getElementById("gpa").innerHTML="GPA: "+gpa;
}