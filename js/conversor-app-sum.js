const suma_binario=document.querySelector(".suma-binario");
const suma_hexadecimal=document.querySelector(".suma-hexadecimal");


let conversor_1_sum=document.querySelector(".conversor-1-sum");
let conversor_2_sum=document.querySelector(".conversor-2-sum");



let conversor_tutorial_sum=document.querySelectorAll(".conversor-tutorial-sum");


suma_binario.addEventListener("click",()=>{
    conversor_1_sum.classList.remove("conversor-off");
    conversor_1_sum.classList.add("conversor-on");


    conversor_2_sum.classList.remove("conversor-on");
    conversor_2_sum.classList.add("conversor-off");




    // conversor_tutorial[0].setAttribute("id","tutorial");
    // conversor_tutorial[1].removeAttribute("id");
    // conversor_tutorial[2].removeAttribute("id");


});
suma_hexadecimal.addEventListener("click",()=>{
    conversor_1_sum.classList.remove("conversor-on");
    conversor_1_sum.classList.add("conversor-off");


    conversor_2_sum.classList.remove("conversor-off");
    conversor_2_sum.classList.add("conversor-on");




    // conversor_tutorial[0].setAttribute("id","tutorial");
    // conversor_tutorial[1].removeAttribute("id");
    // conversor_tutorial[2].removeAttribute("id");


});








// 0 = suma binario
// 1 = suma hexadecimal



window.addEventListener("load",function(){
    // formulario = document.formulario;
    let input_conversor_sum_n1 = document.querySelectorAll(".input-conversor-sum-n1");
    let input_conversor_sum_n2 = document.querySelectorAll(".input-conversor-sum-n2");
    let conversor_ans_sum = document.querySelectorAll(".conversor-ans-sum");
    
    
    // for(let i=0;i<input_conversor.length;i++){
    //     input_conversor[i].addEventListener("input",function(){
    //         let num=parseInt(input_conversor[i].value);

    //         conversor_ans[i].innerHTML= num*2;
            
    //         // console.log(typeof num);
    //         // console.log(num);
    //     });
    // }    

            input_conversor_sum_n1[0].addEventListener("input",function(){
                let num1=parseInt(input_conversor_sum_n1[0].value,2);
                let num2=parseInt(input_conversor_sum_n2[0].value,2);

 

                conversor_ans_sum[0].innerHTML= (num1+num2).toString(2);
                

            });
        
            input_conversor_sum_n2[0].addEventListener("input",function(){
                let num1=parseInt(input_conversor_sum_n1[0].value,2);
                let num2=parseInt(input_conversor_sum_n2[0].value,2);

 

                conversor_ans_sum[0].innerHTML= (num1+num2).toString(2);
                
                
                
                // console.log(typeof num);
                // console.log(num);
            });
            



            

            input_conversor_sum_n1[1].addEventListener("input",function(){
                let num1=parseInt(input_conversor_sum_n1[1].value);
                let num2=parseInt(input_conversor_sum_n2[1].value);
                
                conversor_ans_sum[1].innerHTML= num1-num2;
                
                
                
                // console.log(typeof num);
                // console.log(num);
            });

            input_conversor_sum_n2[1].addEventListener("input",function(){
                let num1=parseInt(input_conversor_sum_n1[1].value);
                let num2=parseInt(input_conversor_sum_n2[1].value);
                
                conversor_ans_sum[1].innerHTML= num1-num2;
                
                
                
                // console.log(typeof num);
                // console.log(num);
            });

            
    // email.addEventListener("change",envioAutomatico);
});