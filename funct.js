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

window.addEventListener("load", init, false);

function init(){
    gamesArray.equipas.forEach(element => {
        let div = document.createElement("div");
        let text = document.createTextNode(element);
        div.appendChild(text);   
       
    });
}



function guardaDados() {

}