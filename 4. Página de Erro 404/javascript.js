        // Verifica se a página atual é a página de erro 404 (para evitar redirecionamentos em loop).
        if (window.location.href.indexOf("erro404.html") === -1) {
            // Função para redirecionar para a página de erro 404.
            function redirectTo404Page() {
                window.location.href = "erro404.html";
            }

            // Verifica se a página acessada não existe.
            // Você pode personalizar essa verificação de acordo com a estrutura do seu site.
            // Neste exemplo, estamos verificando se o link acessado é válido.
            if (linkNaoExiste()) {
                redirectTo404Page();
            }
        }

        // Função de exemplo para verificar se um link não existe.
        function linkNaoExiste() {
            // Simule a verificação de existência de links aqui.
            // Por exemplo, verifique se um link válido foi acessado.
            return false; // Mude para true se o link não existir.
        }