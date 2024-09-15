const vermelho = document.querySelector('.vermelho');
const amarelo =document.querySelector('.amarelo');
const verde =document.querySelector('.verde');


function red(){

    vermelho.style.backgroundColor= 'red';

    setTimeout(() => {

        vermelho.style.backgroundColor='darkgrey';
        setTimeout(red, 2000);
        
    }, 1000);
}

red();

function yellow(){

    amarelo.style.backgroundColor= 'darkgrey';

    setTimeout(() => {

        amarelo.style.backgroundColor='yellow';
        setTimeout(yellow, 1000);
        
    }, 2000);
}

yellow();



function green() {
    verde.style.backgroundColor = 'darkgrey';
   
    setTimeout(() => {
        verde.style.backgroundColor = 'green';

    setTimeout(() => {
        verde.style.backgroundColor = 'darkgrey';
        setTimeout(green, 1000); 
    }, 1000);
        
    }, 1000);
    

}

green();



// function todas(){
//     vermelho.style.backgroundColor = 'red';
//     amarelo.style.backgroundColor = 'darkgrey';
//     verde.style.backgroundColor = 'darkgrey';

//     setTimeout(() => {
//         vermelho.style.backgroundColor = 'darkgrey';
//         amarelo.style.backgroundColor = 'darkgrey';
//         verde.style.backgroundColor = 'green';

//         setTimeout(() => {
//             vermelho.style.backgroundColor = 'darkgrey';
//             amarelo.style.backgroundColor = 'yellow';
//             verde.style.backgroundColor = 'darkgrey';
            
//             setTimeout(todas, 1000);

//         }, 1000);


//     }, 1000);
// }
// todas();

