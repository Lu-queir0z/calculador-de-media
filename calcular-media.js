function calcular(){

    let nota1;
    let nota2;
    let nota3;
    let nota4;
    let resultado;

        nota1 = parseFloat(document.querySelector('#nota1').value);
        if (nota1 < 0 || nota1 > 10) {
            alert ('nota 1 invalida')
            document.querySelector('#nota1').value = "";
            document.querySelector('#nota1').focus();
            return false;
        }

        nota2 = parseFloat(document.querySelector('#nota2').value);
        if (nota2 < 0 || nota2 > 10) {
            alert ('nota 2 invalida')
            document.querySelector('#nota2').value = "";
            document.querySelector('#nota2').focus();
            return false;
        }

        nota3 = parseFloat(document.querySelector('#nota3').value);
        if (nota3 < 0 || nota3 > 10) {
            alert ('nota 3 invalida')
            document.querySelector('#nota3').value = "";
            document.querySelector('#nota3').focus();
            return false;
        }

        nota4 = parseFloat(document.querySelector('#nota4').value);
        if (nota4 < 0 || nota4 > 10) {
            alert ('nota 4 invalida')
            document.querySelector('#nota4').value = "";
            document.querySelector('#nota4').focus();
            return false;
        }

        resultado = (nota1 + nota2 + nota3 + nota4) / 4;

        if (resultado >=7 ) {
            resultado = window.alert("APROVADO");
            document.querySelector('#resultado').innerHTML = 'APROVADO'
        }
        else{
            resultado = window.alert("REPROVADO");
            document.querySelector('#resultado').innerHTML = 'REPROVADO'
            
        }

        document.querySelector('#resultado').innerHTML = resultado.toFixed(0);
}

function limpar(){

    document.querySelector('#nota1').value = '';
    document.querySelector('#nota2').value = '';
    document.querySelector('#nota3').value = '';
    document.querySelector('#nota4').value = '';
    document.querySelector('#resultado').innerHTML = '-';
}
