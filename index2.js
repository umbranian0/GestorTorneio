window.onload = boot;

var ID_SECTION_FEEDBACK = "idSectionFeedback";

var gamesArray = { equipas: [] };


var oSectionFeedback, listOrdered, bracketCount;

//organized games array
var arrayEquipas = [];

window.addEventListener("load", boot, false);

function boot() {
  oSectionFeedback = $(ID_SECTION_FEEDBACK);

  bracketCount = 0;

  gamesArray.equipas =  criaArrayEquipas();

  listOrdered = shuffle(gamesArray.equipas);

  console.log(arrayEquipas);


  inserirEquipasnaPagina_Teste();

  // getBracket();
}//boot

function criaArrayEquipas() {
  console.log(lerK("key_arrayEquipas_1"));
  for (var i = 1; i <= lerK("key_quantidade"); i++) {
    arrayEquipas[i] = lerK("key_arrayEquipas_" + i);
  }
return arrayEquipas;

}//criaArrayEquipas

function inserirEquipasnaPagina_Teste() {
  var strRet = arrayEquipas[0] + "<br>";
  for (var i = 0; i <= lerK("key_quantidade"); i++) {

    strRet += arrayEquipas[i + 1] + "<br>";

  };
  oSectionFeedback.innerHTML = oSectionFeedback.innerHTML + strRet;

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
