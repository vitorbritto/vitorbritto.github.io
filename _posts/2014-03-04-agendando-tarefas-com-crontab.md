---
layout: post
title: Agendando tarefas com o Crontab
description: Para os usuários UNIX, segue uma dica interessante para agendar tarefas com o comando crontab. Este cara, permite que você realize o agendamento de tarefas em determinados períodos.
link: http://vitorbritto.com.br/blog/agendando-tarefas-com-crontab/
date: 2014-03-04
path: 2014-03-04-agendando-tarefas-com-crontab.md
cover: assets/images/posts/post-crontab.jpg
comments: true
---

Saudações!

Para os usuários UNIX, segue uma dica interessante para agendar tarefas com o comando crontab. Este cara, permite que você realize o agendamento de tarefas em determinados períodos.

## Cenário

Digamos que você possua um script para realizar um procedimento em um determinado intervalo de tempo. Seja para o backup de arquivos mais obsoletos em projetos que você realizou há algum tempo e, por algum motivo, não optou pelo seu versionamento ou um simples backup de um banco de dados.

No que se refere a **backups**, existem duas formas para transitar estes dados:

1. Entre ambientes locais.
2. De um ambiente local para um remoto (e vice-versa).

Além disso, podemos utilizar os comandos [`scp`][9], [`rsync`][10] ou [`cp`][11] para realizar a transferência destes arquivos.

> Lembre-se de armazenar os seus arquivos em um local seguro no momento do _backup_.
>

## Entendendo o crontab

O formato para o _crontab_ é o seguinte:
Campo
Função
Valores

1
Minuto
0-59

2
Hora
0-23

3
Dia do mês
1-31

4
Mês
1-12

5
Dia da semana
0-6

6
Programa para execução
comando ou script

> O dia da semana começa a contar no **domingo** (0).

Confira abaixo como podemos criar as nossas tarefas:

    # Cada linha representa uma tarefa no crontab
    00 6 * * 1 /caminho/para/script/status.sh
    00 12 5 * * /caminho/para/script/temp.sh
    30 23 * * * /caminho/para/script/backup.sh


Perceba que, estamos programando a execução de 3 _scripts_ em Shell nas datas selecionadas e os mesmos farão o seguinte:

* `status.sh`: realizar o procedimento contido neste script toda segunda, às 6:00 da manhã.
* `temp.sh`: realizar o procedimento contido neste script no dia 5 de cada mês, às 12:00.
* `backup.sh`: realizar o procedimento contido neste script todos os dias, às 23:30 da noite.

Você ainda pode adicionar um 7 (sétimo) campo, onde o sexto campo será substituído pelo nome do usuário no sistema e o sétimo campo adicionado com o programa a ser executado. Veja o exemplo a seguir:

    # Execute esta tarefa a cada três horas, no dia 1 (um) de cada mês com o usuário root.
    00 */3 1 * * root /caminho/para/script/security.sh


Perceba que estamos utilizando um novo método para definir o período desta tarefa, o `*/3`. Este trecho faz com que a tarefa seja executa em intervalos de 3 horas. Você poderia ainda definir os horários que esta tarefa seria executada, utilizando uma `,` (vírgula) para cada horário. Por exemplo: `00 3,9,15,21 1 * * root /caminho/para/script/security.sh`.

#### IMPORTANTE

Os _scripts_ a serem executados no exemplo acima pelo crontab, **precisam** estar definidos como executáveis no seu Shell. Para isso, certifique-se de que o comando `chmod +x /caminho/para/script/seuscript.sh` foi executado previamente. Do contrário, utilize o operador `&&` para compactar uma instrução no momento da execução do script. Como faremos isso?

Veja o exemplo abaixo:

    # Tarefas:
    00 6 * * 1 /caminho/para/script && bash status.sh
    00 12 5 * * /caminho/para/script && bash temp.sh
    30 23 * * * /caminho/para/script && bash backup.sh


> **Notas:**
>
> Usar `bash` ou `sh` para executar o seu script, vai depender do seu Shell.
>
> Não esqueça que para tornar um _script_ executável, é preciso definir um [shebang][14].
>

## [][15]Gerenciando suas tarefas programadas

Utilize o seguintes comandos para gerir as suas tarefas no crontab:

* **crontab -e**: editar o arquivo atual ou criar um, caso não exista
* **crontab -l**: listar suas tarefas programadas
* **crontab -r**: remover uma tarefa programada

> **Nota:** algumas empresas de hospedagem, disponibilizam o serviço para Crontab. Entre em contato com o atendimento da empresa para saber se este serviço está disponível para você.
>

## Indo além

Existem algumas maneiras para facilitar ainda mais o uso do crontab.

### Palavras especiais

O crontab fornece alguns atalhos para definirmos nossas tarefas, veja abaixo:
Atalho
Significado

@reboot
Será executado na inicialização do sistema.

@yearly
Será executado uma vez ao ano, "0 0 1 1 \*".

@annually
O mesmo que @yearly

@monthly
Será executado a cada mês, "0 0 1 \* \*".

@weekly
Será executado uma vez por semana, "0 0 \* \* 0".

@daily
Será executado uma vez por dia, "0 0 \* \* \*".

@midnight
O mesmo que @daily

@hourly
Será executado a cada hora, "0 \* \* \* \*".

> **Importante:** sempre aponte para os arquivos utilizando caminhos absolutos, pois o _crontab_ não lê as variáveis de ambiente do Shell.
>

### Carregar suas tarefas em um único arquivo

Você pode definir todas as suas tarefas em um único arquivo e chamá-lo com o `crontab`. Veja o exemplo abaixo:

    # 1. Crie o arquivo jobs.txt com o conteúdo abaixo:

    00 6 * * 1 [comando ou script para executar]
    00 12 5 * * [comando ou script para executar]
    30 23 * * * [comando ou script para executar]

    # 2. Execute o comando: crontab jobs.txt


> **Nota:**
>
> O processo vai substituir qualquer tarefa anterior com o conteúdo que estiver neste arquivo, sem qualquer aviso.
>
> Fica a seu critério como nomear e categorizar as suas tarefas.

Até a próxima! =]


[9]: http://ss64.com/bash/scp.html
[10]: http://ss64.com/bash/rsync.html
[11]: http://ss64.com/bash/cp.html
[14]: http://pt.wikipedia.org/wiki/Shebang
