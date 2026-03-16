
// CALCULO VOLUME DA PISCINA

function calcularPiscina(){

let comprimento = parseFloat(document.getElementById("comprimento").value);
let largura = parseFloat(document.getElementById("largura").value);
let profMin = parseFloat(document.getElementById("profMin").value);
let profMax = parseFloat(document.getElementById("profMax").value);

if(isNaN(comprimento) || isNaN(largura) || isNaN(profMin) || isNaN(profMax)){

document.getElementById("resultadoPiscina").innerHTML =
"Preencha todos os campos corretamente.";

return;

}

let profMedia = (profMin + profMax) / 2;

let volume = comprimento * largura * profMedia;

let litros = volume * 1000;

let fundo = comprimento * largura;

let lateraisMaiores = comprimento * profMedia * 2;

let lateraisMenores = largura * profMedia * 2;

let areaVinil = fundo + lateraisMaiores + lateraisMenores;

document.getElementById("resultadoPiscina").innerHTML =

"<b>Volume da piscina</b><br>" +
volume.toFixed(2) + " m³<br>" +

litros.toFixed(0) + " litros<br><br>" +

"<b>Metragem aproximada de vinil</b><br>" +
areaVinil.toFixed(2) + " m²";

}



// CALCULO PRODUTOS

function calcularProduto(){

let volume = parseFloat(document.getElementById("volumeProduto").value);
let dosagem = parseFloat(document.getElementById("produto").value);

if(isNaN(volume) || volume <= 0){

document.getElementById("resultadoProduto").innerHTML = "Informe um volume válido.";
return;

}

if(isNaN(dosagem)){

document.getElementById("resultadoProduto").innerHTML = "Selecione um produto.";
return;

}

let quantidadeML = volume * dosagem;

let quantidadeLitros = quantidadeML / 1000;

document.getElementById("resultadoProduto").innerHTML =

"Quantidade necessária:<br>" +
quantidadeML.toFixed(0) + " ml<br>" +
"(" + quantidadeLitros.toFixed(2) + " litros)";

}



// ANALISE DA AGUA

function analisar(){

let volume = parseFloat(document.getElementById("volume").value);
let ph = parseFloat(document.getElementById("ph").value);
let cloro = parseFloat(document.getElementById("cloro").value);
let alcalinidade = parseFloat(document.getElementById("alcalinidade").value);

let resultado = "";

/* validação */

if(isNaN(volume) || isNaN(ph) || isNaN(cloro) || isNaN(alcalinidade)){

document.getElementById("resultado").innerHTML =
"Preencha todos os campos.";

return;

}

/* PH */

if(ph >= 7.4 && ph <= 7.6){

resultado += "<p class='verde'>pH Ideal ✅</p>";

}

else if(ph < 6.8){

let qtd = volume * 40;

resultado += `<p class='vermelho'>pH Muito Baixo ❌ Adicionar ${qtd} g de Barrilha</p>`;

}

else if(ph >= 6.8 && ph <= 7.0){

let qtd = volume * 40;

resultado += `<p class='amarelo'>pH Baixo ⚠ Adicionar ${qtd} g de Barrilha</p>`;

}

else if(ph >= 7.8){

resultado += "<p class='vermelho'>pH Alto ⚠ Adicionar redutor de pH</p>";

}


/* CLORO */

if(cloro <= 1){

let qtd = volume * 4;

resultado += `<p class='amarelo'>Cloro Baixo ⚠ Adicionar ${qtd} g de Cloro</p>`;

}

else if(cloro >= 2 && cloro <= 4){

resultado += "<p class='verde'>Cloro Ideal ✅</p>";

}

else if(cloro > 4){

resultado += "<p class='vermelho'>Cloro Muito Alto ❌ Diluir água</p>";

}


/* ALCALINIDADE */

if(alcalinidade >= 80 && alcalinidade <= 120){

resultado += "<p class='verde'>Alcalinidade Ideal ✅</p>";

}

else if(alcalinidade < 80){

let diferenca = 80 - alcalinidade;

let qtdBicarbonato = diferenca * 1.8 * volume;

resultado += `<p class='amarelo'>Alcalinidade Baixa ⚠ Adicionar ${qtdBicarbonato.toFixed(0)} g de Bicarbonato</p>`;

}

else if(alcalinidade > 120){

resultado += "<p class='vermelho'>Alcalinidade Alta ❌ Ajuste necessário</p>";

}


document.getElementById("resultado").innerHTML = resultado;

}
