---
layout: post
title: "Aventurando-se com Erlang - Parte 1"
link: "http://vitorbritto.com/blog/aventurando-se-com-erlang-parte-1/"
date: 2015-01-09
cover: "assets/images/posts/post-aventurando-se-com-erlang-parte-1.jpg"
path: "2015-01-09-aventurando-se-com-erlang-parte-1.md"
description:
comments: true
bio: Desenvolvedor Web e Designer, extremamente apaixonado pelo seu trabalho. Descobriu o mundo dos códigos há quase duas décadas e mantém a mesma paixão desde o primeiro dia dessa descoberta. Trabalha como freelancer full time há quase 4 anos desenvolvendo projetos voltados para a web. Também direciona boa parte do seu tempo para pesquisas, projetos colaborativos, desenvolvimento de projetos pessoais e escrever os artigos aqui publicados.
---

Saudações!

Em um artigo anterior, falei um pouco sobre alguns experimentos que estarei realizando neste ano. [No último artigo](http://www.vitorbritto.com.br/blog/iniciando-os-estudos-com-erlang/), fiz uma breve apresentação sobre o Erlang e como você pode iniciar os seus estudos com esta linguagem de programação sensacional.

De agora em diante, estarei escrevendo uma série de artigos a respeito da linguagem e sua terminologia. Confira os tópicos desta aventura logo abaixo.

- **Parte 1:** O Erlang e seus aspectos iniciais.
- **Parte 2:** No Erlang temos Tuples, Lists e Pattern Matching
- **Parte 3:** Criando os seus primeiros módulos e funções
- **Parte 4:** Case/If Statements no Erlang
- **Parte 5:** Entendendo Guards e Accumulators
- **Parte 6:** O que são Records e Macros?
- **Parte 7:** Lançando exceções!
- **Parte 8:** Concorrência no Erlang
- **Parte 9:** Distributed Programming do Erlang
- **Parte 10:** Manipulando arquivos no Erlang
- **Parte 11:** Programando com Sockets no Erlang
- **Parte 12:** Introdução ao OTP
- **Parte 13:** Introdução ao Mnesia
- **Parte 14:** Projeto prático com Erlang

Pronto! Agora que você já tem o mapa, que tal embarcar nesta aventura? Então, vamos lá! =]

> **Nota:** vale frisar que está série de artigos serve apenas para introduzir você na linguagem de programação Erlang. Para um estudo mais detalhado, [consulte este material](http://learnyousomeerlang.com/).

## O Erlang e seus aspectos iniciais.

O Erlang tem uma sintaxe muito compacta e isso promove uma grande facilita para escrever e entender os seus códigos nesta linguagem de programação. Se você vem do JavaScript, C, Ruby ou PHP, assim como eu, vai notar algumas peculiaridades nesta linguagem e pode se bater um pouco no início.

Para não ficar no suspense, vamos esclarecer alguns pontos muito importantes. Me acompanhe.

## A sintaxe

No Erlang, a sintaxe possui alguns _gotchas_. Podemos notar, por exemplo, que os comentários não seguem o modelo da linguagem C.

No Erlang, os comentários são precedidos pelo caracter `%`. E temos alguns padrões para o seu uso.

```erlang
% Para comentários de uma linha

%% Para comentários de funções

%%% Para comentários de módulos
```

Este é um padrão, mas não impede que você determine um padrão apropriado, confortável e legível para os seus programas em Erlang. No meu caso, determinei o seguinte padrão para os comentários:

```erlang
%% ====================================================================
%% CABEÇALHO DO PROGRAMA
%% ====================================================================
%%
%% Autor:
%% Descrição do módulo:
%% Versão:
%%
%% ====================================================================

%% Comentário para Módulo ou Função

% Comentários de uma linha ou múltiplas linhas
```

> **Nota:** o importante é não trocar o `%` pelo `//` ou `/**/`. =]


Além disso, existem três caracteres muito importantes no Erlang. São eles:

- ***Commas (vírgulas):*** utilizado para separar argumentos em funções, dados de construtores e padrões.
- ***Periods (pontos):*** utilizado para separar funções e expressões (também no shell).
- ***Semicolons (ponto-e-vírgula):*** utilizado para separar cláusulas em diversos contextos.

> **Nota:** não se preocupe se algum dos termos citados acima soarem estranhos para você neste momento. Vamos cobrir todos eles, seguidos de exemplos práticos.


## Erlang e seus tipos

O Erlang é composto pelos seguintes tipos básicos:

### Integer

Representam os números inteiros. Podem ser expressos através de uma base (além da decimal) utilizando o formato `base#valor`. Veja abaixo:

```bash
1> 10.
10
2> 16#0AFFFF.
720895
3> 2#10011100.
156
```

Percebeu o ponto no final de cada expressão? Lembra do que falei mais acima sobre os 3 caracteres importantes no Erlang? Pois! Toda expressão, quando finalizada, necessita de um `.` (period) para que o programa entenda que a partir daquele momento o código pode ser avaliado.

Caso você não inclua o ponto, o programa retornará um erro de sintaxe ou não haverá qualquer saída/valor retornado. Veja abaixo o exemplo:

```bash
1> 10
1> .
10
2> 10
2> 10
2> 10.
* 2: syntax error before: 10
2>
```

Repare que no primeiro caso, digitei o inteiro `10`, mas sem o ponto. Aplicando o ponto na linha seguinte do Shell o valor é retornado, já que o interpretador do Erlang entende que a instrução e/ou expressão foi finalizada e pode ser avaliada.

Já no segundo caso, tentei retornar o inteiro `10` por duas vezes consecutivas, mas, em um terceiro momento, inseri o mesmo inteiro com o ponto. Isso me retornou um erro de sintaxe. Desta maneira, não esqueça do ponto para avaliar suas expressões!

### Float _(Floatting-Point Numbers)_

Representam os números reais. Veja abaixo:

```bash
1> 10.5.
10.5
2> 10.543.
10.543
3> 3.14.
3.14
```

### Atoms

Atoms são literais constantes que representam a si mesmos, com a finalidade de enumerar valores. Se você já programou (brincou ou experimentou também) em C/C++, deve conhecer a diretiva `#define` e a sua funcionalidade. Assim como "valores estáticos" no Java e `enums` no Ruby.

A razão para se utilizar _atoms_ em códigos Erlang é simples: eficiência e leiturabilidade.

Atoms devem iniciar com letras em _lowercase_ seguidos por uma sequência de caracteres alfanuméricos ou sinais como `_` e/ou `@`. Caso queira declarar um _atom_ com uma sequência não-alfanumérica, basta encapsular o mesmo com `'` (_single quotes_/aspas simples).

Exemplos de _Atoms_:

```bash
# Iniciando com letras em lowercase
foo
bar
baz
fooBarBaz
vitor@britto
atomify_me
true
false

# Quando utilizadas com single quotes
'Vitor Britto'
'code@vitorbritto.com.br'
'FooBarBaz'
```



> **Importante:**
>
> Sobre o tipo _Boolean_ e _String_
>
> Não existe valores booleanos, nem _Strings_ no Erlang. Ao invés disso, os _atoms_ `true` e `false` são utilizados em conjunto com os operadores lógicos ou para representar sequência de caracteres encapsulados por `""` (_double quotes_/aspas duplas).


## Atribuindo variáveis

No Erlang, devemos seguir algumas regrinhas para não quebrar o nosso programa. Uma delas, é como devemos atribuir variáveis ao nosso programa.

Toda variável deve iniciar com letra maiúscula. Veja os exemplos abaixo:

```bash
1> Message = "Hello there!".
"Hello there!"
2> Num = 5.
5
3> Float = 5.345.
5.345
4> Atom = 'some atom with space'.
'some atom with space'
```

Além disso, Erlang permite que você atribua um valor para uma variável apenas. Não mais do que isso! Se você tentar atribuir uma variável para ela mesma ou um segundo valor para uma variável já criada, o programa vai retornar um erro. E isso faz muito sentido! =]

Confira:

```bash
1> Num = 42.
42
2> Num = 43.
** exception error: no match of right hand side value 43
3> X=X+1.
* 1: variable 'X' is unbound
4> X = 2.
2
5> X = X + 3.
** exception error: no match of right hand side value 5
```


## Manuseando os operadores

No Erlang, temos operadores de comparação, lógicos e aritméticos.

### Operadores Aritméticos

**Tipos:**

- `+`: pode ser utilizado para operações com inteiros ou floats.
- `-`: pode ser utilizado para operações com inteiros ou floats.
- `/`: pode ser utilizado para operações com inteiros ou floats.
- `*`: pode ser utilizado para operações com inteiros ou floats.
- `div`: pode ser utilizado para operações com inteiros apenas.
- `rem`: pode ser utilizado para operações com inteiros apenas.

**Exemplos:**

```bash
1> +1.
1
2> -1.
-1
3> 11 div 9.
1
4> 87 rem 5.
2
5> (15-3)/4.
3.0
6> 2*8*4.5.
72.0
7> 1+2+4+8.
15
8> 1/2 + (4/3 * (5 + 9)).
19.166666666666664
```


### Operadores de Comparação

**Tipos:**

- `==`
- `=:=`
- `=/=`
- `<`
- `>`
- `<=`
- `>=`

**Exemplos:**

```bash
1> true == true.
true
2> true == false.
false
3> true == ''.
false
4> true == 'true'.
true
5> true =:= 'true'.
true
6> true =/= 'true'.
false
7> 4 > 5.
false
8> 4 < 5.
true
9> 1.4 =< 5.
true
10> 1.4 >= 0.5.
true
```

> **Nota:** reparou que para validar o tipo e o valor (strict equality), utilizamos `/` ou `:`? Em outras linguagens, a representação seria `===` ou `!==`.

### Operadores Lógicos

Para operações mais complexas, podemos utilizar os operadores lógicos.

**Tipos:**

- `and`: retornar `true` se ambos os valores forem `true`.
- `andalso` (atalho para `and`): retorna `false`, se o primeiro argumento for `false`, ignorando a avaliação do segundo argumento.
- `or`: retorna `true` se um dos argumentos for `true`.
- `orelse`(atalho para `or`): retorna `true`, se o primeiro argumento for `true`, ignorando a avaliação do segundo argumento.
- `xor`(exclusivo `or`): retorna `true` se um dos argumentos for `true` e o outro `false`.
- `not` (operador de negação): retorna `true` se o argumento for `false` e vice-versa.

**Exemplos:**

```bash
1> not( (1 < 3) and (2 == 2) ).
false
2> (1 > 3) and false.
false
3> (1 > 3) and (5.4 == '5.4').
false
4> (1 < 3) and true.
true
5> (1 < 3) xor true.
false
6> (1 == 3) xor true.
true
7> (1 =:= 3) or true.
true
```

## Por hoje é só!

No próximo artigo, conheceremos _Tuples_, _Lists_ e _Pattern Matching_.

Até a próxima! =]

---

**Referências:**

- [Programming Erlang](http://www.amazon.com/Programming-Erlang-Concurrent-Pragmatic-Programmers/dp/193778553X) - Joe Armstrong.
- [Erlang Programming](http://www.amazon.com/Erlang-Programming-Francesco-Cesarini/dp/0596518188) - Francesco Cesarini & Simon Thompson.
- [Learn You Some Erlang for great good!]()http://learnyousomeerlang.com/) - Fred Hébert

---
