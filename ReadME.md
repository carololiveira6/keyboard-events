<em>02 - Entrega: Recebendo Keyboard Events</em>

<h1>Entrega: Recebendo eventos do teclado</h1>

Agora que você já escreveu um número de programas que lidam com eventos de clique, vamos aprender sobre outro tipo de evento: O KeyboardEvent.

Nesta entrega, você criará uma página web simples que move uma caixa em resposta a eventos a teclas pressionadas.

<h2>Etapas</h2>

Como de costume, crie um novo repositório no gitlab.

Copie o [código de exemplo na documentação MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keydown_event) para eventos de teclado para um novo arquivo index.html.

Tente fazer isso. Você pode desejar modificar o exemplo para mudar o alert() para um console.log().

Pressione as teclas de cursor (setas) no teclado. Quais os nomes de tecla aparecem?

Você também pode verificar a [documentação de Valores de Teclas](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#navigation_keys) (em inglês) para encontrar os nomes associados às diversas teclas.

Adicione um div com id="box" dentro do elemento body da página, e aplique a seguinte regra CSS:

```
#box { width: 100px; height: 100px; position: absolute; background: gray; left: 200px; top: 200px; }
```

Inicialize duas variáveis globais fora do keydown listener:

```
let boxTop = 200;
let boxLeft = 200;
```

Modifique o keydown listener de forma que a tecla de nome "ArrowDown" adicione 10 à variável boxTop. Similarmente, faça o "ArrowUp" subtrair 10 da variável boxTop. Adicione a seguinte linha ao final do keydown listener para atualizar o atributo de estilo "top" da caixa:

```
document.getElementById("box").style.top = boxTop + "px";
```

Similarmente, adicione um código ao keydown listener de forma que as teclas de cursor para esquerda e para a direita modifiquem o atributo de estilo "left" da caixa.

Agora você deve conseguir mover a caixa pela página usando as teclas de seta.

Por fim, substitua a tediosa caixa cinza por uma imagem.

<h2>Envio</h2>

Adicione grupo <em>ka-br-<sua-turma>-correcoes</em> como membro do seu projeto com a permissão "Reporter", e envie a url do seu gitlab pages (Ex: https://nomedeusuario.gitlab.io/keyboard-events).