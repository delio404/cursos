console.log(`Trabalhando com Condicionais`);

const idadeComprador = 23;
const estaAcompanhada = true;
const temPassagem= true

const listaDestinos = new Array(
  `salvador`,
  `Sao Paulo`,
  `Parana`,
  `Goias`,
  "BELO HORIZONTE"
);
console.log("   ");
console.log(`  \t\t\t DESTINOS POSSIVEIS`);
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//     const x = listaDestinos.splice(1, 1); //remove

//     console.log(` Comprador maior de idade passagem para a cidade  ->  ` + x);
// } else if (estaAcompanhada) {
//     const x = listaDestinos.splice(1, 1); //remove
//     console.log("  Comprador esta acompanhado  ");
//     console.log(`passagem adquirida para  ` + x);
//     //  listaDestinos.splice(1, 1); //remove
// } else {
//     console.log(
//         `nao e maior de idade e nao esta acompanhado nao e possivel vender passagem`
//     );
// }

// console.log("   ");
// console.log(listaDestinos);

// console.log(
//     `a segunda posiçao e ` + listaDestinos[1],
//     `e a terceira posiçao e ` + listaDestinos[2]
// );

if (idadeComprador >= 18 || estaAcompanhada) {
  //|| e ou
  const x = listaDestinos.splice(1, 1); //remove
  console.log(` \t\t\t  Boa viagem para a cidade de  ->  ` + x);
} else {

    console.log(" \t\t\t  Nao e maior de idade e nao esta acompanhado \n")
    console.log(" \t\t\t  Nao e permido a compra de passagens\n")
  
}
console.log(listaDestinos);

console.log("\t\t\t embarque \n\n  ");

if(idadeComprador >=18 && temPassagem){
    console.log("\n\n\t\t Boa Viagem\n\n")
}else{
    console.log("\t\t voce nao pode embarcar\n\n")
}