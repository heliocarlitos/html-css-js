
let countdownInterval;

        function iniciarContagemRegressiva(years, months, days, hours, minutes, seconds) {
            clearInterval(countdownInterval);

             // Calcula a data final da contagem regressiva com base nos parâmetros fornecidos.
            const dataFinal = new Date();
            dataFinal.setFullYear(dataFinal.getFullYear() + years);
            dataFinal.setMonth(dataFinal.getMonth() + months);
            dataFinal.setDate(dataFinal.getDate() + days);
            dataFinal.setHours(dataFinal.getHours() + hours);
            dataFinal.setMinutes(dataFinal.getMinutes() + minutes);
            dataFinal.setSeconds(dataFinal.getSeconds() + seconds);

            // Define um intervalo para atualizar a contagem regressiva a cada segundo.
            countdownInterval = setInterval(function () {
                const dataAtual = new Date();
                const diferenca = dataFinal - dataAtual;

                // Calcula os componentes de tempo restantes.
                const segundos = Math.floor((diferenca / 1000) % 60);
                const minutos = Math.floor((diferenca / 1000 / 60) % 60);
                const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
                const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

                // Atualiza o elemento HTML com a contagem regressiva.
                const cronometroElement = document.querySelector(".cronometro");
                cronometroElement.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

                // Verifica se a contagem regressiva chegou a zero e conclui-a.
                if (diferenca <= 0) {
                    clearInterval(countdownInterval);
                    cronometroElement.textContent = "Contagem Regressiva Concluída!";
                }
            }, 1000);
        }

        // Iniciar a contagem regressiva automaticamente com valores configurados
        iniciarContagemRegressiva(99999, 6, 0, 12, 30, 45);