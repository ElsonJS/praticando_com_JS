

function consultar(){
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let soma = parseFloat(n1)+parseFloat(n2);
   
    if((soma/2) >= 7 && (soma/2) < 10){
        alert('Aluno aprovado!!');
    }else if((soma/2) < 7){
        alert('Aluno reprovado!!');
    }else if((soma/2) == 10){
        alert('Aprovado com distinção!!');
    }else{
        alert('Informação informada erra!!');
    }
}