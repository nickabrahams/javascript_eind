document.getElementById('zoekButton').addEventListener('click', zoekPokemon);

function zoekPokemon() {
    const zoekTerm = document.getElementById('zoekInput').value;

    // fetch aanvraag naar de handler.php
    fetch(`handler.php?search=${encodeURIComponent(zoekTerm)}`)
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById('result');

            if (data.length > 0) {
                // Toon de resultaten
                let html = '<ul>';
                data.forEach(data => {
                    html += `<li>${data.name}</li>`;
                });
                html += '</ul>';
                resultElement.innerHTML = html;
            } else {
                resultElement.innerHTML = 'Geen resultaten gevonden';
                // api aanroepen
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = 'Er is een fout opgetreden';
        });
}