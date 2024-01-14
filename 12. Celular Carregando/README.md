## [VISUALIZAR](https://hcadeveloper.github.io/Celular-Carregando/)

# Documentação do Código HTML e CSS

Aqui está a documentação completa para o código HTML e CSS fornecido:

## HTML

### Estrutura Geral
```html
<div class="celular">
    <div class="tela">
        <!-- Conteúdo da tela do celular -->

        <div class="led_sensor_e_camera">
            <!-- LEDs, sensor, autofalante e câmera -->
        </div>

        <div class="SeccaoDeBateria">
            <!-- Seção da bateria com pino e indicador de carga -->
        </div>
    </div>
</div>

<div class="caboG"><span>⚡</span></div>
<div class="bico"></div>
<div class="fio"></div>
```

## CSS

### Reset de Estilos
```css
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
```

### Estilos Globais
```css
body {
    background-color: black;
}
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}
```

### Estilos do Celular
```css
.celular {
    /* Estilos para o corpo do celular */
}

.celular::after, .celular::before {
    /* Elementos adicionais para simular sombras na borda do celular */
}

.tela {
    /* Estilos para a tela do celular */
}

.led_sensor_e_camera {
    /* Estilos para a seção de LEDs, sensor, autofalante e câmera */
}

.led_e_sensor {
    /* Estilos para LEDs e sensor */
}

.autofalante, .camera span {
    /* Estilos para o autofalante e a câmera */
}

.SeccaoDeBateria {
    /* Estilos para a seção da bateria */
}

.pino, .Bateria, .Bateria::after {
    /* Estilos para o pino, a bateria e o indicador de carga */
}
```

### Estilos do Conector e Cabo
```css
.cabo span {
    /* Estilos para o conector USB */
}

.caboG, .bico, .fio {
    /* Estilos para o cabo, bico e fio */
}
```

### Animações
```css
@keyframes piscando {
    /* Animação para o LED piscando */
}

@keyframes carregando {
    /* Animação para o indicador de carga da bateria */
}
```

Esta documentação deve ajudar a entender a estrutura e os estilos presentes no código HTML e CSS fornecido. Certifique-se de adaptar as classes e os estilos conforme necessário para atender aos requisitos específicos do seu projeto.