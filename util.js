function procurarNaCol (
    pCol,
    pElProcurado
){
    var bIsArray = Array.isArray(pCol);
    if (bIsArray){
        for (var iCtrl=0; iCtrl<pCol.length; iCtrl++){
            var elCorrente = pCol[iCtrl];
            var bMatch = elCorrente === pElProcurado;
            if (bMatch){
                //return true;
                return iCtrl;
            }
        }//for
    }
    return false;
}//procurarNaCol

/*
a = [1,2,3]
var res = 0 <--- procuraNaCol (a, 1);
if (res===false){ alert ("não encontrei!");}
 */

function novoNome(p1, p2, p3, p4){
    return randomCol(p1,p2,p3,p4);
}

function randomCol(
    pnMin,
    pnMax,
    pnQuantidade,
    pbComRepeticoes
)
{
    var aRet = [];

    for (var iCtrl=0; iCtrl<pnQuantidade ; /*não inc aqui iCtrl */){
        var nNovoElemento = randomInt(pnMin, pnMax);

        if (!pbComRepeticoes){
            var bJaExisteNaCol =
                procurarNaCol(aRet, nNovoElemento)!==false;

            if (!bJaExisteNaCol){
                aRet.push(nNovoElemento); //introduz no final
                //aRet[aRet.length] = nNovoElemento;
                //aRet.unshift(nNovoElemento); //introduz à cabeça
                iCtrl++;
            }//if
        }//if
        else{
            aRet.push(nNovoElemento); //introduz no final
            iCtrl++;
        }//else
    }//for

    return aRet;
}//randomCol

function bubbleSort (p1, p2){return bs(p1, p2);}
function bs(
    pCol, //um array que representa uma coleção qualquer
    pbAscendente //um booleano que, se true, causa ordenação ascendente
){
    pbAscendente = pbAscendente===undefined ? true : pbAscendente;
    var bOrdenada = false;

    while (!bOrdenada && pCol.length>1){
        //trabalho
        var nPenultimo = pCol.length-1-1;
        for (
            var iCtrl=0, bFizTrocas=false;  //duas inits
            iCtrl<=nPenultimo ;
            iCtrl++
        )
        {
            var el = pCol[iCtrl];
            var vizinho = pCol[iCtrl+1];

            var bMotivosParaTrocar =
                pbAscendente ?
                    el > vizinho
                    :
                    el < vizinho;

            if (bMotivosParaTrocar){
                //trocar
                var temp = pCol[iCtrl];
                pCol[iCtrl] = pCol[iCtrl+1];
                pCol[iCtrl+1] = temp;

                bFizTrocas = true;
            }//if
        }//for

        if (!bFizTrocas) bOrdenada = true;
    }//while
}//bs

/*
algoritmo do trampolim para a geração de números aleatórios
entre fronteiras
 */
function randomInt (pMin, pMax){
    if (pMin>pMax){
        //possível em todas as linguagens que suportam p.p. referência
        //não é possível em JS
        //trocarValores(pMin, pMax);
        var temp = pMin;
        pMin = pMax;
        pMax = temp;
    }//trocarValores

    var nAmplitude = pMax-pMin+1;
    var nForca = Math.random();
    var nSalto = nForca * nAmplitude;
    var nDestino = Math.floor(pMin + nSalto);
    return nDestino;
}//randomInt

/*
exercício: escrever uma ferramenta, capaz de receber
quaisquer 2 arrays e retornar true, se forem
exatamente idênticos; e false, caso contrário.
 */
function exactlyIdenticalArrays(
    pA1,
    pA2
){
    var bSameSize = pA1.length === pA2.length;
    if (!bSameSize)
        return false;
    else{
        for(var idx=0; idx<pA1.length; idx++){
            var elA1 = pA1[idx];
            var elA2 = pA2[idx];
            var bMatch = elA1 === elA2;
            if (bMatch) return false; //se há 2 els q ñ coincidem, os arrays não são idênticos
        }//for
        return true;
    }//else
}//exactlyIdenticalArrays

function genericToolToWriteInstances(
    pbPrototype
){
    pbPrototype = (pbPrototype===undefined) ? false : pbPrototype;

    var strHtml = "<ul>";

    for(var prop in this){
        /*
        quando é vou capturar na lista a propriedade?
        se o param pbPrototype for true
        isso significa que quero capturar TODAS as props
        incluindo aquelas que são comuns a todos os objectos
        e não apenas específicas da instância

        se param pbPrototype for false
        isso significa que só quero capturar as props
        das instâncias, excluindo assim as props comuns a todos
        os objectos, via prototype
         */
        var bWriteProp =
            pbPrototype ? true : this.hasOwnProperty(prop);

        if (bWriteProp){
            //tantos list items quantas as props do objecto
            strHtml += "<li><mark>";
            var valorDaProp = this[prop]; //valor da propriedade prop
            strHtml += prop+"</mark> : "+valorDaProp;
            strHtml += "</li>";
        }//if
    }//for

    strHtml +="</ul>";

    //return undefined;
    return strHtml;
}//genericToolToWriteInstances

function escreverArray(a){
    var str="";
    for (var idx=0; idx<a.length; idx++){
        var elemento = a[idx];
        str += Array.isArray(elemento) ?
            escreverArray(elemento)
            :
            elemento;
    }//for
    return str;
}//escreverArray