---
layout: post
title: "Iniciando os estudos com Erlang"
link: "http://vitorbritto.com/blog/iniciando-os-estudos-com-erlang/"
date: 2015-01-04
cover: "assets/images/posts/post-iniciando-os-estudos-com-erlang.jpg"
path: "2015-01-04-instalando-o-erlang-no-mac-osx.md"
description:
comments: true
bio: Desenvolvedor Web e Designer, extremamente apaixonado pelo seu trabalho. Descobriu o mundo dos códigos há quase duas décadas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, projetos colaborativos, desenvolvimento de projetos pessoais e escrever os artigos aqui publicados.
---

Saudações!

No início do ano passado, me interessei pela linguagem de programação Erlang. Incentivado pelo amigo [William Oliveira](https://twitter.com/gnuwilliam) dei início aos estudos, mas não mantive por muito tempo.

Há algum tempo, venho acompanhando o tema sobre _Functional Programming_ e resolvi aplicar algumas linguagens para experimentos e estudos. Erlang voltou a ser uma destas linguagens. 

## O universo Erlang

O Erlang é uma linguagem de programação com um modelo de concorrência extremamente leve e com um grande poder de escalabilidade. Erlang é muito utilizado em sistemas para processamento *multicore*. O fato de ser uma linguagem declarativa e funcional deixa sua sintaxe extremamente compacta para criar seus algoritmos.

### Projetos com Erlang

Erlang é voltado para sistema de alto nível, concorrentes, robustos e com integração real-time.

Alguns projetos que utilizam o Erlang:

- SimpleDB no Amazon EC2
- Bookmarking no Delicious
- Serviço de Chat do Facebook
- CouchDB

### A Comunidade

Até onde pesquisei a comunidade não é muito grande, mas a lang é tão poderosa que uma busca/pesquisa na documentação pode solucionar alguns problemas de maneira eficaz.

> **Nota:** caso queira aprender mais sobre a linguagem, estamos com um [grupo no facebook](https://www.facebook.com/groups/erlangbrasil/).

### Pacotes

O Erlang não possui um gerenciador de pacotes, tipo o *npm*. Você cria os seus módulos e [utiliza os já existentes](http://www.erlang.org/doc/man_index.html).

> **Nota:** o Erlang possui o seu próprio [Database](http://www.erlang.org/doc/apps/mnesia/index.html) e uma biblioteca excelente para lidar com [HTTP Servers](https://github.com/mochi/mochiweb)

### Boas práticas

As boas práticas, sugerem que você sempre comece com um protótipo para cometer erros em menor escala e encontrar os métodos mais eficientes. Não somente, você precisa saber o que está fazendo, como implementar sua ideia. Por isso, a leitura da documentação é muito importante.


## Iniciando com o Erlang

Bom, os procedimentos de instalação que passarei a seguir são para sistemas operacionais UNIX (sorry Windows users).

[Neste link](https://www.erlang-solutions.com/downloads/download-erlang-otp), existem diversos meios para instalação do Erlang em diversos Sistemas Operacionais. No Mac OSX, existem duas maneiras de instalar o Erlang: através do [HomeBrew](http://brew.sh/) (processo mais fácil) ou pelo *Source* do Erlang. 

O processo de instalação que passarei será através do *Source*. Então, vamos em frente.

### Instalando o Erlang

    1. Faça o download do source do Erlang através do `curl`.
    $ curl http://www.erlang.org/download/otp_src_17.4.tar.gz
      
    2. Extraia o conteúdo do arquivo `tar ball` utilizando o `tar`.
    $ tar zxvf otp_src_17.4.tar.gz
    
    3. Acesse o diretório do conteúdo extraído
    $ cd otp_src_17.4.tar.gz
    
    4. Prepare o Makefile
    $ CFLAGS=-O0 ./configure --prefix=/usr/share/erlang --enable-threads --enable-darwin-64bit
    
    5. Faça a instalação e compilação
    $ make && sudo make install
    
    6. Agora, será preciso adicionar o seguinte no arquivo `~/.bash_profile`
    ERLANG_HOME=/usr/share/erlang
    export PATH=$PATH:$ERLANG_HOME/bin
    
    7. Salve o arquivo e execute
    $ source ~/.bash_profile
    
Pronto! Agora você está apto para executar o Shell Interativo do Erlang. Basta digitar `erl` e iniciar os seus experimentos.

### Compilação e Execução

Você pode criar os seus programas em Erlang utilizando qualquer editor de texto. Existe uma lista de possibilidades e mais informações [aqui](http://www.erlang.org/faq/tools.html). 

A compilação e execução pode ser feita com: 

- Shell Script
- EScript (script executável)
- Makefile

### Dicas importantes

- Faça a leitura da [documentação](http://www.erlang.org/doc/).
- Em Sistemas UNIX, você pode ler o Man Page do Erlang com: `erl -man [opção]`.
- Ou pode exibir o *HELP* no Shell Interativo do Erlang com: `erl` e depois `help().`


## Enfim, estamos prontos

Agora podemos iniciar os estudos, experimentos e projetos com Erlang. A medida em que for me aprofundando na linguagem, publicarei novidades.

Até a próxima! =]