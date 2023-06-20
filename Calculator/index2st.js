let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let button4 = document.getElementById('btn4');
let button5 = document.getElementById('btn5');
let button6 = document.getElementById('btn6');
let button7 = document.getElementById('btn7');
let button8 = document.getElementById('btn8');
let button9 = document.getElementById('btn9');
let button0 = document.getElementById('btn0');
let button00 = document.getElementById('btn00');
let buttonPeriod = document.getElementById('btn.');
let buttonBack = document.getElementById('btn←');
let buttonClear = document.getElementById('btnClear');

let buttonAdd = document.getElementById('btn+');
let buttonSubstract = document.getElementById('btn-');
let buttonMultiple = document.getElementById('btn*');
let buttonDivision = document.getElementById('btn/');
let buttonEqual = document.getElementById('btn=');


button1.addEventListener('click', ()=>{
    document.getElementById('result').value += button1.value;
});
button2.addEventListener('click', ()=>{
    document.getElementById('result').value += button2.value;
});
button3.addEventListener('click', ()=>{
    document.getElementById('result').value += button3.value;
});
button4.addEventListener('click', ()=>{
    document.getElementById('result').value += button4.value;
});
button5.addEventListener('click', ()=>{
    document.getElementById('result').value += button5.value;
});
button6.addEventListener('click', ()=>{
    document.getElementById('result').value += button6.value;
});
button7.addEventListener('click', ()=>{
    document.getElementById('result').value += button7.value;
});
button8.addEventListener('click', ()=>{
    document.getElementById('result').value += button8.value;
});
button9.addEventListener('click', ()=>{
    document.getElementById('result').value += button9.value;
});
button0.addEventListener('click', ()=>{
    document.getElementById('result').value += button0.value;
});
button00.addEventListener('click', ()=>{
    document.getElementById('result').value += button00.value;
});
buttonPeriod.addEventListener('click', ()=>{
    document.getElementById('result').value += buttonPeriod.value;
});

buttonClear.addEventListener('click', ()=>{
    document.getElementById('result').value = '';
});
buttonBack.addEventListener('click', ()=> {
    document.getElementById('result').value = document.getElementById('result').value.slice(0,-1);
})

buttonAdd.addEventListener('click', ()=> {
    document.getElementById('result').value += buttonAdd.value;
})
buttonSubstract.addEventListener('click', ()=> {
    document.getElementById('result').value += buttonSubstract.value;
})
buttonMultiple.addEventListener('click', ()=> {
    document.getElementById('result').value += buttonMultiple.value;
})
buttonDivision.addEventListener('click', ()=> {
    document.getElementById('result').value += buttonDivision.value;
})


buttonEqual.addEventListener('click', ()=>{
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
})

