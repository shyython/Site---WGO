<?php
include 'conexao.php';

$sql = "SELECT * FROM mensagens ORDER BY criado_em ASC";
$resultado = $conexao->query($sql);

while ($linha = $resultado->fetch_assoc()) {
    echo "<div class='mensagem'><span class='usuario'>" . htmlspecialchars($linha['usuario']) . ":</span> " . htmlspecialchars($linha['texto']) . "</div>";
}
?>
