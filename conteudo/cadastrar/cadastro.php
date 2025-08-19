<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="cadastro.css">
    <title>Sign Up</title>

<body>

    <h2>Create Account</h2>
    <img class="avatar" src="../imagens/Icone-usuario.png" alt="User" />

    <form action="valida_cadastro.php" method="POST">
        <input type="text" name="nomeUsuario" placeholder="Nome completo" required />
        <input type="email" name="emailUsuario" placeholder="Email" required />
        <input type="password" name="senhaUsuario" placeholder="Password" required />
       
       
       <?php //VALIDA SE O USUÁRIO JÁ NÃO ESTAVA CADASTRADO
        if (isset($_GET['email']) && $_GET['email'] === 'erro') { ?>
            <div class="text-danger" style="text-align: center;"> E-Mail já cadastrado!</div>
        <?php } ?>

        <?php //VALIDA SE O PERFIL É VALIDO
        if (isset($_GET['validaperfil']) && $_GET['validaperfil'] === 'erro') { ?>
            <div class="text-danger" style="text-align: center;"> Obrigatório selecionar um perfil!</div>
        <?php } ?>

        <?php //VALIDA SE O PERFIL É VALIDO
        if (isset($_GET['usuario']) && $_GET['usuario'] === 'sucesso') { ?>
            <script> alert('Usuário cadastrado com Sucesso!');</script>
        <?php } else if (isset($_GET['usuario']) && $_GET['usuario'] != 'sucesso') { ?>
                <script> alert('Erro ao inserir usuário no banco, contate o administador!'); </script>
        <?php } ?>

        <button type="submit">Cadastrar</button>

    </form>

    <div class="links">
        <p>Já tem uma conta? <a href="login.html">Login</a></p>
    </div>

</body>

</html>