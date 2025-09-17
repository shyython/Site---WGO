<?php
    require_once "../../loginE/validador_acesso.php";
    require '../../loginE/config.php';


    $sql = "DELETE FROM eventos WHERE Id_Evento = '{$_POST["id_Evento"]}';";
    $conexao-> query($sql);

    header('location: ../ver/ver.php?delete=sucesso');

?>