var gamesArray = {
  equipas: [
    ["Team 1", "Team 2"], /* first matchup */
    ["Team 3", "Team 4"]
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


window.addEventListener("load", boot, false);

function boot() {
  bracketCount = 0;
   shuffle();

 // getBracket();
}//boot

function shuffle(){
  gamesArray.equipas.forEach(element => {
    let randomNumb = Math.floor(Math.random() * (5 - 1 +1) + 1);
    console.log(randomNumb);
  });
  
}//suffle

function getBracket(base) {

  var closest = _.find(knownBrackets, function (k) { return k >= base; }),
    byes = closest - base;

  if (byes > 0) base = closest;

  var brackets = [],
    round = 1,
    baseT = base / 2,
    baseC = base / 2,
    teamMark = 0,
    nextInc = base / 2;

  for (i = 1; i <= (base - 1); i++) {
    var baseR = i / baseT,
      isBye = false;

    if (byes > 0 && (i % 2 != 0 || byes >= (baseT - i))) {
      isBye = true;
      byes--;
    }

    var last = _.map(_.filter(brackets, function (b) { return b.nextGame == i; }), function (b) { return { game: b.bracketNo, teams: b.teamnames }; });

    brackets.push({
      lastGames: round == 1 ? null : [last[0].game, last[1].game],
      nextGame: nextInc + i > base - 1 ? null : nextInc + i,
      teamnames: round == 1 ? [exampleTeams[teamMark], exampleTeams[teamMark + 1]] : [last[0].teams[_.random(1)], last[1].teams[_.random(1)]],
      bracketNo: i,
      roundNo: round,
      bye: isBye
    });
    teamMark += 2;
    if (i % 2 != 0) nextInc--;
    while (baseR >= 1) {
      round++;
      baseC /= 2;
      baseT = baseT + baseC;
      baseR = i / baseT;
    }
  }

  renderBrackets(brackets);
}//get brackets

/*
 * Inject our brackets
 */
function renderBrackets(struct) {
  var groupCount = _.uniq(_.map(struct, function (s) { return s.roundNo; })).length;

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