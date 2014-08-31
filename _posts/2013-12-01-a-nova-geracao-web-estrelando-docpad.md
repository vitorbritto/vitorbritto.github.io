---
layout: post
title: "A nova geração Web: estrelando o DocPad"
description: O DocPad é um gerador estático, onde os autores desta excelente ferramenta o descrevem como a nova geração da arquitetura web; permitindo o gerenciamento de conteúdo atráves do sistema de arquivos, compilação através de plugins e que conta com alguns métodos para colocar o seu website em produção de maneira ágil.
link: "http://vitorbritto.com.br/blog/a-nova-geracao-web-estrelando-docpad/"
date: 2013-12-01
cover: "assets/images/posts/post-docpad.jpg"
avatar: "assets/images/avatar.jpg"
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

**UPDATE - 27/07/2014**: atualmente estou utilizando o [HarpJS](http://harpjs.com/) e não mais o DocPad.

Saudações!

O DocPad é um gerador estático, onde os autores desta excelente ferramenta o descrevem como a nova geração da arquitetura web; permitindo o gerenciamento de conteúdo atráves do sistema de arquivos, compilação através de plugins e que conta com alguns métodos para *deploy*.

Outra boa notícia é que o DocPad tem como base o [Node](http://nodejs.org/) e [Express](http://expressjs.com/), facilitando ainda mais a curva de aprendizado para quem já trabalha com JavaScript <i class="icon-heart"></i>.

## Me conte mais

Entenda que o DocPad não é um gerenciador de conteúdo (CMS) como o WordPress, Joomla ou Drupal. Porém, ele oferece um método prático para que seja criada uma estrutura robusta, flexível, rápida, leve e fácil de manusear.

O DocPad:

* É uma ferramenta agnostica (ou seja, você pode trabalhar com Ruby, PHP, CoffeeScript, Stylus…);
* Possui estruturas pré-definidas, denominada [Skeletons](http://docpad.org/docs/skeletons);
* Permite o *deploy* para [Heroku](http://www.heroku.com/), [Github Pages](http://pages.github.com/), [Amazon S3](https://github.com/bobobo1618/docpad-plugin-sunny), um *host* de sua preferência, entre outros;
* É construído em uma plataforma não-bloqueante;
* Possui um *core* altamente abstrato e re-utilizável;
* Possui uma curva de aprendizado pequena;
* Oferece uma configuração rápida em questão de minutos;
* Possui diversos *plugins* para otimização do seu projeto;
* Permite o versionamento do seu projeto de forma prática;
* Permite integração do [Socket.io](http://socket.io/) para comunicação em tempo real;
* Possibilita o compartilhamento de códigos diretamente entre o *client-side* e o *server-side* com o [Browserify](https://github.com/substack/node-browserify);
* Permite a utilização de pré-processadores, como: [CoffeeScript](http://coffeescript.org/), [CoffeeKup](http://coffeekup.org/), [Stylus](http://learnboost.github.com/stylus/) e [LESS](http://lesscss.org/).

## Instalando

Caso você já possua o Node instalado na sua máquina, o processo para a instalação se dá em um passo. De toda forma, vou cobrir o procedimento por completo. Vamos lá!

1. Para instalar o Node na sua máquina, basta acessar o site do [Node](http://nodejs.org/) e executar o download referente ao seu Sistema Operacional.
2. Atualize o NPM e instale o DocPad com o comando:

`npm install -g npm; npm install -g docpad@6.55`

> **Notas importantes:**
>
> 1. Para atualizações entre versões, confira este [guia](http://docpad.org/docpad/upgrade);
> 2. é recomendável que seja instalada uma versão estável do Node (v0.10.x) para se trabalhar com o DocPad;
> 3. caso seja necessário utilizar o `sudo` para rodar o passo 2 (dois), o time do DocPad recomenda que seja [realizada uma nova instalação do Node](http://docpad.org/node/install) de forma que esta opção não seja necessária. Os mesmos alertam sobre problemas de permissão no futuro;
> 4. em complemento, execute `docpad update` no diretório do seu projeto para assegurar que a instalação local do DocPad e seus *plugins* estejam atualizados e compatíveis com a última versão;
> 5. quando você executar o DocPad pela primeira vez, serão apresentadas duas perguntas:
> 	- Uma pergunta para saber se você está de acordo com os [termos de serviço](http://docpad.org/tos) do DocPad.
> 	- Outra, se você deseja se inscrever na newsletter do Docpad.
>
> *Os responsáveis pela ferramenta, afirmam que este passo é necessário e importante para manter a transparência com os seus usuários.*

## Antes de iniciar

É importante que você tenha em mente 2 pontos necessários para a utilização do DocPad:

1. Sobre comando `docpad --help`, pois ele será o seu braço direito nessa jornada;
2. Que você saiba como funciona a estrutura desta ferramenta. Isso vai facilitar o seu manuseio e entendimento. Confira:

```
projeto/
├── out/
├── src/
│   ├── documents/ (pode ser nomeado como render/)
│   ├── files/ (pode ser nomeado como static/)
│   └── layouts/
├── docpad.coffee
└── package.json
```

##### out
Este diretório contém os arquivos gerados pelo Docpad.

##### src
Este diretório contém os arquivos de origem do seu projeto. Ou seja, tudo o que será renderizado no diretório `out` vai sair daqui. Além disso, dentro deste diretório ainda temos os diretórios:

* `layouts`
* `documents`
* `files`

##### layouts
O *layout* funciona de uma forma muito parecida com um *document* podendo ser renderizados, além de suportar metadados. Diferente do *document*, o *layout* não será renderizado para o diretório `out`, já que servem apenas para servir de **container** para eles mesmos ou um *document*.


##### documents
Arquivos a serem renderizados. A renderização ocorre de uma extensão para outra, assim como no Rails (Asset Pipeline). Isto significa que um documento `documento.ext1.ext2` será renderizado de `ext2` para `ext1`, resultando em `documento.ext1`.

Ex.: `src/documents/script.js.coffee` para `out/script.js` **ou** `src/documents/blog/main.html.md` para `out/blog/main.html`.

##### files
Os arquivos neste diretório são como os documentos, porém estes são renderizados para o diretório `out`. A diferença é que os arquivos encontrados aqui não serão compilados e nem suportam metadados. Ou seja, os arquivos deste diretório serão jogados diretamente no diretório `out`.

##### docpad.coffee
Este arquivo define as configurações do DocPad e pode ter diferentes extensões. Confira mais detalhes [aqui](http://docpad.org/docpad/config).

##### package.json
Este arquivo é necessário para qualquer aplicação em Node. Ele define os dados do seu projeto, a versão do DocPad, além dos plugins que serão utilizados.

## Pronto para começar?

Com os devidos conhecimentos sobre esta ferramenta, chegou a hora de inciarmos um exemplo prático de projeto com o Docpad.

O que faremos neste exemplo prático?

1. Vamos criar a estrutura do projeto;
2. Inserir do conteúdo inicial necessário;
3. Otimizar o processo de desenvolvimento;
4. Utilizar os benefícios dos pré-processadores *(para as 3 camadas de desenvolvimento front-end)*;
5. Agregar uma melhor flexibilidade ao nosso projeto;
6. Inserir o restante do conteúdo;

### Criando a nossa estrutura

Antes de começarmos a desenvolver o nosso projeto, precisamos de uma estrutura para ele. Para isso, execute o seguinte comando:

```
mkdir <nome-do-seu-projeto> && cd $_ && docpad run
```

> Perceba que estamos executando **3 comandos** na mesma linha. Neste caso, estamos utilizando o operador `&&` para executar uma instrução mais compacta, além da variável `$_` que está sendo utilizada como referência para o nome do diretório criado anteriormente.

Quando o *prompt* aparecer, selecione **No Skeleton** para que possamos criar uma estrutura do zero para o nosso projeto. O comando `docpad run` continuará rodando, isto porque o DocPad possui um recurso para observar as mudanças dos nossos arquivos, assim como gerar novos a cada mudança que for feita. Além disso, será iniciado um servidor web em `http://localhost:9778` para que possamos ver como o nosso projeto está ficando.

> **Nota:** para encerrar o comando `docpad run`, pressione `CTRL+C`.

### Inserindo conteúdo inicial

Nossa estrutura está pronta, então vamos inserir algum conteúdo.

#### As páginas em primeiro lugar

Dentro do diretório `/documents`, crie a página `index.html` e insira o conteúdo abaixo:

~~~html
<!doctype html>
<html>
<head>
    <title>Bem vindo! | Projeto com DocPad</title>
</head>
<body>
    <h1>Bem vindo!</h1>
    <p>Este é o Projeto com DocPad!</p>
</body>
</html>
~~~

Salve e abra o seu navegador preferido no endreço [http://localhost:9778](http://localhost:9778) (ou atualize o navegador, caso já esteja aberto).

Show de bola! Como pode ver, o DocPad gerou um novo arquivo para a página que acabamos de criar. Agora, vamos criar uma página interna e inserir um *layout* também.

Para isso, vamos criar, no mesmo diretório anterior (`/documents`), um novo documento chamado `sobre.html` e inserir o conteúdo abaixo:

~~~html
<!doctype html>
<html>
<head>
    <title>Sobre | Projeto com DocPad</title>
</head>
<body>
    <h1>Sobre</h1>
    <p>Este é o meu primeiro projeto com o <strong>fantástico gerador estático DocPad</strong>.</p>
</body>
</html>
~~~

Salve o documento e acesse o endereço [http://localhost:9778/sobre.html](http://localhost:9778/sobre.html).

Perfeito! Temos as duas páginas criadas. Entretanto, duplicar informações em nossos documentos é algo extremamente desnecessário. Com um *layout*, podemos definir as áreas "dinâmicas" que poderão ser reaproveitadas em nosso *document*. Sendo assim, vamos mover os conteúdos repetidos dos nossos documentos para um layout chamado `default.html.eco` localizado no diretório `layouts`.

Veja como faremos isso:

**`src/layouts/default.html.eco`**

~~~html
<!doctype html>
<html>
<head>
    <title><%= @document.title %> | Projeto com DocPad</title>
</head>
<body>
    <h1><%= @document.title %></h1>
    <%- @content %>
</body>
</html>
~~~

**`src/documents/index.html`**

~~~html
---
title: "Bem vindo!"
layout: "default"
isPage: true
---

<p>Este é o Projeto com DocPad!</p>
~~~

**`src/documents/sobre.html`**

~~~html
---
title: "Sobre"
layout: "default"
isPage: true
---

<p>Este é o meu primeiro projeto com o <strong>fantástico gerador estático DocPad</strong>.</p>
~~~

Ok! Mas, ainda temos um pequeno problema. Perceba que se você acessar estas páginas no servidor web, não será renderizado o conteúdo desejado. Isto acontece pois ainda não possuímos um *(template engine)* para renderizar este layout para nós. Perceba que adicionamos também, um atributo chamado `isPage`. Vamos falar sobre esse cara mais a frente.

#### Logo depois vem o template engine.
*Template engines* nos permitem inserir abstrações de código no nosso documento. Neste exemplo usaremos o plugin [eco](http://docpad.org/plugin/eco). Então, vamos instalar esse cara.

Para isso, vamos parar o Docpad (CTRL+C) e executar:

`docpad install eco`

Uma vez que o plugin for instalado, vamos executar novamente o DocPad com o comando `docpad run` e abrir o navegador nos endereços mencionados anteriormente para visualizarmos as páginas do nosso projeto com o conteúdo gerado.

> **Notas importantes:**
>
> 1. Confira a [lista de plugins](http://docpad.org/docpad/plugins) disponíveis para o DocPad;
> 2. Perceba que no topo dos nossos documentos, temos novas informações dentro dos `---`. São os metadados, os quais são responsáveis por informações referentes ao nosso documento, como: título, layout utilizado, data, entre outros. Você pode definir o que achar conveniente. Entretanto, existem algumas propriedades já definidas com os seus respectivos propósitos. Saiba mais sobre os *metadados* [aqui](http://docpad.org/docpad/meta-data)

### Otimizando o processo

Já temos dois documentos e um layout para abstrair informações deles. Mas, a medida em que vamos realizando alterações, seria interessante se tivessemos um mecanismo capaz de atualizar estas mudanças automaticamente no nosso navegador.

#### O que fazemos para melhorar isso?
Para isso, vamos utilizar o plugin [Live Reload](http://docpad.org/plugin/livereload). Finalize o DocPad (CTRL+C), execute o comando `docpad install livereload` para instalar o plugin e reinicie o DocPad logo em seguida.

Mas, o nosso processo não está concluído. Precisamos adicionar um *block* (bloco) para ativar o nosso plugin *Live Reload*.

Os blocos são peças fundamentais para adicionarmos *scripts*, *styles* e outros elementos em nossas páginas. No caso do plugin *Live Reload*, o mesmo precisa de um bloco *script* para ser injetado e ativado no nosso documento.

Para fixarmos esta nova informação, vamos adicionar alguns blocos no nosso *layout*, o qual foi chamado anteriormente de `default.html.eco`.

O nosso layout ficará assim agora:

~~~html
<html>
<head>
    <title><%= @document.title %> | Projeto com DocPad</title>
    <%- @getBlock("meta").toHTML() %>
    <%- @getBlock("styles").toHTML() %>
</head>
<body>
    <h1><%= @document.title %></h1>
    <%- @content %>
    <%- @getBlock("scripts").toHTML() %>
</body>
</html>
~~~

Atualize o seu navegador manualmente e perceba que na próxima alteração realizada ele será atualizado automaticamente. Show de bola, né? :)

#### E os nossos blocos?
Agora, vamos trabalhar estes caras. Serão adicionados *scripts*, *styles* e *imagens* no nosso projeto.

##### Imagens
Vamos adicionar um logo no `header` do nosso projeto. O arquivo será colocado no diretório `files` em `src/files/images/logo.png` e posicionado no corpo do nosso layout para que seja chamado em cada documento:

**default.html.eco**

~~~html
<body>
  <img src="/images/logo.gif" />
  <h1><%= @document.title %></h1>
  <%- @content %>
  <%- @getBlock("scripts").toHTML() %>
</body>
~~~

> Nota: escolha uma imagem qualquer para exemplificar o seu logo.

##### Styles
Agora, vamos adicionar um CSS básico no `h1` dos nossos documentos. Para isso, adicione o arquivo `style.css` em `src/documents/css/style.css` e insira:

~~~css
h1 {
    color: red;
}
~~~

depois, atualize o bloco *styles* no layout `default.html.eco`:

~~~html
<%- @getBlock("styles").add(["/css/style.css"]).toHTML() %>
~~~

##### Scripts
Para finalizar, vamos adicionar um efeito muito simples utilizando JavaScript.

Primeiro, faça o download do [jQuery](http://code.jquery.com/jquery.js) para este exemplo e coloque-o no diretório `files` em `src/files/js/vendor/jquery.js`.

Agora que o jQuery já está incluso no projeto, vamos criar outro arquivo chamado `script.js` em `src/documents/js/script.js` e inserir o conteúdo abaixo:

~~~javascript
(function(){
    $("body").hide().fadeIn(1000);
})();
~~~

depois, atualize o bloco *script* no layout `default.html.eco`:

~~~html
<%- @getBlock("scripts").add(["/js/vendor/jquery.js","/js/script.js"]).toHTML() %>
~~~

Pronto! Mas, o nosso método para carregar o *CSS* e *JavaScript* não é muito adequado e não favorece para a performance do nosso projeto. O que podemos fazer a respeito? Vamos conversar sobre pré-processadores. :)

### Extraindo os benefícios dos pré-processadores

Agora, as coisas começam a ficar mais interessantes. Vamos utlizar pré-processadores para elevar o nível de produtividade no nosso projeto e agregar maior desempenho e performance.

> Nota: fique a vontade para utilizar o pré-processador da sua preferência. Confira os pré-processadores disponíveis [aqui](http://docpad.org/docpad/plugins)

Neste exemplo, vamos utilizar os seguintes pré-processadores:

* **Markdown** -> HTML
* **Stylus** -> CSS
* **CoffeeScript** -> JavaScript

Como faremos isso? Antes de mais nada, interrompa o DocPad (CTRL+C). Em seguida, execute os passos abaixo:

#### Markdown -> HTML
1. Instale o plugin [Marked Markdown](http://docpad.org/plugin/marked) com o comando `docpad install marked`.
2. Renomei a página `sobre.html` para `sobre.html.md` (isto vai indicar que queremos compilar o arquivo Markdown em HTML).
3. Abra o arquivo `sobre.html.md` e escreva o conteúdo abaixo com a sintaxe *markdown*:

```
Este é o meu primeiro projeto com o **fantástico gerador estático DocPad**.
```

#### Stylus -> CSS
1. Instale o plugin [Stylus](http://docpad.org/plugin/stylus/) com o comando `docpad install stylus`.
2. Renomei o arquivo `style.css` para `style.css.styl` (isto vai indicar que queremos compilar o arquivo Stylus em CSS).

> Nota: escolha o pré-processador CSS que se adapta melhor ao seu *Workflow*.

#### CoffeeScript -> JS
1. Instale o plugin [CoffeeScript](http://docpad.org/plugin/coffeescript/) com o comando `docpad install coffeescript`.
2. Renomei o arquivo `script.js` para `script.js.coffee` (isto vai indicar que queremos compilar o arquivo CoffeeScript em JavaScript).
3. Abra o arquivo `script.js.coffee` e atualize o seu conteúdo para refletir o abaixo:

```
$("body").hide().fadeIn(1000)
```

Nos três procedimentos anteriores, o resultado final será o mesmo. Entretanto, estaremos utilizando os benfícios do *markdown*, *stylus* e *coffeescript* a partir de agora. Execute o DocPad com o comando `docpad run` e faça alguns testes.

Bem melhor, né? :)

### Agregando maior flexibilidade ao nosso projeto
O nosso projeto está quase pronto. Já temos uma estrutura definida, parte do conteúdo inserido e recursos como Live Reload e Pré-processadores prontos para serem utlizados. O que mais podemos otimizar no projeto?

Existem 2 pontos ainda que podemos trabalhar. Serão explicados separadamente, mas que trabalham em conjunto.

São eles:

1. Configurações do projeto (`docpadd.coffee` ou `docpad.js`)
2. Abstrações com o uso de *Template Data* e *Template Helpers*

#### Configurações de projeto

Este é um dos passos mais importantes na criação de um projeto com o DocPad. O arquivo de configuração do DocPad nos permite criar abstrações e concentrar informações a respeito do projeto com a ajuda do *Template Data* e *Template Helpers*.

Este arquivo deve ser colocado no diretório raiz do seu projeto e nomeado de acordo com uma das extensões abaixo. É importante lembrar que cada extensão possui suas particularidades. Confira:

* `docpad.js` - arquivo JavaScript. Ex.: `module.exports = { /* configuração aqui */ }`
* `docpad.coffee` - arquivo CoffeeScript. Ex.: `module.exports = /* configuração aqui */`
* `docpad.json` - arquivo JSON. Ex.: `{ /* configuração aqui */ }`
* `docpad.cson` - arquivo CSON. Ex.: `/* configuração aqui */`

A vantagem dos arquivos `docpad.js` e `docpad.coffee` é que possibilitam a declaração de funções. No entanto, para os casos em que você não queira confiar o conteúdo dos seus arquivos de configuração para terceiros, o uso do `docpad.json` ou `docpad.cson` é mais pertinente.

Toda vez que iniciamos um projeto com o DocPad, é criado um arquivo de configuração chamado `docpad.coffee`. Caso este arquivo não esteja presente, será preciso criá-lo manualmente. Para isso, siga os passos abaixo:

1. Crie um arquivo `docpad.coffee` *(ou com uma das extensões supracitadas)*
2. Insira o conteúdo abaixo:

~~~javascript
# Configurações do DocPad
docpadConfig = {
    # ...
}

# Exportar a configuração
module.exports = docpadConfig
~~~

Perceba que:

* A primeira parte é onde vamos colocar as configurações do nosso projeto;
* A segunda parte será utiliza para exportar estas configurações para outro arquivo, caso seja necessário.

Confira mais informacões a respeito do arquivo de configuração [aqui](http://docpad.org/docpad/config)

> Importante: para validar as mudanças realizadas no seu arquivo de configuração, será necessário reiniciar o DocPad.

#### Abstrações com o uso de *Template Data* e *Template Helpers*
Agora que você conhece o arquivo de configuração do DocPad, vamos entender como o *Template Data* e *Template Helpers* podem ser úteis neste processo.

Imagine que o nosso projeto já conta com 5 páginas. Não seria muito mais prático concentrar determinadas informações em um local (ou utilizando alguma técnica) capaz de nos fornecer um método mais prático para gerenciá-los?

Pois! É isso que o arquivo de configuração, juntamente com o *Template Data* e *Template Helpers*, faz.

##### Template Data

Tudo o que está disponível em nossos *templates* é chamado de [TemplateData](http://docpad.org/docpad/template-data). Por exemplo, `@document` é parte dos dados em nosso *template*. Para ser capaz de abstrair algo que nossos *templates* vão usar, teremos de estender os nossos dados. Nós podemos fazer isso, modificando o valor de uma propriedade. Vamos aplicar isso na prática para ver como fica.

No seu arquivo de configuração `docpad.coffee`, atualize o conteúdo para refletir o seguinte:

~~~javascript
docpadConfig = {
    templateData:
        site:
            title: "Projeto com DocPad"
}
~~~

Com isso, nosso título encontra-se abstraído e podemos atualizar a tag `<title>` no *template* `default.html.eco`:

~~~html
<title><%= if @document.title then "#{@document.title} | #{@site.title}" else @site.title %></title>
~~~

No entanto, podemos deixá-lo mais abstrato com o uso de uma função no nosso arquivo de configuração. É aí que o *Template Helpers* entra em ação.

##### Template Helpers

Quando utilizamos as extensões `.coffee` ou `js`, podemos definir funções. Com isso podemos utilizar funções para os dados do nosso *template*, o qual chamamos de *Template Helpers*.

Assim, vamos atualizar o nosso arquivo de configuração:

~~~javascript
docpadConfig = {
    templateData:
        site:
            title: "Projeto com DocPad"

        getTitle: -> if @document.title then "#{@document.title} | #{@site.title}" else @site.title
}
~~~

e o título do nosso *template* `default.html.eco` para:

```
<title><%= @getTitle() %></title>
```

> Nota: para mais detalhes a respeito de *Template Data* e *Template Helpers*, [clique aqui](http://docpad.org/docs/template-data)

### Inserindo o restante do conteúdo
A inserção do conteúdo foi dividido em dois momentos, pois está segunda parte lida com *Template Data* e *Template Helpers*. Desta forma, não faria sentido algum mencionar estes caras sem ao menos conhecer o mecanismo por trás deles.

Até o momento, criamos 2 páginas para o nosso projeto.

São elas:

* `index.html`
* `sobre.html`

Agora, vamos criar um menu para navegar no nosso projeto, mas, antes, vamos atualizar o nosso *layout* `default.html.eco` e inserir, logo após o `h1`, o conteúdo abaixo:

	<ul>
	    <% for page in @getCollection("html").findAll({isPage:true}).toJSON(): %>
	        <li class="<%= if page.id is @document.id then 'active' else 'inactive' %>">
	            <a href="<%= page.url %>">
	                <%= page.title %>
	            </a>
	        </li>
	    <% end %>
	</ul>

Salve o arquivo! Perceba que temos um menu em cada página, mas vamos dissecar o que fizemos para um melhor entendimento:

1. Utilizamos o *Template Helper* `getCollection()` para inserir a *collection* `html`, a qual é uma coleção pré-definida no DocPad que contém todos os documentos HTML do nosso projeto.
2. Com esta *collection*, nós avaliamos o que for página com o atributo `isPage`, caso o mesmo esteja definido como `true` (lembre que definimos este cara logo no início).
3. Então, convertemos/persistimos o resultado através da [*collection* do Backbone](http://backbonejs.org/#Collection) / [QueryEngine](http://docpad.org/queryengine/guide) em um array, utilizando o método `toJSON()`.

No começo pode parecer complicado absorver estas informações, mas com o tempo você pegará o jeito. :)

O nosso menu está criado. Porém, executar essa consulta toda vez que renderizarmos o *layout* não é muito válido. Para isso, vamos atribuir um método capaz de executar esta consulta uma vez somente e fornecer o acesso aos resultados dessa *collection*.

Abra o seu arquivo `docpad.coffee` e atualize-o com o conteúdo abaixo:

```
docpadConfig = {
    collections:
        pages: ->
            @getCollection("html").findAllLive({isPage:true})
}
```

em seguida, substitua a linha do *Template Helper* `getCollection` no seu arquivo `default.html.eco` para:

```
<% for page in @getCollection("pages").toJSON(): %>
```

## Ampliando os horizontes

A leitura da documentação é essencial para que possamos nos aprofundar nos conceitos e métodos utilizados pela ferramenta/tecnologia e extrair o máximo dela. Leia a documentação, pesquise se as dúvidas persistirem e pratique os conhecimentos adquiridos.

Vou deixar **dois exercícios** para que você possa praticar e melhorar ainda mais os seus conhecimentos com esta ferramenta.

### Criando uma seção de Posts

1. Crie um novo *document* chamado `post`, o qual utilizará o *layout* `default`.
2. Insira neste novo *document*, o conteúdo: `<div class="post"><%- @content %></div>`.
3. Crie um novo diretório `posts`, que será responsável por abrigar as suas publicações.
4. Crie uma novo *layout* chamado `posts.html.eco` que será reponsável por listar as suas publicações.

> **Notas:**
> 1. Ao criar um novo *post* recomendo que utilize um metadado para datas, no formato `date: 2013-12-01`.
> 2. [Confira](http://docpad.org/docpad/meta-data) quais *Meta Datas* podem ser utilizadas.

### Fazendo o *deploy* para o Github Pages

Existem alguns métodos para realizar o *deploy* do seu projeto, mas neste exemplo iremos utilizar o GitHub Pages. Para isso, vamos realizar dois passos apenas:

1. Faça o download do plugin [GitHub Pages](http://docpad.org/plugin/ghpages). Execute o comando: `docpad install ghpages`.
2. Realize o procedimento de *deploy* com o seguinte comando: `docpad deploy-ghpages --env static`

Então, é isso! Agora você está pronto para utilizar o DocPad nos seus projetos. Mas, lembre-se de elaborar um planejamento antes de iniciar qualquer projeto e avaliar a real necessidade do uso desta ferramenta no seu projeto.

Até a próxima! =]
