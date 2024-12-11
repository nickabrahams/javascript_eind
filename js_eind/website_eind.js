document.getElementById('zoekButton').addEventListener('click', zoekPokemon);

function zoekPokemon() {
    const zoekTerm = document.getElementById('zoekInput').value.toLowerCase();

    // fetch aanvraag naar de handler.php
    fetch(`handler.php?search=${encodeURIComponent(zoekTerm)}`)
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById('result');

            if (data.length > 0) {
                // Toon de resultaten
                let html = '<ul>';
                data.forEach(data => {
                    html += `<li>Pokemon gevonden in database: ${data.name}</li>`;
                });
                html += '</ul>';
                resultElement.innerHTML = html;
            }
                else {
                // api aanroepen

                fetch(`https://pokeapi.co/api/v2/pokemon/${zoekTerm}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Pokemon niet gevonden');
                        }
                        return response.json();
                    })
                    .then(pokemonData => {
                        resultElement.innerHTML = `Pokemon gevonden in API: ${pokemonData.name}, id: ${pokemonData.id}`;
                    })
                    .catch(error => {
                        resultElement.innerHTML = 'Pokemon niet gevonden in database of API';
                    });
            }


        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = 'Er is een fout opgetreden';
        });
}