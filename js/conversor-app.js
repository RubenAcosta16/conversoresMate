/* 
0=binario a decimal
1=decimal a binario

2=decimal a hexadecimal
3=hexadecimal a decimal

4=hexadecimal a binario
5=binario a hexadecimal
*/

window.addEventListener("load",function(){
    // formulario = document.formulario;
    let input_conversor = document.querySelectorAll(".input-conversor");
    let conversor_ans = document.querySelectorAll(".conversor-ans");
    
    
    // for(let i=0;i<input_conversor.length;i++){
    //     input_conversor[i].addEventListener("input",function(){
    //         let num=parseInt(input_conversor[i].value);

    //         conversor_ans[i].innerHTML= num*2;
            
    //         // console.log(typeof num);
    //         // console.log(num);
    //     });
    // }


    input_conversor[0].addEventListener("input",function(){
                let num=parseInt(input_conversor[0].value);
                
                    conversor_ans[0].innerHTML= num*2;
                
                
                
                // console.log(typeof num);
                // console.log(num);
            });
    
            input_conversor[5].addEventListener("input",function(){
                let num=parseInt(input_conversor[5].value);
    
                conversor_ans[5].innerHTML= num/2;
                
                // console.log(typeof num);
                // console.log(num);
            });

            
    // email.addEventListener("change",envioAutomatico);
});