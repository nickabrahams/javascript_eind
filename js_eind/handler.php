<?php
include 'database.php';

if (isset($_GET['search'])) {
    $searchTerm = mysqli_real_escape_string($conn, $_GET['search']);


    $sql = "SELECT * FROM data WHERE name LIKE '%$searchTerm%'";
    $result = mysqli_query($conn, $sql);

    $searchResults = array();
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $searchResults[] = $row;
        }
    }

    // Stuur het terug als JSON
    header('Content-Type: application/json');
    echo json_encode($searchResults);
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>java_eind</title>
</head>
<body>

<div id="search-container">
    <input type="text" id="zoekInput" placeholder="Voer zoekterm in">
    <button type="submit" id="zoekButton">Zoek</button>
</div>
<p id="result">

</p>

<script src="website_eind.js"></script>
</body>
</html>

