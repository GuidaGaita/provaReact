//questao 01
function palindromoCheck(palavra) {
    let inverso = "";
    for (let i = palavra.length -1; i >=0 ; i--) {
        inverso += palavra[i];
        
    }
    if (inverso == palavra) {
        console.log("a palavra ", palavra, "é um palindromo");
    } else {
        console.log("a palavra ", palavra, "NAO é um palindromo");
    }
}

palindromoCheck("Cleitinho");


//questao 02
//essa e foda 

//questao 03
let palavra = [1,2,3,4,6];
let contadorCrescente = 0 ;
let contadorDecrescente = 0;

for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] > palavra[i - 1]) {
          contadorCrescente ++;
        }
        if (palavra[i] < palavra[i - 1]) {
            contadorDecrescente ++;
          }
}

    if (contadorCrescente == palavra.length -1) {
        console.log("1 (valores crescentes)");
        
    } else if (contadorDecrescente == palavra.length -1) {
        console.log("2 (valores decrescentes)");
        
    } else {
        console.log("3 (valores aleatorios ou array com apenas 1 valor)");
    }

//questao 04
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }    
    
}

//questao 05

// <!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Exercício de Manipulação de Texto e Estilo</title>
// </head>
// <body>
//     <h1>Manipulação de Texto e Estilo</h1>
   
//     <p id="meuTexto">Texto Original</p>
   
//     <button onclick="mudarTexto()" id="mudarTexto">Mudar Texto</button>
//     <button onclick="mudarCor()" id="mudarCor">Mudar Cor</button>
//     <button onclick="limparTexto()" id="limparTexto">Limpar Texto</button>
   
//     <script>
//         // Sua lógica em JavaScript será inserida aqui
//         const meuTexto = document.getElementById('meuTexto');
//         mudarCor.addEventListener('click', function() {
//             meuTexto.style.color='red';
//     });
//     mudarTexto.addEventListener('click', function() {
//             meuTexto.innerHTML = "Salve monitores <3";
//     });
//     limparTexto.addEventListener('click', function() {
//             meuTexto.innerHTML = " ";
//     });



//     </script>
// </body>
// </html>

//questao 05


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Aprovados</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div id="infosUsuario">
//         <form action=""method="post">
//             <label for="nome">Digite o nome do Aluno</label><br>
//            <input type="text" id="nome"name="nome" required><br>
//           <label for="av">Digite a nota do aluno</label><br>
//           <input type="number" id="av"name="av" required><br>
//           <button type="Submit" id="botao" value="Confirmar">Confirmar</button>
//         </form>
//     </div>
//     <div id="resultado">
//         <div id="nota" class="aprovado">
//             <h2>aprovado</h2>
//             <h4 id="a1"></h4>
//             <h4 id="a2"></h4>
//         </div>
//         <div id="nota" class="recuperacao">
//             <h2>recuperacao</h2>
//             <h4 id="r1"></h4>
//             <h4 id="r2"></h4>
//         </div>
//         <div id="nota" class="reprovado">
//             <h2>reprovado</h2>
//             <h4 id="rep1"></h4>
//             <h4 id="rep2"></h4>
//         </div>

//     </div>


//     <style>
//         * {
//     margin: 0;
//     padding: 0;
// }
// body {
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// }
// #infosUsuario{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 450px;
//     height: 200px;
//     background-color: green;
//     margin-bottom: 20px;
// }
// #resultado {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     align-items: center;
//     width: 450px;
//     height: 300px;
//     background-color: blue;
// }

// #nota{
//     height: 270px;
//     width: 135px;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: top;
//     background-color: brown;

// }
//     </style>
//     <script>
//     const nome =  document.getElementById("nome");
//     const nota =  document.getElementById("av");
//     const a1 =  document.getElementById("a1");
//     const a2 =  document.getElementById("a2");
//     const r1 =  document.getElementById("r1");
//     const r2 =  document.getElementById("r2");
//     const rep1 =  document.getElementById("rep1");
//     const rep2 =  document.getElementById("rep2");
//     const botao =  document.getElementById("botao");

   
//     botao.addEventListener("click",()=>{
    

//         let n1 = nome.value;
//     let n2 = nota.value;
//     if (n2 >= 7) {
//         a1.innerHTML = n1.value;
//     }else if (n2 < 5) {
//         rep1.innerHTML = n1.value;
//     } else{
//         r1.innerHTML = n1.value;
//     }
//     })

    



   
//     </script>
// </body>
// </html>

