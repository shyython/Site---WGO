<?php
include('../login/config.php');   
// require_once "../login/validador_acesso.php";
require_once "../loginE/validador_acesso.php";

// Tenta pegar de usuarios
$stmt = $conexao->prepare("SELECT tipoUsuario FROM dados_usuarios WHERE id_usuario = ?");
$stmt->bind_param("i", $_SESSION['id_usuario']);
$stmt->execute();
$stmt->bind_result($tipoUsuario);
if ($stmt->fetch()) {
    // Achou usuário
    
    $stmt->close();
} else {
    // Não achou em usuarios → tenta em dados_empresa
    $stmt->close();

    $stmt = $conexao->prepare("SELECT tipoUsuario FROM Dados_empresa WHERE id_empresa = ?");
    $stmt->bind_param("i", $_SESSION['id_empresa']);
    $stmt->execute();
    $stmt->bind_result($tipoUsuario);
    $stmt->fetch();
    $stmt->close();
  
}
?>


 <?php
            // Verifica se o tipo de usuário é 'empresa'
            
            if ($tipoUsuario === 'empresa') {
              echo '<li><a href="../crudEventos/crud_eventos.php">Eventos</a></li>';
            }
            ?>