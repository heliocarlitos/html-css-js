// ESSA FUNÇÃO SERVE PARA INICIAR SECÇÃO, NO MOMENTO O USUÁRIO E A SENHA SÃO VAZIAS,
// OU SEJA, NÃO PRECISA DIGITAR NADA, E SÓ CLICAR NO BOTÃO DE ENTRAR E PRONTO.
// VOCÊ PODE DEFINIR UM USUÁRIO E SENHA NA LINHA 10, DENTRO DAS ASPAS SIMPLES.
function entrar(){
    var nome_de_usuario = document.getElementById('usuario').value;
    var senha_do_usuario = document.getElementById('senha').value;
    var tela_inicial = document.getElementById('adicionar-novo-item');
    var tela_de_login = document.getElementById('tela-de-login');

    if (nome_de_usuario === '' && senha_do_usuario === ''){
            tela_de_login.style.display = 'none';
            tela_inicial.style.display = 'block';
    } else {
        document.getElementById("mensagem-de-notidicacao").style.display = "flex";
    }
}

// ESSA FUNÇÃO SERVE PARA VISUALIZAR AS ABAS, ONDE OCULTA UMA E MOSTRA OUTRA CLICADA
function adicionar_itens(){
    var tela_inicial = document.getElementById('adicionar-novo-item');
    var tela_de_add = document.getElementById('adicionar_itens');
    var itens_add = document.getElementById('itens_adicionados');

    if (tela_inicial.style.display = 'block'){
        itens_add.style.display = 'none';
        tela_inicial.style.display = 'none';
        tela_de_add.style.display = 'block';
    }
}

// ESSA FUNÇÃO SERVE PARA VISUALIZAR AS ABAS, ONDE OCULTA UMA E MOSTRA OUTRA CLICADA
function itens_adicionados(){
    var tela_inicial = document.getElementById('adicionar-novo-item');
    var tela_de_add = document.getElementById('adicionar_itens');
    var itens_add = document.getElementById('itens_adicionados');

    if (tela_inicial.style.display = 'block'){
        tela_de_add.style.display = 'none';
        tela_inicial.style.display = 'none';
        itens_add.style.display = 'block';
    }
}

// ESSA FUNÇÃO SERVE PARA TERMINAR SECÇÃO, VOLTANDO PARA A TELA DE LOGIN.
function terminar_seccao(){
    var tela_de_login = document.getElementById('tela-de-login');
    var tela_inicial = document.getElementById('adicionar-novo-item');
    var tela_de_add = document.getElementById('adicionar_itens');
    var itens_add = document.getElementById('itens_adicionados');

    if (tela_de_login.style.display = 'none'){
        tela_de_login.style.display = 'block';
        tela_inicial.style.display = 'none';
        tela_de_add.style.display = 'none';
        itens_add.style.display = 'none';
        
    }
}
// JS ADICIONAIS

const addTab = document.getElementById("add-tab");

        const addItemButton = document.getElementById("add-item");
        const productName = document.getElementById("product-name");
        const productPrice = document.getElementById("product-price");
        const itemList = document.getElementById("item-list");

        const items = [];

        addItemButton.addEventListener("click", () => {
            const name = productName.value;
            const price = parseFloat(productPrice.value);

            if (name && !isNaN(price)) {
                items.push({ name, price });
                updateItemList();
                productName.value = "";
                productPrice.value = "";
                showNotification("Item adicionado com sucesso!");
            }
        });


        function updateItemList() {
            const tbody = itemList.querySelector("tbody");
            tbody.innerHTML = "";

            items.forEach((item, index) => {
                const row = tbody.insertRow();
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${(item.price / 70).toFixed(2)}</td>
                    <td>${(item.price / 80).toFixed(2)}</td>
                    <td>${(item.price / 90).toFixed(2)}</td>
                    <td>
                        <a href="#" class="edit" data-index="${index}">Editar</a>
                        <a href="#" class="delete" data-index="${index}">Excluir</a>
                    </td>
                `;
            });

            const editLinks = tbody.querySelectorAll(".edit");
            const deleteLinks = tbody.querySelectorAll(".delete");

            editLinks.forEach(link => {
                link.addEventListener("click", editItem);
            });

            deleteLinks.forEach(link => {
                link.addEventListener("click", deleteItem);
            });
        }

        function editItem(event) {
            const index = event.target.getAttribute("data-index");
            const modal = document.getElementById("edit-modal");
            const editedNameInput = document.getElementById("edited-name");
            const editedPriceInput = document.getElementById("edited-price");

            editedNameInput.value = items[index].name;
            editedPriceInput.value = items[index].price;

            modal.style.display = "flex";

            const saveEditButton = document.getElementById("save-edit");
            saveEditButton.addEventListener("click", () => {
                const editedName = editedNameInput.value;
                const editedPrice = parseFloat(editedPriceInput.value);

                if (editedName && !isNaN(editedPrice)) {
                    items[index].name = editedName;
                    items[index].price = editedPrice;
                    modal.style.display = "none";
                    updateItemList();
                    showNotification("Item actualizado com sucesso!");
                }
            });
        }

        function deleteItem(event) {
            const index = event.target.getAttribute("data-index");
            items.splice(index, 1);
            updateItemList();
            showNotification("Item excluído com sucesso!");
        }

        const sortAZ = document.getElementById("sort-az");
        const sortZA = document.getElementById("sort-za");
        const sortLowHigh = document.getElementById("sort-low-high");
        const sortHighLow = document.getElementById("sort-high-low");

        sortAZ.addEventListener("click", () => {
            items.sort((a, b) => a.name.localeCompare(b.name));
            updateItemList();
        });

        sortZA.addEventListener("click", () => {
            items.sort((a, b) => b.name.localeCompare(a.name));
            updateItemList();
        });

        sortLowHigh.addEventListener("click", () => {
            items.sort((a, b) => a.price - b.price);
            updateItemList();
        });

        sortHighLow.addEventListener("click", () => {
            items.sort((a, b) => b.price - a.price);
            updateItemList();
        });

        function showNotification(message) {
            const notification = document.getElementById("notification");
            notification.textContent = message;
            notification.style.display = "block";
            setTimeout(() => {
                notification.style.display = "none";
            }, 3000);
        }

// JS PARA ACTUALIZAR TABELA
function atualizarTabela() {
    // Faça uma solicitação AJAX para obter os dados mais recentes
    $.ajax({
        url: 'atualizar_tabela.php', // Substitua pelo URL correto para buscar os dados atualizados
        type: 'GET',
        success: function(data) {
            // Atualize o conteúdo da tabela com os dados mais recentes
            $('#item-list').html(data);
        },
        error: function(xhr, status, error) {
            console.log(error);
        }
    });
}

