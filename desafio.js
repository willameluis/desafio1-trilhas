//DESAFIO 1:

function obterMedia() {
    let primeiraNota = parseFloat(prompt("Insira a primeira nota."));
    let segundaNota = parseFloat(prompt("Insira a segunda nota."));
    let terceiraNota = parseFloat(prompt("Insira a terceira nota"));
    let media = (primeiraNota + segundaNota + terceiraNota) / 3;

    alert(`A média de Aline é ${media}.`);
}

//DESAFIO 2:

function obterMaiorMenor() {
    let listaDeNumeros = [15, 8, 90, 75, 102, 6, 2];
    let menor = Math.min(...listaDeNumeros);
    let maior = Math.max(...listaDeNumeros);

    console.log(menor);
    console.log(maior);
}

//DESAFIO 3:

function ordenar() {
    function ordenarFrascos(a, b) {
        return (a - b);
    }
    
    let listaDeFrascos = [12, 5, 23, 17, 8, 14, 3, 19];
    console.log(listaDeFrascos.sort(ordenarFrascos));
}

//DESAFIO 4:

function encontrarPrimos() {
    
    let numeroDeCampos = [23, 16, 11, 8, 19, 14, 5, 21];
    let numerosPrimos = []

    for (n = 0; n <= 7; n++) {
        if (numeroDeCampos[n] % 2 != 0) {
            numerosPrimos.push(numeroDeCampos[n]);
        }
    }

    console.log(numerosPrimos);
}

//DESAFIO 5:

function contarPalavras() {
    let frase = prompt('Insira uma frase');
    let numeroDePalavras = frase.split(' ');
    console.log(numeroDePalavras.length);
}

//DESAFIO 6:

function fatorar() {
    let num = parseFloat(prompt("Insira um número"));
    let resultado = num;

    while (num > 1) {
        num--
        resultado = resultado * num;
    }

    console.log(resultado);
}

//DESAFIO 7:

function somaDePrecos() {
    let preco1 = prompt('Insira o preço do primeiro item');
    let preco2 = prompt('Insira o preço do segunda item');
    let preco3 = prompt('Insira o preço do terceiro item');
    let precoTotal = parseFloat(preco1) + parseFloat(preco2) + parseFloat(preco3);

    alert(`O preço total da compra foi ${precoTotal}`)
}

//DESAFIO 8:

function calculoMulta() {
    let diasAtrasados = parseInt(prompt('Nos diga quantos dias você atrasou'));

    let multa = 0.50 * diasAtrasados;

    alert(`Sua multa é de R$: ${multa}`)
}

//DESAFIO 9:

function vidasRestantes() {
    let ataques = parseInt(prompt('Quantos ataques você levou?'));
    let contador = ataques;
    let vidaTotal = 100;
    let vidaPerdida = 0;

    while (contador > 0) {
        vidaTotal -= 20;
        vidaPerdida += 20;
        contador--
    }

    alert(`Você recebeu ${ataques} ataque(s) e perdeu ${vidaPerdida} pontos de vida.`);

    if (vidaTotal > 0) {
        alert(`Você tem ${vidaTotal} pontos de vida restantes.`);
    } else {
        alert(`Que pena. Você morreu!`);
    }
}

//DESAFIO 10:

function contarLetrasMaiusculas() {
    var frase = prompt("Insira uma frase qualquer.");
    var letrasMaiusculas = frase.toUpperCase();

    frase.split('');
    letrasMaiusculas.split('');

    var quantidadeDeLetras = 0;
    var q = frase.length;

    while (q >= 0) {
        if (frase[q] === letrasMaiusculas[q]) {
            quantidadeDeLetras++;
        }
        q--;
    }

    alert(`A frase tem ${quantidadeDeLetras} letras maiúsuclas.`)
}

//DESAFIO 11;

function calcularIdade() {
	var now = new Date;

    var mes_atual = now.getMonth() + 1;
    var dia_atual = now.getDate();
    var ano_atual = now.getFullYear();

    let ano_niver = parseInt(prompt('Que ano você nasceu?'));
    let mes_niver = parseInt(prompt('Qual número do mês?'));
    let dia_niver = parseInt(prompt('Que dia?'));

    let idade = ano_atual - ano_niver;

    if (mes_atual == mes_niver) {
        if (dia_atual >= dia_niver) {
            alert(`Parabéns! Você tem ${idade} anos!`);
        } else {
            idade--;
            alert(`Logo, logo você terá ${idade + 1}. Por enquanto você tem ${idade}.`);
        }
    } else if (mes_atual > mes_niver) {
        alert(`Você tem ${idade} anos!`);
    } else {
        idade--;
        alert(`Você tem ${idade} anos!`);
    }
}
