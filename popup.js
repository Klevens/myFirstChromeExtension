
const boton = document.querySelector('#change-pokemon');
const contenedor = document.querySelector("#contenedor");

boton.addEventListener('click', ()=> {
    
    let pokeId = Math.floor(Math.random() * 600) + 1; 
    traerDatos(pokeId)
})


function traerDatos(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(function(data){
      let nombre = data.name;
      let url = data.sprites.other.dream_world.front_default;
      if(nombre && url)
      {
          imprimirTarjeta(nombre,url);
      }
    });
  }
  
  function imprimirTarjeta(nombre,url)
    
  {
    let template = `<img class="pokemon" src="${url}" alt="" >
      <br>
      <label for="">
        ${nombre}
      </label> <br>
      `;
    contenedor.innerHTML = template;
  }