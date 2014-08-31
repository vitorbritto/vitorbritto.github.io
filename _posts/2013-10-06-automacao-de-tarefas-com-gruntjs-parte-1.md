---
layout: post
title: "Automação de Tarefas com o Grunt JS - Parte I"
description: Neste artigo vou falar sobre uma ferramenta muito importante para tornar o ambiente de trabalho mais àgil e produtivo. Esta ferramenta se chama Grunt! O que é o Grunt? Por que devo utilizá-lo? Como usá-lo? Irei responder estas e outras perguntas neste artigo.
link: "http://vitorbritto.com.br/blog/automacao-de-tarefas-com-gruntjs-parte-1/"
date: 2013-10-06
cover: "assets/images/posts/post-gruntjs.jpg"
avatar: "assets/images/avatar.jpg"
author: Vitor Britto
bio: Full Stack Web Developer, extremamente apaixonado pelo seu trabalho (e Unix). Descobriu o mundo dos códigos há quase duas decádas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, desenvolvimento de projetos open-source e escrever os artigos aqui publicados.
comments: true
---

Saudações!

Neste artigo vou falar sobre uma ferramenta muito importante para tornar o ambiente de trabalho mais àgil e produtivo. Esta ferramenta se chama Grunt!

O que é o Grunt? Por que devo utilizá-lo? Como usá-lo? Irei responder estas e outras perguntas neste artigo.

### Um pouco de História

Não podemos ingressar no mundo do Grunt sem antes falarmos sobre o processo de *build*.

O processo de *build* é uma prática que foi adotada há muito tempo na Engenharia de Softwares, sendo utilizada a favor das [metodologias ágeis](http://pt.wikipedia.org/wiki/Desenvolvimento_%C3%A1gil_de_software). É com este processo que automatizamos tarefas e garantimos um alto nível de qualidade em nossos projetos.

Alguns destes nomes podem lhe parecer familiar: *Make*, *Rake*, *Maven* e *Ant*. Todos eles lidam com o processo de *build* porém, não se enquadram no âmbito *Front-end*.

Atualmente, trabalho como *Front-end Developer* e não quero ter de criar um *Makefile* para ser executado no Shell, um *Rakefile* em Ruby ou trabalhar com *Maven* e *Ant* que utilizam sintaxe XML. O meu negócio é **JavaScript**!

Então, há dois anos aproximadamente, Ben Alman (conhecido também na comunidade como Cowboy) fez um grande favor a todos nós Desenvolvedores Front-end. Ele criou o **Grunt**.

### O que é o Grunt?

O Grunt é uma ferramenta para *build script*. O importante é que você saiba que ele possibilita a automação de tarefas utlizando a linguagem *JavaScript* como base.

O Grunt depende também do *Node* e *NPM* para que seja executado na sua máquina. Para os que nunca ouviram falar nesses caras, eis uma breve explicação sobre eles:

**Node:** é uma plataforma focada na construção de aplicações server-side em *JavaScript*, construída a partir de uma máquina virtual do *Google* denominada *V8*.

**NPM**: é o "cinto de utilidades" do Node. Com o NPM (Node Package Manager) é possível instalar pacotes, gerenciar dependências e publicar projetos de código aberto para o Node através da linha de comando.

### Por que devo utilizá-lo?

Simples. Para otimizar o seu Workflow!

Com o Grunt, você pode automatizar diversas tarefas rotineiras no desenvolvimento de um projeto com o mínimo de esforço. Quanto menos trabalho você tiver executando processos repetitivos como: minificação, compilação, testes unitários, validação de scripts (linting), deploy, e outras tarefas necessárias para garantir a qualidade dos seus projetos, melhor para o seu fluxo de trabalho. Outra vantagem? Você mantém o foco nos seus códigos e deixa o Grunt fazer toda a parte tediosa. Show de bola, não é?

### Como faço para utilizar o Grunt?

O primeiro contato do desenvolverdor com o Grunt pode não ser agradável. Por se tratar de uma ferramenta que é executada com a linha de comando, muitos desenvolvedores já pensam que será assustador ou terá uma grande dor de cabeça.

Fique calmo! Vamos quebrar essa barreira e eu vou lhe mostrar que não é complicado manusear esse cara.

Vamos lá?

##### O primeiro passo é instalar o Node na sua máquina.

- Vá até o site do *[Node](http://www.nodejs.org)* e faça o download do pacote/arquivo executável.
- Com o *Node* instalado, abra o seu terminal/powershell (caso não possua, faça o download do [PowerShell](http://pt.wikipedia.org/wiki/Windows_PowerShell) para o Windows).
- Execute o comando `node -v` para verificar se o Node foi instalado corretamente na sua máquina.

Feito isso, vamos para o próximo passo.

##### O segundo passo é instalar o Grunt CLI.

- Abra o seu terminal/powershell.
- Execute o comando `npm install -g grunt-cli` para instalar o Grunt CLI globalmente (provavelmente seja necessário rodar como administrador no Windows ou utilizar o `sudo` nos sistemas Unix/Linux).

**Importante:** caso possua uma versão antiga do Grunt, recomenda-se que seja removida com o comando `npm uninstall -g grunt` antes de realizar uma nova instalação. É possível verificar se o Grunt está instalado na sua máquina com o comando `grunt -v`.

Certo Vitor, mas não era **Grunt**? Então o que seria o **Grunt CLI**?

O Grunt CLI é uma Interface de linha de comando para o Grunt e permite que você rode diferentes versões do Grunt na sua máquina. O Grunt não está sendo instalado de fato ainda. Isto será feito na pasta raiz do seu projeto.

**Recapitulando:**

Para instalar o *Grunt CLI* em nossa máquina, executamos os seguintes passos:

1. Instalação do Node: [http://www.nodejs.org](http://www.nodejs.org)
2. Instalação do Grunt CLI: `npm install -g grunt-cli` (verifique se existe uma versão anterior do Grunt com o comando `grunt v`).

### Começando a brincar com o Grunt

Agora que você está familiarizado com o *Grunt* e a Interface de linha de comando (Grunt CLI) está instalada na sua máquina, vamos abordar os aspectos técnicos da ferramenta.

Todo projeto *Grunt* contém 2 importantes arquivos: `package.json` e `Gruntfile.js`. Ambos precisam estar no mesmo diretório.

O `package.json` é utilizado para armazenar os dados do seu projeto, incluíndo a listagem dos plugins responsáveis pela execução das suas tarefas. Já o `Gruntfile.js` é um arquivo JavaScript (ou CoffeeScript) responsável pela configuração, inicialização dos plugins e registro das suas tarefas.

Existem dois caminhos para se iniciar um projeto com o Grunt.

#### Projetos existentes

Para projetos com o *Grunt* já configurado, basta você navegar até a pasta onde está localizado o arquivo `package.json` e executar o comando `npm install`. Com isso, todas as suas dependências serão instaladas e você estará apto a rodar suas tarefas no *Grunt*.

#### Novos projetos

Para novos projetos, serão executados os seguintes passos:

1. Configuração do arquivo `package.json`
2. Instalação do Grunt e das dependências
3. Configuração do arquivo `Gruntfile.js`

##### Configuração do arquivo package.json

Essa é uma possível estrutura inicial de um arquivo `package.json`:

~~~json
{
	"name": "blog",
	"version": "0.1.0",
	"description": "Descrição do projeto",
	"homepage": "http://vitorbritto.com/blog",
	"author": {
		"name": "Vitor Britto"
		"url": "http://www.vitorbritto.com"
	}
}
~~~

Onde temos:

* **name:** o nome do seu projeto
* **version:** versão semântica do projeto
* **description:** uma breve descrição para o projeto
* **homepage:** site do projeto
* **author:** dados do autor

**Nota:** é possível utilizar o comando `npm init` para gerar uma estrutura inicial do arquivo `package.json`. Ao executar este comando, algumas perguntas serão feitas. Responda-as de acordo com as suas necessidades.

##### Instalação das dependências do Grunt

Para instalar as dependências, é preciso executar o comando `npm install <nome da dependencia> --save-dev`. Entretanto, a primeira dependência a ser instalada deve ser o Grunt. Executando o comando `npm install grunt --save-dev` você estará instalando (de fato) o Grunt localmente no seu projeto.

Você pode estar se perguntando qual a necessidade em se fazer isso. Simples. Toda vez que o seu projeto for manuseado por outro desenvolvedor, ou até mesmo por uma equipe diferente, a versão do grunt estará intacta. Isto vai evitar possíveis conflitos de versões do Grunt no seu projeto.

Depois que o Grunt for instalado como dependência no seu projeto, o `package.json` ficará assim:

~~~json
{
	"name": "project-name",
	"version": "0.1.0",
	"description": "Project description",
	"homepage": "http://myprojecturl.com",
	"author": {
		"name": "Vitor Britto"
		"url": "http://www.vitorbritto.com.br"
	},
	"devDependencies": {
		"grunt": "~0.4.0"
	}
}
~~~

Agora, o nosso arquivo `package.json` possui o objeto JSON `devDependencies` onde as dependências serão listadas. Com o Grunt instalado localmente no seu projeto, basta instalar os [plugins](http://gruntjs.com/plugins) necessários.

Na segunda parte deste artigo, colocaremos em prática a instalação e configuração de alguns plugins. Vamos em frente!

##### Configuracão do arquivo Gruntfile.js

O arquivo `Gruntfile.js` é envolvido por uma função global e possui 3 métodos:

- initConfig(): para a **configuração** das tarefas.
- loadNpmTasks(): para a **inicialização** das tarefas.
- registerTask(): para o **registro** das tarefas.

Confira:


~~~javascript
"use strict";

module.exports = function( grunt ) {

	grunt.initConfig({

		// Configurando as tarefas aqui
		...

	});

	// Carregando os plugins aqui
	grunt.loadNpmTasks( 'grunt-plugin' );

	// Registrando as tarefas customizadas aqui
	grunt.registerTask( 'nome-tarefa', [ 'tarefa' ] );

};
~~~

### E na prática, como fica?

Neste primeiro momento procurei passar os conceitos do Grunt e uma breve introdução de como se trabalhar com esta incrível ferramenta. A prática ficará para um próximo momento, onde vamos iniciar um projeto com o Grunt a fim de fixar os conhecimentos adquiridos aqui. Enquanto isso, aproveite para visitar o [site do Grunt](http://gruntjs.com/) e ler a sua documentação.

### É isso!

Como pode ver, o Grunt é uma ferramenta muito poderosa e que aumenta a produtividade em nosso fluxo de trabalho. Espero que o Grunt seja útil para o seu Workflow, assim como tem sido para o meu.

Até a próxima! =]
