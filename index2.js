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
  console.log(array);
  return array;
 
}//suffle

function getBracket(base) {
  



  renderBrackets(brackets);
}//get brackets

/*
 * Inject our brackets
 */
function renderBrackets(struct) {

  var group = $('<div class="group' + (groupCount + 1) + '" id="b' + bracketCount + '"></div>'),
    grouped = _.groupBy(struct, function (s) { return s.roundNo; });
  for (g = 1; g <= groupCount; g++) {
    var round = $('<div class="r' + g + '"></div>');
    _.each(grouped[g], function (gg) {
      if (gg.bye)
        round.append('<div></div>');
      else
        round.append('<div><div class="bracketbox"><span class="info">' + gg.bracketNo + '</span><span class="teama" contenteditable>' + gg.teamnames[0] + '</span><span class="teamb" contenteditable>' + gg.teamnames[1] + '</span></div></div>');
    });
    group.append(round);
  }
  group.append('<div class="r' + (groupCount + 1) + '"><div class="final"><div class="bracketbox"><span class="teamc" contenteditable>' + _.last(struct).teamnames[_.random(1)] + '</span></div></div></div>');
  $('#brackets').append(group);

  bracketCount++;
  $('html,body').animate({
    scrollTop: $("#b" + (bracketCount - 1)).offset().top
  });
}//RenderBrackets

/*
 * Build our bracket "model"
 */
/*
new Clipboard('.copyBtn', {
  text: function (trigger) {
    return $('#brackets')[0].outerHTML;
  }
});

new Clipboard('.copyBtnCss', {
  text: function (trigger) {
    return $('style')[0].outerHTML + $('#brackets')[0].outerHTML;
  }
});

$('#add').on('click', function () {
  var opts = parseInt(prompt('Bracket size (number of teams):', 32));

  if (!_.isNaN(opts) && opts <= _.last(knownBrackets))
    getBracket(opts);
  else
    alert('The bracket size you specified is not currently supported.');
});
*/
function guardaDados() {

}