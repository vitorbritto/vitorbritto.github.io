---
layout: post
title: "Controlando processos no UNIX"
description: Neste artigo vamos entender o que são os processos. Como iniciar e interromper processos, enviar sinais aos programas em execução, verificar informações dos processos que estão sendo executados e muito mais.
link: "http://vitorbritto.com.br/blog/controlando-processos-no-unix/"
date: 2014-07-27
path: 2014-07-27-controlando-processos-no-unix.md
cover: assets/images/posts/post-processos-unix.jpg
comments: true
---

Saudações!

Vamos combinar que é muito chato quando um programa/aplicação trava ou você não é possível finalizar um procedimento por conta da lentidão na execução de uma terafa no sistema. Para contornar esta situação e conseguirmos manipular os programas, vamos entender o que são os processos no Unix.

### Processando

No Unix, é possível iniciar e interromper processos, enviar sinais aos programas em execução, verificar informações dos processos que estão sendo executados e muito mais. Mas, antes de entendermos como fazer isso, é preciso entender o que é um processo.

De forma simplificada, um processo é uma instância de um programa em execução. Logo ao iniciar o seu sistema, um processo chamado _init_ é executado com um PID de número **1**. Para cada programa iniciado é atribuido um identificador único, o qual denominamos _PID_(process identifier). Não vou entrar em detalhes sobre como cada processo é iniciado por debaixo dos panos. Para isto, leia [este material](http://en.wikipedia.org/wiki/Process_identifier) que pode ser encontrado no Wikipedia.

Sendo assim, ao executar um comando no prompt do Unix shell ou inicializar um programa/aplicativo você está iniciando um processo.

### Quais processos estão em execução?

Para verificar quais processos estão em execução, basta executar o comando _ps_ (process status). Quando declarado sem qualquer argumento, o comando _ps_ exibe todos os processos vinculados com a sessão atual do seu sistema.

**Confira o exemplo abaixo:**

```bash
vitorbritto at ~
$ ps
  PID TTY           TIME CMD
 2092 ttys000    0:00.97 -bash
```

Note que neste exemplo, o comando _ps_ exibe o ID do processo, em qual terminal o processo está vinculado, o tempo acumulado que este processo encontra-se em execução e o comando para este processo respectivamente.

Além disso, este comando é muito útil para verificar quais processos estão sendo executados em um sistema e quais consomem mais memória ou estão exigindo um uso excessivo da CPU.

Então, vamos entender melhor a mecânica por trás do comando _ps_.

### Um passo de cada vez

O comando _ps_ é um dos mais comuns e utilizados no/pelo Unix, mas oferece algumas diferenças de sintaxe para renderizar o output em seus variantes (flavors). A melhor maneira de entender como a sintaxe do _process status_ funciona no seu sistema, é utilizando o **man pages**. Para facilitar a leitura, adicione e utilize o _alias_ abaixo para ler em formato PDF o manual do _ps_. Se preferir, execute da maneira mais prática e convencional com: `man ps`.

```bash
# Insira no .bashrc:
alias manpdf="man -t $1 | pstopdf -i -o $1.pdf"
# Execute com:
$ manpdf ps
```

> **Importante:** o arquivo PDF para o man page do _ps_ será registrado no diretório corrente do terminal onde o _alias_ for executado.

Aí esta! Uma maneira prática para ler a respeito dos detalhes sobre o comando _ps_ no seu sistema. E outros comandos também, por que não? :)

### Mergulhando nos processos

Daqui para frente, vamos percorrer os seguintes tópicos:

- States (estados)
- System process (processos do sistema)
- Attributes (atributos)
- Kill Process (matar processo)
- Tree Process (árvore de processos)
- Comando `top`

> **Nota Importante:** estou usando o Bash. :)

#### Estados

Para saber em qual estado o seu sistema se encontra, utilize o comando `ps` com o argumento `u`.

Confira o exemplo abaixo:

```bash
vitorbritto at ~
$ ps u
USER         PID    %CPU %MEM VSZ       RSS  TTY   STAT STARTED   TIME COMMAND
vitorbritto  2092   0.0  0.1  2437540   2924 s000  S     5:39PM   0:01.20 -bash
```

Perceba que o comando retorna uma série de informações a respeito do sistema no output (terminal), como:

- O usuário que executa o processo (USER)
- O identificador do processo (PID)
- A percentagem de uso do CPU (%CPU)
- A percentagem de uso real da memória (%MEM)
- O tamanho da memória virtual em KBs (VSZ)
- O tamanho de memória física usada (RSS)
- O terminal que o processo esá conectado (TTY)
- Os estados atrelados ao processo (STAT)
- Quando o processo foi iniciado (STARTED)
- A quantidade de tempo utilizado pelo processo no CPU (TIME)
- E o nome do comando (COMMAND)

#### Processos do Sistema

Por padrão, o seu sistema possui diversos processos em execução, para conferir uma lista detalhada de quais processos encontram-se em execução neste exato momento no seu sistema, digite: `ps ax`. Para o nosso exemplo, vamos digitar o seguinte: `ps ax | wc -l`.

Show de bola, Vitor! Digitei o comando e me retornou um número.

Pois bem! Este número representa a quantidade de processos em execução no seu sistema. Agora, vamos desmembrar este comando para que você possa entender o propósito de cada elemento nele.

- O argumento `a` do comando `ps` retorna informações dos processos de todos os usuários.
- O argumento `x` do comando `ps` renderiza informações a respeito dos processos sem controlar o terminal.
- O caracter `|` é o que chamamos de _pipe_. É um operador capaz de repassar uma informação a partir do _output_ de um comando para o _input_ de outro comando.
- O segundo comando `wc -l` é responsável por renderizar o total de processos em execução no seu sistema.

Já que este artigo não se trata do operador `|` (pipe) e do comando `wc` (e seus respectivos argumentos), recomendo a leitura de suas man pages. É uma ótima oportunidade para gerar um PDF, não é? :)

Pois bem. Os procesos são programas em execução e que lidam com aspectos essenciais de manipulação e manutenção no seu sistema. Muitos destes processos são, convencionalmente, chamados de _daemons_ e eles executam algumas rotinas. Digite o comando a seguir para visualizar quais processos estão em execução no seu sistema:

```bash
$ ps ax
```
Será retornada uma lista similar a esta:

```bash
vitorbritto at ~
$ ps ax
  PID   TT  STAT      TIME COMMAND
    1   ??  Ss     0:48.81 /sbin/launchd
   10   ??  Ss     0:01.99 /usr/libexec/kextd
   11   ??  Ss     0:02.91 /usr/libexec/UserEventAgent -l System
   12   ??  Ss     0:03.60 /usr/sbin/notifyd
   14   ??  Ss     0:06.54 /usr/sbin/ntpd -c /private/etc/ntp-restrict.conf -n -g -p /var/run/ntpd.pid -f /var/db/ntp.drift
   17   ??  SNs    0:00.92 /usr/libexec/warmd
   ...
```

> **Nota:** a lista acima foi renderizada em um Mac OSX.


#### Atributos do Processo

Cada processo possui um ambiente com diversos atributos, assim como argumentos para a linha de comando, variáveis do ambiente, descrição dos arquivos, mascara para criação de arquivos e muito mais.

Para verificar determinados atributos dos processos, você pode executar o comando _ps_ com a flag `-o` e os atributos desejados. Veja o exemplo abaixo:

```bash
$ ps -o user,pid,stime,comm
```

E será renderizado isto:

```bash
vitorbritto at ~
$ ps -o user,pid,stime,comm
USER          PID     STIME COMM
vitorbritto  2092   0:00.54 -bash
```

Confira uma tabela dos atributos mais comuns disponíveis no Unix.

> **Nota:** alguns destes atributos foram mencionados no tópico [estados](#estados).

| Campo | Descrição |
|-------|-----------|
| user  | Usuário do processo |
| pid   | ID do processo |
| ppid  | ID do processo filho |
| pcpu  | Percentagem de uso do CPU |
| rss   | Tamanho de memória física usada (em kilobytes) |
| pmem  | Percentagem de uso real da memória |
| vsz   | Tamanho da memória virtual em KBs |
| tty   | Terminal que o processo esá conectado |
| state (ou s) | Estado atrelado ao processo |
| stime | Quando o processo foi iniciado |
| time  | Quantidade de tempo utilizado pelo processo no CPU |
| command (ou comm) | Nome do comando |

#### Finalizando um processo

É possível finalizar um processo de algumas maneiras. O utilitário padrão para "matar" um processo, chama-se _kill_. Tecnicamente, o comando `kill` não interrompe ou finaliza o processo, isto é feito através de um sinal emitido para o processo. Os sinais (signals) são muito utilizados para a comunicação entre os processos. Cada sinal é responsável por uma ação do **processo**.

O sinal padrão para o comando `kill` é o _SIGTERM_ (terminar).

Para finalizar um processo, basta inserir o PID (identificador do processo). Veja o exemplo abaixo:

    # Primeiro, buscamos o PID que queremos finalizar.
    # Digamos que o processo a ser finalizado seja o navegador Firefox.
    # No comando abaixo, passo a flag -o par retornar um output customizado
    # com o comando e o identificador do processo (PID). Logo após uso o pipe (|)
    # para repassar a informação com o grep, que funciona como um regex e realizar
    # uma comparação com a string "firefox".
    vitorbritto at ~
    $ ps axww -o pid,comm | grep firefox
      787 /Applications/Firefox.app/Contents/MacOS/firefox

    # Verificamos que o PID deste comando é 787.
    # Agora, vamos executar o comando kill para finalizar
    # este processo utilizando o sinal padrão (SIGTERM).
    $ kill 787

Com o comando `kill -l`, é possível renderizar no terminal os possíveis sinais com os seus respectivos números. Veja um exemplo abaixo:

    vitorbritto at ~
    $ kill -l
     1) SIGHUP       2) SIGINT       3) SIGQUI       4) SIGILL
     5) SIGTRAP      6) SIGABRT      7) SIGEMT       8) SIGFPE
     9) SIGKILL     10) SIGBUS      11) SIGSEGV     12) SIGSYS
    13) SIGPIPE     14) SIGALRM     15) SIGTERM     16) SIGURG
    17) SIGSTOP     18) SIGTSTP     19) SIGCONT     20) SIGCHLD
    21) SIGTTIN     22) SIGTTOU     23) SIGIO       24) SIGXCPU
    25) SIGXFSZ     26) SIGVTALRM   27) SIGPROF     28) SIGWINCH
    29) SIGINFO     30) SIGUSR1     31) SIGUSR2

Muitos sistemas Unix fornecem alternativas ao comando `kill` e que podem ser utilizados com o nome do comando ao invés do PID, como:

- `pgrep`
- `pkill`
- `killall`

Em alguns sistemas, o `killall` é utilizado para enviar sinais aos processos através de nomes. Tenha cuidado ao utilizar este cara, recomendo o uso do `pkill`. Desta forma, ao invés de utilizar o ID do processo (PID), você utilizaria o nome do processo.
Veja abaixo um exemplo:

```bash
$ pkill firefox
```

O argumento utilizado no `pkill` é uma simples expressão regular a ser comparada. Mesmo assim, antes de usar o `pkill`, certifique-se de que a expressão existe com o `pgrep`.

> **Nota:** no Mac OSX, tais comandos não são nativos. Você pode usar o homebrew para instalar o [proctools](http://proctools.sourceforge.net/) com o comando `brew install proctools`

#### Árvore de Processos

Sem dúvidas, este é um dos comandos mais interessantes sobre processos. O `pstree` permite que uma estrutura hierárquica seja renderizada no terminal, onde cada processo filho (child process) é relacionado ao seu processo pai (parent process).

Infelizmente, no OSX é preciso instalar este utilitário também. Veja o exemplo abaixo como podemos instalar este camarada com o _homebrew_ e a sua posterior visualização no terminal:

```bash
# 1. Instale com:
$ brew install pstree
# 2. Execute com:
$ pstree
# 3. O resultado (parcial) será:
vitorbritto at ~
$ pstree
-+= 00001 root /sbin/launchd
 |--= 00010 root /usr/libexec/kextd
 |--= 00011 root /usr/libexec/UserEventAgent -l System
 |--= 00012 root /usr/sbin/notifyd
 |--= 00014 root /usr/sbin/ntpd -c /private/etc/ntp-restrict.conf -n -g -p /var/run/ntpd.pid -f /var/db/ntp.drift
 |--= 00017 nobody /usr/libexec/warmd
 |--= 00018 _usbmuxd /System/Library/PrivateFrameworks/MobileDevice.framework/Versions/A/Resources/usbmuxd -launchd
 |--= 00020 root /usr/sbin/syslogd
```

Certamente, é possível escrever um programa em Shell Script para renderizar uma `tree` de acordo com as suas necessidades. Não entraremos em detalhes sobre como realizar este procedimento, para não perdermos o foco deste artigo, mas fique a vontade para realizar algumas pesquisas. Ok?

#### Comando `top`

Este é outro comando muito interessante. Principalmente para administradores Unix.

Com o comando `top` é possível iniciar um utilitário interativo para análise dos processos, os quais são atualizados frequentemente e mostram informações físicas e virtuais da memória, CPU e processos lentos/travados ([Zombie Process](http://en.wikipedia.org/wiki/Zombie_process)).

Confira um exemplo abaixo:

```bash
Processes: 75 total, 4 running, 2 stuck, 69 sleeping, 494 threads                                                                                            03:35:56
Load Avg: 3.99, 3.51, 3.28  CPU usage: 66.8% user, 24.56% sys, 9.34% idle    SharedLibs: 2472K resident, 2260K data, 0B linkedit.
MemRegions: 34948 total, 642M resident, 17M private, 272M shared. PhysMem: 330M wired, 869M active, 834M inactive, 2034M used, 14M free.
VM: 187G vsize, 1101M framework vsize, 858219(1) pageins, 546183(0) pageouts. Networks: packets: 2578121/4689M in, 2119681/2093M out.
Disks: 564676/9683M read, 289083/12G written.

PID   COMMAND      %CPU  TIME     #TH  #WQ  #POR #MREGS RPRVT  RSHRD  RSIZE  VPRVT  VSIZE  PGRP PPID STATE    UID  FAULTS     COW      MSGSENT    MSGRECV
3495  top          16.9  00:04.34 1/1  0    28   29     1368K  216K   2076K  17M    2378M  3495 2092 running  0    9727+      85       1294936+   647425+
3494  taskgated    0.0   00:00.03 2    0    31   40     380K   272K   1740K  20M    2381M  3494 1    sleeping 0    577        106      116        48
3479  ocspd        0.0   00:00.04 1    0    28   29     676K   276K   2100K  26M    2387M  3479 1    sleeping 0    749        98       185        77
3377  distnoted    0.0   00:00.01 2    1    40   46     392K   240K   1012K  22M    2383M  3377 3374 sleeping 89   413        83       255        124
3376  mdworker     0.0   00:00.36 3    1    54   71     1492K  3748K  5632K  23M    2412M  3376 3374 sleeping 89   2623       203      1702       757
3374  launchd      0.0   00:00.02 2    0    53   45     368K   416K   784K   38M    2399M  3374 1    sleeping 89   602        179      1254       523
2482  Mou          0.0   22:13.93 7    1    174  480    10M    12M    31M    301M   19G    2482 137  sleeping 501  369777     596      4043593+   2069826+
2447- node-webkit  17.6  69:54.83 4/2  1    78   472    10M+   40M-   39M+   75M+   807M   2443 2443 running  501  138640191+ 690      2239122+   1119229+
2445- node-webkit  110.2 06:01:21 28/1 1    137- 913-   145M+  36M    410M+  687M-  1426M- 2443 2443 running  501  1889563+   838      259273383+ 133231723+
2443- node-webkit  10.9  43:43.71 42   1    266  382    3204K  37M    19M+   341M   1102M  2443 137  stuck    501  168935+    1219     41720371+  16962182+
2421  Preview      0.0   01:35.89 6    1    185  895    12M    24M    34M    222M   3708M  2421 137  sleeping 501  196129     745      380311     187637
2092  bash         0.0   00:01.46 1    0    20   26     1268K  216K   1668K  19M    2380M  2092 2091 sleeping 501  15364      4346     491        237
2091  login        0.0   00:00.03 2    1    34   58     0B     216K   432K   22M    2391M  2091 2089 sleeping 0    748        121      292        138
2089  Terminal     1.5   01:04.90 7    3    135  330    7376K  9412K  23M    32M    2538M  2089 137  sleeping 501  115422     539      342779+    165218+
1034  mdworker     0.0   00:47.94 4    1    55   98     3096K  4116K  8244K  29M    2418M  1034 137  sleeping 501  126235     278      427269     174393
992   Sparrow      0.0   18:16.79 17   4    309  1955   51M    17M    67M    418M   3779M  992  137  sleeping 501  1391524    1828     6624660+   3008127+
885   plugin-conta 0.0   30:46.44 8    1    487  1344   1356K  28M    5816K  56M    2725M  787  787  sleeping 501  51300527   6662     17404742+  8400203+
787   firefox      11.0  04:42:22 74   1    339  19088  281M   34M    374M   514M   3563M  787  137  sleeping 501  11793724   2573162  498594082+ 245596606+
7
```

Com este *overview* sobre processos no Unix, podemos seguir adiante e percorrer alguns aspectos para gerir tais processos. Para isto, vamos entender o que é e como funciona o comando `jobs`.

### Controlando os processos

Com o comando `jobs`, é possível executar programas em *background*. Isso possibilita a execução de múltiplos programas ao mesmo tempo e em paralelo, a suspensão e reinício de determinados comandos também.

Mas, como posso executar isso Vitor?

#### Entendendo melhor o comando jobs

Você pode, simplesmente, inserir o operador `&` ao final do comando que deseja executar. Com isso, o seu processo será executado em *background* e o seu *prompt* não será travado. Confira o exemplo abaixo:

```bash
$ npm search zip &
```

Neste exemplo, o `npm` fará uma busca pelos módulos com o termo _zip_ e o seu prompt ficará livre para continuar executando demais comandos. Faça um teste. :)

#### Manipulando os processos em execução

Para verificar os processos em execução no *background*, basta digitar no terminal o comando `jobs`. Será exibida uma lista semelhante a que você verá abaixo:

```bash
$ jobs
[1]+ Running        npm search zip &
```

É possível mover um processo para o *foreground*, mas vale lembrar que este procedimento fará com que o prompt seja travado. Isso impossibilita qualquer ação do usuário até que o processo seja finalizado. Para ver como funciona, execute o seguinte comando no processo em *background* recém-criado:

```bash
# Colocar no foreground o processo de número 1
$ fg 1
```

> **Nota:** se houverem muitos jobs em execução no *background*, é possível passar o número do *job* como argumento. Exemplo: `fg <número do processo em background>`.

#### Acabando com a festa

No nosso exemplo temos um processo em execução, no qual está buscando os módulos do node com o termo *zip* para renderizar no output (terminal). Entretanto, digamos que este processo esteja atrapalhando o desempenho do seu sistema ou que você não queira que ele prossiga. Para isso, podemos utilizar dois métodos para interromper este processo.

No primeiro método, tratando-se de um processo no *foreground*, é possível suspender o mesmo com a combinação `CTRL+Z`. Do contrário, se for um processo no *background*, execute o comando `kill` adicionando o caracter `%` precedido do número do *job*.

Por exemplo: `kill -18 %2`.

> **Nota:** vale lembrar que o `-18` não é um número negativo, e sim a representação do sinal a ser passado para o processo. neste caso, o sinal de número 18 (SIGTSTP - Signal Stop).

### Por enquanto é isso

Podemos perceber o quão importante os processos são em um sistema e como podemos manipular/generenciar estes caras a fim de manter um bom desempenho neste ambiente.

Vimos também que:

- Processos são simples inicializações de programas com uma única referência ao processo por um ID (PID).
- Os processos possuem processos pai e processos filho (parent e child process).
- As informações de um processo podem ser renderizadas no terminal com o comando `ps`.
- Podemos realizar diagnósticos em tempo real com o comando `top`.
- Conseguimos uma visualização mais elegante dos processos com o utilitário `pstree`.
- Sinais são utilizados como métodos para estabelecer uma comunicação entre os processos.
- O comando `kill` é o utilitário padrão para finalizar processos a partir de sinais. O sinal padrão é o **SIGTERM**.
- O Unix shell fornece uma maneira simples para realizar multi-tarefas em *background* e em paralelo, adicionando um caracter `&` (ampersand) ao final do comando.
- Podemos gerenciar os procesos em *background* com o comando `jobs`.
- Com o comando `kill`, podemos suspender um processo.

Para facilitar em futuras pesquisas, segue uma lista com alguns dos termos relacionados/utilizados neste artigo:

- **Comandos:** `ps`, `kill`, `killall`, `|`, `pgrep`, `pkill`, `grep`, `wc`, `top`, `pstree`, `jobs`, `bg`, `fg`, `&`.
- **Processos:** Child Process **e** Parent Process.
- **Atributos:** UID, PID, RSS, STAT, COMM, etc.
- **Sinais:** SIGTERM, SIGKILL, SIGSTP, etc.
- **Jobs:** _background_ e _foreground_.

### Mas não para por aí!

Lembre-se de que este artigo não cobre todos os detalhes sobre processos. A ideia foi passar um *overview*, mas com um certo nível de detalhes sobre processos no Unix. Recomendo a leitura do livro [Working with UNIX Processes](http://www.jstorimer.com/products/working-with-unix-processes) do Jesse Storimer.

Além disso, para injetarmos um pouco de JavaScript nesta caminhada, farei uma continuação deste artigo sobre como os processos e sinais podem ser executados no NodeJS. Assim, veremos como os módulos nativos e os objetos existentes nesta plataforma podem ser úteis para controlar/manipular melhor a nossa aplicação. Combinado?

Até a próxima! =]
