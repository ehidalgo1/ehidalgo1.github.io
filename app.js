function esconderSpinner(){


    let spinner = document.querySelector('.spinner');

    spinner.removeAttribute('hidden');

    setTimeout(() => {
        spinner.setAttribute('hidden', true);
    }, 1000);
}







function cargarListaPokemon(){

    let div = document.getElementById('root');
    
    fetch('https://pokeapi.co/api/v2/generation/1/')
    .then(res => res.json())
    .then(data => {

        
        let array = data.pokemon_species;
        let urlPokemon;
        let name;

        let html = "";

        array.map(function(item, i){
            name = item.name;

            html += `<li>${i+1} - ${name.toUpperCase()}</li>`;

            urlPokemon = item.url;

        });

        div.innerHTML = html;
        esconderSpinner();

    })
}

cargarListaPokemon();

function fotoPokemon(url){

    fetch(url)
    .then(res => res.json())
    .then(pokemon => {
        console.log(pokemon);

    })
    .catch()
}