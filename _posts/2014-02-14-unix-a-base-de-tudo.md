---
layout: post
title: "Unix: a base de tudo!"
description: "Neste artigo vou falar sobre sobre a história do UNIX, a respeito do Shell, até chegar às ferramentas atuais, como: Grunt, Gulp, NodeJS, Bower, Yeoman e etc."
link: http://vitorbritto.com.br/blog/unix-a-base-de-tudo/
date: 2014-02-14
path: 2014-02-14-unix-a-base-de-tudo.md
cover: assets/images/posts/post-unix.jpg
comments: true
---

Saudações!

Hoje, estarei iniciando uma série de 2 artigos. Neste primeiro artigo falarei sobre a história do UNIX, a respeito do Shell, até chegar às ferramentas atuais, como: Grunt, Gulp, NodeJS, Bower, Yeoman e etc.

Falar sobre o Unix envolve uma lista extensa de tópicos a serem discutidos e apresentados. Existe muito mais no mundo Unix do que este artigo (o qual prefiro tratar como um resumo) que estou escrevendo. Desta forma, encorajo que você pesquise e conheça mais sobre o pai de todos os Sistemas Operacionais.

Você já deve ter ouvido falar sobre Unix, CLI, Shell Script, Bash, ZSH, oh-my-zsh e outros _\*SH_. Mas, o que seriam todos estes termos?

Para entendermos melhor o que tudo isto significa, precisamos voltar no tempo. Para ser mais exato, 1965\.

## Nasce o Unix

Tudo começou neste ano (1965), quando um grupo de programadores (Ken Thompson, Dennis Ritchie, Douglas McIlroy e Peter Weiner) reuniram-se para desenvolver um Sistema Operacional chamado Multics. Entretanto, o esforço revelou-se insuficiente para as pretensões do projeto diante da falta de recursos disponíveis na época. As empresas envolvidas no projeto (AT&T, GE e MIT) possuíam opiniões diferentes e estavam longe de chegar a uma solução satisfatória. Foi então que, em 1969, Ken Thompson resolveu reescrever o Multics com um conceito menos ambicioso, chamado Unics, utilizando linguagem de montagem (assembly).

Mais tarde, Brian Kernighan daria um novo nome ao sistema: Unix. E, 4 anos depois, Dennis Ritchie e Ken Thompson reescreveriam o Unix, usando a linguagem C, e assim difundido-o na comunidade.

Nos anos 70 e 80 foram desenvolvidas as primeiras distribuições (BSD, System III e V). Atualmente, Unix (ou \*nix) é o nome dado a uma grande família de Sistemas, os quais compartilham muito dos conceitos dos Sistemas Unix originais.

Alguns dos Sistemas derivados do Unix são:

- BSD (FreeBSD, OpenBSD e NetBSD)
- Solaris
- Linux
- Mac OS X (Darwin)

## Entendendo o UNIX

O sistema Unix consiste de duas partes:

- Núcleo Operacional (Kernel)
- Programas do Sistema (Shell & Utilities)

### Núcleo Operacional

O núcleo operacional está relacionado diretamente com o hardware e é executado na memória. É a parte responsável pelo agendamento de processos, gerenciamento da memória e controle ao acesso de arquivos e dispositivos de hardware. O acesso ao núcleo é feito por chamadas de sistema com o uso de funções que são disponibilizadas para as aplicações através de bibliotecas C (libc).

### Programas do Sistema

Esta parte envolve aplicações que consistem em bibliotecas C (libc), o Shell, diversos utilitários e a GUI (interface gráfica). Entenda que os utilitários são responsáveis pelo controle de processos, operações I/O em arquivos, entre outros. Quanto ao Shell, trata-se de uma interface que permite ao usuário digitar comandos, os quais serão interpretados.

> Nota: a Microsoft não utiliza o Unix. Na época, a Microsoft não possuia um sistema próprio, o que levou à aquisição do Q-DOS, que foi chamado posteriormente de MS-DOS.
>

## Entendendo o Shell

O termo _Shell_ é utilizado para se referir aos programas de sistemas do tipo Unix, funcionando como um mediador entre o usuário e a máquina capaz de interpretar comandos.

O Shell possui alguns interpretadores. Veja abaixo:

- Bourne shell (sh)
- Almquist shell (ash)
- Bourne-Again shell (bash)
- Debian Almquist shell (dash)
- Korn shell (ksh)
- Z shell (zsh):
- C shell (csh)
- Friendly interactive shell (fish)
- Perl Shell (psh)
- Python Shell (pysh)

Além dos seus interpretadores, o Shell implementa uma linguagem que permite o desenvolvimento de pequenos programas. Nós o chamamos de **Shell Script**. Mas, por que o nome **Shell Script**?

Para isso, vamos entender o conceito de Script.

Script é uma lista de comandos a serem executados em sequência. Um roteiro predefinido com comandos e parâmetros. Sendo assim, o **Shell Script** é uma lista de comandos que serão interpretados e executados no "coração do Unix".

## Percebeu alguma semelhança?

Se você já passou por este Blog, deve ter visto os artigos que escrevi sobre o Grunt. Também, já deve ter ouvido falar sobre o Yeoman ou Gulp. Esses caras, são ferramentas construídas com base na linguagem de programação JavaScript e são capazes de executar comandos/tarefas através de Scripts. Scripts são ótimos para executar rotinas (automatizar tarefas repetitivas).

Se você notou que, tanto o Shell Script (o qual faz parte do Unix) quanto as ferramentas que utilizamos hoje em dia (Yeoman, Grunt, Gulp, NodeJS) possuem alguma semalhança, deduziu que o princípio de tudo é o Unix e que o Shell é uma referência na construção destas ferramentas.

## Pois é, estamos voltando no tempo.

Perceba que há 40 anos já existia uma ferramenta capaz de realizar grande parte das tarefas que realizamos hoje em dia. O que mudou foi somente a ferramenta que você utiliza, mas a essência é a mesma. Perceba que o caminho para o Desenvolvimento Web está se voltando novamente para o que era feito naquela época.

Sendo assim, procure entender melhor como funciona o "coração" do seu sistema, faça um esforço para digitar mais e garimpar este terreno. Encare como um desafio que trará boas recompensas.

## Explore mais...

- Não tenha receio em utilizar o CLI (Interface de Linha de Comando).
- Explore os comandos do Unix e do Shell (se estiver no Windows, não tenha receio do CMD ou PowerShell também).
- Manipule o seu sistema de arquivos através do terminal/cmd/powershell/cygwin/bash.
- Interaja aos poucos e crie vínculos mais forte com este ambiente.

Na próxima parte deste artigo, darei exemplos mais sólidos de como o poder do Shell Script pode ser útil para executar tarefas importantes no seu Workflow. Enquanto isso, disponibilizo alguns projetos open-source que foram desenvolvidos com NodeJS e Shell Script.

- Skeleton: [http://skeleton.vitorbritto.com.br/][16]
- Managers: [http://managers.vitorbritto.com.br/][17]
- Just: [http://vitorbritto.github.io/just/][18]

[16]: http://skeleton.vitorbritto.com.br/
[17]: http://managers.vitorbritto.com.br/
[18]: http://vitorbritto.github.io/just/
