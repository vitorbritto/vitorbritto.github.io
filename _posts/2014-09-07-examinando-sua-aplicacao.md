---
layout: post
title: Examinando sua aplicação
description:
link: http://www.vitorbritto.com.br/blog/examinando-sua-aplicacao/
date: 2014-09-07
path: 2014-09-07-examinando-a-sua-aplicacao.md
cover: assets/images/posts/post-console.jpg
comments: true
---

Saudações!

Na minha rotina de trabalho, examinar/analisar o código é via de regra para evitar que meus cabelos fiquem brancos muito cedo. Procuro realizar depurações, inspeções e testes para deixar a aplicação o mais consistente possível. Isso reduz drasticamente a possibilidade que erros bobos aconteçam.

Pois bem! Um método prático para depurar o seu código, é utilizando o objeto `console`. Este objeto não faz parte do JavaScript, e sim das engines dos browsers (Firefox, Chrome, Safari e IE). São encontrados, especificamente, nas ferramentas de _debug_ (DevTools, Web Console e Firebug).

> **IMPORTANTE:** os testes foram realizados no **Firefox** e **Firebug**. Alguns métodos podem não estar presentes nos cenários ilustrados abaixo! De qualquer forma, colocarei uma lista com os métodos existentes. Ok? =]

## Quais as minhas opções para o debug?

A API do objeto `console` possui diversos métodos. Entender quando e como utilizá-los, pode poupar tempo e auxiliar na depuração do seu codigo.

Vamos conferir quais são estes métodos e para o que eles servem.

### Lista geral de métodos

- [console.assert()](https://getfirebug.com/wiki/index.php/Console.assert): verifica se uma expressão possui o valor _true_. Caso seja _false_, uma mensagem será renderizada no console juntamente com uma exceção (exception);
- [console.clear()](https://getfirebug.com/wiki/index.php/Console.clear): limpa o console;
- [console.count()](https://getfirebug.com/wiki/index.php/Console.count): exibe no console quantas vezes determinada `label` foi executada no código;
- [console.debug()](https://getfirebug.com/wiki/index.php/Console.debug): realiza a mesma ação do método `console.log()`;
- [console.dir()](https://getfirebug.com/wiki/index.php/Console.dir): exibe uma lista interativa das propriedades de um determinado objeto;
- [console.dirxml()](https://getfirebug.com/wiki/index.php/Console.dirxml): exibe uma estrutura de um nó (node) HTML ou XML;
- [console.exception()](https://getfirebug.com/wiki/index.php/Console.exception): um atalho para `console.error()`;
- [console.group()](https://getfirebug.com/wiki/index.php/Console.group): inicia o agrupamento de determinadas mensagens a serem exebidas no console;
- [console.groupCollapsed()](https://getfirebug.com/wiki/index.php/Console.groupCollapsed): semelhante ao `console.group()`, porém as informações estarão ocultas inicialmente;
- [console.groupEnd()](https://getfirebug.com/wiki/index.php/Console.groupEnd): encerra o agrupamento de determinadas mensagens a serem exibidas no console;
- [console.log()](https://getfirebug.com/wiki/index.php/Console.log): exibe uma mensagem no console;
- [console.error()](https://getfirebug.com/wiki/index.php/Console.error): exibe uma mensagem (de erro) no console com características próprias do método;
- [console.warn()](https://getfirebug.com/wiki/index.php/Console.warn): exibe uma mensagem (de alerta) no console com características próprias do método;
- [console.info()](https://getfirebug.com/wiki/index.php/Console.info): exibe uma mensagem (de informação) no console com características próprias do método;
- [console.markTimeline()](): o mesmo que `console.timeStamp()` e disponível somente no Safari;
- [console.profile()](https://getfirebug.com/wiki/index.php/Console.profile): inicia o [JavaScript profiler](https://developer.mozilla.org/en-US/docs/Tools/Profiler);
- [console.profileEnd()](https://getfirebug.com/wiki/index.php/Console.profileEnd): interrompe o [JavaScript profiler](https://developer.mozilla.org/en-US/docs/Tools/Profiler);
- [console.table()](https://getfirebug.com/wiki/index.php/Console.table): renderiza no console os dados em formato de tabela;
- [console.time()](https://getfirebug.com/wiki/index.php/Console.time): inicia um contador para uma ação a ser executada. Deve ser utilizado juntamente com `console.timeEnd()`;
- [console.timeEnd()](https://getfirebug.com/wiki/index.php/Console.timeEnd): interrompe o contador especificado anteriormente em `console.time()`;
- [console.timeStamp()](https://getfirebug.com/wiki/index.php/Console.timeStamp): pode ser utilizado para analisar o tempo de execução no tráfego de dados;
- [console.trace()](https://getfirebug.com/wiki/index.php/Console.trace): renderiza o caminho percorrido, tomando como ponto inicial o local onde este método for colocado.

> **NOTA 1:** o uso mais frequente do objeto `console` é para renderizar log e outros dados. Existem 4 métodos possíveis para dar saída a estes `logs`, são eles: `console.log()`, `console.info()`, `console.warn()` e `console.error()`. Cada um destes métodos possui um estilo diferenciado e você pode utilizar controles de filtros provenientes no seu browser para exibir apenas os que interessam em determinada situação na sua depuração.
>
> **NOTA 2:** nem todos os métodos foram utilizados nos exemplos deste artigo. Para mais informações, clique no _link_ do respectivo método na lista acima.

## Ampliando o uso do console

Me permita apresentar algumas funcionalidades interessantes e que podem ser úteis para sua depuração.

### O método `console.clear()`

Utilize este método para limpar o console quando necessário. Você possui duas opções:

- digitando no seu console `clear()`;
- ou utilizando os atalhos `cmd+K` ou `ctrl+L` (Mac), `ctrl+L` (Windows and Linux).

### Utilizar diretivas na substituição de _strings_

Para quem programa na linguagem C ou utiliza o NodeJS, esta _feature_ lhe será familiar. Você pode interpolar uma _string_ com um tipo de saída e passar as suas respectivas referências para uma expressão.

**Exemplo:**

```
console.log('Meu nome é %s e tenho %d anos!', 'Vitor Britto', 34);
>> Meu nome é Vitor Britto e tenho 34 anos!
```

Confira abaixo uma tabela com os tipos de saída disponíveis:

| Tipo de saída | Descrição                          |
|---------------|------------------------------------|
| %o 	         | Renderiza um link.                 |
| %d ou %i      | Renderiza um número inteiro.       |
| %s 	         | Renderiza uma _string_.            |
| %f 	         | Renderiza um número real (float).  |

### Formatar o output com CSS

É possível utilizar o tipo de saída `%c` para formatar a escrita no método `console.log()` com CSS.

**Exemplo:**

```
// Simulando uma mensagem de erro
console.log("%cError Message!", "color: red; font-style: italic");
// Simulando uma mensagem de alerta
console.log("%cWarning Message!", "color: yellow; font-style: italic");
// Simulando uma mensagem de sucesso
console.log("%cSuccess Message!", "color: lime; font-style: italic");
```

### Legendas para alguns métodos

Utilizaremos as seguintes legendas para demonstrar os ícones renderizados no console:

- `console.log()`: (sem ícone)
- `console.info()`: (i)
- `console.warn()`: /i\
- `console.error()`: [x]

Pronto? Então vamos em frente.

## Mergulhando neste mar de possibilidades

Bom, agora que você possui um _overview_ do objeto `console` e de algumas _features_ interessantes, vamos mergulhar um pouco mais fundo para entender em quais situações podemos utilizar os métodos existentes.

> **IMPORTANTE:** os cenários abaixo são ilustrativos e cabe a você decidir quando e como utilizar cada método para o _debug_ dos seus scripts.

### Para renderizar informações

##### `console.log()`

**Cenário:** você deseja saber se determinado evento foi executado com sucesso.

**Input:**

```javascript
var myFunction = function() {
    return console.log('Ready to go...');
};
document.addEventListener('load', myFunction);
```

**Output:**

```
>> "Ready to go..."
```

##### `console.error()`

**Cenário:** você quer exibir uma mensagem de erro no console caso não seja passado um objeto `number` como argumento em uma função imediata (IIFE - Immediately-Invoked Function Expression).

**Input:**

```javascript
(function(a,b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw {
                name: 'TypeError',
                message: 'The argument must be a number'
            };
        }
        return a + b;
    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }
}(7,'seven'));
```

**Output:**

```
>> [x] "TypeError: The argument must be a number"
```

##### `console.info()` e `console.warn()`

**Cenário:** você deseja depurar uma requisição HTTP.

**Input:**

```javascript
var XHRget = function(url) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function() {
        console.info('Sending request…');
        if (req.status >= 200 && req.status < 400){
            var res = req.responseText;
            console.log('Success!');
        } else {
            console.warn('Server Error! Timeout!');
        }
    };
    req.onerror = function() {
        console.error('Error on connection!');
    };
    req.send();
};
```


**Output:**

Para ilustrar as 3 possibilidades decorrentes deste script, vamos utilizar os métodos `console.info()`, `console.log()`, `console.error()` e `console.warn()` para emitir cada estado desta requisição.

- Na primeira tentativa, efetuamos a requisição com sucesso;
- Na segunda tentativa, a comunicação foi interrompida por conta de um `timeout`;
- Na terceira tentativa, não foi possível estabelecer uma comunicação com o servidor;

Confira abaixo:

```
>> XHRget('http://www.vitorbritto.com.br/blog/');
>> (i) "Sending request…"
>> "Success!"
>>
>> XHRget('http://www.vitorbritto.com.br/foo/');
>> (i) "Sending request…"
>> /x\ "Server Error! Timeout!"
>>
>> XHRget('http://www.vitorbritto.com.br/blog/');
>> (i) "Sending request…"
>> [x] "Error on connection!"
```

### Para extender as inspeções

##### `console.assert()`

**Cenário:** você deseja verificar se o argumento passado em uma função é do tipo _string_.

**Input:**

```javascript
(function testString(str) {
    console.assert(typeof str === 'string', 'Not a String!');
    return str;
}(555));
```

**Output:**

```
>> [x] "Not a String!"
```

##### `console.count()`

**Cenário:** você deseja examinar quantas vezes o método `console.log()` foi executado no seu script.

**Input:**

```javascript
Function.prototype.method = function(name, fn) {
    this.prototype[name] = fn;
    return this;
};
Number.method('int', function(){
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
String.method('trim', function() {
    return this.replace(/^\s+|\s+$/g, '');
});
console.count('console');
console.log((-10/3).int());
console.count('console');
console.log((-20/3).int());
console.count('console');
console.log('   Vitor Britto   '.trim());
```

**Output:**

```
>> "console: 1"
>> -3
>> "console: 2"
>> -6
>> "console: 3"
>> "Vitor Britto"
```

### Para organizar os resultados

##### `console.trace()`

**Cenário:** você deseja verificar o caminho percorrido na execução de um trecho do seu código.

**Input:**

```javascript
function foo() {
    function bar() {
        function baz() {
            console.trace();
        }
        baz();
    }
    bar();
}
foo();
```

**Output:**

```
console.trace():
baz()                 debugger eval code:6
bar()                 debugger eval code:8
foo()                 debugger eval code:10
<anonymous>           debugger eval code:12
```

##### `console.dir()`

**Cenário:** você deseja visualizar a estrutura de um determinado objeto.

**Input:**

```javascript
var javascript = {
    influences: ['Self', 'Scheme', 'Java'],
    developer: 'Brendan Eich',
    created: 1995
};
var clang = {
    influences: ['B', 'ALGOL 68', 'PL/I'],
    developer: 'Dennis Ritchie',
    created: 1972
};
console.dir(javascript);
console.dir(clang);
```

**Output:**

```
>> {influences: Array[3], developer: "Brendan Eich", created: 1995}
------------------------------------------------------------------------
created: 1995
developer: "Brendan Eich"
influences: Array[3]
0: "Self"
1: "Scheme"
2: "Java"
length: 3
__proto__: Object
------------------------------------------------------------------------
>>
>> {influences: Array[3], developer: "Dennis Ritchie", created: 1972}
------------------------------------------------------------------------
created: 1972
developer: "Dennis Ritchie"
influences: Array[3]
0: "B"
1: "ALGOL 68"
2: "PL/I"
length: 3
__proto__: Object
------------------------------------------------------------------------
```

##### `console.group()`, `console.groupCollapsed()` e `console.groupEnd()`

**Cenário:** você deseja agrupar determinadas mensagens a serem renderizadas no console.

**Input:**

```javascript
console.group("Group of log messages");
console.log("%cError Message!", "color: red; font-style: italic");
console.log("%cWarning Message!", "color: yellow; font-style: italic");
console.log("%cSuccess Message!", "color: lime; font-style: italic");
console.groupEnd();
```

**Output:**

```
>> Group of log messages
>>   "Error Message!"
>>   "Warning Message!"
>>   "Success Message!"
```

##### `console.table()`

**Cenário:** você deseja visualizar a estrutura de um objeto ou array literal.

**Input:**

```javascript
var multi = [
    [1,2],
    [3,4],
    [5,6]
];
console.table(multi);
var tools = {
    name: 'foo',
    ext: '.foo',
    usage: 'bar baz'
};
console.table(tools);
```

**Output:**

```
>> -----
>> 0 | 1
>> -----
>> 1 | 2
>> 3 | 4
>> 5 | 6
>> -----
>>
>> ----------------------------------
>> Object Properties       Values
>> ----------------------------------
>> "name"                  "foo"
>> "ext"                   ".foo"
>> "usage"                 "bar baz"
>> ----------------------------------
```

### Para analisar os resultados

##### `console.profile()` e `console.profileEnd()`

**Cenário:** você deseja realizar comparativos de performance.

**Input:**

```javascript
function id(selector) {
    return document.getElementById(selector);
}
function query(selector) {
    return document.querySelector(selector);
}
var performs = 100;
console.profile('getElementById() vs. querySelector()');
for (var i=0; i < performs; ++i) {
    id('test');
}
for (var i=0; i < performs; ++i) {
    query('test');
}
console.profileEnd();
```

**Output:** confira mais detalhes [aqui](https://developer.mozilla.org/en-US/docs/Tools/Profiler).

##### `console.time();` e `console.timeEnd();`

**Cenário:** você deseja analisar/redenrizar o tempo de execução para um determinado bloco de código no seu script.

**Input:**

```javascript
console.time('Iterate Array');
var len  = 3,
    arr = new Array(len);
for (var i = 0, l = arr.length; i < l; i++) {
    arr[i] = new Array(len);
}
console.timeEnd('Iterate Array');
```

**Output:**

```
>> Iterate Array: timer started
>> Iterate Array: 0.08ms
```

## Não deixe a depuração e inspeção de lado

Perceba como o processo de _debug_ se torna amigável quando sabemos como lidar com os métodos do objeto `console`. Não somente, asseguramos uma inspeção mais rígida para possíveis erros e problemas no código.

Outro ponto importante é realizar testes unitários e ter cuidado para que o seu código não fique repleto de `console.log` e outros métodos desta API. Sugiro que use-a com bom senso, estude uma solução para equilibrar os testes e as depurações/inspeções, além de desenvolver uma metodologia para lidar com estes processos analíticos nos seus scripts.

Até a próxima! =]

#### Referências

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/console)
- [Firebug](https://getfirebug.com/wiki/index.php/Console_API)
- [Chrome](https://developer.chrome.com/devtools/docs/console-api)
- [NodeJS](http://nodejs.org/api/stdio.html)
