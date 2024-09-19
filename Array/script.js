//quetsao 01 
let arrays=[1,2,3,4,5,6,];
let soma =0;
for (let i = 0; i < arrays.length; i++) {
    soma += arrays[i];
    
}
console.log(soma);

//questao02
let questao02=[6,7,8,3,4,2,100,55,65];

var maior = 0;
for (let i = 0; i < questao02.length; i++) {
 
   if (maior < questao02[i]){
    maior = questao02[i]
   }
    
}

console.log(maior);
//questao 03
let valor = 3;
let questao03=[3,3,3,3,3,3,1,2,3,5,5,5,5,5,3,3,3,3,3]
contador = 0;
for (let i = 0; i < questao03.length; i++) {
   
    if (valor == questao03[i]) {
        contador ++;
    }
    
}
console.log ("o número "+ valor+" apareceu "+contador+" vezes ");


//questao 04

let questao04=[2,3,4,5,6];
let multiplicacao=1;
for (let i = 0; i < questao04.length; i++) {
    multiplicacao *= questao04[i];
    
}
console.log("multiplicaçao do array: "+multiplicacao);

//questao 05

let pares =[1,2,3,4,6,6];

    for (let i = 0; i < pares.length; i++) {
        if (pares[i]% 2 == 0) {
            console.log(pares[i])
        }
        
    }