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
}


