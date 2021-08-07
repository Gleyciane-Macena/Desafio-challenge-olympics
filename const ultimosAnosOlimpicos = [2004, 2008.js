// Ultima conquista do futebol brasileiro.
const ultimaConquista = [2004, 2008, 2012, 2016, 2021];
const found = ultimaConquista.find(element => element > 2016 );
console.log(found);
// deve retornar 2021

// Ultimo anos da Olimpiadas
function lastOlimpicGames(element, index, array) {
    return element > 2016;
  }
  [2004, 2008, 2012, 2016, 2021].some(lastOlimpicGames);
// deve retornar 2021  

// Quantas medalhas o Brasil tem ou pode ganhar?
function medalhasDoBrasil(value) {
    return value >= 5;
  }
  var filtered = [1, 5, 8, 6, 3].filter(medalhasDoBrasil);
// filtrado é [5, 8, 6]

// Se tivessimos o dobro de medalhas
  const medalhasDeOuro = [1, 2, 4];
const dobro = medalhasDeOuro.map(function(num) {
  return num * 2;
});
// deve retornar [1, 4, 16]

// Número de medalhas de ouro do Brasil
const medalhasDeOuro = [1, 2, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(medalhasDeOuro.reduce(reducer));
// deve retornar: 7