const vermelho = document.getElementById('vermelho');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');

const primeiro = document.getElementById('primeiro');

document.addEventListener('DOMContentLoaded', function() {
    function elevador(string) {
        let pos = 0;
        switch (string) {
            case 1: //terreo
                pos = 0;
                break;
            case 2: //primeiro andar
                pos = 120;
                break;
            case 3: //segundo andar
                pos = 240;
               
                break;
        }
        primeiro.style.bottom = pos + 'px';
    }

    vermelho.addEventListener('click', function() {
        elevador(3);
    });

    amarelo.addEventListener('click', function() {
        elevador(2);
    });

    verde.addEventListener('click', function() {
        elevador(1);
    });
});
