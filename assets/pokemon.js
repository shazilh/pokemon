  var pokemons=[];
function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;
  };

function crearPokemon(){
  var nombrePokemon=document.getElementById("nombrePokemon");
  var colorPokemon=document.getElementById("colorPokemon");
  var puntosAtaque=document.getElementById("puntosAtaque");

  var pokemon=new Pokemon(nombrePokemon.value,
                          colorPokemon.value,
                          parseInt(puntosAtaque.value)
                        )
  pokemons.push(pokemon)
  mostrarPokemonsPrimerSelect();
  mostrarPokemonsSegundoSelect();
  console.log(pokemons);

}

function mostrarPokemonsPrimerSelect(){
    var selectUnoDePokemons=document.getElementById("pokemonOp1")

    pokemons.forEach(function(pokemon){
    var option = document.createElement("option");
    option.innerText =  pokemon.nombre;
    selectUnoDePokemons.appendChild(option);
});

}
function mostrarPokemonsSegundoSelect(){
    var selectDosDePokemons=document.getElementById("pokemonOp2")

    pokemons.forEach(function(pokemon){
    var option = document.createElement("option");
    option.innerText =  pokemon.nombre;
    selectDosDePokemons.appendChild(option);
});

}
function pelear(){
  var primerPokemon=document.getElementById("pokemonOp1");
  var segundoPokemon=document.getElementsById("pokemonOp2")
    pokemonObjeto.vida=pokemonObjeto.vida - pokemonObjeto.puntosAtaque;
}
