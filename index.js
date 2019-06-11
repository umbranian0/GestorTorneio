window.onload = boot;

var ID_FORM_CRIAR = "idFormCriar",
    ID_TEXT_TORNEIO = "idTextTorneio",
    ID_NUMBER_QUANTIDADE = "idNumberQuantidade",
    ID_SUBMIT_CRIAR = "idSubmitCriar",
    ID_SECTION_FEEDBACK = "idSectionFeedback",
    ID_SUBMIT_GERAR = "idSubmitGerar";
    

var oFormCriar, oTextTorneio, oNumberQuantidade, oSubmitGerar,
    oSubmitCriar, oSectionFeedback;

var arrayEquipas = [];

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

    /*
    atenção que onkeyup, com esta abordagem,
    permitiria a entrada de teclas indesejadas,
    pois keyup é um evento necessariamente posterior
    a keydown, que - não sendo interceptado -
    já teria sido permitido.
     */
    //comportamentos => +sobre event handlers

    //testes();

    //2019-05-20
    //um dos padrões JS +usados no mundo inteiro

    //antes de deixar submeter os dados, o event handler
    //indicado abaixo, vai "policiar" os dados e decidir
    //se permite avançar-se para o submit (return true)
    //ou se NÃO permite avançar-se (return false)
    oSubmitCriar.onclick = comoReagirAoClickNoSubmit;
    oSubmitGerar.onclick = comoReagirAoClickNoSubmit2;
    //aqui indicamos o que efetivamente ocorre perante
    //submit
    //mas isto pode nunca acontecer se o onclick para o
    //"botão" de submit rejeitar
    oFormCriar.onsubmit = comoReagirAoSubmitDaForm;

    
}//boot

function guardarNaStorageOsDadosParaSeremUsadosNoutrasPaginas() {
    if (storageDisponivel()) {
        escreverKV("key_nome", oTextTorneio.value);
        escreverKV("key_quantidade", Number(oNumberQuantidade));
       //todo
        escreverKV("key_arrayEquipas", arrayEquipas);
    }
}
function comoReagirAoSubmitDaForm() {
    alert("Form submetida");
    guardarNaStorageOsDadosParaSeremUsadosNoutrasPaginas();
    criarCaixasNomeEquipa();
    oSubmitCriar.disabled = true;
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

    var strRet = '<hr><fieldset><legend>Inserção Equipas: Nome das Equipas</legend><label>Nome da Equipa ' + (1) + ':</label> <input type="text" id="equipaId_1"></input>';
    for (var i = 1; i < oNumberQuantidade.value; i++) {
        strRet += '<br><br><label>Nome da Equipa ' + (i + 1) + ':</label> <input type="text" id="'+"equipaId_"+(i+1)+'"></input>';
    };
    oSectionFeedback.innerHTML = oSectionFeedback.innerHTML + strRet;
    return false;
}//criarCaixasNomeEquipas

function criaArrayEquipas(){
    for(let i = 1 ; i <= oNumberQuantidade ; i ++){
        arrayEquipas[i] = document.getElementById("equipaId_"+i);
    alert(arrayEquipas);
    }
}


function comoReagirAoClickNoSubmit() {
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
}//comoReagirAoClickNoSubmit

function comoReagirAoClickNoSubmit2() {
   
    criaArrayEquipas();
    guardarNaStorageOsDadosParaSeremUsadosNoutrasPaginas();
    document.location.href = "index2.html";

    return false;
}
//comoReagirAoClickNoSubmit

