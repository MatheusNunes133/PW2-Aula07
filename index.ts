import { equalArray, arrayComparator, equalMatriz, matrizComparator, findCity, findRestaurant } from "./functions/functions"
import { ILocalization, IRestaurant } from "./functions/functions"

// 1. Resolução da Questão

let array1 = ['1', '2', '4', '3']
let array2 = ['1', '2', '3', '5']

let resultEqualArray = equalArray(array1, array2)
console.log(resultEqualArray) //False

// 2. Resolução da Questão

let resultArrayComparator = arrayComparator(array1, array2)
console.log(resultArrayComparator) // [ '1', '2', undefined, undefined ]

// 3. Resolução da Questão

let matriz1 = [
    ["Javascript", "Go", "C#"],
    ["Java", "Kotlin", "Python"],
    ["C++", "C", "PHP"]
];

let matriz2 = [
    ["João Paulo", "James", "Catarina"],
    ["Java", "José", "José"],
    ["C++", "C", "PHP"]
];

let resultEqualMatriz = equalMatriz(matriz1, matriz2)
console.log(resultEqualMatriz) // False

// 4. Resolução da Questão

let resultMatrizComparator = matrizComparator(matriz1, matriz2)
console.log(resultMatrizComparator)
/* 
[
    undefined, undefined,
    undefined, 'Java',
    undefined, undefined,
    'C++',     'C',
    'PHP'
] 
*/

// 5. Resolução da Questão
let city: ILocalization = {
    alcunha: "A terra que ensinou a Paraíba a ler.",
    coordenadas: {
        latitude: [6, 53, 24],
        longitude: [38, 33, 43],
    },
    nome: "Cajazeiras",
}

let resultFindCity = findCity(city)
console.log(resultFindCity)

// 6. Resolução da Questão

let restaurants: IRestaurant[] = [
    { cidade: "Cajazeiras", name: "Burgdega" },
    { cidade: "Sousa", name: "Dino's" },
    { cidade: "Cajazeiras", name: "Avenida" },
];

let resultFindRestaurant = findRestaurant(restaurants)
console.log(resultFindRestaurant)