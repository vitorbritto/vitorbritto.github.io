---
layout: post
title: "The book is on the table"
description: É muito comum surgirem perguntas na comunidade sobre quais os livros mais adequados e recomendados para quem está iniciando (ou não) com programação em JavaScript. Por isso, vou compartilhar uma relação de livros que tive a oportunidade de ler, deixando uma breve descrição e algumas considerações.
link: "http://vitorbritto.com.br/blog/the-book-is-on-the-table/"
date: 2014-09-02
path: 2014-09-02-the-book-is-on-the-table.md
cover: "assets/images/posts/post-livros-js.jpg"
avatar: "assets/images/avatar.jpg"
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

Saudações!

É muito comum surgirem perguntas na comunidade sobre quais os livros mais adequados e recomendados para quem está iniciando (ou não) com programação em JavaScript.

Por isso, vou compartilhar uma relação de livros que tive a oportunidade de ler, deixando uma breve descrição e algumas considerações.

Vamos percorrer os seguintes tópicos:

1. Olá, eu sou o JavaScript
2. O treinamento Jedi
3. Fique atento para alguns pontos
4. Mais alguma consideração?

Então, vamos lá.

## Olá, eu sou o JavaScript

Criada por Brendan Eich há quase 20 anos, a linguagem de programação JavaScript se tornou muito popular nos últimos anos e mostrou-se extremamente poderosa. Trata-se de uma linguagem de alto nível, dinâmica, interpretada e não tipada, além de englobar paradigmas de orientação de objetos e funcional. Possui uma sintaxe herdada do *Java*, aspectos funcionais do *Scheme* e suas caracteristicas orientadas a objetos do *Self*. Atualmente, está linguagem que foi mal compreendida por um bom tempo, se faz presente tanto no **client-side** (DOM) quanto no **server-side** (NodeJS).

Se você está vindo do Java ou PHP, vale frisar que o JavaScript não possui classes. O JavaScript possui funções de primeira classe (objetos que herdam métodos e propriedades) e sua herança se baseia em protótipos.

Esta é uma breve (brevíssima) introdução. Caso você esteja começando do zero, [sugiro que leia este material](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/JavaScript_Vis%C3%A3o_Geral) do MDN para entender mais sobre o JavaScript. Ok?

> **NOTA:** recentemente escrevi um artigo para quem está iniciando com o JavaScript. [Confira aqui](http://www.vitorbritto.com.br/blog/iniciando-os-estudos-com-javascript/).

## O treinamento Jedi

Antes de iniciar os seus estudos, lembre-se que a disciplina e a força de vontade são elementos necessários para obter sucesso no seu aprendizado. Reserve um horário tranquilo para que você possa estudar de maneira constante. Não se esqueça que praticar os códigos do livro e testar novas possibilidades são muito importantes para fixar o conhecimento obtido.

### Iniciando o treinamento

Pois bem, antes de mais nada, a relação abaixo segue uma ordem com base em minhas experiências e leituras prévias. Espero que você se identifique de alguma forma e seja útil para os seus estudos.

Vamos em frente.

#### JavaScript: O Guia Definitivo

O livro conta com muitos detalhes a respeito do JavaScript básico e do seu comportamento no Client Side. Um breve capítulo é reservado para o JavaScript no Server Side (NodeJS), assim como capítulos direcionados para HTTP, APIs e HTML5, gráficos (Canvas e SVG) e a biblioteca jQuery. Além disso, conta com uma parte exclusiva para referências e consultas (a qual deveria ser uma parte separada do livro para facilitar a consulta rápida, algo como um _pocket book_).

#### JavaScript: O Guia do Programador

Um excelente livro! O Maujor destrincha de forma caprichosa cada um dos elementos do JavaScript básico (e no client-side também), aplicando, logo em seguida, um exemplo prático do respectivo elemento tratado. É uma ótima maneira de absorver o conceito e aplicá-lo logo em seguida.

#### jQuery: A biblioteca do programador JavaScript

Infelizmente, a edição que possuo não reflete a API atual do jQuery. De qualquer forma, o livro cobre em detalhes a bilioteca e segue a mesma metodologia do livro anterior (JavaScript: O Guia do Programador). Recomendo que leia este livro somente depois que você possuir um entendimento razoável do JavaScript.

### Se tornando um Jedi

A partir deste momento, considero que você já possua um conhecimento considerável com relação ao JavaScript.

#### O melhor do JavaScript

Apesar de muitos pensarem que trata-se de um livro para iniciantes, não é. Até porque, é difícil você compreender a linguagem com uma versão minificada das suas características.

Este livro é um compilação feita pelo Douglas Crockford, o qual revela as boas partes, belas características e partes ruins da linguagem de programação JavaScript. A leitura deste livro exige um prévio conhecimento sobre funções, métodos, objetos e arrays no JavaScript.

Para que fique mais fácil o entendimento: o "JavaScript: Guia Definitivo" prepara o terreno para que você aprenda esta linguagem de programação da melhor maneira possível, já o "O Melhor do JavaScript" é um convite para entender que "nem tudo são flores", mas que tem jeito. E as soluções que oferecem melhorias às suas aplicações são compartilhadas no livro "Padrões JavaScript".

#### Padrões JavaScript

Aqui, começa a ficar interessante e suas aplicações agradecem. Você entenderá porque trilhar um caminho com padrões e boas práticas são úteis para que suas aplicações mantenham coerência, qualidade, escalabilidade e um código manutenível.

Neste livro, Stoyan faz uma breve introdução sobre os conceitos mais importantes orientados ao JavaScript, detalha os padrões básicos para tornar a sua aplicação mais sólida e performática (apontando anti-padrões e possíveis armadilhas), além de relacionar padrões para funções, na criação de objetos, reutilização de código, padrões de projeto e no browser.

#### JavaScript de Alto Desempenho

Neste livro, o Nicholas Zakas mantém o foco em quais métodos podem ser utilizados para construir aplicações com boa performance e desempenho. Alguns pontos que foram apontados no livro anterior (Padrões JavaScript) podem ser revisados aqui.

#### Segredos do Ninja JavaScript

IMHO, este livro é o "JavaScript: Guia Definitivo" para quem conhece e já possui alguma experiência com o JavaScript, além de denotar uma compilação do "Padrões JavaScript" e "JavaScript de Alto Desempenho" com uma excelente análise sobre testes unitários.

#### Javascript Enlightenment

O livro não é sobre padrões, não menciona paradigmas de OO (orientação a objetos) no JavaScript, muito menos quais são os aspectos bons ou ruins. Trata-se de elementos importantes no JavaScript (funções, objetos, arrays, closures, escopos em detalhes) e o porquê do seu conhecimeto e importância.

Além disso, recomendo para quem prefere iniciar com jQuery à JavaScript. Como a própria chamada do livro se refere: "De um usuário de bibliotecas para um programador em JavaScript".

### May the force be with you

Daqui pra frente, deduzo que você já possua uma boa experiência com o JavaScript e queira adquirir conhecimentos avançados sobre a linguagem ou sobre tópicos mais específicos.

#### JavaScript Web Applications

Um livro recheado de conceitos, que ajuda você a desenvolver habilidades na criação de aplicações web, garantindo um boa arquitetura, código manutenível e boas práticas.

#### Testable JavaScript

Um ótimo livro para adquirir um conhecimento sólido em testes no JavaScript. Cobre pontos conceituais, boas práticas, padrões e métodos para tornar o desenvolvimento da sua aplicação manutenível. Além disso, aborda cenários para automação, inspeção e [entrega do seu código com qualidade](http://en.wikipedia.org/wiki/Continuous_delivery).

Apesar do livro ser bem detalhado, recomendo fortemente que você já possua um contato prévio com testes unitários e [design patterns](http://en.wikipedia.org/wiki/Software_design_pattern).

#### Functional JavaScript

Leitura em andamento, mas posso dizer que me supreendo a cada página. A programação funcional no JavaScript é algo mágico! Em paralelo, estou realizando alguns experimentos com o [Haskell](http://www.haskell.org/haskellwiki/Haskell). Sugiro que dê uma olhada nesta linguagem. Vai mudar a sua vida!

## Fique atento para alguns pontos

É muito comum a tradução de termos técnicos em livros de Algortimos, Lógica de Programação e linguagens mais antigas. Esse péssimo hábito foi herdado nos livros sobre JavaScript também. Por isso, vou listar alguns termos que sofreram traduções equivocadas e/ou desnecessárias:

- Fechamento -> **Closure**
- Içamento -> **Hoisting**
- Função de chamada de retorno -> **Callback**
- Nó -> **Node** (DOM)
- marca -> **tag** (HTML)
- matriz/vetor -> **Array**
- sequência de caracteres -> **Strings**

Em alguns momentos, funções são traduzidas como métodos e vice-versa. Fique atento! Métodos são funções, mas esta nomenclatura se dá quando consta como parte integrada em um objeto.

Exemplo:

```
function fn() {} // função declarativa
var fn = function() {}; // função literal
function() {} // função anônima

var objeto = {
    propriedade: 'valor',
    metodo: function() {
        // é uma função, mas chamamos de método por fazer parte de um objeto
    }
}
```

Além disso, relaciono alguns nomes e siglas importantes:

- **CommonJS**, **AMD**, **UMD**: padrões para modularização e carregamento de arquivos
- **RequireJS**, **BrowserifyJS**: ferramentas utilizadas no padrão AMD e CommonJS respectivamente
- **DOM**: Document Object Model
- **BOM**: Browser Object Model
- **QUnit**, **Jasmine**, **Mocha**, **Nodeunit**: ferramentas para testes unitários no JavaScript
- **TDD**, **BDD**: métodos para testes
- **SPA**: Single Page Application

## Mais alguma consideração?

Existem muitos outros títulos excelentes sobre JavaScript, mas procurei listar os que já tive a oportunidade em ler para que pudesse dar um feedback e um contexto geral de cada um.

Além disso, existem algumas considerações interessantes para aprofundar os seus estudos:

- **Leitura do códigos de terceiros:** observe como os desenvolvedores, que estão há mais tempo lidando com a linguagem, criam seus códigos e organizam os mesmos;
- **Ler artigos:** a leitura de artigos ajuda a solucionar possíveis problemas já enfrentados por outros desenvolvedores, além de conhecer como aplicar determinada solução para um dado cenário.
- **Praticar:** pratique os códigos expostos em um artigo, livro ou qualquer outro documento! Com a prática vem a experiência.
- **Assistir palestras:** existem diversos vídeos de palestras disponíveis no Youtube sobre novos tópicos relacionados ao JavaScript. É importante estar atenado e saber o que está acontecendo.
- **Participe dos eventos:** temos muitos eventos no Brasil, que tratam de temas relacionados ao JavaScript. Além disso, o _networking_ será importante para a troca de experiências e conhecimento com demais colegas.

Além de algumas leituras complementares:

- [Eloquent JavaScript](http://eloquentjavascript.net/)
- [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

E você, tem mais alguma consideração para acrescentar aqui?

Bons estudos e até a próxima! =]
