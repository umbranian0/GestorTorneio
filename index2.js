window.onload = boot;

var ID_SECTION_FEEDBACK = "idSectionFeedback",
  ID_SUBMIT_GERAR_NOVA = "idSubmitGerarNova";


var oSectionFeedback, oSubmitGerarNova, strRet;

//organized games array
var arrayEquipas = [];


function boot() {
  oSectionFeedback = $(ID_SECTION_FEEDBACK);
  oSubmitGerarNova = $(ID_SUBMIT_GERAR_NOVA);

  criaArrayEquipas();

  oSubmitGerarNova.onclick = removerEquipasDerrotadas;

}//boot

function criaArrayEquipas() {
  console.log("Entrei");
  for (var i = 0; i < lerK("key_quantidade"); i++) {
    arrayEquipas[i] = lerK("key_arrayEquipas_" + (i));
  }
  shuffle(arrayEquipas);


}//criaArrayEquipas

function inserirEquipasnaPagina(array) {
  strRet = "<fieldset><legend> Torneio: " + lerK("key_nome") + "</legend>";
  for (var i = 0; i < lerK("key_quantidade") / 2; (i++)) {
    if (array[i] === array[lerK("key_quantidade") - 1]) {
      strRet += "<fieldset><legend><mark> Final do Jogo </mark></legend>" + array[i] + " venceu o Torneio</fieldset>" + "<hr>";
      oSubmitGerarNova.hidden = true;
    }
    else if (array[i] !== array[lerK("key_quantidade") - 1 - i]) {
      strRet += "<fieldset><legend><mark> Jogo " + (i + 1) + "</mark></legend><input type='radio' name='" + i + "' id='idVencedor_" + i + "'>  " + array[i] + " vs. "
        + array[lerK("key_quantidade") - 1 - i] + "  <input type='radio' name='" + i + "' id='idVencedor_" + (lerK("key_quantidade") - 1 - i) + "'></fieldset>" + "<hr>";
    }
    else {
      strRet += "<fieldset><legend><mark> Jogo " + (i + 1) + "</mark></legend><input type='radio' checked='checked' hidden name='" + i + "' id='idVencedor_" + i + "'>" + array[i] + " passa à proxima ronda</fieldset>" + "<hr>";
    }
  };
  strRet += "</fieldset>";
  oSectionFeedback.innerHTML = strRet;

  return false;

}//inserirEquipasnaPagina_Teste

function removerEquipasDerrotadas() {
  let arrayAtualizado = [];
  for (var i = 0, j = 0; i < lerK("key_quantidade"); i++) {
    if (document.getElementById("idVencedor_" + i).checked) {
      arrayAtualizado[j] = arrayEquipas[i];
      j++
    } else {
      console.log("Removeu " + lerK("key_arrayEquipas_" + (i)));
      removerK(lerK("key_arrayEquipas_" + (i)));
    }
  }
  escreverKV("key_quantidade", arrayAtualizado.length);
  arrayEquipas = arrayAtualizado;
  shuffle(arrayEquipas);

}//removerEquipasDerrotadas

function shuffle(array) {
  //variaveis de auxilio
  let j, x, i;
  //ciclo que percorre o array para organizar o codigo
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }//ciclo
  inserirEquipasnaPagina(array);
  arrayEquipas = array;

}//shuffle
