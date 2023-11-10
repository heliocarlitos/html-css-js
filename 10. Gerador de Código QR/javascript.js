function gerarQRCode() {
    var texto = document.getElementById("text-input").value;
    const cv = document.getElementById('notific_campo_vazio');

    if (texto === "") {
        document.getElementById('campo_vazio').style.display = 'block'
        document.getElementById('link_copiado').style.display = 'none'
        document.getElementById('baixando').style.display = 'none'
        document.getElementById('campo_limpo').style.display = 'none'
        return;
    }
    else{
        document.getElementById('gerar').style.display = 'none'
        document.getElementById('campo_vazio').style.display = 'none'
        document.getElementById('link_copiado').style.display = 'none'
        document.getElementById('baixando').style.display = 'none'
        document.getElementById('campo_limpo').style.display = 'none'
    }

    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: texto,
      width: 256,
      height: 256,
    });

    // Exibir botão de download, copiar e limpar
    document.getElementById("copiarBtn").style.display = "inline";
    document.getElementById("downloadLink").style.display = "inline";
    document.getElementById("limparBtn").style.display = "inline";
  }

  function copiarQRCode() {
    // Obter o código QR como uma imagem base64
    var qrCodeDiv = document.getElementById("qrcode").getElementsByTagName("img")[0];
    var qrCodeImage = qrCodeDiv.src;

    // Copiar para a área de transferência
    var tempInput = document.createElement("input");
    tempInput.value = qrCodeImage;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    document.getElementById('link_copiado').style.display = 'block'
    document.getElementById('baixando').style.display = 'none'
    document.getElementById('campo_limpo').style.display = 'none'
    document.getElementById('campo_vazio').style.display = 'none'
  }

  function downloadQRCode() {
    // Obter o código QR como uma imagem base64
    var qrCodeDiv = document.getElementById("qrcode").getElementsByTagName("img")[0];
    var qrCodeImage = qrCodeDiv.src;

    // Criar um link temporário para iniciar o download
    var tempLink = document.createElement("a");
    tempLink.href = qrCodeImage;
    tempLink.download = "github.com/heliocarlitos.png";
    tempLink.click();

    document.getElementById('baixando').style.display = 'block'
    document.getElementById('link_copiado').style.display = 'none'
    document.getElementById('campo_limpo').style.display = 'none'

  }

  function limparQRCode() {
    // Limpar input e div do QR Code
    document.getElementById("text-input").value = "";
    document.getElementById("qrcode").innerHTML = "";

    // Esconder botão de download, copiar e limpar
    document.getElementById("copiarBtn").style.display = "none";
    document.getElementById("downloadLink").style.display = "none";
    document.getElementById("limparBtn").style.display = "none";

    document.getElementById('campo_limpo').style.display = 'block'
    document.getElementById('gerar').style.display = 'block'
    document.getElementById('baixando').style.display = 'none'
    document.getElementById('link_copiado').style.display = 'none'
  }

  function showNotification(message, type) {
    var notificationArea = document.getElementById("notification-area");
    notificationArea.innerHTML = message;
    notificationArea.style.backgroundColor = type === "success" ? "#4CAF50" : type === "error" ? "#F44336" : "#2196F3";
    notificationArea.style.display = "block";
  }