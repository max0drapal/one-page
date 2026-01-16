<?php
header('Content-Type: application/json');
$action = $_GET['action'] ?? '';

if ($action === 'get_beers') {
    echo file_exists('data.json') ? file_get_contents('data.json') : json_encode([]);
    exit;
}

if ($action === 'save_contact') {
    echo json_encode(["status" => "success", "message" => "Zpráva odeslána přes AJAX!"]);
    exit;
}
?>
