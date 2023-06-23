<?php
    include("conecta.php");

    $email = $_POST["email"];
    $senha = $_POST["senha"];

    if(isset($_POST["submit"]) )
    {
        $comando = $pdo->prepare("INSERT INTO usuario VALUES(null, '$email', '$senha')");
        $resultado = $comando->execute();
        header("Location: logado.html");
    }

?>