function calculaMedia() {
    //variaveis de recepção dos valores// 
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var nota4 = parseInt(document.getElementById("nota4").value); 
     //variavel de operação - calcule// 
    let notaFinal = (nota1 + nota2 + nota3 + nota4)/4;
  
    //organização de casas decimais//
    notaFinal=notaFinal.toFixed(1);
    //variavel de resultado e condições//
    let result = ""; 
    if (notaFinal >=6) {
        document.getElementById("resposta").innerHTML = "Parabens você foi aprovado! Sua nota final foi: " + notaFinal;
    } else { 
        document.getElementById ("resposta").innerHTML = "Poxa. Voce foi reprovado. Sua nota final foi : " + notaFinal;
    }
    }

