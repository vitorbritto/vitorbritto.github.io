---
layout: post
title: "Utilizando LiveReload no Grunt"
description: Quando um novo projeto é iniciado, muitas alterações são realizadas durante a sua produção. Sendo assim, é preciso atualizar o navegador manualmente toda vez que estas alterações são feitas. Para evitar isso, temos um recurso muito interessante chamado Live Reload, que atualiza o browser automaticamente toda a vez que uma alteração no projeto é realizada.
link: "http://vitorbritto.com.br/blog/utilizando-livereload-no-grunt/"
date: 2013-10-13
cover: "assets/images/posts/post-livereload.jpg"
avatar: "assets/images/avatar.jpg"
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

Saudações!

Quando um novo projeto é iniciado, muitas alterações são realizadas durante a sua produção. Sendo assim, é preciso atualizar o navegador manualmente toda vez que estas alterações são feitas. E convenhamos, ter de pressionar `cmd+r` (mac) ou `ctrl+r` (windows/linux) toda hora, é bem tedioso!

Para evitar isso, temos um recurso muito interessante chamado [**LiveReload**](http://livereload.com/), que atualiza o browser automaticamente toda a vez que uma alteração no projeto é realizada.

Para quem utiliza o Grunt, existem dois *plugins* que possibilitam uma dinâmica de observação e carregamento das atualizações no projeto muito eficaz e prática. O alcance para este resultado é bem rápido.

### Organizando o ambiente

Para realizar os passos abaixo, o [Grunt](http://gruntjs.com/) deve estar instalado na sua máquina, assim como o `package.json` e `Gruntfile.js` estarem configurados.

Confira o artigo sobre [Automação de tarefas com o Grunt](http://vitorbritto.com/blog/automacao-de-tarefas-com-gruntjs-parte-1/) para saber mais a respeito.

### Instalando os plugins

Com o ambiente preparado. Faça a instalação dos seguintes plugins:

- [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch): `npm install grunt-contrib-watch --save-dev`
- [grunt-contrib-connect](https://npmjs.org/package/grunt-contrib-connect): `npm install grunt-contrib-connect --save-dev`

### Configurando as tarefas

Antes de iniciar o exemplo prático para a configuração das tarefas, suponho que você esteja utilizando um pré-processador (o exemplo prático se dá com o Sass, mas fica a seu critério utilizar outro) e que suas tarefas para compilação, concatenação, minificação e *linting* estejam configuradas também.

##### Tarefa `watch`

~~~javascript
watch: {
    options: {
        livereload: true
    },
    js: {
        files: "js/*.js",
        tasks: ["uglify", "jshint"]
    },
    sass: {
        files: "sass/*.{scss,sass}",
        tasks: "sass"
    },
    html: {
        files: "/*.html"
    }
}
~~~

Onde:

* é necessário a opção `livereload` para que haja a comunicação com a tarefa `connect`;
* `files` vai passar uma *string* (ou *array*) com a lista de arquivos a serem executados;
* `tasks` vai passar uma *string* (ou *array*) com as tarefas a serem executas no objeto `files`.

**Nota:** perceba que estou utilizando um *globbing patterns* para as extensões dos arquivos pré-compilados. Significa que a compilação será executada independente da extensão do arquivo. Veja mais [aqui](http://gruntjs.com/configuring-tasks#globbing-patterns).


##### Tarefa `connect`

~~~javascript
connect: {
    server: {
        options: {
            port: 9000,
            base: ".",
            hostname: "localhost",
            livereload: true,
            open: true
        }
    }
}
~~~

Onde:

* `port` será a porta para iniciar o servidor;
* `base` será uma *string* (ou *array*) com o(s) diretório(s) raiz onde os arquivos serão exibidos;
* `hostaname` será o *host* que o servidor vai utilizar;
* `livereload` estabelece a comunicação com a tarefa `watch`;
* `open` habilita a execução do seu navegador padrão ao iniciar o servidor.

**Nota:** veja que o trunfo para a atualização automática no navegador está na comunicação entre a opção `livereload` (definidos como `true`) das duas tarefas.

### Carregando os plugins

Agora que as suas tarefas estão configuradas, você precisa carregar os seus plugins no `Gruntfile`.

~~~javascript
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
~~~

**Nota:** você pode utilizar um plugin chamado [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) para fazer uma requisição de todos os seus plugins instalados e carregá-los automaticamente no seu `Gruntfile` de forma bem simples.

### Registrando as tarefas

Com as tarefas configuradas e os plugins carregados, basta configurar uma tarefa customizada.

~~~javascript
grunt.registerTask( "default", [ "connect", "watch" ]);
~~~

### Resultado final

~~~javascript
module.exports = function(grunt) {

    "use strict"

    // Configuração das tarefas
    // ---------------------------------------
    grunt.initConfig({

        // Tarefa watch
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: "js/*.js",
                tasks: ["uglify", "jshint"]
            },
            sass: {
                files: "sass/*.{scss,sass}",
                tasks: "sass"
            },
            html: {
                files: "/*.html"
            }
        },

        // Tarefa connect
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: ".",
                    hostname: "localhost",
                    livereload: true,
                    open: true
                }
            }
        }

    });


    // Carregando os plugins
    // ---------------------------------------
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // Registrando a tarefa customizada
    // ---------------------------------------
    grunt.registerTask( "default", [ "connect", "watch" ]);

};
~~~

O código completo encontra-se neste [Gists](https://gist.github.com/vitorbritto/6995472)

Agora, é só adequar às suas necessidades. Até a próxima! =]
