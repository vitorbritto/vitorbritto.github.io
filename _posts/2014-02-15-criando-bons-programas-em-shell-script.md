---
layout: post
title: "Criando bons programas em Shell Script"
description: Neste artigo relaciono algumas dicas mais do que úteis para quem trabalha com Shell Script.
link: "http://vitorbritto.com.br/blog/dicas-uteis-programas-em-shell-script/"
date: 2014-02-15
cover: "assets/images/posts/post-shell-script.jpg"
avatar: "assets/images/avatar.jpg"
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

**UPDATE - 16/02/2014:** dicas 7 e 8 adicionadas.

Saudações!

Há algumas semanas atrás, escrevi um artigo com [dicas úteis][8] para quem utiliza o Grunt no ambiente de trabalho.

Hoje, estarei publicando um artigo com dicas mais do que úteis para quem trabalha com Shell Script. Estas dicas fazem parte de estudos e experiências que vivenciei há um bom tempo trabalhando com esta linguagem sensacional. São dicas que favorecem na construção de bons programas com Shell Script.

## Shell Script, o que é isso?

Se você não faz idéia do que é Shell Script, estas dicas podem não ser tão úteis para você. De toda forma, não desanime! Eu recomendo que você estude e se familiarize com esta poderosa linguagem. Segue um [artigo][10] para você ter uma base.

## Chega de conversa, vamos ao que interessa

1. Sempre utilize aspas para declarações de variáveis, argumentos e referências (para as variáveis) nos seus programas em Shell Script.
2. Sempre que possível, utilize comandos compactos com os operadores `&&` e `||` (ex.: mkdir novoprojeto && cd novoprojeto && touch README.md).
3. Entenda quais as possibilidades para se utilizar algum comando em determinado sistema. Para isso, leia a _man pages_ dos comandos básicos (grep, cut, sed, cat e etc) de outros sistemas.
4. Acostume-se a ler o código-fonte de outros programas em Shell Script. Alguns ensinamentos são melhor compreendidos com um exemplo funcional.
5. Analise quando você deve utilizar o comando `cat`, assim como o `sed`, `awk`, `cut` e `grep`.
6. Faça um bom proveito de _pipes_, _redirects_ e _lists_ nos seus programas.
7. Deixe o seu programa sempre com um cabeçalho inicial (veja o [exemplo][12]). Não importa se o cabeçalho ficar maior que o programa em sí. Comentários são ignorados pelo interpretador e isso não influência em nada no desempenho do programa. Um código bem documentado é útil até mesmo para você.
8. Utilize quebra de linha, linhas em branco para separar determinados blocos do seu código e alinhamento para uma boa legibilidade e leiturabilidade do seu programa.
9. Se você sempre quis saber porque alguns programas em Shell Script iniciando com um `#!/bin/bash` ou `#!/bin/sh`, isso se chama _shebang_. Com este cara, é possível tornar o seu _script_ executável, como um programa. Com isso, ao executar o comando `chmod u+x meuscript.sh` você estará solicitando ao seu sistema que dê permissão àquele script para ser parseado e interpretado como um programa e, por fim, ser executado como `./meuscript.sh`.

Por hoje é só. Estarei atualizando este espaço a medida em que novas experiências e situações acontecerem. Fique atento para novas dicas.

Até a próxima! =]

[8]: http://www.vitorbritto.com.br/blog/dicas-uteis-para-quem-utiliza-gruntjs/
[10]: http://www.vitorbritto.com.br/blog/unix-a-base-de-tudo/
[12]: https://gist.github.com/vitorbritto/9036467
