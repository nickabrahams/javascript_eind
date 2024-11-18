<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>java_eind</title>
    <link rel="stylesheet" href="website_eind.css">
</head>
<body>



<input type="text" id="pokemonName" placeholder="Enter Pokemon name">
<!--<button type="submit" onclick="zoekPokemon()">Zoek Pokemon</button><br>-->
<button onclick="checkPokemon()">Check Pokémon</button>


<div id="result"></div>
<img src="" alt="Afbeelding Pokemon" id="pokemonIMG" style="display: none">

<script src="website_eind.js"></script>
</body>
</html>


<?php

include "database.php";

if(isset($_POST['pokemonName'])) {
    $search = $_POST['pokemonName'];
}

