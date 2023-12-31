<?php
session_start(); // Inicia a sessão
include("conecta.php");

if(isset($_POST["submit"])) {
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    if(empty($email) || empty($senha)) {
        // Verifica se algum campo está vazio
        echo "Por favor, preencha todos os campos.";
    } else {
        // Verificar se a conta já existe no banco de dados
        $comando = $pdo->prepare("SELECT * FROM usuario WHERE email_usuario = :email");
        $comando->bindParam(':email', $email);
        $comando->execute();

        if($comando->rowCount() > 0) {
            // A conta já existe
            $_SESSION["email"] = $email; // Inicia a sessão com o email do usuário
            header("Location: telaLogado.html");
            exit();
        } else {
            // A conta não existe, cria uma nova conta
            $comando = $pdo->prepare("INSERT INTO usuario (email_usuario, senha_usuario) VALUES (:email, :senha)");
            $comando->bindParam(':email', $email);
            $comando->bindParam(':senha', $senha);
            $comando->execute();

            $_SESSION["email"] = $email; // Inicia a sessão com o email do usuário
            header("Location: telaLogado.html");
            exit();
        }
    }
}
?>