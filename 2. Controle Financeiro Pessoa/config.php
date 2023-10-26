<!-- ESSE CÓDIGO SERVE PARA FAZER A CONEXÃO DA PÁGINA COM O BANCO DE DADOS -->
<?php
    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'bd_controle_financeiro_pessoal'; 

    $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

    // ESSE 'if' É PARA TESTAR SE A CONEXÃO COM BANCO DE DADOS FOI FEITA COM SUCESSO
    // APOIS TESTE PODE COMENTAR ELE ASSIM COMO EU FIZ

    // if($conexao->connect_errno)
    // {
    //     echo "Erro";
    // }
    // else
    // {
    //     echo "Conexão Feita com Sucesso";
    // }
?>