let lista = [12,4,5,6,3,6,14,6,1,5,3,7,2]

const limpaLista = (lista)=>{
    listaOrdenada = lista.sort(function(a, b){return a-b});
    let listaLimpa =[...new Set(listaOrdenada)];
    
    console.log(`input: ${lista}`);
    console.log(`output: ${listaLimpa}`);
}

limpaLista(lista)