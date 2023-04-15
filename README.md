# PW2-Aula07

## Exercício da Aula 07

Para os exercícios abaixo, você deve criar dois módulos: um que exporta a função com os requisitos pedidos no enunciado e outro que importa essa função e a testa, exibindo os resultados no console.

1. Crie uma função que recebe como parâmetros dois arrays de string, `a` e `b`, e retorne um booleano indicando se a e b contém as mesmas strings.
2. Crie uma função que recebe como parâmetros dois arrays de string, `a` e `b`, e retorne:
- `undefined`: caso `a` e `b` tenham tamanhos diferentes;
- Um array, onde, para cada índice:
  - Se a e b tem o mesmo elemento no mesmo índice: este elemento;
  - Se a e b tem elementos diferentes no mesmo índice: `unfefined`;
3. Crie uma função que recebe como parâmetros dois arrays de arrays de string (matriz), `a` e `b`, e retorne um boolean indicando se `a` e `b` contém os mesmos arrays de strings.
4. Crie uma função que recebe como parâmetros dois arrays de arrays de string (matriz), `a` e `b`, e retorne para cada índice `i` nos dois arrays de entrada:
- Se a[i] and b[i] têm tamanhos diferentes, retornar `undefined`;
- Se a[i] and b[i] têm o mesmo tamanho, retornar um array onde, para cada índice:
  - Se a e b tem o mesmo elemento no mesmo índice: este elemento;
  - Se a e b tem elementos diferentes no mesmo índice: `unfefined`;
5. Utilizando interfaces, crie um função que retorna uma string descrevendo uma cidade. Exemplo: dado o seguinte objeto como entrada:
```typescript
{
  alcunha: "A terra que ensinou a Paraíba a ler.",
  coodenadas: {
    latitude: [6, 53, 24],
    longitude: [38, 33, 43],
  },
  nome: "Cajazeiras",
}
```
A função deve imprimir a seguinte string:
```typescript
Cajazeiras, Paraíba
* "A terra que ensinou a Paraíba a ler."
* Localizada em 6° 53' 24" S 38° 33' 43" O
```
6. Escreva uma função que recebe um array de objetos "restaurantes" contendo as string nome e cidade e retorne um objeto que agrupa os restaurantes de uma mesma cidade. Utilize interfaces. Exemplo: dado o seguinte array de entrada:
```typescript
[
    { cidade: "Cajazeiras", name: "Burgdega" },
    { cidade: "Sousa", name: "Dino's" },
    { cidade: "Cajazeiras", name: "Avenida" },
];
```
A função retornaria o seguinte objeto:
```typescript
{
    Cajazeiras: ["Bugdega", "Avenida"],
    Sousa: "Dino's"
}
```
