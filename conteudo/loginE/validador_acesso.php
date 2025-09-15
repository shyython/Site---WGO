<?php
  session_start();

  if(!isset($_SESSION['autenticado']) || ($_SESSION['autenticado'] != 'sim')){
    header('location: ./login/login.php?login=erro2');
  }
?>