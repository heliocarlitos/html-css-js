<!-- ESSE CÓDIGO SERVE PARA ACTUALIZAR OS ITENS ADICIONADOS NA TABELA -->
<?php
include_once('config.php');

$sql = "SELECT * FROM tabela_de_itens ORDER BY id";

$result = $conexao->query($sql);

while ($user_data = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td>" . $user_data['id'] . "</td>";
    echo "<td>" . $user_data['produto'] . "</td>";
    echo "<td>" . $user_data['preco'] . "</td>";
    echo "<td> 
        <a href='edit.php?id=" . $user_data['id'] . "'>📝</a>
        <a href='delete.php?id=" . $user_data['id'] . "'>🗑️</a>
    </td>";
    echo "</tr>";
}
?>
