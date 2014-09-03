---
layout: post
title: Dicas úteis para quem utiliza o GruntJS
description: Algumas dicas que podem ser úteis aos desenvolvedores que utilizam o GruntJS.
link: http://vitorbritto.com.br/blog/dicas-uteis-para-quem-utiliza-grunt/
date: 2014-02-03
path: 2014-02-03-dicas-uteis-para-quem-utiliza-grunt.md
cover: assets/images/posts/post-dicas-gruntjs.jpg
avatar: assets/images/avatar.jpg
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

Saudações!

Resolvi abrir um espaço no meu blog para listar algumas dicas que podem ser úteis aos desenvolvedores que utilizam o GruntJS. Tudo bem que o Gulp é a febre do momento, mas não vamos cuspir no prato em que já comemos, ok? =\]

Então, aí vai algumas dicas que acho interessantes e que são ótimas alternativas.

1. Você pode utilizar o [ShellJS][8] para tarefas de leitura e escrita de arquivos. Assim, você substitue os possíveis plugins _grunt-contrib-copy_, _grunt-contrib-clean_ e _grunt-exec_ ou _grunt-shell_. Se preferir, e não desejar injetar qualquer dependência ou plugin, você pode utilizar o método [`.file()`][9] disponível na API do Grunt para tais rotinas.
2.
Você pode utilizar o módulo _browser-sync_ ([http://www.browsersync.io/][10]) ou o plugin _grunt-browser-sync_, no lugar do _grunt-contrib-connect_, _grunt-contrib-livereload_ e/ou _grunt-php_. Além disso, você ganha integração com a tarefa _watch_ e testes cross-devices/browser com sincronização de eventos em dispositivos reais.
3.
Cuidado com as tarefas que você executa por padrão (ou que estão sendo observadas com a tarefa _watch_) e os seus respectivos arquivos. Fazer o uso consciente do [_glob pattern_][11] ajuda também no momento do build/compilação.
4.
Procure fazer um breve planejamento de como será o _build script_ do projeto em questão e quais tarefas vão constar nele. Uma folha de papel e um lápis são o suficiente. =P
5.
Você pode utilizar a função `require()` e o _module.exports_ para exportar configurações globais. Com isso, você armazena estas configurações em um arquivo externo (ex.: `grunt-config.js`) e faz o `parser` através do método [`.read()`][12] no seu arquivo Gruntfile.js.

Então, é isso. A medida em que novas dicas forem surgindo, farei as devidas atualizações. Caso você saiba de alguma dica interessante, e que possa ser útil, compartilhe conosco.

Espero que estas dicas sejam úteis para você. Até a próxima.

[8]: http://documentup.com/arturadib/shelljs
[9]: http://gruntjs.com/api/grunt.file
[10]: http://www.browsersync.io/
[11]: http://gruntjs.com/configuring-tasks#globbing-patterns
[12]: http://gruntjs.com/api/grunt.file#reading-and-writing
