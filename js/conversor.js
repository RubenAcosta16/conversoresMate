const binario_decimal=document.querySelector(".binario-decimal");
const decimal_hexadecimal=document.querySelector(".decimal-hexadecimal");
const hexadecimal_binario=document.querySelector(".hexadecimal-binario");

let conversor_1=document.querySelector(".conversor-1");
let conversor_2=document.querySelector(".conversor-2");
let conversor_3=document.querySelector(".conversor-3");




binario_decimal.addEventListener("click",()=>{
    conversor_1.classList.remove("conversor-off");
    conversor_1.classList.add("conversor-on");


    conversor_2.classList.remove("conversor-on");
    conversor_2.classList.add("conversor-off");

    conversor_3.classList.remove("conversor-on");
    conversor_3.classList.add("conversor-off");


});
decimal_hexadecimal.addEventListener("click",()=>{
    conversor_1.classList.remove("conversor-on");
    conversor_1.classList.add("conversor-off");


    conversor_2.classList.remove("conversor-off");
    conversor_2.classList.add("conversor-on");

    conversor_3.classList.remove("conversor-on");
    conversor_3.classList.add("conversor-off");


});
hexadecimal_binario.addEventListener("click",()=>{
    conversor_1.classList.remove("conversor-on");
    conversor_1.classList.add("conversor-off");


    conversor_2.classList.remove("conversor-on");
    conversor_2.classList.add("conversor-off");

    conversor_3.classList.remove("conversor-off");
    conversor_3.classList.add("conversor-on");


});








const op1=document.querySelectorAll(".op1");
const op2=document.querySelectorAll(".op2");

let conversor_op1=document.querySelectorAll(".conversor-op1");
let conversor_op2=document.querySelectorAll(".conversor-op2");



op1[0].addEventListener("click",()=>{
    conversor_op1[0].classList.remove("conversor-off");
    conversor_op1[0].classList.add("conversor-on");

    conversor_op2[0].classList.remove("conversor-on");
    conversor_op2[0].classList.add("conversor-off");

    console.log("op1");
});

op2[0].addEventListener("click",()=>{
    conversor_op1[0].classList.remove("conversor-on");
    conversor_op1[0].classList.add("conversor-off");

    conversor_op2[0].classList.remove("conversor-off");
    conversor_op2[0].classList.add("conversor-on");

    console.log("op2");
});




op1[1].addEventListener("click",()=>{
    conversor_op1[1].classList.remove("conversor-off");
    conversor_op1[1].classList.add("conversor-on");

    conversor_op2[1].classList.remove("conversor-on");
    conversor_op2[1].classList.add("conversor-off");

    console.log("op1");
});

op2[1].addEventListener("click",()=>{
    conversor_op1[1].classList.remove("conversor-on");
    conversor_op1[1].classList.add("conversor-off");

    conversor_op2[1].classList.remove("conversor-off");
    conversor_op2[1].classList.add("conversor-on");

    console.log("op2");
});



op1[2].addEventListener("click",()=>{
    conversor_op1[2].classList.remove("conversor-off");
    conversor_op1[2].classList.add("conversor-on");

    conversor_op2[2].classList.remove("conversor-on");
    conversor_op2[2].classList.add("conversor-off");

    console.log("op1");
});

op2[2].addEventListener("click",()=>{
    conversor_op1[2].classList.remove("conversor-on");
    conversor_op1[2].classList.add("conversor-off");

    conversor_op2[2].classList.remove("conversor-off");
    conversor_op2[2].classList.add("conversor-on");

    console.log("op2");
});