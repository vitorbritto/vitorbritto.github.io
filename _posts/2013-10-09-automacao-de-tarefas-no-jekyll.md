---
layout: post
title: "Automação de Tarefas no Jekyll"
description: O Jekyll é uma ferramenta fantástica. Como um gerador estático, ele possibilita a criação de um projeto web de forma ágil e bem prática. Porém, nem tudo pode sair como o planejado. É nessas horas que devemos utilizar as soluções mais acessíveis, adequadas e pertinentes para o projeto. Confira a minha dica sobre a automação de tarefas com Jekyll, neste artigo.
link: "http://vitorbritto.com.br/blog/automacao-de-tarefas-no-jekyll/"
date: 2013-10-09
path: 2013-10-09-automacao-de-tarefas-no-jekyll.md
cover: assets/images/posts/post-jekyll.jpg
comments: true
---

Saudações!

Deixo uma dica rápida para quem trabalha com o Jekyll.

### Problema enfrentado
Desenvolvi este blog com o Jekyll porém, enfrentei algumas "barreiras" quanto a automação de tarefas.

Acontece que ao iniciar o servidor estático do Jekyll, as tarefas do Grunt não eram executadas da forma esperada. Ainda mais com a tarefa "watch". Encontrei algumas soluções na web porém, ou deixavam o Gruntfile muito extenso ou era necessário alterar a estrutura do Jekyll.

### Solução
Criei um **Gruntfile** somente para lidar com os *scripts* (minificação, concatenação e validação) e criei um **Rakefile** que faz a captura das tarefas do Gruntfile e executa todo o resto. Este foi o método mais prático que encontrei até o momento, e o qual me adaptei também.

No Rakefile, tenho 2 tarefas que executa os seguintes comandos:

* **rake:** `compass compile`, `grunt watch`, `compass watch`, `jekyll server --watch`
* **rake build:** `compass compile`, `grunt build`, `jekyll build`

Os arquivos estão no Gist: [https://gist.github.com/vitorbritto/6886201](https://gist.github.com/vitorbritto/6886201)

Espero que seja útil para você.

Até a próxima! =]
