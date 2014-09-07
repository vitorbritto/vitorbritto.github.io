---
layout: post
title: Testes sincronizados entre dispositivos móveis
description: Alguns procedimentos são valiosos para agregar eficiência em determinadas tarefas no decorrer de um projeto. Entre elas, podemos frisar as tarefas para observar mudanças dos nossos arquivos a medida em que forem modificados, atualizar o browser automaticamente quando as modificações ocorrerem e sincronizar (simulando comportamentos também) os dispositívos móveis a fim de avaliarmos e testarmos a consistência e eficiência da nossa aplicação.
link: http://vitorbritto.com.br/blog/testes-sincronizados-entre-dispositivos-moveis/
date: 2013-12-15
path: 2013-12-15-testes-sincronizados-entre-dispositivos-moveis.md
cover: assets/images/posts/post-sync-test.jpg
comments: true
---

Saudações!

Vivemos em um momento onde o conceito responsivo, mais precisamente o Responsive Web Design, está em evidência. Agregar este conceito a um projeto web é muito importante. Não só para a experiência do usuário, mas também para valorizar o ambiente visual (interface gráfica) do projeto.

Alguns procedimentos são valiosos para agregar eficiência em determinadas tarefas no decorrer de um projeto. Entre elas, podemos frisar as tarefas para observar mudanças dos nossos arquivos a medida em que forem modificados, atualizar o *browser* automaticamente quando as modificações ocorrerem e sincronizar (simulando comportamentos também) os dispositívos móveis a fim de avaliarmos e testarmos a consistência e eficiência da nossa aplicação.


## Adentrando ao cenário

Pois bem! Recentemente, o Addy Osmani escreveu um [artigo](http://www.html5rocks.com/en/tutorials/tooling/synchronized-cross-device-testing/) no [HTML5Rocks](http://www.html5rocks.com/) sobre *Synchronized Cross-device Testing* (testes sincronizados entre dispositivos móveis).

Algumas ferramentas e métodos foram apresentados de forma muito bem detalhada, uma delas é o aplicativo [GhostLab](http://vanamco.com/ghostlab/) que oferece uma experiência completa, possibilitando que você realize testes cross-browser/device de forma sincronizada (até mesmo com a ação de scrolls, navegação e preenchimento de dados em formulários), além de possuir uma UI (user interface) muito elegante e prática para manusear. Entretanto, é uma ferramenta disponível apenas para **Mac** e é pago. Esse último ponto não é um problema. Se a ferramenta estiver bem avaliada no seu conceito para o uso, trate-a como um investimento.

Sou obcecado por eficiência e produtividade em ambiente de trabalho e, para a minha felicidade, eis que no início desta semana descubro mais uma ferramenta a partir de outro [artigo](http://addyosmani.com/blog/browser-sync/) do Addy Osmani.

Eu estou falando do [Browser-Sync](https://github.com/shakyShane/browser-sync), criado e mantido pelo [Shane Osbourne](https://github.com/shakyShane), o qual é um módulo para Node e que possui um plugin para o Grunt também.

Vamos conhecer melhor o que está ferramenta pode fazer pelo nosso Workflow.

## O que seria exatamente o Browser-Sync?

O Browser-Sync é uma ferramenta capaz de realizar testes sincronizados em diversos dispositivos móveis, onde é possível simular as ações de *scrolls*, *clicks* e *input de dados* em formulários também.

Veja algumas *features* desse cara:

- Permite a integração com o **grunt-contrib-watch**
- Possui *LiveReload* integrado
- Observa as mudanças em seus arquivos
- Permite que você inicie um web server

Mas, o melhor de tudo? Trata-se de um projeto open-source e que funciona nas plataformas Windows, Mac e Linux.

## Como posso utilizá-lo no meu projeto?

Você pode utilizar este cara de duas formas:

- como um módulo para node: `npm install -g browser-sync`;
- ou como um plugin do grunt: `npm install grunt-browser-sync --save-dev`.

Neste artigo, vou demonstrar como utilizá-lo no **Grunt**.

### Antes de começar

Antes de iniciar o nosso exemplo prático, confira alguns pontos importantes sobre o plugin `grunt-browser-sync`:

- O *browser-sync* possibilita a integração da tarefa *watch* para que você possa observar as mudanças nos seus arquivos. Para isso, basta definir a opção `watchTask` como `true`.
- Você pode iniciar um servidor web para servir arquivos estáticos (HTML, CSS e JS), e também utilizar as configurações de um *Virtual Host*.
- Caso você esteja utilizando a opção *proxy* (por conta de algum arquivo PHP), basta copiar e colar, logo antes da tag `</body>`, o trecho de código que será apresentado (no bash/shell) após você executar a tarefa do *browser-sync*.
- O *browser-sync* tentará descorbir o IP utilizado na sua rede. Possivelmente, isto pode não dar certo. Por isso, declare-o na opcão `host`. Você deve estar se perguntando: "Por que eu devo atribuir o meu IP a está opção?" Eu respondo. O fato é que a mágica do *browser-sync* está em se conectar a diversos dispositivos móveis, e isto só é possível com um IP declarado. Ao invés de utilizar `localhost`, você pode verificar o seu IP (no mac execute `ifconfig`, no Windows `ipconfig`) e executar o procedimento acima.
- A opção `ghostMode` está em fase experimental, porém já permite a utilização de forma bem tranquila. Está opção nos permite sincronizar alguns comportamentos (*scrolls*, navegação e preenchimento de dados em formulários) e acompanhar os eventos disparados nos dispositivos conectados.

### Enfim, lá vamos nós!

Você precisa ter o [NodeJS](http://nodejs.org/) e o [Grunt-CLI](http://gruntjs.com/) instalados na sua máquina para começar a brincar com o [browser-sync](https://github.com/shakyShane/grunt-browser-sync).

Confira abaixo as etapas que vamos realizar neste exemplo prático:

- Definir a estrutura do projeto
- Criar o arquivo `package.json` utilizando o `npm init`
- Instalar o Grunt e os plugins necessários no projeto
- Configurar o arquivo `Gruntfile.js`
- Executar a tarefa
- Iniciar o teste

> **Nota importante:** quaisquer dúvidas sobre a instalação do **NodeJS** ou **Grunt**, consulte este [artigo](http://www.vitorbritto.com/blog/automacao-de-tarefas-com-gruntjs-parte-1/).


Neste exemplo, utilizaremos os seguintes plugins:

- [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass) - responsável pela compilação (e minificação) do arquivo CSS.
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - responsável por observar as mudanças nos arquivos.
- [grunt-browser-sync](https://github.com/shakyShane/grunt-browser-sync) - responsável pelo Live Reload, testes sincronizados em nossos dispositívos móveis, iniciar um servidor web estático e integrar a tarefa *watch*.

#### Definindo a estrutura do projeto

Teremos uma estrutura simples, e você pode criar essa estrutura através do terminal ou da forma como achar mais conveniente.

A estrutura inicial deverá ficar assim:

```
.projeto/
├── assets/
│   └── sass/
│       └── style.scss
├── index.html
├── Gruntfile.js
└── package.json
```

#### Criando o arquivo `package.json`

Você pode criar um arquivo `package.json` de forma dinâmica, para isso execute o comando `npm init` e responda apropriadamente as perguntas que lhe forem apresentadas.

Para este exemplo, o estado inicial do nosso arquivo `package.json` deverá ficar assim:

```
{
    "name": "browser-sync-project",
    "version": "0.1.0",
    "title": "Projeto Browser Sync",
    "description": "Exemplo prático do Grunt com o Browser Sync",
    "license": "MIT"
}
```

#### Instalando o grunt e os plugins necessários

Em seguida, vamos instalar o Grunt e os plugins necessários para realizar as tarefas esperadas no nosso projeto. Para isso, execute o comando abaixo

> **Nota:** lembre-se de que você deve executar este comando no diretório do projeto.

```
npm i grunt grunt-contrib-compass grunt-contrib-watch grunt-browser-sync --save-dev
```

> **Nota:** perceba que estamos executando um comando extenso, porém em uma linha somente e com o *alias* para a opção **install** (i). Com um único comando, podemos instalar o Grunt e os plugins que utilizaremos no nosso projeto. Poderíamos executar essas instalações uma a uma, mas, como já sabemos os plugins que queremos utilizar, fica muito mais prático executar desta forma.

Com o grunt e os plugins instalados o arquivo `package.json` ficará assim:

```
{
    "name": "browser-sync-project",
    "version": "0.1.0",
    "title": "Projeto Browser Sync",
    "description": "Exemplo prático do Grunt com o Browser Sync",
    "license": "MIT",
    "devDependencies": {
        "grunt": "~0.4.2",
        "grunt-contrib-compass": "~0.6.0",
        "grunt-contrib-watch": "~0.4.4",
        "grunt-browser-sync": "~0.3.0"
    }
}
```

#### Configurando o `Gruntfile.js`

Abra o arquivo `Gruntfile.js`, localizado na pasta raiz do seu projeto, com o seu editor preferido. Em seguida, **copie e cole** o conteúdo abaixo:

```
module.exports = function (grunt) {

    "use strict";

    // Iniciando a configuração das tarefas
    grunt.initConfig({

        watch: {
            files: "assets/sass/*.scss",
            tasks: 'compass',
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css',
                    outputStyle: 'compressed'
                },
            },
        },

        browser_sync: {
            files: {

                // Aplicando o recurso de Live Reload nos seguintes arquivos
                src : [
                    'assets/css/*.css',
                    '**/*.html'
                ],

            },
            options: {

                // Definindo um IP manualmente
                host : "192.168.0.1",

                // Atribuíndo um diretório base
                server: {
                    baseDir: "."
                },

                // Integrando com a tarefa "watch"
                watchTask: true,

                // Sincronizando os eventos entre os dispositívos
                ghostMode: {
                    scroll: true,
                    links: true,
                    forms: true
                }
            },
        }
    });

    // Carregando os plugins
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Registrando tarefas customizadas
    grunt.registerTask('default', ["browser_sync", "watch"]);
};
```

Perceba que o código está comentado para facilitar o entendimento, mas vamos quebrá-lo em partes para que você entenda o resultado final.

##### Escopo Global

Nesta parte, temos uma função global que funciona como *wrapper* para os 3 (três) métodos responsáveis pela **configuração de tarefas**, **carregamento dos plugins** e **registro de tarefas customizadas** respectivamente no Grunt.

Confira:

```
module.exports = function (grunt) {

    "use strict";

	 // Configurando as tarefas
    grunt.initConfig({});

	// Carregando os plugins
    grunt.loadNpmTasks();

	// Registrando tarefas customizadas
    grunt.registerTask();
};
```

##### Configurando as tarefas

As configurações das nossas tarefas no Grunt serão declaradas no método `initConfig()`.

```
grunt.initConfig({
	// As configurações das tarefas serão definidas aqui
});
```

**Configuração da tarefa `watch`**

Está tarefa será responsável por observar alterações nos arquivos.

```
watch: {
	files: "assets/sass/*.scss", // Definimos os arquivos que queremos "observar"
	tasks: 'compass',            // Declaramos em qual tarefa esta observação será realizada
},
```

**Configuração da tarefa `compass`**

Está tarefa é responsável pela compilação (e minificação) do arquivo pré-compilado.

```
compass: {
    dist: {
        options: {
            sassDir: 'assets/sass',   // Definimos o diretório de origem dos arquivos a serem compilados
            cssDir: 'assets/css',     // Definimos o diretório de saída dos arquivos que foram compilados
            outputStyle: 'compressed' // Definimos o tipo de compressão que os nossos arquivos vão sofrer
        },
    },
},
```

**Configuração da tarefa `browser_sync`**

Está tarefa é responsável pela configuração dos testes sincronizados em nossos dispositívos móveis, integração do recurso *Live Reload*, iniciar um servidor web estático e se comunicar com a tarefa *watch*.

```
browser_sync: {
    files: {

        // Aplicamos o recurso de Live Reload nos seguintes arquivos
        src : [
            'assets/css/*.css',
            '**/*.html'
        ],

    },
    options: {

        // Definimos um IP manualmente. Verifique o seu IP com:
        // - ifconfig(mac/linux)
        // - ipconfig(win)
        host : "192.168.0.1",

        // Atribuímos um diretório base
        server: {
            baseDir: "."
        },

        // Integramos com a tarefa "watch"
        watchTask: true,

        // Sincronizamos os eventos entre os dispositívos
        ghostMode: {
            scroll: true, // Ativamos a sincronização para scrolls
            links: true,  // Ativamos a sincronização para a navegação
            forms: true   // Ativamos a sincronização para o preenchimento de dados em formulários
        }
    },
}
```

##### Carregamento dos plugins

Para que as nossas tarefas sejam executadas, precisamos declarar o nome dos plugins através do método `loadNpmTasks()`.

```
// Carregando os plugins
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');
```

##### Registrando as tarefas customizadas

Por fim, configuramos uma tarefa customizada no método `registerTask()` para iniciar as tarefas `browser_sync` e `watch`.

```
grunt.registerTask('default', ["browser_sync", "watch"]);
```

#### Executando a tarefa

Com a estrutura e arquivos criados, o `package.json` e `Gruntfile.js` configurados, basta executarmos a tarefa customizada `default`. Por se tratar de uma tarefa padrão, não é necessário executar `grunt default`. Apenas digite no seu bash/shell o comando `grunt` para que está tarefa seja executada.

#### Iniciando o teste

Pronto! Acesse os dispositivos/browsers através do **IP** e **PORT** (ex.: http://192.168.0.1:8000) declarados na opção da sua tarefa `browser_sync`, faça algumas mudanças no arquivo `style.scss` e veja a mágica acontecer.

Veja no exemplo abaixo o plugin em ação!

```
vitorbritto at Vitor Britto in ~/temp/grunt/misc
$ grunt
Running "browser_sync:files" (browser_sync) task

Running "watch" task
Waiting...   info  - socket.io started

OK, Server running at http://xxx.xxx.xxx.xxx:3001
Serving files from:  /Users/vitorbritto/temp/grunt/misc

Load a browser & check back here. If you set up everything correctly, you'll see a 'Browser Connected'  message

Watching the following:
assets/css/style.css
index.html
node_modules/grunt-browser-sync/node_modules/browser-sync/node_modules/connect/lib/public/directory.html
node_modules/grunt-browser-sync/node_modules/browser-sync/node_modules/connect/lib/public/error.html
node_modules/grunt-browser-sync/node_modules/browser-sync/node_modules/http-proxy/node_modules/colors/example.html
node_modules/grunt-browser-sync/node_modules/browser-sync/node_modules/http-proxy/node_modules/pkginfo/docs/pkginfo.html
node_modules/grunt-browser-sync/node_modules/browser-sync/node_modules/portscanner/node_modules/async/test/test.html
node_modules/grunt-browser-sync/node_modules/browser-sync/node_modules/socket.io/node_modules/policyfile/doc/index.html
node_modules/grunt-browser-sync/node_modules/browser-sync/node_modules/socket.io/node_modules/socket.io-client/lib/vendor/web-socket-js/sample.html
node_modules/grunt-browser-sync/node_modules/browser-sync/node_modules/socket.io/node_modules/socket.io-client/node_modules/active-x-obfuscator/node_modules/zeparser/benchmark.html
Plus more...

Browser Connected! (Chrome, version: 33.0.1734.2)
```

Espero que esta ferramenta seja útil para o desenvolvimento dos seus projetos e que torne o seu ambiente de trabalho mais eficiente e produtivo.

Até a próxima!

<hr>

**Referências:**

- [Browser-Sync: Sync Scrolls, Clicks, Forms And Edits In Multiple Browsers For Free](http://addyosmani.com/blog/browser-sync/)
- [Github: grunt-browser-sync](https://github.com/shakyShane/grunt-browser-sync)
- [Github: browser-sync](https://github.com/shakyShane/grunt-browser-sync)

<hr>
