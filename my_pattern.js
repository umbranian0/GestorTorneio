//my_pattern.js

function allOK(
    pCol
){
    /*
    em JS os arrays têm indexação numérica
    baseada em zero
     */
    var iQuantosElementosTemCol = pCol.length;

    /*
    queremos ter uma solução que se passeie
    por todos os elementos da coleção recebida
    e verifique se todos, sem exceção, têm
    memória associada. Se algum elemento da
    coleção NÃO tiver memória associada, nem
    tudo está bem, e a nossa function "allOK"
    deverá retornar false. Caso contrário,
    deverá retornar true.

    Isto obriga-nos a saber passear; a sabermos
    iterar por todos os elementos.
    Queremos hoje estudar as construções para
    este passeios. Chamam-se construções para
    ciclos. Vamos ver os ciclos "for"
    e "while"
     */

    var iElementoDePartida = 0;
    var iElementoEmQueEstou = iElementoDePartida;
    /*
    enquanto o elemento em que estou é
    anterior à quantidade de elementos
    disponíveis, há coisas a fazer
     */
    var bRet = true;
    var iIndexDoUltimoElemento = iQuantosElementosTemCol-1;
    //while (iElementoEmQueEstou<iQuantosElementosTemCol)
    while (iElementoEmQueEstou<=iIndexDoUltimoElemento)
    {
        var elementoCorrente = pCol[iElementoEmQueEstou];
        var bElementoCorrenteEstaOK = elementoCorrente!==null;
        bRet = bRet && bElementoCorrenteEstaOK;
        iElementoEmQueEstou = iElementoEmQueEstou+1;
    }//while
    return bRet;
}//allOK

/*
teoria dos ciclos while
A sua forma/sintaxe geral é:
while (expressão-booleana){
    //corpo do ciclo
    i1; ... ; in
}//while
seguinte;

A semântica é:
enquanto a expressão booleana avaliar true, o corpo do
ciclo é executado; e DEPOIS de ser executado reavalia-se
SEMPRE a expressão boolena. Se voltar a avaliar true,
o corpo volta a acontecer; caso contrário, termina, e
o ponteiro de execução salta para a primeira instrução
externa ao while.
 */

function $ (
    pId
){
    var o = document.getElementById(pId);
    return o;
}//$

