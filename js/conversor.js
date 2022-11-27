const binario_decimal=document.querySelector(".binario-decimal");
const decimal_hexadecimal=document.querySelector(".decimal-hexadecimal");
const hexadecimal_binario=document.querySelector(".hexadecimal-binario");

let conversor_1=document.querySelector(".conversor-1");
let conversor_2=document.querySelector(".conversor-2");
let conversor_3=document.querySelector(".conversor-3");

let conversor_tutorial=document.querySelectorAll(".conversor-tutorial");


binario_decimal.addEventListener("click",()=>{
    conversor_1.classList.remove("conversor-off");
    conversor_1.classList.add("conversor-on");


    conversor_2.classList.remove("conversor-on");
    conversor_2.classList.add("conversor-off");

    conversor_3.classList.remove("conversor-on");
    conversor_3.classList.add("conversor-off");


    conversor_tutorial[0].setAttribute("id","tutorial");
    conversor_tutorial[1].removeAttribute("id");
    conversor_tutorial[2].removeAttribute("id");


});
decimal_hexadecimal.addEventListener("click",()=>{
    conversor_1.classList.remove("conversor-on");
    conversor_1.classList.add("conversor-off");


    conversor_2.classList.remove("conversor-off");
    conversor_2.classList.add("conversor-on");

    conversor_3.classList.remove("conversor-on");
    conversor_3.classList.add("conversor-off");


    conversor_tutorial[0].removeAttribute("id");
    conversor_tutorial[1].setAttribute("id","tutorial");
    conversor_tutorial[2].removeAttribute("id");

});
hexadecimal_binario.addEventListener("click",()=>{
    conversor_1.classList.remove("conversor-on");
    conversor_1.classList.add("conversor-off");


    conversor_2.classList.remove("conversor-on");
    conversor_2.classList.add("conversor-off");

    conversor_3.classList.remove("conversor-off");
    conversor_3.classList.add("conversor-on");


    conversor_tutorial[0].removeAttribute("id");
    conversor_tutorial[1].removeAttribute("id");
    conversor_tutorial[2].setAttribute("id","tutorial");

});








const op1=document.querySelectorAll(".op1");
const op2=document.querySelectorAll(".op2");

let conversor_op1=document.querySelectorAll(".conversor-op1");
let conversor_op2=document.querySelectorAll(".conversor-op2");



for(let i=0;i<3;i++){
    op1[i].addEventListener("click",()=>{
        conversor_op1[i].classList.remove("conversor-off");
        conversor_op1[i].classList.add("conversor-on");
    
        conversor_op2[i].classList.remove("conversor-on");
        conversor_op2[i].classList.add("conversor-off");
    
        console.log("op1");
    });

    op2[i].addEventListener("click",()=>{
        conversor_op1[i].classList.remove("conversor-on");
        conversor_op1[i].classList.add("conversor-off");

        conversor_op2[i].classList.remove("conversor-off");
        conversor_op2[i].classList.add("conversor-on");

        console.log("op2");
    });
}




