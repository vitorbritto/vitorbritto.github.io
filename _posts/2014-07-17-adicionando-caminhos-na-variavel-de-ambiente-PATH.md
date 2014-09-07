---
layout: post
title: Adicionando caminhos na variável de ambiente PATH
description: É comum instalarmos novos programas/plataformas em nosso sistema e precisarmos inicializar o seu binário através da variável global PATH no Shell. Certamente, inserir este caminho precisará de um pequeno esforço manual/braçal para que o programa seja iniciado corretamente.
link: http://vitorbritto.com.br/blog/adicionando-caminhos-na-variavel-de-ambiente-PATH/
date: 2014-07-14
path: 2014-07-14-adicionando-caminhos-na-variavel-de-ambiente-PATH.md
cover: assets/images/posts/post-bash-path.jpg
comments: true
---

Saudações!

É comum instalarmos novos programas/plataformas em nosso sistema e precisarmos inicializar o seu binário através da variável de ambiente PATH no Shell. Certamente, inserir este caminho precisará de um pequeno esforço manual/braçal para que o programa seja iniciado corretamente.

A seguir, mostro como adicionar novos _paths_ ao Shell e, para exemplificar este cenário, estarei utilizando como base o **Bash**.

### Entendendo o cenário

Para que o caminho (path) seja adicionado a variável de ambiente PATH, podemos fazê-lo por dois meios:

- _append_: `PATH=$PATH:~/opt/bin`
- _prepend_: `PATH=~/opt/bin:$PATH`

**Qual seria a diferença entre eles?**

Basicamente, ao fazer um `append` no PATH, o caminho será procurado depois de todos os outros diretórios. É indicado para o caso de haver um programa com o mesmo nome em vários diretórios. E, ao fazer um `prepend` no PATH, o caminho será pesquisado antes de todos os outros diretórios.

> **Nota:** você pode conferir mais detalhes sobre `append` e `prepend` no PATH, [neste artigo (em inglês)](http://www.troubleshooters.com/linux/prepostpath.htm).

É possível também adicionar várias entradas ao mesmo tempo.

Veja no exemplo abaixo:

```bash
PATH=$PATH:~/opt/bin:~/opt/node/bin
```

Perceba que o caracter `:` demarca o fim/início de cada caminho.

### Registrando meus _paths_

Bom, você pode registrar os seus caminhos tanto no arquivo `~/.bash_profile` quanto no arquivo `~/.bashrc`. Entrentanto, vale entender as diferenças entre eles e porque, em alguns casos, os seus _paths_ não são iniciados.

O arquivo `.bash_profile` é executado para shells com usuários autenticados. Já o `.bashrc` é executado em shells interativos e usuários não autenticados.

**Agora me perdi, explica melhor?**

Vamos lá. Quando você faz uma autenticação (digitando o usuário e senha) através do console, seja local ou remoto (via SSH), o arquivo `.bash_profile` é utilizado para configurar o shell antes do prompt ser inicializado. Entretanto, se você já estiver logado no sistema e abrir um novo terminal, então o `.bashrc` será executado. O arquivo `.bashrc` é também iniciado quando você executa uma nova instância bash no terminal (não autenticado), digitando `/bin/bash`.

> **Importante:** vale lembrar que temos uma exceção no OSX onde, por padrão, cada nova instância iniciada no terminal executa o shell com usuário autenticado, chamando o `.bash_profile` ao invés do `.bashrc`.

**Ficou mais claro agora?**

Se pensarmos um pouco, podemos chegar a conclusão de que os dois arquivos são úteis para adicionarmos os novos _paths_, mas por que utilizar dois arquivos?

Sendo assim, recomendo que registre os novos _paths_ no arquivo `~/.bash_profile` e exponha o mesmo através do `source` no arquivo `.bashrc`.

> **Nota:** entenda mais sobre o `source` [aqui (em inglês)](http://en.wikipedia.org/wiki/Source_%28command%29).

### E como faremos isso?

Confira abaixo:

```bash
# arquivo .bashrc
[ -n "$PS1" ] && source ~/.bash_profile;
```

```bash
# arquivo .bash_profile
# paths
export PATH=$PATH:~/seu/caminho:~/outro/caminho
# aliases
alias la="ls -la"
# functions
function apepath {
    if [ -z "${!1}" ]; then
        export "$1"="$2"
    else
        export "$1"="${!1}:$2"
    fi
}
...
```

#### A título de conhecimento

Perceba que temos um `[ -n "$PS1" ] &&` antes do `source`. Você deve estar se pergunta o que é isso. Pois bem. Este trecho do código retorna o prompt do terminal em formato *string*. Por exemplo, no meu terminal, é renderizado:

```
vitorbritto at ~
```

Ao digitar `echo $PS1`, será retornado:

```
\[\033]0;\w\007\]\n\[\]\u\[\] at \[\]\w$(prompt_git)\n\[\]$ \[\]
```
Já o operador `&&` é utlizado para combinar dois ou mais comandos em uma linha compacta no Unix.

Perceba também que, além dos _paths_, estamos registrando os nossos atalhos (_aliases_), funções bash, configurações do prompt e demais recursos que pretendemos utilizar no terminal, no `.bash_profile`.

### Dando uma mãozinha

Podemos usar funções para facilitar a inclusão de novos caminhos (_paths_) na variável global PATH.

```bash
# append para novo caminho
apepath() {
    if [ -z "${!1}" ]; then
        export "$1"="$2"
    else
        export "$1"="${!1}:$2"
    fi
}
# prepend para novo caminho
prepath() {
    if [ -z "${!1}" ]; then
        export "$1"="$2"
    else
        export "$1"="$2:${!1}"
    fi
}
# Executamos as funções da seguinte forma:
$ apepath PATH "/seu/novo/caminho/aqui"
OU
$ prepath PATH "/seu/novo/caminho/aqui"
```

Você pode conferir um exemplo mais completo sobre como trabalho e configuro o meu shell, [neste repositório](https://github.com/vitorbritto/forcefiles).

Até a próxima! :)
