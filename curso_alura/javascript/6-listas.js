console.log(`Trabalhando com Listas`)
// const salvador= `Salvador`
// const saoPaulo=`Sao paulo`


const listaDestinos= new Array(
    `salvador`,
    `Sao Paulo`,
    `Parana`,
    `Goias`,
    "BELO HORIZONTE"

)

console.log(`DESTINOS POSSIVEIS`)
console.log(listaDestinos)

listaDestinos.push(`Curitiba`) //add nova capital
console.log(listaDestinos)

console.log(`a segunda posiçao e `+listaDestinos[1], `e a terceira posiçao e `+listaDestinos[2])

listaDestinos.splice(0,1) //remove
console.log(listaDestinos)

console.log(`a segunda posiçao e `+listaDestinos[1], `e a terceira posiçao e `+listaDestinos[2])
