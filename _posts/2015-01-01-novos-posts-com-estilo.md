---
layout: post
title: "Novos posts com estilo"
link: "http://vitorbritto.com/blog/novos-posts-com-estilo/"
date: 2015-01-01
cover: "assets/images/posts/post-novos-posts-com-estilo.jpg"
path: "2015-01-01-novos-posts-com-estilo.md"
description:
comments: true
bio: Desenvolvedor Web e Designer, extremamente apaixonado pelo seu trabalho. Descobriu o mundo dos códigos há quase duas décadas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, projetos colaborativos, desenvolvimento de projetos pessoais e escrever os artigos aqui publicados.
---


Saudações!

Gostaria de compartilhar uma dica interessante para os usuários do _Static Generator_ Jekyll, que, apesar de ser uma excelente ferramenta, me deixou na mão em um ponto: criar novos posts. 

## O problema

Mesmo com a facilidade da sintaxe do YAML (front matter) e o Markdown para escrever os meus artigos, senti falta de uma tarefa/comando/utilitário para automatizar o processo de criação de um modelo inicial para os meus posts.

Sabendo-se que passo a maior parte do tempo no terminal/console/shell e, até onde sei, não é possível criar um template via CLI para um novo post com o Jekyll, resolvi facilitar este processo desenvolvendo um programa em Shell para gerar um template de acordo com as minhas necessidades.

## A solução

O primeiro passo foi montar a estrutura do script responsável por está automação, colocando um cabeçalho e uma opção para `--help`. A boa prática em documentar o seu programa, facilita a sua manutenção. Não somente, o seu programa fica muito mais organizado e elegante.

    ```
    #!/usr/bin/env bash
    
    # ------------------------------------------------------------------------------
    #
    # Program: initpost.sh
    # Author:  Vitor Britto
    # Description: script to create an initial structure for my posts.
    #
    # Usage: ./initpost.sh [options] <post name>
    #
    # Options:
    #   -h, --help        output instructions
    #   -c, --create      create post
    #
    # Alias: alias ipost="bash ~/path/to/script/initpost.sh"
    #
    # Example:
    #   ./initpost.sh -c How to replace strings with sed
    #
    # Important Notes:
    #   - This script was created to generate new markdown files for my blog.
    #
    # ------------------------------------------------------------------------------
    ```

> Lembre-se sempre de incluir o _shebang_ na primeira linha do programa para torná-lo executável. Se quiser saber mais sobre isto, [clique aqui](http://www.vitorbritto.com.br/blog/criando-bons-programas-em-shell-script/).

Além disso, é deverás importante viabilizar uma opção para ajudar o usuário na jornada pela ferramenta. Mesmo que este usuário seja você.


    ```
    # Everybody need some help
    initpost_help() {
    
    cat <<EOT
    
    ------------------------------------------------------------------------------
    INIT POST - A shortcut to create an initial structure for my posts.
    ------------------------------------------------------------------------------
    
    Usage: ./initpost.sh [options] <post name>
    
    Options:
      -h, --help        output instructions
      -c, --create      create post
    
    Example:
      ./initpost.sh -c How to replace strings with sed
    
    Important Notes:
      - This script was created to generate new text files to my blog.
    
    
    Copyright (c) Vitor Britto
    Licensed under the MIT license.
    
    ------------------------------------------------------------------------------
    
    EOT
    
    }
    ```

O segundo passo foi desenvolver funções utilitárias para determinados comportamentos deste programa. Neste caso, temos funções para criar _logs_ e renderizar na tela algumas mensagens.

    ```
    # ------------------------------------------------------------------------------
    # | UTILS                                                                      |
    # ------------------------------------------------------------------------------
    
    # Header logging
    e_header() {
        printf "$(tput setaf 38)→ %s$(tput sgr0)\n" "$@"
    }
    
    # Success logging
    e_success() {
        printf "$(tput setaf 76)✔ %s$(tput sgr0)\n" "$@"
    }
    
    # Error logging
    e_error() {
        printf "$(tput setaf 1)✖ %s$(tput sgr0)\n" "$@"
    }
    
    # Warning logging
    e_warning() {
        printf "$(tput setaf 3)! %s$(tput sgr0)\n" "$@"
    }
    ```
    
> Perceba que os dois passos anteriores podem ser reutilizáveis em outros programas Shell.

No próximo e terceiro passo, defini as variáveis e "constantes" deste programa. Ambas são escritas em _uppercase_, a não ser quando crio variáveis locais (no escopo de uma função) que, por sua vez, são escritas em _lowercase_.

> Fica à seu critério, como definir suas variáveis. Me sinto confortável desta maneira. Combinado?

    ```
    # ------------------------------------------------------------------------------
    # | VARIABLES                                                                  |
    # ------------------------------------------------------------------------------
    
    # CORE: Do not change these lines
    # ----------------------------------------------------------------
    POST_TITLE="${@:2:$(($#-1))}"
    POST_NAME="$(echo ${@:2:$(($#-1))} | sed -e 's/ /-/g' | sed "y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/")"
    CURRENT_DATE="$(date +'%Y-%m-%d')"
    FILE_NAME="${CURRENT_DATE}-${POST_NAME}.md"
    # ----------------------------------------------------------------
    
    
    # SETTINGS: your configuration goes here
    # ----------------------------------------------------------------
    
    # Set your destination folder
    DIST_FOLDER="$HOME/Dropbox/DOCUMENTOS/Articles/"
    
    # Set your blog URL
    BLOG_URL="http://vitorbritto.com/blog"
    
    # Set your assets URL
    ASSETS_URL="assets/images/posts"
    # ----------------------------------------------------------------
    ```

Nesta parte, separei as "constantes" das variáveis por **CORE** e **SETTINGS**. Veja como a documentação de cada elemento ajuda na identificação do que pode ser alterado ou não.

No quarto passo, dei início ao desenvolvimento das _main functions_.

    ```
    # Initial Content
    initpost_content() {
    
    echo "---"
    echo "layout: post"
    echo "title: \"${POST_TITLE}\""
    echo "link: \"${BLOG_URL}/${POST_NAME}/\""
    echo "date: ${CURRENT_DATE}"
    echo "cover: \"${ASSETS_URL}/post-${POST_NAME}.jpg\""
    echo "path: \"${FILE_NAME}\""
    echo "description:"
    echo "comments: true"
    echo "bio: Desenvolvedor Web e Designer, extremamente apaixonado pelo seu trabalho. Descobriu o mundo dos códigos há quase duas décadas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, projetos colaborativos, desenvolvimento de projetos pessoais e escrever os artigos aqui publicados."
    echo "---"
    
    }
    
    # Create file
    initpost_file() {
        if [ ! -f "$FILE_NAME" ]; then
            e_header "Creating template..."
            initpost_content > "${DIST_FOLDER}/${FILE_NAME}"
            e_success "Initial post successfully created!"
        else
            e_warning "File already exist."
            exit 1
        fi
    
    }
    ```
    
Se você se sentiu incomodado com a quantidade de _echo_ na função `initpost_content()`, saiba que podemos utilizar o o comando/utilitário `cat` (informações em `man cat`), gravar estas informações em um arquivo de texto externo ou a solução que você achar mais conveniente.

Por fim, criei uma função responsável pela inicialização do programa com a respectiva `flag`(--help|-h _ou_ --create|-c).

    ```
    # ------------------------------------------------------------------------------
    # | INITIALIZE PROGRAM                                                         |
    # ------------------------------------------------------------------------------
    
    main() {
    
        # Show help
        if [[ "${1}" == "-h" || "${1}" == "--help" ]]; then
            initpost_help ${1}
            exit
        fi
    
        # Create
        if [[ "${1}" == "-c" || "${1}" == "--create" ]]; then
            initpost_file $*
            exit
        fi
    
    }
    
    # Initialize
    main $*
    ```

> O programa completo encontra-se [aqui](https://github.com/vitorbritto/forcefiles/blob/master/scripts/initpost.sh). 


O script é configurável e espero que seja útil para você. 

Até a próxima! =]

