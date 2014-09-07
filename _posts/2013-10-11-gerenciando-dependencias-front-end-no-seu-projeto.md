---
layout: post
title: "Gerenciando dependências Front-end no seu projeto"
description: Imagine ter de instalar e gerenciar bibliotecas de terceiros toda vez que iniciar um novo projeto. Já pensou nas etapas que você terá de realizar? Com o Bower, o gerenciamento de suas dependências se torna ágil, prático e inteligente.
link: "http://vitorbritto.com.br/blog/gerenciando-dependencias-front-end-no-seu-projeto/"
date: 2013-10-11
path: 2013-10-11-gerenciando-dependencias-front-end-no-seu-projeto.md
cover: "assets/images/posts/post-bower.jpg"
comments: true
---

Saudações!

Sabemos da necessidade em ter um Workflow produtivo e inteligente, além de utilizar ferramentas que agregam poder e atalhos para gerenciar tarefas no desenvolvimento dos projetos. Uma dessas ferramentas é o Bower.

Imagine ter de instalar e gerenciar bibliotecas de terceiros toda vez que iniciar um novo projeto. Já pensou nas etapas que você terá de realizar?

Realmente, isso não é legal. Nem para você, nem para o seu tempo hábil, muito menos para o seu Workflow.

Com o Bower, o gerenciamento de suas dependências se torna ágil, prático e inteligente. Veja por quê.

### O que é o Bower?

O Bower é um gerenciador de pacotes front-end, executado através da linha de comando, que possibilita o gerenciamento de pacotes, mesmo que isso signifique HTML, CSS, ou imagens. Neste caso, um pacote qualquer, código de terceiros encapsulado, geralmente acessível ao público a partir de um repositório Git.

Algo importante que você deve saber sobre o Bower, é que ele é somente um gerenciador de pacotes. Nada mais além disso. Se você está em busca de uma ferramenta capaz de automatizar tarefas, procure pelo [Grunt](http://gruntjs.com/).

Então, vamos ao que interessa.

### Instalando

O Bower depende do [Node](http://nodejs.org/) e [NPM](http://npmjs.org/). Execute o comando abaixo para iniciar a sua instalação:

`npm install -g bower`

*Certifique-se também de que o [Git](http://git-scm.com/) está instalado na sua máquina pois, alguns pacotes necessitam dele para realizar o procedimento de busca e instalação.*

> **Uma nota para usuários de Windows**
>
> Para utilizar o Bower no Windows, você precisa ter instalado o [msysgit](http://code.google.com/p/msysgit/) corretamente. Certifique-se de checar a opção *Run Git from the Windows Command Prompt*.
>
> Note que se você estiver usando o **TortoiseGit** e o Bower continuar pedindo sua senha SSH, você deve adicionar a seguinte variável de ambiente: `GIT_SSH - C:\Program Files\TortoiseGit\bin\TortoisePlink.exe`. Ajuste o caminho `TortoisePlink` se necessário.

### Utilizando

Ao instalar o Bower, o seu braço direito será o comando `bower help`. Isto é o necessário para iniciar o seu uso.

**Executando como Administrador**

> O Bower pode ser executado por qualquer usuário do sistema, não há a necessidade de permissões administrativas. Entretanto, se ainda assim quiser executar os comandos com o `sudo`, utilize a opção `--allow-root`.

#### Encontrando pacotes

Para encontrar pacotes registrados no Bower, execute:

`bower search [<nome>]`

Confira o exemplo:

```bash
$ bower search socket
Search results:

    socket.io-client git://github.com/LearnBoost/socket.io-client.git
    angular-socket-io git://github.com/btford/angular-socket-io.git
    socket.io git://github.com/LearnBoost/socket.io
    web-socket-js git://github.com/gimite/web-socket-js.git
    socketio-file-upload git://github.com/vote539/socketio-file-upload.git
    simplesocket git://github.com/mkuklis/simplesocket.git
```

**Nota:** utilizando somente `bower search`, todos os pacotes serão listados.

#### Instalando pacotes e dependências

O Bower oferece diversas possibilidades para instalar as dependências no seu projeto:

```bash
# Através das dependências encontradas no diretório onde consta o arquivo bower.json
bower install

# Através de um pacote local ou remoto
bower install <pacote>

# Através de uma versão específica de um determinado pacote
bower install <pacote>#<versão>

# Através de um nome customizado e uma versão específica do pacote
bower install <nome>=<pacote>#<versão>
```

Onde `<pacote>` possui as seguintes possbilidades:

* Por um nome que mapeia o pacote registrado no Bower (ex.: `jquery`).
* Um ponto de saída remoto, sendo ele um repositório Git público ou privado (ex.: `git://github.com/usuario/um-pacote-qualquer.git`).
* Um ponto de saída local (ex.: uma pasta que se comporte como um repositório Git).
* O caminho relativo para um ponto de saída (ex.: usuário/repositório).
* A URL de um arquivo que possua um arquivo `zip` ou `tar` (o conteúdo será extraído).

Confira o exemplo:

```bash
$ bower install socket.io
bower socket.io#*           not-cached git://github.com/LearnBoost/socket.io.git#*
bower socket.io#*              resolve git://github.com/LearnBoost/socket.io.git#*
bower socket.io#*             download https://github.com/LearnBoost/socket.io/archive/0.9.15.tar.gz
bower socket.io#*              extract archive.tar.gz
bower socket.io#*             resolved git://github.com/LearnBoost/socket.io.git#0.9.15
bower socket.io#~0.9.15        install socket.io#0.9.15

socket.io#0.9.15 components/socket.io
```

> **Nota 1:** todos os conteúdos do pacote serão instalados no diretório `bower_components` por padrão. Você nunca deve modificar diretamente o conteúdo deste diretório.
>
> **Nota 2:** caso você possua um arquivo `bower.json` configurado e resolva instalar novas dependências, utilize a opção `--save`. Exemplo: `bower install <nova-dependencia> --save`.
>
> **Nota 3:** você pode configurar o `bower.json` criando um arquivo `.bowerrc`. A especificação atual pode ser lida [aqui](https://docs.google.com/document/d/1APq7oA9tNao1UYWyOm8dKqlRP2blVkROYLZ2fLIjtWc/edit#heading=h.4pzytc1f9j8k), na seção de **Configuração**.

#### Usando as dependências

O bower "não opina" no uso dos componentes instalados. Fica a critério do desenvolvedor em como os componentes vão se comportar.

A abordagem mais fácil é utilizar o Bower estaticamente. Basta fazer a referência para os componentes instalados manualmente usando a tag `script`:

`<script src="/components/jquery/index.js"></script>`

Para projetos mais complexos, você provavelmente vai querer concatenar seus scripts ou realizar um carregamento modular. Bower é apenas um gerenciador de pacotes, mas existem muitas outras ferramentas - como [Sprockets](https://github.com/sstephenson/sprockets) e [RequireJS](http://requirejs.org/) - que vai ajudá-lo a fazer isto.

##### Ajudando mais um pouco

O Bower disponibiliza um mapeamento de dados mas, isto pode ser feito através de uma ferramenta de *build* para consumí-los de forma eficaz.

Se você declarar a opção `--paths` no comando `list` do Bower, você terá um mapeamento para cada dependência no seu `bower.json`.

Confira o exemplo:

```bash
$ bower list --paths
{
  "backbone": "components/backbone/index.js",
  "jquery": "components/jquery/index.js",
  "underscore": "components/underscore/index.js"
}
```

Como alternativa, todos os comandos suportam a opcão `--json` que gera uma saída em JSON. Os comandos com resultados de saída terão `stdout` como destino, já os erros e logs terão como destino o `stderr`.

#### Atualizando as dependências

Existem duas formas para atualizar as dependências do seu pacote:

1. `bower update`: atualiza todas as dependências instaladas.
2. `bower update <dependência>`: atualiza uma dependência específica.

Confira o exemplo:

```bash
$ bower update
bower socket.io#~0.9.15         cached git://github.com/LearnBoost/socket.io.git#0.9.15
bower socket.io#~0.9.15       validate 0.9.15 against git://github.com/LearnBoost/socket.io.git#~0.9.15
```

#### Removendo as dependências

Para remover uma dependência local, execute: `bower uninstall <dependência>`

Confira o exemplo:

```bash
$ bower uninstall socket.io
bower uninstall     socket.io
```

#### Outros comandos para as dependências

O Bower possui alguns comandos que auxiliam no gerenciamento das dependências e que você deveria conhecer.

##### bower list

Com o `bower list` é possível mostrar as dependências instaladas localmente no seu pacote Bower.

Confira o exemplo:

```bash
$ bower list
bower check-new     Checking for new versions of the project dependencies..
bower#0.0.0 /Users/vitorbritto/temp/managers/bower
└── socket.io#0.9.15 extraneous
```

**Nota:** perceba que ao executar este comando, o Bower verifica se existe uma nova versão das dependências instaladas.

##### bower lookup

Com o `bower lookup` é possível verificar a *url* de uma dependência.

```bash
$ bower lookup jquery
jquery git://github.com/components/jquery.git
```

##### bower info

Com o `bower info` é possível verificar as versões disponíveis de uma dependência.

```bash
$ bower info modernizr
bower modernizr#*               cached git://github.com/Modernizr/Modernizr.git#2.6.2
bower modernizr#*             validate 2.6.2 against git://github.com/Modernizr/Modernizr.git#*

{
  name: 'modernizr',
  homepage: 'https://github.com/Modernizr/Modernizr',
  version: '2.6.2'
}

Available versions:
  - 2.6.2
  - 2.6.1
  - 2.5.3
  - 2.5.2
  - 2.5.1
  - 2.0.6

You can request info for a specific version with 'bower info modernizr#<version>'
```

##### bower cache clean

Com o `bower cache clean` é possível remover todos os pacotes mantidos em cache pelo Bower.

```bash
$ bower cache clean
bower deleted       Cached package jquery: /Users/vitorbritto/.cache/bower/packages/29cb4373d29144ca260ac7c3997f4381/2.0.3
bower deleted       Cached package modernizr: /Users/vitorbritto/.cache/bower/packages/49c1c17a4ec1b92db2a4728ece50773a/2.6.2
```

### Definindo um pacote

Para definir um pacote do Bower, é preciso criar o arquivo `bower.json` no diretório raiz do seu projeto e especificar as suas dependências. Isto é similar ao `package.json` do Node ou uma `Gemfile` do Ruby.

**Nota:** nas versões anteriores a **0.9.0** do Bower, o pacote de metadados era chamado de `component.json`, ao invés de `bower.json`. Isto foi modificado para impedir conflitos com outra ferramenta. Você ainda pode utilizar o `component.json`, mas lembre-se de que este é obsoleto e que será removido em um próximo lançamento.

O `bower.json` define uma série de opções, entre elas:

* `name` (obrigatório): nome do seu pacote.
* `version`: versão semântica (veja [semver](http://semver.org/)).
* `main` [string|array]: ponto(s) de saída do seu pacote.
* `ignore` [array]: lista dos arquivos que não serão colocados em produção.
* `dependencies` [hash]: dependências para produção.
* `devDependencies` [hash]: dependências para desenvolvimento.
* `private` [boolean]: define se o pacote será privado e/ou terá permissão para registro no futuro (mais a respeito sobre registro de pacotes, na seção **Registrando um pacote no Bower**).

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "main": "caminho/para/index.js",
  "ignore": [
    ".jshintrc",
    "**/*.txt"
  ],
  "dependencies": {
    "<name>": "<version>",
    "<name>": "<folder>",
    "<name>": "<package>"
  },
  "devDependencies": {
    "<test-framework-name>": "<version>"
  }
}
```

Mas, eu terei de criar esse arquivo manualmente?

Não! Você pode criar o arquivo `bower.json` dinamicamente com o comando: `bower init`.

Confira o exemplo:

```bash
$ bower init
[?] name: projeto-bower
[?] version: 1.0.0
[?] description: Meu primeiro projeto com Bower
[?] main file:
[?] keywords:
[?] authors: Nome do Autor <email@dominio.com.br>
[?] license: MIT
[?] homepage:
[?] set currently installed components as dependencies? Yes
[?] add commonly ignored files to ignore list? Yes
[?] would you like to mark this package as private which prevents it from being accidentally published to the registry? Yes

{
  name: 'projeto-bower',
  version: '1.0.0',
  description: 'Meu primeiro projeto com Bower',
  authors: [
    'Nome do Autor <email@dominio.com.br>'
  ],
  license: 'MIT',
  private: true,
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'components',
    'test',
    'tests'
  ]
}
```

### O que mais o Bower pode me oferece?

O Bower também possui uma API muito poderosa. Todos os comandos podem ser acessados através do objeto `bower.commands`.

Confira:

```javascript
var bower = require('bower');

bower.commands
.install(['jquery'], { save: true }, { /* configuração customizada */ })
.on('end', function (installed) {
    console.log(installed);
});

bower.commands
.search('jquery', {})
.on('end', function (results) {
    console.log(results);
});
```

`Commands` transmite quatro tipos de eventos: `log`, `prompt`, `end`, `error`.

* `log` é transmitido para reportar o estado/progresso do comando.
* `prompt` é transmitido sempre que houver a necessidade de exibir um alerta para o usuário.
* `error` será transmitido somente quando ocorrer um erro.
* `end` será transmitido quando o comando finalizar com sucesso.

Para se ter uma ideia de como este cara trabalha, é uma boa ideia você checar o arquivo `bin`.

Quando se utiliza o Bower programaticamente, o alerta é desabilitado por padrão. Embora você possa habilitá-lo ao chamar comandos com `interactive: true` na configuração. Isso requer que você espere pelo evento `prompt` e manuseie-o do seu jeito.
O jeito mais fácil é utilizando o módulo NPM [inquirer](https://npmjs.org/package/inquirer).

```javascript
var inquirer =  require('inquirer');

bower.commands
.install(['jquery'], { save: true }, { interactive: true })
// ...
.on('prompt', function (prompts, callback) {
    inquirer.prompt(prompts, callback);
});
```

### Colocando a mão na massa

Agora que você está familiarizado com o Bower, está na hora de criar um projeto a fim de colocar em prática o que você aprendeu.

**Execute os seguintes passos:**

1. Instale o bower na sua máquina *(instale o Node e Git, caso não estejam instalados ainda)*.
2. Crie um diretório para o exemplo prático
3. Crie o arquivo `bower.json` com as configurações do seu pacote *(utilize um comando do bower para criar este arquivo dinâmicamente)*.
4. **Procure** pelos seguintes pacotes: `jquery`, `modernizr` e `socket.io`.
5. **Instale-os** como dependências no seu projeto.
6. **Liste** as dependencias instaladas no seu projeto.
7. **Remova** a dependência `socket.io`.
8. Faça o **mapeamento** dos dados das dependências instaladas no seu pacote.
9. **Copie** o caminho gerado de cada dependência e **insira** na tag *script* respectivamente *(lembre-se de que você pode facilitar o uso dos componentes do bower com um carregamento modular)*.

### E chegamos ao fim…

Espero que este artigo tenha sido útil para você e que o Bower agregue produtividade ao seu Workflow. Recomendo a leitura da documentação e a prática constante.

Até a próxima! =]


##### Referências

- [Documentação original do Bower](http://bower.io/)
