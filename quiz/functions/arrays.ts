export  function embaralhar(elementos : any[]) : any[] {

    return elementos
    .map(valor => ({valor, aleatorio : Math.random()}))
    .sort((obj, obj1 )=> obj.aleatorio - obj1.aleatorio)
    .map(obj => obj.valor)
}