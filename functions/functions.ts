
// 1. Função da Primeira Questão
export function equalArray(array1: string[], array2: string[]): boolean {
    let isEquals = JSON.stringify(array1) === JSON.stringify(array2);
    return isEquals;
}

// 2. Função da Segunda Questão
export function arrayComparator(array1: string[], array2: string[]): Array<string | undefined> | undefined {

    if (array1.length != array2.length) {
        return undefined;
    }

    let newArray: Array<string | undefined> = [];

    array1.forEach((item, index) => {
        if (item === array2[index]) {
            newArray.push(item);
        } else {
            newArray.push(undefined);
        }
    })

    return newArray;
}

// 3. Função da Terceira Questão
export function equalMatriz(matriz1: string[][], matriz2?: string[][]): boolean {

    let isEquals = JSON.stringify(matriz1) === JSON.stringify(matriz2);
    return isEquals;

}

// 4. Função da Quarta Questão
export function matrizComparator(matriz1: string[][], matriz2: string[][]): Array<string | undefined> | undefined {


    for (let i = 0; i < matriz1.length; i++) {
        if (matriz1[i].length != matriz2[i].length) {
            return undefined
        }
    }

    let newArray: Array<string | undefined> = []

    for (let linha = 0; linha < matriz1.length; linha++) {
        for (let coluna = 0; coluna < matriz1.length; coluna++) {
            if (matriz1[linha][coluna] === matriz2[linha][coluna]) {
                newArray.push(matriz1[linha][coluna])
            } else {
                newArray.push(undefined)
            }

        }
    }

    return newArray;
}

// 5. Função da Quinta Questão
export interface ILocalization {
    alcunha: string,
    coordenadas: {
        latitude: number[],
        longitude: number[]
    },
    nome: string
}

export function findCity({ alcunha, coordenadas, nome }: ILocalization): string {
    console.log(nome)
    console.log(alcunha)
    const { latitude, longitude } = coordenadas
    let localizacao = `${latitude[0]}º ${latitude[1]}' ${latitude[2]}" S ${longitude[0]}º ${longitude[0]}' ${longitude[0]}" O`
    return `Localizada em: ${localizacao}`;

}

// 6. Função da Sexta Questão

export interface IRestaurant {
    name: string,
    cidade: string
}
interface IFilterReataurant {
    [i: string]: string[]
}


export function findRestaurant(restaurants: IRestaurant[]): IFilterReataurant {

    let newObjt: IFilterReataurant = {}
    restaurants.forEach(item => {
        if (!newObjt[item.cidade]) {
            newObjt[item.cidade] = [item.name];
        } else if (newObjt[item.cidade]) {
            newObjt[item.cidade].push(item.name);
        }
    })

    return newObjt;
}