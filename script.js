
let inputRuze = document.getElementById("ruze");
let inputLJiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");

let btnIzracunaj = document.getElementById("izracunaj");

let spanSlikecveca1 = document.getElementById("slikecveca1");
let spanSlikecveca2 = document.getElementById("slikecveca2");
let spanSlikecveca3 = document.getElementById("slikecveca3");

let spanPoklon1 = document.getElementById("poklon1");
let spanPoklon2 = document.getElementById("poklon2");
let spanPoklon3 = document.getElementById("poklon3");

btnIzracunaj.addEventListener("click", () =>{
 let value = inputRuze.value;
 let img = '<img src="1111.jpg">';
 for(let i = 0; i <= value.length; i++) {
     if(i > 0) {
         i == value;
         spanSlikecveca1.innerHTML = img.repeat(value) + "<br>";
     }
 }

});

btnIzracunaj.addEventListener("click", () =>{
    let value = inputLJiljani.value;
    let img = '<img src="list1.jpg">';
    for(let i = 0; i <= value.length; i++) {
        if(i > 0) {
            i == value;
            spanSlikecveca2.innerHTML = img.repeat(value) + "<br>";
        }
    }
   
   });
    
   btnIzracunaj.addEventListener("click", () =>{
    let value = inputGerberi.value;
    let img = '<img src="555.jpg">';
    for(let i = 0; i <= value.length; i++) {
        if(i > 0) {
            i == value;
            spanSlikecveca3.innerHTML = img.repeat(value) + "<br>";
        }
    }
   
   });


let spanbezpopusta = document.getElementById("bezpopusta");
let spansapopustom = document.getElementById("sapopustom");

btnIzracunaj.addEventListener("click", ()=>{

    let value1 = inputRuze.value *150;
    let value2 = inputLJiljani.value *120;
    let value3 = inputGerberi.value *70;

    let ukupnoCvece = value1 + value2 + value3; 

    let suma = 0;
    let checked1 = document.querySelector("input[value='bombonjera']:checked");
    if(checked1 = document.querySelector("input[value='bombonjera']:checked")){
        suma = 500;
        spanPoklon1.innerHTML = "+ bombonjera" + "<br>";
    }

    let suma1 = 0;
    let checked2 = document.querySelector("input[value='cokolada']:checked");
    if(checked2 = document.querySelector("input[value='cokolada']:checked")){
        suma1 = 500;
        spanPoklon2.innerHTML = "+ cokolada" + "<br>";
    }

    let suma2 = 0;
    let checked3 = document.querySelector("input[value='sampanjac']:checked");
    if(checked3 = document.querySelector("input[value='sampanjac']:checked")){       
        suma2 = 500;
        spanPoklon3.innerHTML = "+ sampanjac" + "<br>";
    }

    let ukupnobezpopusta = ukupnoCvece + suma + suma1 + suma2;
   
    let radioChecked1 = document.querySelector("input[value='kes']:checked");
    let radioChecked2 = document.querySelector("input[value='kartica']:checked");
    if(radioChecked1 = document.querySelector("input[value='kes']:checked")){
        spanbezpopusta.innerHTML = `${ukupnobezpopusta} din`;
    }
    else if(radioChecked2 = document.querySelector("input[value='kartica']:checked")){
        if(ukupnobezpopusta > 2000){
            let cenaiPopust = (ukupnobezpopusta - (ukupnobezpopusta * 0.1));
            spansapopustom.innerHTML = `${cenaiPopust} din`;
            spanbezpopusta.innerHTML = `${ukupnobezpopusta} din`;
            }
            else{
            spanbezpopusta.innerHTML = `${ukupnobezpopusta} din`;
            }
    }

});

