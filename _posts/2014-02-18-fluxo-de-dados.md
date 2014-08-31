---
layout: post
title: "Fluxo de Dados"
description: Neste artigo veremos porque pipes, redirections e lists (Unix) são tão importantes para as tecnologias atuais que utilizam fluxo de dados (leitura/escrita, entrada/saída). Convido você a voltar no tempo para entender como estes caras podem ser úteis e eficientes no seu Workflow. Para ser mais exato, na execução de rotinas e procedimentos de automação.
link: "http://vitorbritto.com.br/blog/fluxo-de-dados/"
date: 2014-02-18
cover: "assets/images/posts/post-fluxo-de-dados.jpg"
avatar: "assets/images/avatar.jpg"
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

Saudações!

Neste artigo veremos porque _pipes_, _redirections_ e _lists_ (Unix) são tão importantes para as tecnologias atuais que utilizam fluxo de dados (leitura/escrita, entrada/saída). Convido você a voltar no tempo para entender como estes caras podem ser úteis e eficientes no seu Workflow. Para ser mais exato, na execução de rotinas e procedimentos de automação.

## O passado, o presente e o futuro

O que você precisa saber, para começo de conversa, é que estes caras existem há um bom tempo e não é nenhuma novidade. Se você utiliza NodeJS, já deve ter ouvido alguém falar (ou visto alguém comentar) em _Streams_. Certo?

Bom, se você ainda não sabe do que estou falando, pode contribuir com a tradução deste excelente material sobre [_Streams_][9], criado pelo James Halliday (SubStack), e utilizá-lo como fonte de leitura para os seus estudos também.

Se você já utiliza este cara nos seus aplicativos em NodeJS e sabe qual a sua funcionalidade, deduzo também que saiba o seu conceito. Porém, caso não saiba, _Stream_ é um fluxo de dados em um sistema. Logo, _Streams_ é um conjunto de fluxo de dados.

Trocando em miúdos, quando você abre um arquivo para editá-lo, o sistema fará alguns procedimentos por debaixo dos panos para armazenar os dados na memória, permitindo que você realize as alterações necessárias. Os dados serão lidos, gravados e, só assim, será encerrada a sua "comunicação" com o sistema.

Certo, mas e o tal do _pipes_, _redirections_ e _lists_?

Bom, é aí que a diversão começa. Utilizando estes 3 camaradas de maneira eficiente, você constrói um fluxo de dados que vão partir de uma origem (entrada padrão `STDIN`) para um destino (saída padrão `STDOUT`), caso não ocorra algum erro (o que fará com que `STDERR` entre na brincadeira).

Cara, STD... Anh?

Calma, jovem Jedi! Vou explicar.

## Entrando na capsula do tempo

Alguns programas ou comandos no UNIX fazem apenas a leitura de entradas, outros somente a escrita na saída, enquanto outros fazem ambos os processos.

Além disso, os programas ou comandos podem ser lidos a partir do que é digitado no terminal e escritos quando renderizados na tela deste mesmo terminal. Sendo que, algumas vezes, a leitura e escrita fica por conta da entrada e saída de dados em um arquivo.

Quando um usuário digita um comando a partir do seu teclado, se algum erro ocorre, o fluxo deste comando sofrerá uma mudança e uma mensagem será renderizada.

No UNIX Shell, temos três canais:

* `STDIN` (canal 0): é a entrada padrão ou origem.
* `STDOUT` (canal 1): é a saída padrão ou destino.
* `STDERR` (canal 2): é a saída padrão utilizada para retornar uma mensagem de erro.

Para exemplificar, observe o comando abaixo:

    $ ls ~/.vim > estrutura.md


Neste exemplo, passamos um comando para listar todos os arquivos presentes no diretório `~/.vim`, o qual será lido, redirecionado e escrito no arquivo `estrutura.md`.

Neste caso, a entrada padrão (`STDIN`) é o processo que o comando `ls ~/.vim > estrutura.md` fará ao ser executado no Shell, onde será redirecionado por conta do operador `>` e terá como saída padrão (`STDOUT`) os dados gerados no arquivo `estrutura.md`. No final das contas, fizemos um fluxo de dados partindo da leitura de um ponto inicial para a sua escrita em um ponto final, utilizando um redirecionamento.

Mas, e o `STDERR`?

Nós podemos dizer ao programa para redirecionar qualquer saída padrão que retorne um erro (`STDERR`) para um arquivo diferente. Confira o exemplo abaixo:

    $ ls ~/.vim >> estrutura.md 2>notfound.md


Lembra-se dos canais 0, 1 e 2 que mencionei acima?

Aqui, estamos utilizando este trecho do código (`2>`) para dizer ao programa que utilize o canal 2 (`STDERR`) para redirecionar a sua saída ao arquivo `notfound.md`, caso existam quaisquer erros.

Poderíamos ainda, fazer da seguinte forma:

    $ ls ~/.vim >> estrutura.md 2>&1


Você arrisca dizer o que isso faria?

10...
9...
8...
7...
6...
5...
4...
3...
2...
1...

Digitando `2>&1`, estamos dizendo ao programa que redirecione a saída padrão de erro em `STDERR` para a saída padrão em `STDOUT`.

No início pode parecer confuso entender como funciona esse processo, por isso aconselho que pesquise sobre o assunto. Ok?

Vamos em frente!

## Iniciando a sequência de lançamento

Agora que você já tem em mente o conceito de _Stream_, já sabe o que são os 3 canais (`STDIN`, `STDOUT`, `STDERR`) e para o que servem, vamos analisar mais a fundo sobre _pipes_, _redirections_ e _lists_. Você está preparado? Então, vamos lá.

### Pipe(line)

A Filosofia UNIX preza pela criação de pequenos programas, mas altamente focados e que podem ser usados ​​em conjunto para executar tarefas complexas. Assim, aprender a encadear uma série de pequenos comandos na linha de comando é uma parte intrínseca de se sentir confortável ao escrever códigos no Shell. Para fazer isso, nós direcionamos a saída padrão de um programa para a entrada padrão de outro programa, mas não usamos _redirections_ como nos exemplos acima, usamos o operador _pipe_ (`|`).

No UNIX, os processos ligados por _pipe_ são executados dinamicamente, a medida em que o fluxo de dados entre eles acontecem. _Pipe_ é uma característica UNIX que permite conectar vários comandos em uma linha e passar dados de um para o outro.

Fazendo uma breve analogia. Quando era adolescente (14~15 anos), havia um jogo chamado _Pipe Dreams_ (Windows 95, o melhor OS da Microsoft na minha opinião) e o objetivo era conectar os canos em um determinado tempo até que a água começasse a ser bombeada. Era necessário conectar uma boa quantidade de canos para que o fluxo dessa água ficasse devagar o suficiente ao chegar no último cano e não houvesse uma tragédia.

A idéia do _pipe_, no UNIX, é a mesma. Você constrói uma cadeia de comandos (conectando canos) até que satisfaça o fluxo de dados (com uma boa quantidade de canos), evitando que ocorra algum problema (evitando o estouro no último cano).

Mesmo que tenhamos 5 comandos conectados por _pipes_, estamos lidando com uma entrada de dados e uma saída de dados. Para exemplificar, veja o código abaixo:

    $ ls -al | sort -r -k 5 | head -10


No exemplo, perceba que utilizamos o operador `|` (pipe) para fazer a listagem dos arquivos no diretório atual, ordená-los e, por fim, exibir os 10 arquivos mais "peso-pesados" na tela.

#### "Eu acho que ví um gatinho"

Isso te lembra alguma coisa no NodeJS? E no Gulp?

Para não perdermos o foco deste artigo e a essência dos conceitos que estão sendo passados aqui, deixarei como lição de casa para que você analise a [API do GulpJS][14] e as seções [_process_][15], [_child\_process_][16] e [_Streams_][17] da API do NodeJS.

Entenda a lógica utilizada nestes caras e verifique se existe alguma semelhança com o que estamos abordando neste artigo. Combinado?

### Lists

Seguindo em frente, vamos falar de _lists_.

Estes caras se parecem com o _pipe_, embora o operador `|` é substituído por um dos operadores abaixo:

* `;`: representa o fim de um comando
* `&`: executa de modo assíncrono ao seu precedente no _pipe(line)_
* `&&`: executa somente se o comando precedente obtiver uma saída positiva
* `||`: executa somente se o comando precedente obtiver uma saída negativa

Veja o exemplo abaixo:

    $ test -d /tests/ || mkdir tests && cd $_ | ls > README.md


No exemplo acima, declaramos um comando compacto para um estrutura condicional, a qual fará a verificacão se o diretório `tests` já existe. Se (`||`) não existir, o diretório será criado com o comando `mkdir`, e (`&&`) acessado com o comando `cd`. Em seguida, com essa lista de comandos executados, passaremos para o próximo comando com a ajuda do _pipe_ (`|`), onde vamos redirecionar (`>`) a lista de diretório e arquivos no diretório atual para o nosso novo arquivo `README.md`.

Perceba que estamos utilizando um novo camarada, o `$_`. Este cara é uma referência para o último argumento que passamos no comando anterior (`mkdir`). Então, ao invés de digitarmos o nome do novo diretório a ser criado, apenas fazemos uma referência com `$_`.

Vamos em frente!

### Redirections

_Redirections_ seguem o mesmo princípio que _Pipes_: realizar o fluxo de dados. Entretanto, _redirections_ trabalham com arquivos, não com comandos.

Existem algumas diferenças quanto a sua sintaxe e o modo como o UNIX o executa. É importante lembrar que, os comandos sempre são declarados primeiro.

Vamos entender alguns dos operadores utilizados para redirecionar os dados.

> Para mais detalhes sobre os operadores utilizados em redirecionamentos, [confira este material][20].
>

* `<`: redireciona a saída de um comando **no disco**. _!_
* `>`: redireciona a saída de um comando para um arquivo no disco. Se o arquivo já existir, ele será apagado e escrito novamente.
* `<<`: redireciona a saída de um comando para um arquivo e posiciona os dados ao início do mesmo (anexo).
* `>>`: redireciona a saída de um comando para um arquivo e posiciona os dados ao final do mesmo (anexo).
* `2>>`: redireciona a saída de erro e posiciona os dados ao final do mesmo (anexo).
* `2>&1`: conecta a saída de erro na saída padrão.
* `>&2`: conecta a saída padrão na saída de erro.
* `<<EOF`: anexa dados a entrada padrão
* `<<-EOF`: anexa dados a entrada padrão, cortando as `TABs`.

> ! Cuidado com este comando. Se você digitar por engano `>`, o conteúdo do arquivo em questão será apagado.
>

Confira alguns exemplos.

##### Listar todos os arquivos

Digamos que você queira listar todos os arquivos (incluindo diretórios e sub-diretórios) das dependências instaladas em um aplicativo NodeJS (`node_modules`), salvando-os em um arquivo para futura análise. Você pode executar este procedimento com:

    find . -type f > lista_node_modules.md


##### Criar um documento

Podemos criar um documento onde será renderizado um texto inicial e a estrutura do diretório logo em seguida.

    { echo "# Estrutura do Projeto"; echo ""; ls; } >> estrutura.md


Perceba que estou utilizando `echo`, pois trata-se de 2 linhas apenas. Entretanto, se fosse necessário inserir uma série de linhas, ficaria inviável com um comando repleto de `echo`. Para estas situações, é aconselhável o uso do `cat` ou `tee`, juntamento com o `heredoc`.

    #
    # Exemplo com cat e EOF
    #
    $ cat >> arquivo_saida.md << EOF
    > Título vem aqui
    >
    > Primeira linha com algum texto
    > Segunda linha com mais texto
    > Terceira linha para encerrar o arquivo
    > EOF


Note também, que foram utilizados _braces_ (`{ }`) para agrupar os comandos e, os mesmos foram separados com _semicolon_ (`;`), no primeiro exemplo.

##### Redirecionamento de entradas e saídas

Além disso, o redirecionamento pode ocorrer também com a entrada e saída padrão.

    ls -l  logs/*.log > bkp-log.txt 2>&1


Neste exemplo, estamos redirecionando a saída padrão de erro (`STDERR`) para a saída padrão (`STDOUT`), que neste caso é o arquivo `bkp-log.txt`.

## Chegamos ao fim

Bom, espero que com esta pequena introdução sobre estas poderosas _features_ do UNIX, você possa ir mais a fundo nos seus estudos e realizar algumas tarefas com o próprio Shell, evitando o uso desnecessário de ferramentas e/ou dependências.

É lógico que existem outros aspectos para cobrir sobre _pipes_, _streams_ e amigos, mas perceba que tudo começou com o UNIX. Estudá-lo, é essencial para entender o que acontece por debaixo dos panos nas modernas ferramentas e fazer um melhor uso das mesmas.

Até a próxima!
