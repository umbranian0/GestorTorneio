window.onload = boot;

var iMin, iMax, strNome, bRelogio, bBatota=true;
var idDoRelogio;

const
    ID_SECTION_RELOGIO = "idSectionRelogio",
    ID_FORM_JOGAR = "idFormJogar",
    ID_NUMBER_PALPITE = "idNumberPalpite",
    ID_SUBMIT = "idSubmit",
    ID_SECTION_FEEDBACK = "idSectionFeedback";

var oSectionRelogio, oFormJogar,
    oNumberPalpite, oSubmit,
    oSectionFeedback;

var oJogo; //este objeto, para já undefined, irá representar o jogo em curso

function boot(){
    receberDadosRelevantes();

    var relevantes = [
        iMin, iMax, //influenciam a dificuldade
        strNome, bRelogio, //cosmética
        bBatota
    ];
    //document.write (relevantes);
    //document.write(relevantes);

    oSectionRelogio = $(ID_SECTION_RELOGIO);
    oFormJogar = $(ID_FORM_JOGAR);
    oNumberPalpite = $(ID_NUMBER_PALPITE);
    oSubmit = $(ID_SUBMIT);
    oSectionFeedback = $(ID_SECTION_FEEDBACK);

    var oRelevantes = [
        oSectionRelogio, oFormJogar,
        oNumberPalpite, oSubmit,
        oSectionFeedback
    ];

    var bAllOK = allOK(oRelevantes);

    if (!bAllOK){
        alert ("Há objeto(s) null. Jogo abortado.");
        return;
    }//if

    oJogo = new Jogo(
        //argumentos não orgânicos, relacionados com a interface
        oSectionFeedback,
        oSectionRelogio,

        //argumentos orgânicos, pois determinam o comportamento
        iMin,
        iMax,
        strNome,
        bRelogio,
        bBatota
    );

    //comportamentos
    oFormJogar.onsubmit = reacaoAoPalpiteJogador;
    oSubmit.onclick = verificarSeDeixamosJogar;

}//boot

function reacaoAoPalpiteJogador(){
    //há-de ser pedir ao objeto oJogo uma reação à jogada
    /*
    var strResposta = oJogo.jogar(nPalpite);
    oSectionFeedback.innerHTML = strResposta;
    oSectionRelogio.innerHTML = oJogo.dizMeQuantosSegundosJaPassaram();

    oJogo.jogar(
        nPalpite,
        oSectionFe edback,
        oSectionRelogio
    );
    */
    var nPalpite = Number(oNumberPalpite.value);

    oJogo.jogar(
        nPalpite
    );

    //to gray the submit "button"
    if (oJogo.estado===oJogo.ESTADO_TERMINOU){oSubmit.disabled=true;}

    return false; //aborta a propagação do evento, evitar o "bubble-up" do evento
}//reacaoAoPalpiteJogador

function verificarSeDeixamosJogar(){
    return true; //deixar sempre jogar
}//verificarSeDeixamosJogar

function receberDadosRelevantes(){
    iMin = Number(lerK("key_min"));
    iMax = Number(lerK("key_max"));
    strNome = lerK("key_nome");
    bRelogio =
        lerK("key_relogio")==="1" ?
            true : false ;
}//receberDadosRelevantes