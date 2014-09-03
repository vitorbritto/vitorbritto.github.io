---
layout: post
title: Compactando o seu Gruntfile
description: Imagine que você está desenvolvendo um aplicativo web e que envolve uma série de tarefas padrão. Ter de colocar todas essas tarefas no seu Gruntfile poderá lhe render um arquivo muito extenso. Para isso, vamos criar um novo arquivo JSON que terá uma requisição no Gruntfile.
link: http://vitorbritto.com.br/blog/compactando-o-seu-gruntfile/
date: 2013-10-13
path: 2013-10-13-compactando-o-seu-gruntfile.md
cover: assets/images/posts/post-compactando-gruntfile.jpg
avatar: assets/images/avatar.jpg
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

**UPDATE - 14/10/2013:** removida a requisição do arquivo `grunt-config.json` em favor do uso do método `grunt.file.readJSON()` da API do Grunt.

Saudações!

Compartilho uma dica rápida para você que possui um projeto com o Grunt e que, ao final da sua configuração, o `Gruntfile` fica muito extenso.

É muito importante utilizar os plugins adequados, ler a documentação de cada um deles e extrair ao máximo as suas funcionalidades. Assim, teremos uma configuração compacta e eficaz.

Porém, é válido mencionar que nem sempre é possível deixar o arquivo `Gruntfile` enxuto. Existem cenários distintos no desenvolvimento para web, e soluções também.

### Problema enfrentado

Imagine que você está desenvolvendo um aplicativo web e que envolve uma série de tarefas padrão. Por exemplo: compilação, minificação, concatenação, *linting*, iniciar um servidor estático, *livereload*, copiar e apagar arquivos, executar um comando shell e etc. Ter de colocar todas essas tarefas no seu `Gruntfile` poderá lhe render um arquivo muito extenso.

### Solução

Para isso, vamos criar um novo arquivo `JSON` que terá uma requisição no `Gruntfile`.

**Nota:** perceba que com este método, passamos a tratar as configurações das tarefas no arquivo `grunt-config.json` e o seu `Gruntfile` ficará mais compacto e com uma leitura mais eficaz.

Execute os seguintes passos:

Crie um arquivo chamado `grunt-config.json` e transfira a configuração das suas tarefas para ele (tudo o que está envolvido no método `grunt.initConfig()`).

**Nota:** lembre-se que você estará lidando com a sintaxe `JSON`.

Confira no exemplo:

~~~json
{
    "watch": {
        "options": {
            "livereload": true
        },
        "css": {
            "files": "sass/{,*/}*.{scss,sass}",
            "tasks": "compass"
        },
        "js": {
            "files": "<%= jshint.all %>",
            "tasks": ["jshint", "uglify"]
        },
        "html": {
            "files": [ "/*.{html,htm,shtml,shtm,xhtml,php,jsp,asp,aspx,erb,ctp}" ]
        }
    },
    "connect": {
        "server": {
        "options": {
                "port": 9000,
                "base": ".",
                "hostname": "localhost",
                "livereload": true,
                "open": true
            }
        }
    },
    "jshint": {
        "options": {
            "jshintrc": ".jshintrc"
        },
        "all": [ "Gruntfile.js", "js/main.js" ]
    },
    "uglify": {
        "options": {
            "mangle": false
        },
        "dist": {
            "files": {
                "js/main.min.js": [
                "js/main.js"
                ],
                "js/plugins.min.js": [
                "js/plugins.js"
                ]
            }
        }
    },
    "compass": {
        "dist": {
            "options": {
                "force": true,
                "config": "config.rb"
            }
        }
    }
}
~~~

Com isso, o seu `Gruntfile` ficará assim:

~~~javascript
module.exports = function(grunt) {

    "use strict"

    // Carregando os plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Utilizamos o método grunt.file para fazer o parse do grunt-config.json
    var gruntConfig = grunt.file.readJSON("./grunt-config.json");
    grunt.initConfig(gruntConfig);

    // Registra a tarefa padrão
    grunt.registerTask("default", ["connect", "watch"]);
    grunt.registerTask("build", ["compass", "jshint", "uglify"]);
};
~~~

Perceba que estamos carregando cada tarefa pelo método `.loadNpmTasks()`. Podemos otimizar mais ainda esse cara.

Para isso, vamos utilizar um plugin chamado [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks), que fará o carregamento automático dos plugins relacionados no arquivo `package.json`.

Agora, o seu `Gruntfile` ficará assim:

~~~javascript
module.exports = function(grunt) {

    "use strict"

    // Carrega os plugins relacionados no package.json
    require('load-grunt-tasks')(grunt);

    // Utilizamos o método grunt.file para fazer o parse do grunt-config.json
    var gruntConfig = grunt.file.readJSON("./grunt-config.json");
    grunt.initConfig(gruntConfig);

    // Registra a tarefa padrão
    grunt.registerTask("default", ["connect", "watch"]);
    grunt.registerTask("build", ["compass", "jshint", "uglify"]);
};
~~~

O código completo encontra-se neste [Gists](https://gist.github.com/vitorbritto/6967478)

Espero que tenha sido útil para você!

Até a próxima! =]
