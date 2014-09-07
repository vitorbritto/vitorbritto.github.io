---
layout: post
title: Substituindo o Bower pelo Napa
description: Depois de quase 3 anos utilizando o Backbone como o principal framework em JavaScript para a arquitetura e modularização em minhas aplicações web, resolvi arriscar, estudar e realizar alguns experimentos com o AngularJS. Neste artigo, mostro como é possível instalar módulos do Angular e injetá-los no nosso manifesto JSON sem problemas com o napa.
link: http://vitorbritto.com.br/blog/substituindo-o-bower-pelo-napa/
date: 2014-06-11
path: 2014-06-11-substituindo-o-bower-pelo-napa.md
cover: assets/images/posts/post-napa.jpg
comments: true
---

Saudações!

Depois de quase 3 anos utilizando o **Backbone** como _JavaScript framework_ para a arquitetura e modularização em minhas aplicações web, resolvi arriscar, estudar e realizar alguns experimentos com o **AngularJS**.

Não somente, resolvi migrar também para o padrão CommonJS e usar o [Browserify][8] em meus projetos. Posso dizer que estou bastante satisfeito com o resultado e que atende perfeitamente as minhas necessidades. Não que o padrão AMD, com requireJS, não atendesse estas necessidades, mas, por estar muito próximo ao NodeJS atualmente, percebi que seria mais sensato realizar esta migração. Seja pela sintaxe, uso de módulos do npm no browser-side ou a padronização do meu código. Porém, isto não significa que o novo padrão adotado seja a solução para todos os cenários. Cada caso é um caso.

### Entendendo o cenário

Em meio aos experimentos, resolvi iniciar um boilerplate para o **MEAN Stack** e encontrei o [Napa][10]. A solução que este cara nos dá, é um método alternativo para consumir módulos arbitrários.

Até o momento desconheço módulos oficiais do Angular no _npm_, mas, com o _napa_, é possível instalar módulos do Angular e injetá-los no nosso manifesto JSON `package.json` sem problemas.

### Como faremos isso?

O processo é bem prático, confira abaixo:

1 - Realize a instalação do **napa**: `npm i napa --save-dev`

2 - Insira o código abaixo no seu manifesto `package.json`:

    "scripts": {
        "install": "napa"
    },
    "napa": {
        "angular": "angular/bower-angular",
        "angular-route": "angular/bower-angular-route"
    }


3 - Insira a função `require()` dos módulos no script principal (ex.: `app.js`):

    require('angular/angular');
    require('angular-route/angular-route');


4 - Coloque o Angular na brincadeira:

    angular.module('myApp', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
        // Declare suas rotas
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);


5 - Profit! :)

Perceba que foi criado um objeto JSON de nome `napa`, que vai conter os módulos necessários para a aplicação. Basta apontar para o caminho relativo do [repositório do Angular no Github][12].

Mas, e o objeto `scripts`?

Bom, no manifesto JSON `package.json` podemos executar _scripts_. Neste cenário, estamos declarando que `npm install` vai executar a instalação dos módulos contidos no objeto `napa` também. Show de bola, não é? =\]

### Resumindo...

Conseguimos instalar as dependências necessárias sem a necessidade de colocar o **Bower** na jogada, além de centralizar estes caras em um único manifesto JSON (\_package.json\_). Lembre-se que estou utilizando o padrão CommonJS, e o Browserify é o responsável por tratar/compilar os scripts da aplicação.

Confira a documentação do napa [aqui][14].

Até a próxima! =]

[8]: http://browserify.org/
[10]: https://www.npmjs.org/package/napa
[12]: https://github.com/angular
[14]: https://github.com/shama/napa
