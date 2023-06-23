<?php
    include("conecta.php");

    if(isset($_POST["submit"]))
    {
        $email = $_POST["email"];
        $senha = $_POST["senha"];

        if(empty($email) || empty($senha)) {
            // Verifica se algum campo está vazio
            echo "Por favor, preencha todos os campos.";
        } else {
            // Realiza a inserção na base de dados usando prepared statements
            $comando = $pdo->prepare("INSERT INTO usuario VALUES(null, :email, :senha)");
            $comando->bindParam(':email', $email);
            $comando->bindParam(':senha', $senha);
            $resultado = $comando->execute();
            header("Location: logado.html");
        }
    }
?>
