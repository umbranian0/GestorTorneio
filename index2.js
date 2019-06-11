var gamesArray = {
  equipas: [
    ["Team 1"], ["Team 2"], /* first matchup */
    ["Team 3"], ["Team 4"]
  ]  /* second matchup */,
  espacoResultados:             // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [                   // First round in this bracket
        [1, 2],           // Team 1 vs Team 2
        [3, 4]            // Team 3 vs Team 4
      ],
      [                   // Second (final) round in single elimination bracket
        [5, 6],           // Match for first place
        [7, 8]            // Match for 3rd place
      ]
    ]
};

var knownBrackets = [2, 4, 8, 16, 32];// brackets with "perfect" proportions (full fields, no byes)

var exampleTeams;
var bracketCount;

//organized games array
var listOrdered ;

window.addEventListener("load", boot, false);

function boot() {
  bracketCount = 0;
  
  gamesArray.equipas = lerK("key_arrayEquipas");

  console.log(gamesArray.equipas);
  
  listOrdered = shuffle(gamesArray.equipas);


 // getBracket();
}//boot

function shuffle(array){
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