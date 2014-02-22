# Blog - Vitor Britto

Espaço onde escrevo artigos sobre desenvolvimento web, experiência do usuário e produtividade no ambiente de trabalho.

## Bem vindo!

Este projeto foi desenvolvido com [Jekyll](http://jekyllrb.com/), um *static generator* em Ruby.

## Como utilizar

Para rodar este blog localmente na sua máquina, execute os seguintes passos:

1. Caso você não possua o [Git](http://git-scm.com/downloads) e [Ruby](http://www.ruby-lang.org/pt/downloads/), instale-os na sua máquina.
2. Instale o [Jekyll](http://jekyllrb.com/) através do comando: `gem install jekyll`
3. Clone o projeto e acesso o diretório do projeto com o seguinte comando: `git clone git@github.com:vitorbritto/blog.git && cd blog`
4. Agora, execute: `rake build`
5. Confira o site rodando em `http://localhost:4000`.

## Estrutura

A estrutura básica do projeto:

````bash
blog/
├── _drafts/
├── _includes/
├── _layouts/
├── _plugins/
├── _posts/
├── about/
├── archive/
├── assets/
│   ├── fonts/
│   ├── images/
│   ├── js/
│   └── sass/
├── projects/
├── .editorconfig
├── .gitignore
├── .jshintrc
├── _config.yml
├── bower.json
├── config.rb
├── feed.xml
├── Gemfile
├── Gruntfile.js
├── humans.txt
├── index.html
├── package.json
├── Rakefile
├── README.md
└── robots.txt
```

### [_includes](https://github.com/vitorbritto/blog/tree/master/_includes)

São blocos de código utilizados para gerar a página principal do site ([index.html](https://github.com/vitorbritto/blog/blob/master/index.html)).

### [_plugins](https://github.com/vitorbritto/blog/tree/master/_plugins)

Contém os plugins utilizados.

### [_posts](https://github.com/vitorbritto/blog/tree/master/_posts)

Contém a lista de posts.

### [_layouts](https://github.com/vitorbritto/blog/tree/master/_layouts)

Contém o template padrão da aplicação.

### _build

É onde os arquivos gerados são armazenados, uma vez que o Jekyll tenha sido rodado. Porém, esse diretório se torna desnecessário no nosso modelo, por isso está ignorado ([.gitignore](https://github.com/vitorbritto/blog/blob/master/.gitignore)).

### [assets](https://github.com/vitorbritto/blog/tree/master/assets)

Possui as imagens, estilos e scritps.

### [_config.yml](https://github.com/vitorbritto/blog/blob/master/_config.yml)

Armazena de forma fácil a maior parte das configurações da aplicação.

### [index.html](https://github.com/vitorbritto/blog/blob/master/index.html)

É o arquivo que importa todas as seções da aplicação.

*Mais informações sobre a estrutura de arquivos do Jekyll, [clique aqui](https://github.com/mojombo/jekyll/wiki/Usage).*
