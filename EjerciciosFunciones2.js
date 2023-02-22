/***********************************************************************************************************/

// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName = ["Felipe", "Fer", "Zabdiel"]; //-> FFZ
secretName = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'] //-> CJMPRR
// secretName = ['Harry', 'Ron', 'Hermione']; //-> HHR
let nombreS = '';
let secretNameVar = [];
function secretNameFuc(arr) {
    let cont = 0;
    arr.forEach(function (elemento) {
        secretNameVar[cont] = elemento[0];
        cont++;
    });
    console.log(secretNameVar.sort().join(''));
}
secretNameFuc(secretName);
/***********************************************************************************************************/
onlineStatus = ['mockIng99', 'J0eyPunch', 'glassedFer', 'gaby'];// -> 'mockIng99, J0eyPunch and one 1 more online'
function dosYCuantosMas(arr) {
    let array1=arr.slice(0,2);
    // for (let cont = 0; cont < 2; cont++) {
        // console.log(arr[cont]);
    // }
    // console.log('And ' + (arr.length - 2) + ' more online');
    return array1+ ' And ' + (arr.length - 2) + ' more online';
}
console.log(dosYCuantosMas(onlineStatus));

/***********************************************************************************************************/
// Crear una funcion que tome 2 parametros, (numero, longitud) y regrese un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]
let multi = [];
function multiplos(num, longitud) {
    for (let cont = 0; cont <= longitud; cont++) {
        if (cont != 0) {
            multi[cont - 1] = num * cont;
        }
    }
    return multi.join(',');
}
console.log(multiplos(17, 6));

/***********************************************************************************************************/
// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
positiveDom = [-1, -3, -5, 4, 6767];// -> false

function positovoDomi(arr) {
    let posit = 0;
    let negat = 0;
    arr.forEach(function (elemento) {
        (elemento < 0) ? negat++ : posit++;
    });
    return (posit > negat) ? console.log("Dominante positivo") : console.log("Dominante Negativo");
}
positovoDomi(positiveDom);

/***********************************************************************************************************/
// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento de en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]
let arrProm = [1, 2, 3, 5, 22, 6];
let arr1;
let arr2;
let suma = [];
let div = [];
function promedioAntipode(arr) {
    let mitad = (arr.length) / 2;
    if (arr.length % 2 != 0) {
        arr.splice(mitad, 1);
    }
    arr1 = arr.slice(0, mitad);
    arr2 = arr.slice(mitad, arr.length);
    for (let cont = 0; cont < arr1.length; cont++) {
        suma[cont] = arr1[cont] + arr2[(arr2.length) - cont - 1];
        div[cont] = suma[cont] / 2;
    }
    return div;
}
console.log(promedioAntipode(arrProm));
