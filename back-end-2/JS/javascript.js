function media(){
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let nota3 = document.getElementById("nota3").value
    let nota4 = document.getElementById("nota4").value
    
    let nota1_1 = parseFloat(nota1)
    let nota2_2 = parseFloat(nota2)
    let nota3_3 = parseFloat(nota3)
    let nota4_4 = parseFloat(nota4)

     let operacao = (nota1_1 + nota2_2 + nota3_3 + nota4_4)/4

        document.getElementById('respostas').value = operacao

        if (operacao > 50)
            document.getElementById('result_1').value = "APROVADO"
        else if (operacao < 40)
            document.getElementById('result_1').value = "REPROVADO"
        else
            document.getElementById('result_1').value = "RECUPERAÇÃO" 
}

function media2(){
    let nota1 = document.getElementById("nota11").value
    let nota2 = document.getElementById("nota22").value
    let nota3 = document.getElementById("nota33").value
    let nota4 = document.getElementById("nota44").value
    
    let nota1_1 = parseFloat(nota1)
    let nota2_2 = parseFloat(nota2)
    let nota3_3 = parseFloat(nota3)
    let nota4_4 = parseFloat(nota4)

   let operacao = (nota1_1 + nota2_2 + nota3_3 + nota4_4)/4

    document.getElementById('respostas2').value = operacao

    if (operacao > 50)
        document.getElementById('result_2').value = "APROVADO"
    else if (operacao < 40)
        document.getElementById('result_2').value = "REPROVADO"
    else
        document.getElementById('result_2').value = "RECUPERAÇÃO" 
}

function media3(){
    let nota1 = document.getElementById("nota111").value
    let nota2 = document.getElementById("nota222").value
    let nota3 = document.getElementById("nota333").value
    let nota4 = document.getElementById("nota444").value
    
    let nota1_1 = parseFloat(nota1)
    let nota2_2 = parseFloat(nota2)
    let nota3_3 = parseFloat(nota3)
    let nota4_4 = parseFloat(nota4)

    let operacao = (nota1_1 + nota2_2 + nota3_3 + nota4_4)/4

    document.getElementById('respostas3').value = operacao
    if (operacao > 50)
            document.getElementById('result_3').value = "APROVADO"
    else if (operacao < 40)
        document.getElementById('result_3').value = "REPROVADO"
    else
        document.getElementById('result_3').value = "RECUPERAÇÃO" 
}

function media4(){
    let nota1 = document.getElementById("nota1111").value
    let nota2 = document.getElementById("nota2222").value
    let nota3 = document.getElementById("nota3333").value
    let nota4 = document.getElementById("nota4444").value
    
    let nota1_1 = parseFloat(nota1)
    let nota2_2 = parseFloat(nota2)
    let nota3_3 = parseFloat(nota3)
    let nota4_4 = parseFloat(nota4)

    let operacao = (nota1_1 + nota2_2 + nota3_3 + nota4_4)/4

    document.getElementById('respostas4').value = operacao

    if (operacao > 50)
        document.getElementById('result_4').value = "APROVADO"
    else if (operacao < 40)
        document.getElementById('result_4').value = "REPROVADO"
    else
        document.getElementById('result_4').value = "RECUPERAÇÃO" 


    if (document.getElementById("nota1111").value == "")
        alert("Informações não preenchidas")
    else if (document.getElementById("nota2222").value == "")
        alert("Informações não preenchidas")
    else if (document.getElementById("nota3333").value == "")
        alert("Informações não preenchidas")
    else if (document.getElementById("nota4444").value == "")
        alert("Informações não preenchidas")
}