<!-- ESTE CÓDIGO PEGA OS VALORES DO INPUT DE 'produto' E 'preco' 
E ENVIA PARA O BANCO DE DADOS ATRAVÉS DO ARQUIVO 'config.php' -->
<?php
include_once('config.php');

if (isset($_POST['submit'])) {
    $produto = $_POST['produto'];
    $preco = $_POST['preco'];

    $result = mysqli_query($conexao, "INSERT INTO tabela_de_itens (produto, preco) 
    VALUES ('$produto', '$preco')");
}

$sql = "SELECT * FROM tabela_de_itens ORDER BY id ";

$result = $conexao->query($sql);
?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <title>CFP</title>

    <link rel="stylesheet" href="estilo.css">
</head>
<body>

    <main>
        <div class="container">

            <div class="conteudo-do-container">

                <div class="tela-de-login" id="tela-de-login">

                <!-- FORMULÁRIO PARA INICIAR SECÇÃO -->
                    <div class="form">

                        <div class="titulo">
                            <h1>Iniciar Secção</h1>
                        </div>

                        <a href="javascript:void(0)" class="seccao-com-google">
                            <img src="imagens/google-g-logo.png" alt="Google Logo">
                            <figcaption>Iniciar Seccão com Google</figcaption>
                        </a>

                        <div class="ou">
                            <p>ou</p>
                        </div>
                        <div class="area-dos-inpts">

                            <label>Usuário</label>
                            <input type="text" id="usuario" placeholder="Digita seu nome de usuário" autocomplete='off'>

                            <div class="notfic-de-login">
                                <p>Notificação</p>
                            </div>

                        </div>

                        <div class="area-dos-inpts">

                            <label>Senha</label>
                            <input type="password" id="senha" placeholder="Digita sua senha">

                            <div class="notfic-de-login">
                                <p>Notificação</p>
                            </div>
                            
                        </div>

                        <div class="manter-senha-esqueci-senha">
                            <label><input type="checkbox"> Manter Secção</label>
                            <a href="javascript:void(0)">Esqueci Senha</a>
                        </div>

                        <div class="area-do-btn-entrar">
                            <button onclick="entrar()">ENTRAR</button>
                        </div>

                        <div class="nao-tenho-uma-conta">
                            <p>Não tenho uma conta. <a href="javascript:void(0)"> <span>Criar conta!</span></a></p>
                        </div>

                        <div class="mensagem-de-notidicacao" id="mensagem-de-notidicacao">
                            <p>Usuário ou Senha Invalido!</p>
                        </div>
                    </div>
                </div>


                <!-- TELA INICIAL APOIS INICIAR A SEÇÃO -->
                
                <div class="adicionar-novo-item" id="adicionar-novo-item">
                    <div class="titulo">
                        <h1>Controle Financeiro Pessoal</h1>
                    </div>

                    <div class="btns-das-abas">
                        <button id="aba_de_add_itens" onclick="adicionar_itens()">Adicionar Novo Item</button>
                        <button id="aba_de_itens" onclick="itens_adicionados()">Itens Adicionados</button>
                        <button id="btn-sair" onclick="terminar_seccao()">Terminar Secção</button>
                    </div>


                    <div class="area-do-usuario">
                        <div class="nome-do-usuario contenteudo-do-usuario">
                            <h5>Username: <span>Hélio Carlitos</span></h5>
                        </div>

                        <div class="id-do-usuario contenteudo-do-usuario">
                            <h5>ID: <span>0000001</span></h5>
                        </div>

                        <div class="tipo-de-conta contenteudo-do-usuario">
                            <h5>Tipo de conta: <span>Gratuita</span></h5>
                        </div>

                        <div class="mais-detalhes-do-usuario contenteudo-do-usuario">
                            <a href="javascript:void(0)">Mais...</a>
                        </div>
                    </div>
                </div>

                <!-- TELA PARA ADICIONAR UM NOVO ITEM/PRODUTO/PREÇO -->

                <div class="adicionar_itens" id="adicionar_itens">
                    <div class="form">

                        <div class="titulo">
                            <h3>Adicionar Item</h3>
                        </div>

                        <div class="btns-das-abas">
                            <button id="aba_de_add_itens" class="btn-activo" onclick="adicionar_itens()">Adicionar Novo Item</button>
                            <button id="aba_de_itens" onclick="itens_adicionados()">Itens Adicionados</button>
                            <button id="btn-sair" onclick="terminar_seccao()">Terminar Secção</button>
                        </div>

                        <form class="form" id='form' action="cfp.php" method="POST">
                            <div class="area-dos-inpts">
                                <label>Produto</label>
                                <input type="text" name='produto' id="produto" placeholder="Digita o nome do produto" autocomplete='off'>
                            </div>

                            <div class="area-dos-inpts">
                                <label>Preço</label>
                                <input type="number" name='preco' id="preco" placeholder="Digita o preço do produto" autocomplete='off'>
                            </div>

                            <div class="area-do-btn-entrar">
                                <button type='submit' onclick=" adicionarItens()" name='submit'>ADICIONAR</button>
                            </div>
                        </form>
                    </div>
                </div>

                     <!-- TELA ONDE SERÃO EXIBIDOS TODOS ITENS ADICIONADOS ATRAVÉS DE UMA TABELA -->
                <div class="itens_adicionados" id="itens_adicionados">
                    <div class="form">

                        <div class="titulo">
                            <h3>Itens Adicionados</h3>
                        </div>

                        <div class="btns-das-abas">
                            <button id="aba_de_add_itens"  onclick="adicionar_itens()">Adicionar Novo Item</button>
                            <button id="aba_de_itens" class="btn-activo">Itens Adicionados</button>
                            <button id="btn-act" onclick="atualizarTabela()"><span class="material-symbols-outlined">refresh</span></button>
                            <button id="btn-sair" onclick="terminar_seccao()">Terminar Secção</button>
                        </div>
                    </div>

                    <div class="area-da-tabela" id="view-item-list">
                        <table class="tabela" id="item-list">
                            <thead>
                                <tr class="cabecalho-da-tb">
                                    <th> # </th>
                                    <th> Produto </th>
                                    <th> Preço </th>
                                    <th> Acção </th>
                                </tr>
                            </thead>
                            <tbody class="bd-tb" id="item-list">
                                <?php
                                    while($user_data = mysqli_fetch_assoc($result))
                                    {
                                        echo "<tr>";

                                        echo "<td>".$user_data['id']."</td>";
                                        echo "<td>".$user_data['produto']."</td>";
                                        echo "<td>".$user_data['preco']."</td>";
                                        echo "<td> 
                                            <a href='edit.php?id=&user_data[id]'><span class='material-symbols-outlined'>edit</span></a>
                                            <a href='delete.php?id=&user_data[id]'><span class='material-symbols-outlined'>delete</span></a>
                                        </td>";
                                        
                                        echo "</tr>";
                                    }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <script src="javascript.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</body>
</html>