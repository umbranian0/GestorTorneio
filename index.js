window.onload = boot;

var ID_FORM_CRIAR = "idFormCriar",
    ID_TEXT_TORNEIO = "idTextTorneio",
    ID_NUMBER_QUANTIDADE = "idNumberQuantidade",
    ID_SUBMIT_CRIAR = "idSubmitCriar",
    ID_SECTION_FEEDBACK = "idSectionFeedback",
    ID_SUBMIT_GERAR = "idSubmitGerar";


var oFormCriar, oTextTorneio, oNumberQuantidade, oSubmitGerar,
    oSubmitCriar, oSectionFeedback;

function boot() {
    //associações
    oFormCriar = $(ID_FORM_CRIAR);
    oTextTorneio = $(ID_TEXT_TORNEIO);
    oNumberQuantidade = $(ID_NUMBER_QUANTIDADE);
    oSubmitCriar = $(ID_SUBMIT_CRIAR);
    oSubmitGerar = $(ID_SUBMIT_GERAR);
    oSectionFeedback = $(ID_SECTION_FEEDBACK);

    var aRelevantes = [
        oFormCriar, oTextTorneio, oNumberQuantidade, oSubmitCriar, oSubmitGerar,
        oSectionFeedback
    ];

    var bProblema = !allOK(aRelevantes);

    if (bProblema) {
        alert("Problema(s) com objecto(s)");
        return;
    }

    oSubmitCriar.onclick = comoReagirAoClickNoSubmitTorneio;
    oSubmitGerar.onclick = comoReagirAoClickNoSubmitEquipas;
   
    oFormCriar.onsubmit = comoReagirAoSubmitDaFormTorneio;


}//boot

function guardarNaStorageOsDadosParaSeremUsadosNoutrasPaginas() {
    if (storageDisponivel()) {
        escreverKV("key_nome", oTextTorneio.value);
        escreverKV("key_quantidade", Number(oNumberQuantidade.value));
        for (var i = 0; i < oNumberQuantidade.value; i++) {
            escreverKV("key_arrayEquipas_" + i, document.getElementById("equipaId_" + i).value);

        }
    }
}
function comoReagirAoSubmitDaFormTorneio() {
    alert("Form submetida");
    criarCaixasNomeEquipa();
    oSubmitCriar.disabled = true;
    oTextTorneio.disabled = true;
    oNumberQuantidade.disabled = true;
    oSubmitGerar.hidden = false;    
    return false;
}//comoReagirAoSubmitDaForm

function textoVazioNumInput(oInputText) {
    var FRASE_VAZIA = "";

    var strFraseEscritaNoInputText = oInputText.value;
    strFraseSemEspacosEmBrancoExcessivos =
        strFraseEscritaNoInputText.trim();

    var bFraseEmBranco =
        strFraseSemEspacosEmBrancoExcessivos === FRASE_VAZIA;

    return bFraseEmBranco;
}//textoVazioNumInput

function criarCaixasNomeEquipa() {
    var strRet = '<hr><fieldset><legend>Inserção Equipas: Nome das Equipas</legend><label>Nome da Equipa ' + (1) + ':</label> <input type="text" id="equipaId_0"></input>';
    for (var i = 1; i < oNumberQuantidade.value; i++) {
        strRet += '<br><br><label>Nome da Equipa ' + (i + 1) + ':</label> <input type="text" id="' + "equipaId_" + (i) + '"></input>';
    };
    oSectionFeedback.innerHTML = oSectionFeedback.innerHTML + strRet;
    return false;
}//criarCaixasNomeEquipas

function comoReagirAoClickNoSubmitTorneio() {
    var bNomeAceitavel = !textoVazioNumInput(oTextTorneio);
    var bQuantidadeAceitavel = !textoVazioNumInput(oNumberQuantidade);
    var bDeixoJogar =
        bNomeAceitavel && bQuantidadeAceitavel;
    if (bDeixoJogar) {
        return true;
    }
    else {

        alert("Dados inválidos.");
        return false;
    }
}//comoReagirAoClickNoSubmitTorneio

function comoReagirAoClickNoSubmitEquipas() {
    alert("Entrou");
    guardarNaStorageOsDadosParaSeremUsadosNoutrasPaginas();
    document.location.href = "index2.html";
    return false;
}
//comoReagirAoClickNoSubmitEquipas
