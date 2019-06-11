/*
last tested ok : 2019-05-17 1106
 */
function storageDisponivel(){
    var bDisponivel =
        typeof(window.Storage)!==undefined;

    return bDisponivel;
}//storageDisponivel

/*
guardar na storage
 */
function escreverKV(
    pK, //a key tem q ser string
    pV //o value tem q ser string
){
    if (storageDisponivel()){
        //operação de escrita na localStorage
        var ret =
        window.localStorage.setItem(
            pK,
            pV
        );

        return ret;
    }//if
    return false;
}//escreverKV

/*
ler da storage
 */
function lerK(
    pK //a key tem q ser string
){
    if (storageDisponivel()){
        /*
        se a chave não existir
        getItem retorna null
         */
        var ret = window.localStorage.getItem(pK);
        return ret;
    }//if
    return false;
}//lerK

