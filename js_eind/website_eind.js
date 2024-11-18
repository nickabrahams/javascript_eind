// async function zoekPokemon(){
//
//     try{
//
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//
//         const data = await response.json();
//         const pokemonIMG = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonIMG");
//
//
//         console.log(data.name)
//         console.log(data)
//
//
//         imgElement.src = pokemonIMG;
//         imgElement.style.display = "block";
//     }
//     catch(error){
//         console.error(error);
//     }
// }



    function checkPokemon() {
    const pokemonName = document.getElementById("pokemonName").value;

    if (pokemonName) {
    fetch('handler.php', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
},
    body: JSON.stringify({name: pokemonName})
})
    .then(response => response.json())
    .then(data => {
    if (data.error) {
    document.getElementById('result').innerText = data.error;
} else {
    document.getElementById('result').innerText = `Gevonden Pokémon: ${data.name}, ID: ${data.id}`;
}
})
    .catch(error => console.error('Error:', error));
} else {
    alert('Voer een Pokémon naam in!');
}
}
