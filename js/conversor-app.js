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

                let num=parseInt(input_conversor[0].value,2);
                
                
                    conversor_ans[0].innerHTML= num;
                
                
                
                // console.log(typeof num);
                // console.log(num);
            });

            
            input_conversor[1].addEventListener("input",function(){

                let num=parseInt(input_conversor[1].value);
                
                function convertToBinary1 (number) {
                    let num = number;
                    let binary = (num % 2).toString();
                    for (; num > 1; ) {
                        num = parseInt(num / 2);
                        binary =  (num % 2) + (binary);
                    }
                    return binary;
                }
                    conversor_ans[1].innerHTML= convertToBinary1(num);
                
            });



            input_conversor[2].addEventListener("input",function(){

                let num=parseInt(input_conversor[2].value);
                
                function decToHex(n){
                    return n.toString(16).toUpperCase()
                }
                
                console.log(decToHex(15));
                conversor_ans[2].innerHTML= decToHex(num);
                
            });
            

            input_conversor[3].addEventListener("input",function(){

                let num=parseInt(input_conversor[3].value);
                
                    
                
                // console.log(decToHex(15));
                conversor_ans[3].innerHTML= num+16;
                
            });

            


            input_conversor[5].addEventListener("input",function(){
                let num=parseInt(input_conversor[5].value);
    
                conversor_ans[5].innerHTML= num/2;
                
                // console.log(typeof num);
                // console.log(num);
            });

            
    // email.addEventListener("change",envioAutomatico);
});

