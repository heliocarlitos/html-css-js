<!-- ESSE CÓDIGO SERVE PARA DELETAR OS ITENS ADICIONADOS NA TABELA.
     MAS ANTES DE CLICAR NO ÍCONE DE DELETAR, ACTUALIZA A TABELA ATRAVÉS DO 
     BOTÃO
-->
<?php
if (isset($_GET['id'])) { // Use $_GET em vez de $GET
    include('config.php');

    $id = $_GET['id'];

    // Verifique se a conexão com o banco de dados foi estabelecida com sucesso
    if ($conexao->connect_error) {
        die("Conexão falhou: " . $conexao->connect_error);
    }

    $sqlDelete = "DELETE FROM tabela_de_itens WHERE id = '$id'";
    if ($conexao->query($sqlDelete) === TRUE) {
        // Exclusão bem-sucedida
        header('Location: cfp.php');
    } else {
        // Trate o caso de falha na exclusão
        echo "Erro na exclusão: " . $conexao->error;
    }
} else {
    // Trate o caso em que o ID não foi especificado corretamente
    echo "ID do item não especificado.";
}
?>

