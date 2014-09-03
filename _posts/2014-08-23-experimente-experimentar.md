---
layout: post
title: Experimente Experimentar
link: http://vitorbritto.com/blog/experimente-experimentar/
description: "Redundância a parte, me responda o seguinte: Você tem o costume de praticar/replicar o código que lê em determinado artigo ou livro? E o que aprendeu há alguns anos? Aqueles conceitos mais básico, lembra deles ainda?"
date: 2014-08-23
path: 2014-08-23-experimente-experimentar.md
cover: assets/images/posts/post-experimente.jpg
avatar: assets/images/avatar.jpg
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

Saudações!

Redundância a parte, me responda o seguinte:

- Você tem o costume de praticar/replicar o código que lê em determinado artigo ou livro?
- E o que aprendeu há alguns anos?
- Aqueles conceitos mais básico, lembra deles ainda?

Pois bem, algo que aprendi na minha profissão é que a experiência vem com a prática e em como aplicamos o nosso conhecimento no dia a dia.

Neste artigo, veremos como a prática pode ser usada para potencializar a experiência e fixar determinado conhecimento. Em específico, estaremos tratando das linguagens de programação. Então, vamos em frente.

## O conhecimento é inesgotável...

Durante as duas semanas que se passaram, tenho exercitado bastante (mais do que o normal) as técnicas adquiridas e àquelas que adquiri há muitos anos! Não importa o nível de complexidade, estou aplicando gradativamente desde o nível mais básico.

Com isso, pude perceber que alguns conceitos simples estavam perdidos no tempo e, com esta revisão, consegui injetá-los novamente.

Ainda esta semana, tomei a decisão de abandonar projetos que envolvam PHP no desenvolvimento Back-End e me dedicar exclusivamente ao Ruby. Você pode conferir o artigo sobre esta decisão [aqui](http://www.vitorbritto.com.br/blog/aprendi-a-dizer-adeus/), mas adianto que o motivo foi por adaptação e frustrações passadas com o PHP.

Enfim, sem #mimimis, página virada. Vamos em frente.

Quando se é Freelancer e dono do próprio negócio (meu caso), você precisa ser autodidata. IMHO, isso passa a ser uma obrigação pois, o seu _networking_ é quase nulo e, a não ser pelos eventos e encontros (meet ups) realizados pela comunidade, você ficará restrito a um ambiente isolado de outros profissionais na sua rotina de trabalho. Dito isso, é preciso manter um alto nível de disciplina e buscar o conhecimento, seja discutindo ou debatendo sobre determinado tema nas redes sociais, fazendo a leitura de artigos, livros ou **praticando**.

Adquirir o conceito e entender como uma linguagem funciona é essencial. Saber a sua sintaxe e os termos técnicos envolvidos nesta linguagem, ajudam na comunicação com outros desenvolvedores. De toda forma, isso não se torna suficiente e é aí que a prática entra em campo para fazer a diferença.

Afinal, mesmo o conhecimento sendo inesgotável...

## … ele pode ser esquecido, se não praticado.

Ao ponto em que pode ser esquecido, precisamos nos doutrinar para que a prática seja uma constante em nossa profissão. A partir do momento em que você pratica o que aprendeu (fazendo disso um hábito), seja qual for o tema, você consegue fixar mais detalhes e entender melhor o cenário em questão.

Se eu te perguntar o que é uma função imediata no JavaScript (alguns a chamam de função auto-executável), você pode até saber do que se trata. Entretanto, se você nunca "pôs a mão na massa" e desenvolveu alguma solução com a [IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/), como saberá o mecânismo que atua por trás dela? O que faz ela ser imediata? Lembra como ela deve ser aplicada?  ¯\ _(ツ)_ /¯

## O que eu fiz?

Pratiquei. Ou seja, Rock and Roll baby! \m/ (>_<) \m/

Desde de que entrei no universo dos códigos, venho praticando e procurando entender as questões envolvida em cada problema. A curiosidade, disciplina e força de vontade foram fatores decisivos. Então, para atingir um resultado satisfatório, foi preciso manter a ordem e fazer com que o meu progresso fosse constante e **necessário**.

### Primeiro... coloque ordem na casa

Bom, antes de começar a aplicar o que aprendeu é preciso um planejamento e disciplina. No meu caso, orientei meus estudos para o turno noturno, em um período diário de 2 horas. De preferência, acompanhado de uma boa música (no meu caso, um bom Death Metal, Metallica, Pantera ou Black Sabbath).

Feito este planejamento, basta se doutrinar e agir conforme o escopo estabelecido previamente. Se você estabeleceu seu horário de estudos entre 20:00 e 22:00, cumpra-o! Se por algum motivo você não pôde estudar no horário pré-estabelecido, remaneje para mais cedo ou mais tarde. Mas, fique atento! Não faça com que estas mudanças de horário se tornem uma rotina.

### Segundo… Registre sua evolução

É importante que os seus experimentos, e tudo o que você está aprendendo, seja registrado. Fique tranquilo e esqueça questões de performance e padrões no início. Estes aspectos e as boas práticas serão alcançadas/modificadas à medida em que você for refatorando os pontos necessários de cada experimento. Para os meus experimentos, criei um repositório entitulado [**LABS**](https://github.com/vitorbritto/labs) no GitHub.

Uma boa organização é muito importante também. No meu caso, estou dividindo os experimentos em quatro pontos/partes:

1 - Anotações Gerais
2 - Guia Geral
3 - Passo a Passo
4 - Problemas Comuns

#### Anotações Gerais

Estas anotações referem-se ao experimento proposto. Então, por exemplo, se você está praticando com _strings_ no JavaScript, procure dar uma breve descrição de como este cara se comporta na linguagem, quais as suas funções/métodos e faça um _overview_ sobre alguns aspectos gerais para utilizá-lo.

#### Guia Geral

Ainda com relação às _strings_, temos alguns métodos como: `trim()`, `toUpperCase()`, `toLowerCase()`. Neste ponto/parte, aplique de forma mais direta. Veja o exemplo abaixo:

```js
var str = 'I love JavaScript  ';
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
```

> **Nota:** você pode encadear estes caras, criando um _[chain method](http://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/)_. Desta forma, você evita a repetição da variável `str` e refatora o código para que fique mais legível criando um estilo de cascata para os métodos a serem utilizados.

#### Passo a passo

Esta parte é onde você dá o primeiro passo, o mais básico possível, para o elemento que você está experimentando/praticando. O grau de complexidade vai aumentando gradativamete.

Pense como um jogo, sem macetes, onde você começa com um mínimo de _life_, pouca munição e uma arma bem básica. A cada missão cumprida, essa complexidade aumenta no próximo nível e, consequentemente, novas armas, municação e _life_ são (e podem ser) adquiridos. Ou seja, **complexidade** e **prática** se tornam **diretamente** proporcionais logo no início. Porém, se tornam **inversamente** proporcionais com o tempo.

**Resumindo:**

- **Ao iniciar:** complexidade tende a aumentar -> a prática também
- **Com o tempo** dificuldade começa a diminuir -> a prática continua aumentado

Savvy? =]

#### Problemas Comuns

Nesta parte, não há limites. Aqui, serão colocadas experiências ou relatos de colegas que enfretaram problemas e que são comuns na nossa área. Por exemplo, ainda se tratando de _strings_: como podem ser concatenadas no JavaScript?

## Um passo de cada vez

- Não espere saber tudo e da melhor forma possível sempre.
- Não exija muito de você. Seja sensato, disciplinado e _take your time_.
- Ninguém nasce sabendo! Existe uma evolução natural e constante para conseguir determinado conhecimento.
- Haverão momentos onde o erro vai persistir por algum tempo até você encontrar uma solução. Está solução pode ser encontrada com uma gambiarra ou não.
- Gambiarra não significa **errar**! Veja como um "processo criativo", mas que precisa, necessariamente, ser adaptado e otimizado.
- Faça a leitura dos códigos de outros desenvolvedores para agregar conhecimento e desvendar os mistérios de uma linguagem.
- Tome a leitura destes códigos como parte importante para aguçar o seu raciocínio lógico.
- Busque sempre novos desafios e meios para construir novas soluções.
- Você pode e tem capacidade para chegar lá. Basta querer e praticar!

Até a próxima! =]
