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
    
    



            input_conversor[0].addEventListener("input",function(){

                let num=parseInt(input_conversor[0].value,2);
                
                
                    conversor_ans[0].innerHTML= num;
                
                
            });

            
            input_conversor[1].addEventListener("input",function(){

                let num=parseInt(input_conversor[1].value);
                

                    conversor_ans[1].innerHTML= decToBin(num);
                
            });



            input_conversor[2].addEventListener("input",function(){

                let num=parseInt(input_conversor[2].value);
                
                
                
                console.log(decToHex(15));
                conversor_ans[2].innerHTML= decToHex(num);
                
            });
            

            input_conversor[3].addEventListener("input",function(){

                let num=input_conversor[3].value;
                

                conversor_ans[3].innerHTML= hexaToDec(num);
                
            });
            
               
               
               

               
            input_conversor[4].addEventListener("input",function(){

                let num=input_conversor[4].value;
                

                conversor_ans[4].innerHTML= hexaToBin(num);
                
            });
               
               
               
               
            


            input_conversor[5].addEventListener("input",function(){
                let num=parseInt(input_conversor[5].value);
    
                conversor_ans[5].innerHTML= binToHexa(num,2,16);
                

            });

            

});

// 1
function decToBin (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return binary;
}
// 2
function decToHex(n){
    return n.toString(16).toUpperCase()
}

// 3
function hexaToDec(n){
    let dec2 = parseInt(n,16);
    //console.log("Convertido a hexadecimal es: " +dec2);
   return dec2;
   }

// 4
function hexaToBin(hex){
    return (parseInt(hex, 16).toString(2)).padStart(4);
}



function binToHexa(value,sourceBase,targetBase){
    return Number(parseInt(value,sourceBase)).toString(targetBase).toUpperCase();
}