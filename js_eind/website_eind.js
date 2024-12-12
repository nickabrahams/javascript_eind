document.getElementById('zoekButton').addEventListener('click', zoekPokemon);

function zoekPokemon() {
    const zoekTerm = document.getElementById('zoekInput').value.toLowerCase();

    // controle voor als zoekterm leeg is
    if (zoekTerm.trim() === '') {
        // innerHTML = 'zoekvlag is leeg';
        alert("zoekvlag is leeg");
        return;
    }

    // eerst fetchen naar database
    fetch(`handler.php?search=${encodeURIComponent(zoekTerm)}`)
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById('result');

            if (data.length > 0) {
                // Toon de resultaten
                let html = '';
                data.forEach(data => {
                    html += `Pokemon gevonden in database:<br>`;
                    html += `Naam: ${data.name}<br>`;
                    html += `id: ${data.p_id}<br>`;
                    html += `Ervaring: ${data.base_experience}<br>`;
                    html += `Lengte: ${data.height}<br><br>`;
                });
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
                        resultElement.innerHTML = `
                Pokemon gevonden in API: 
                <br>name: ${pokemonData.name}
                <br>id: ${pokemonData.id}
                <br>Ervaring: ${pokemonData.base_experience}
                <br>Lengte: ${pokemonData.height}
            `;
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