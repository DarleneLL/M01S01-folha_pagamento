const readline = require('readline')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let salarioBruto = 0;

input.question("Digite o salário bruto?", (valorSalario)=>{
    salarioBruto = valorSalario
        input.close()

     // Verifica a faixa de salário e calcula o INSS correspondente
     if (salarioBruto <= 1412.00) {
        valorINSS = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        valorINSS = salarioBruto * 0.09;
    } else if (salarioBruto <= 4000.03) {
        valorINSS = salarioBruto * 0.12;
    } else if (salarioBruto <= 7786.02) {
        valorINSS = salarioBruto * 0.14;
    } else {
        valorINSS = 7786.02 * 0.14;
    }

    const tetoINSS = 908.85; // Teto do INSS

    // Se o valor de INSS calculado ultrapassar o teto do INSS, 
    //utiliza o teto como valor de INSS

    if (valorINSS > tetoINSS) {
        valorINSS = tetoINSS;
    }

    console.log("Valor a ser pago de INSS:", valorINSS.toFixed(2)); // Arredonda para duas casas decimais
})
