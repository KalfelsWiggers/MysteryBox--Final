<?php
// DEFININDO O FUSO HORÁRIO:
date_default_timezone_set('America/Sao_Paulo');

// CONEXÃO COM A BASE DE DADOS: verifique sempre o dbname
try {
    $pdo = new PDO("mysql:host=localhost;dbname=mysteryboxes;charset=utf8", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $erro) {
    echo "ERRO NA CONEXÃO: <br>" . $erro->getMessage();
    exit();
}
?>
