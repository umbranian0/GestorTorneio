window.onload = boot;

var ID_SECTION_FEEDBACK = "idSectionFeedback";

var oSectionFeedback, listOrdered, bracketCount;

//organized games array
var arrayEquipas = [];

function boot() {
  oSectionFeedback = $(ID_SECTION_FEEDBACK);

  bracketCount = 0;

  criaArrayEquipas();

  // getBracket();
}//boot

function criaArrayEquipas() {
  for (var i = 0; i < lerK("key_quantidade"); i++) {
    arrayEquipas[i] = lerK("key_arrayEquipas_" + (i + 1));
  }

  inserirEquipasnaPagina_Teste();

}//criaArrayEquipas

function inserirEquipasnaPagina_Teste() {
  var strRet = "<h2>" + lerK("key_nome") + "</h2>" + "<hr>";
  for (var i = 0; i < lerK("key_quantidade"); i++) {
    strRet += arrayEquipas[i] + "<hr>";
  };
  oSectionFeedback.innerHTML = strRet;

  return false;

}//inserirEquipasnaPagina_Teste

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
  //console.log(array);
  return array;

}//suffle

function getBracket(base) {

  renderBrackets(brackets);
}//get brackets

/*
 * Inject our brackets
 */

function guardaDados() {

}
