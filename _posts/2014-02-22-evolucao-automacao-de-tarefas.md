---
layout: post
title: A Evolução na Automação de Tarefas
description: Neste artigo, vou cobrir alguns pontos históricos, teóricos e mecânicos que foram (e continuam sendo) cruciais para as ferramentas de automação utilizadas nos dias de hoje.
link: http://vitorbritto.com.br/blog/evolucao-automacao-de-tarefas/
date: 2014-02-22
path: 2014-02-22-evolucao-automacao-de-tarefas.md
cover: assets/images/posts/post-evolucao-automacao-de-tarefas.jpg
avatar: assets/images/avatar.jpg
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

**UPDATE 27-07-2014:** o [just](http://vitorbritto.github.io/just/) encontra-se em nova versão. Confira o _source code_ e documentação [aqui](https://github.com/vitorbritto/just)

Saudações!

Há uns 4 meses, uma nova ferramenta veio ao conhecimento dos Desenvolvedores Front-end. Foi o maior rebuliço por conta da eficiência na execução de tarefas, da sua "semelhança" com o NodeJS e entre outras qualidades notáveis.

Você já deve estar ciente que estou falando do Gulp.

Tudo o que eu disse anteriormente, procede. O Gulp é uma ferramenta que prima por um encadeamento de tarefas mais compreensivo e organizado, fornecendo uma maneira muito prática para criar suas tarefas. Mas, você sabe o porquê dessa eficiência e como é possível esse encadeamento?

Neste artigo, vou cobrir alguns pontos históricos, teóricos e mecânicos, que foram (e continuam sendo) cruciais para as ferramentas de automação utilizadas nos dias de hoje.

## Me acompanhe nesta jornada

Para quem acompanha os artigos aqui publicados, sabe que estou fazendo muitos convites para voltar no tempo. Serei obrigado a fazer este convite mais uma vez para falarmos sobre alguns aspectos importantes do UNIX (e seus utilitários) e Shell, até chegarmos ao NodeJS.

Preparado? Então, vamos lá.

### UNIX nosso de cada dia

Entre os anos 60 e 80, a história da programação estava sendo redesenhada. Fosse Dennis Ritchie e Ken Thompson com o UNIX e a linguagem B/C, Douglas Engelbart com sua genialidade para criar ferramentas e recursos excitantes (o que lhe rendeu o título de ["The Mother of all Demos"][10]) ou Alan Kay, Dan Ingalls e Adele Goldberg com o SmallTalk e seu paradigma orientado a objetos.

Todos eles possuíam um objetivo em comum: tornar a portabilidade entre máquinas e sistemas operacionais viável e construir programas estruturados.

O grande responsável por trás de tudo isso, foi o UNIX (e continua sendo). Com ele, veio a linguagem C, o Shell (com _pipes_, _redirections_ e suas ferramentas), _Streams_, o utilitário _Make_ e outras _features_ que ajudaram (e ainda ajudam) na automação de tarefas, execução de processos e diversas rotinas.

> **Nota:** [neste artigo][11], abordo alguns pontos sobre a história do UNIX, sua filosofia e importância.

### Chamando o Shell Script para a brincadeira

O Shell Script sempre foi um grande aliado para os administradores UNIX. Além de ser uma caixinha de ferramentas poderosa para executar rotinas, possibilitava uma experiência muito boa com o usuário. Com ele, é possível criar pequenos programas para realizar _backup_, transferir arquivos de um sistema (local-\>local ou local-\>remoto), fazer consultas em extensos relatórios e muito mais.

Mas, como podemos tornar isso útil no desenvolvimento de um projeto web?

Me permita mostrar um exemplo:

    #!/bin/bash

    #
    # Programa: scaffolding.sh
    # Autor: Vitor Britto
    #
    # Descrição:
    # Este script será responsável pela criação
    # de uma estrutura para novos projetos.
    #
    # Uso: chmod u+x scaffolding.sh && ./scaffolding.sh
    #

    # Declarando as variáveis
    FILES="index.html robots.txt humans.txt .editorconfig assets/styles/style.css assets/scripts/main.js"
    PATHS="assets/scripts assets/styles assets/images assets/fonts"

    # Iniciando a interação com o usuário
    echo -n "→ Digite o nome do projeto (sem espaços): "
    read PROJECT

    # Criando estrutura do projeto
    echo -e "→ Criando Estrutura"

    mkdir -p $PROJECT && cd $_
    mkdir -p $PATHS
    touch $FILES

    # Mensagem final
    echo -e "\n✔ Processo finalizado!\n"


Neste programa, montamos uma estrutura inicial para um novo projeto.

Agora, confira o arquivo `build.sh`:

    #!/bin/bash

    #
    # Programa: build.sh
    # Autor: Vitor Britto
    #
    # Descrição:
    # Este script será responsável pelo build do projeto, o qual
    # fará o processo de minificação e concatenação dos arquivos
    # e preparação dos arquivos a serem colocados em produção.
    #
    # Uso: chmod u+x build.sh && ./build.sh
    #

    # Declarando as variáveis
    DIST="_build"
    IGNORE=(
        "assets/styles/style.css"
        "assets/scripts/main.js"
        ".editorconfig"
    )
    STYLE="assets/styles"
    SCRIPT="assets/scripts"

    # Minificar JS
    echo -e "→ Minificando JS"
    curl -X POST -s --data-urlencode "input@${SCRIPT}/main.js" http://javascript-minifier.com/raw > ${SCRIPT}/main.min.js

    # Minificar CSS
    echo -e "→ Minificando CSS"
    curl -X POST -s --data-urlencode "input@${STYLE}/style.css" http://cssminifier.com/raw > ${STYLE}/style.min.css


    # Copiar arquivos para pasta de destino
    echo -e "→ Colocando arquivos em produção"
    if [[ ! -d ${DIST} ]]; then
        mkdir ${DIST}
    fi

    cp ./* ${DIST}
    rm -rf ${IGNORE}


Já este programa, fica responsável pela automação de nossas tarefas. Nele, estamos executando tarefas para minificar e concatenar arquivos CSS e JavaScript, além de realizar uma cópia dos arquivos a serem colocados em produção.

Entretanto, podemos agregar uma maior utilidade para este _build script_ com mais alguns recursos interessantes. Podemos utilizar um pré-processador para fazer o trabalho **3 em 1** (compilação, concatenação e minificação), integrar o _uglifyjs_ para trabalharmos melhor com nossos _scripts_, viabilizar o uso do _rsync_, integrar o Grunt, Bower, Travis CI e torná-lo um repositório Git, além de possibilitar a execução de tarefas específicas para cada momento da automação. Muito melhor, não é?

Poderíamos fazer isso com Shell Script, mas o _Makefile_ se encaixa melhor neste cenário. E, é sobre ele que vamos falar agora.

### Fazendo um _upgrade_ no nosso processo de automação

Alguns Desenvolvedores tem um péssimo hábito em injetar plug-ins de forma frenética nos seus projetos, sem considerar uma leitura prévia na documentação da ferramenta que está utilizando, entre outras alternativas para se trabalhar com as tarefas desejadas. Lembre-se que devemos usar o bom senso e que a pesquisa é fundamental para o desenvolvimento de um projeto.

Nesta etapa, estaremos utilizando o _Make_. Caso você já o conheça, prossiga para o exemplo a seguir. Se você não o conhece, me permita apresentá-lo.

#### Make my day

O propósito do utilitário _Make_ é automatizar determinados trechos de um programa mais robusto. Este cara lhe permite administrar de forma mais prática a automação no seu projeto, lhe dando acesso aos recursos do Shell. Vale frisar que, a sua utilidade não deve ser negligenciada por conta de outras ferramentas.

> Tanto o Shell quanto o Make estão disponíveis apenas em sistemas **UNIX** (OSX, BSD e Linux). Caso você esteja utilizando o Windows, será possível executar este cara com a ajuda do [CygWin][15]

#### Colocando em prática

Para utilizar o _make_, você deve criar um arquivo `makefile` e executá-lo com o comando `make [tarefa que você quer executar]` no UNIX Shell.

Confira o exemplo abaixo:

    # MAKEFILE
    #
    # Autor: Vitor Britto
    # Versão: 0.1.0
    #
    #
    # Descrição:
    # Arquivo para gerar um estrutura inicial para
    # novos projetos e realizar tarefas de automação
    #
    #
    # Tarefas Disponíveis:
    #    make        -> Inicializa processo de Build
    #    make create -> Criar a estrutura do projeto
    #    make copy   -> Copia os arquivos para a pasta "public"
    #    make zip    -> Compacta os arquivos da pasta "public" e versiona com a data e hora atual
    #
    #
    # Uso: make [nome da tarefa que deseja executar]
    #

    # Caminhos de Origem
    JS_IN    = ./assets/scripts
    CSS_IN   = ./assets/styles
    IMG_IN   = ./assets/images

    # Caminhos de Destino
    DIST     = ./public
    JS_OUT   = ./public/assets/scripts
    CSS_OUT  = ./public/assets/styles
    IMG_IN   = ./public/assets/images

    # Configurações Gerais
    CHECK    = \033[32m✔\033[39m
    HR       = -----------------------------------------------------
    IGNORE   = ("assets/styles/style.css" "assets/scripts/main.js" "package.json" "bower.json" ".gitignore" ".git" ".travis.yml" ".editorconfig")
    NODE     = ./node_modules/.bin
    PACKAGE  = pkg_projeto
    VERSION  = date "+%Y.%m.%d"
    RELEASE  = $(PACKAGE)-$(VERSION)

    # Inicializar processo de Build
    all: init styles scripts

    help:
        @cat help.txt

    # Mensagem de Inicialização
    init:
        @echo "\n$(HR)"
        @echo "→ Iniciando processo de Build"
        @echo "$(HR)\n"


    # Criar Estrutura para novos projetos
    create:
        @echo "→ Iniciando download"
        @echo "\n"
        @curl -fsSL https://gist.githubusercontent.com/vitorbritto/9128566/raw/bf3d531d39afc7fec5a034f968569fc7883f0c2e/create.sh > create.sh
        @chmod u+x create.sh && ./create.sh

        @mkdir -p $(DIST)


    # Tarefa para Estilos
    styles:
        @$(NODE)/stylus -c < $(CSS_IN)/style.styl > $(CSS_OUT)/style.css
        @echo "→ Compilando CSS              $(CHECK) Feito!"

    # Tarefa para Scripts
    scripts:
        @$(NODE)/uglifyjs -o $(JS_IN)/main.js > $(JS_OUT)/main.min.js
        @echo "→ Minificando Scripts         $(CHECK) Feito!"

    # Copiar arquivos para a pasta "public" via Rsync
    copy:
        @echo "→ Copiando arquivos"
        @rsync -aq --exclude="$(IGNORE)" $(DIST)

    # Compactar arquivos na pasta "public"
    zip:
        @echo "→ Compactando arquivos" \
        @zip -r $(RELEASE) $(DIST)/*

    # Instalar dependências
    modules:
        @echo "→ Instalando dependências" \
        @npm install

    # Execute all with "make"
    .PHONY: all copy zip


Neste arquivo `makefile`, temos duas tarefas principais:

1. Criar uma estrutura inicial para o projeto
2. Executar tarefas de automação no nosso projeto

**O que foi feito?**

* Perceba que para gerar o _scaffolding_, estamos utilzando o [cURL][17] com [_redirections_][18]. Com isso, deixamos o nosso `makefile` mais enxuto e objetivo.
* Integramos um gerenciador de pacotes (Bower) e iniciamos um repositório local com o Git.
* Incluímos um arquivo para que seja possível realizar a Integração Contínua com o Travis CI.
* Estamos utilizando os módulos [_uglify-js_][19] e [_stylus_][20], instalados via **npm**, para trabalhar com os arquivos de formatação (CSS) e comportamento (JavaScript).
* Agora, a cópia dos nossos arquivos é feita através do [_rsync_][21], o que possibilita a sincronização e cópia apenas para arquivos novos/modificados.
* Incluímos uma tarefa para versionar o projeto, com a compressão de arquivos em formato ZIP, composta pelo nome do projeto e data em que foi criado.
* Criamos o arquivo `help.txt` para instruções de uso e descrição das tarefas. Confira abaixo:

```
-------------------------------------------------------------
Tarefas Disponíveis:
    make        -> Tarefa padrão (all + copy + zip)
    make all    -> Inicializa processo de Build
    make create -> Criar a estrutura do projeto
    make copy   -> Copia os arquivos para a pasta "public"
    make zip    -> Comprime os arquivos da pasta "public"
                    e versiona com a data e hora atual
Uso:
    make [nome da tarefa que deseja executar]
-------------------------------------------------------------
```

#### Entretanto...

Para quem trabalha com Desenvolvimento Front-End, este escopo de automação pode não se enquadrar muito bem na sua realidade. E, por que? Ora, pois a camada que lida com os comportamentos no Front-End é o JavaScript. Logo, nada mais sensato que utilizar está linguagem para criar um _build script_ e executar a automação de tarefas no projeto. Não concorda?

Entretanto, você percebeu quantas ferramentas e métodos conseguimos utilizar com o _Shell Script_ e _Makefile_, sem o uso de plugins, Grunt ou Gulp?

Pois! Com isso, você viu que podemos realizar a cópia de arquivos através do _Rsync_ ou com um simples comando `cp`. Que podemos utilizar o comando `zip` para a compressão de arquivos e versionamento. Que podemos executar comandos diretamente no Shell para trabalhar com arquivos CSS e JavaScript, além de criar uma estrutura para um novo projeto.

## Automação nos dias de hoje

Não há dúvidas de que o Ryan Dahl teve uma grande inspiração no UNIX e linguagem C para criar o NodeJS. É perceptível, pelo fato de que o C está ligado diretamente ao UNIX e NodeJS lida com processos, fluxo de dados (input/output, read/write) e eventos, o que nos leva de volta ao UNIX.

Mas, o que faz o NodeJS ser tão interessante?

### Utilizar JavaScript "em todo os lados"

O NodeJS possibilita que você desenvolva aplicações com JavaScript no _server-side_!

Agora sim, Vitor! Você está falando minha língua!

Pois é, meu caro. E, se você ligou todos os pontos, percebeu que podemos criar uma ferramenta de automação em cima do NodeJS também (sem Gulp ou Grunt).

E como faremos isso?

### Talk is cheap, show me the code!

Para comprovar que Unix, Shell e NodeJS estão interligados, utilizaremos os seguintes módulos:

* [Commander][26]
* [ShellJS][27] - _Sweet!_
* [Cli-color][28]

Confira o exemplo abaixo:

    // Configuracão
    var config = require('./config');

    // Dependências
    var cli   = require('commander'),
        sh    = require('shelljs'),
        color = require('cli-color');

    // Mensagens
    var error    = color.red.bold,
        warn     = color.yellow,
        info     = color.grey,
        notice   = color.cyan,
        success  = color.green;


    // Comandos
    cli
        .command('init')
        .description('Inicializar o processo de Build.')
        .action(build);

    cli.parse(process.argv);

    // Compilar arquivos Sass para CSS
    function initCompile(){
        if (!sh.which('stylus')) {
            sh.echo(error('✖ Você precisa ter o "stylus" instalado globalmente no seu sistema.'));
            sh.echo(warn('Instalação: npm install stylus -g'));
            exit(1);
        }
        sh.echo(notice('→ Compilando arquivos'));
        sh.exec('stylus -c <' + config.paths.src.css + 'style.styl> ' + config.paths.out.css + 'style.css');
    }

    // Validar Scripts
    function initValidate() {
        if (!sh.which('jshint')) {
            sh.echo(error('✖ Você precisa ter o "jshint" instalado globalmente no seu sistema'));
            sh.echo(warn('Instalação: npm install jshint -g'));
            exit(1);
        }
        sh.echo(notice('→ Validando scripts'));
        sh.exec('jshint ' + config.paths.src.js + 'main.js');
    }

    // Concatenar e minificar Scripts
    function initMinify() {
        if (!sh.which('uglifyjs')) {
            sh.echo(error('✖ Você precisa ter o "uglify-js" instalado globalmente no seu sistema'));
            sh.echo(warn('Instalação: npm install uglify-js -g'));
            exit(1);
        }
        sh.echo(notice('→ Minificando scripts'));
        sh.exec('cat '+ config.paths.src.js +' main.js | uglifyjs -o '+ config.paths.out.js +'main.min.js');
    }

    // Apagar arquivos remanescentes
    function initClean(){
        sh.echo(notice('→ Removendo arquivos remanescentes'));
        sh.rm('-rf', [config.paths.out.main, config.paths.out.css, config.paths.out.js, config.paths.out.img]);
    }

    // Criar estrutura
    function initScaffolding() {
        sh.echo(notice('→ Criando estrutura do projeto'));
        sh.mkdir('-p', [config.paths.out.main, config.paths.out.css, config.paths.out.js, config.paths.out.img]);
    }


    // Iniciar proceso de Build
    function build(){

        sh.echo(notice('→ Inicializando o processo de Build'));

        initClean();
        initScaffolding();
        initCompile();
        initValidate();
        initMinify();

        sh.echo(success('✔ Feito!'));
    }


O arquivo acima foi retirado do projeto [Managers][29]. Outros arquivos fazem parte desta _Build Tool_, mas a intenção é mostrar como é possível utilizar o poder do NodeJS para realizarmos a automação de tarefas também. Perceba que ainda não utilizamos o Grunt ou Gulp e já temos 3 (três) métodos para realizarmos estes procedimentos/rotinas.

> Confira os arquivos do exemplo acima, [neste link][30].

Percebeu como integramos os comandos do Shell no NodeJS também? Show de bola, não? =\]

Ainda assim, poderíamos ter utilizado o módulo `async` ou _promises_ para trabalhar melhor o fluxo de dados, já que o NodeJS trabalha de forma não-bloqueante e assíncrona.

Outra opção seria integrar os _core modules_: `streams`, `events`, `fs`, `path` e `child_process`. Entretanto, ao utilizar o módulo _ShellJS_, poupamos esforços e tornamos mais real ainda o propósito deste artigo, o qual é mostrar que o Shell é extremamente útil e que lhe oferece inúmeras possibilidades para executar processos de automação.

### De um lado o Grunt

Um _Task Runner_ para automação de tarefas que depende do NodeJS e utiliza o JavaScript como base para que você construa as suas tarefas. Uma ferramenta, onde muitos passaram a criticar por conta da sua performance e excesso de linhas para configurar as tarefas.

Pois bem, este cenário pode ser contornado se configurarmos nossas tarefas de maneira adequada, utilizando os gargalos da API, evitando o uso desenfreado de plug-ins e buscando novas soluções.

Recentemente, publiquei algumas [dicas para quem utiliza o Grunt][32] e estarei atualizando a medida em que novas ideias forem surgindo.

### Do outro lado o Gulp

Também um ferramenta de automação que depende do NodeJS e utiliza o JavaScript para construir tarefas. A diferença? O Gulp faz uso de _pipes_ e _redirections_, os quais fazem parte de _Streams_ e, por sua vez, está no NodeJS por conta do UNIX. Isso torna a sua performance (comparado ao Grunt) mais "aceitável". Além disso, o Gulp tem uma sintaxe _node-like_, o que aproxima a criação do seu criador.

### No fim das contas

O Grunt e o Gulp são excelente ferramentas de automação e uma não vai tomar o lugar da outra! O que se torna preocupante é que muitos ainda utilizam estas ferramentas sem entender que estamos lidando com JavaScript e que podemos chamar o NodeJS para a brincadeira também. Afinal, estes caras foram desenvolvidos em cima do NodeJS, o qual utiliza a linguagem JavaScript.

### Não vamos nos limitar

É preciso trilhar novos caminhos e testar novas ferramentas. Assim, saberemos quais delas devemos/podemos nos aprofundar e apostamos em uma melhora significativa no nosso ambiente de desenvolvimento. Se negarmos esta oportunidade, corremos o risco em não deixar o nosso Workflow mais eficiência e produtivo com uma ferramenta mais atual, objetiva e/ou prática.

Vivemos em um momento onde as ferramentas são criadas de forma desenfreada, mas o ser humano tem um instinto natural para se adaptar a esta evolução também. Entretanto, não podemos perder o foco. Devemos manter o equilíbrio entre a utilização de ferramentas que já fazem parte do nosso Workflow, com o bom senso em até quando está sendo útil investir em novas ferramentas.

### Uma pequena demonstração

Recentemente, criei um _task runner_ muito simples, chamado [Just][37], para um experimento pessoal. Porém, acabou sendo muito útil para 2 projetos de pequeno porte. Resolvi torná-lo _open-source_ e espero que seja útil para você. Fique a vontade para contribuir e deixar sugestões sobre o projeto.

Nesta ferramenta, estou utilizando o [_ShellJS_][27] para manipulação de arquivos e execução de comandos no Shell, o módulo [_Commander_][26] para que eu consiga passar argumentos e tratar esta ferramenta como uma _CLI Tool_ e o módulo [_Orchestrator_][38], o qual é a base para a construção das tarefas no **Gulp** e que será, possivelmente, utilizado no [Grunt v.1.0 alpha][39].

Veja abaixo o arquivo principal do **Just**:

    #!/usr/bin/env node

    // =====================================================
    // Initial Configuration
    // =====================================================

    // Modules
    var sh     = require('shelljs'),
        cmd    = require('commander'),
        config = require('./config'),
        Just   = require('orchestrator'),
        just   = new Just();

    require('colors');

    // =====================================================
    // CLI Commands
    // =====================================================

    cmd
        .command('run')
        .description('Run lint, minify and compile tasks')
        .action(build);

    cmd
        .command('watch')
        .description('Run build tasks and watch for changes')
        .action(watch);


    // Config
    cmd.parse(process.argv);

    if (process.argv.length === 2) {
        cmd.help();
    }

    // =====================================================
    // Build Task
    // =====================================================

    function build() {

        sh.echo('→ Runnning'.cyan);
        sh.echo('');

        // Script task
        just.add('build', function() {
            config.jshint();
            config.minify();
            config.compile();
        });

        // Run tasks
        just.start(['build']);

        sh.echo('✔ done'.green);
    }


    // =====================================================
    // Watch Task
    // =====================================================

    function watch() {

        // Watch task
        just.add('watch', function() {
            config.refresh();
        });

        // Watch task must be complete before this one begins
        just.add('build', ['watch'], function() {
            config.jshint();
            config.minify();
            config.compile();
        });

        // Run tasks
        just.start(['watch', 'build']);

        sh.echo('→ Watching for changes...'.cyan);
        sh.echo('');
        sh.echo('→ Press CTRL+C to exit'.yellow);
    }


> O código completo você encontra [aqui][40]

## As possibilidades são infinitas

O processo de _build_ não é nenhuma novidade. Você deve ter percebido isso por conta do _Make_. O _build_ é uma prática que foi adotada há muito tempo na Engenharia de Softwares, sendo utilizada a favor das metodologias ágeis. É com este processo que automatizamos tarefas e garantimos um alto nível de qualidade em nossos projetos.

Mas, fora isso, você notou a quantidade de ferramentas e alguns possíveis métodos que podemos utilizar para realizar a automação de tarefas em nossos projetos?

Perceba que, não falamos sobre o _Rake_ (RIP Jim Weirich), o qual possui uma base muito sólida em _Make_, nem do _Maven_, _Ant_, _Cake_, _Factory_ e _Phing_.

Todas estas ferramentas beberam da mesma fonte, o UNIX!

Não fique limitado ao uso do Gulp ou Grunt **com plugins**. Procure utilizar os _core modules_ do NodeJS e brincar com a API destes caras também. O mais divertido de tudo na programação, desenvolvimento web e o que for que envolva lógica de programação, é tornar possível novos desafios. E superá-los!

Torne esses momentos possíveis! Você vai se divertir.

Até a próxima!

[10]: http://www.youtube.com/watch?v=VScVgXM7lQQ&list=PL76DBC8D6718B8FD3
[11]: http://www.vitorbritto.com.br/blog/unix-a-base-de-tudo/
[15]: http://www.cygwin.com/
[17]: http://curl.haxx.se/
[18]: http://www.gnu.org/software/bash/manual/html_node/Redirections.html
[19]: https://www.npmjs.org/package/uglify-js
[20]: https://www.npmjs.org/package/stylus
[21]: http://rsync.samba.org/
[26]: https://www.npmjs.org/package/commander
[27]: https://www.npmjs.org/package/shelljs
[28]: https://www.npmjs.org/package/cli-color
[29]: http://managers.vitorbritto.com.br/
[30]: https://github.com/vitorbritto/node-managers/tree/master/templates/node
[32]: http://www.vitorbritto.com.br/blog/dicas-uteis-para-quem-utiliza-gruntjs/
[37]: http://vitorbritto.github.io/just/
[38]: https://www.npmjs.org/package/orchestrator
[39]: https://github.com/gruntjs/grunt-next
[40]: https://github.com/vitorbritto/just
[42]: http://jekyllrb.com/ "Jekyll"
