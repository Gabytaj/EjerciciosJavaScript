/* crear el sistema de calendario para verificar si el dia actual, junto a la
hora es considerada dia y horario laboral estandar
 9am-6pm horario laboral
  new Date().getDay() resulta en el dia de la semana del 0-6
  funcion businessHours
  parametros
  hour< hora actual
  return true/false si la hora actual es horario laboral
  funcion businessDay
  parametros
  day
  return
  true/ false si el dia actual es laboral
  verificacion de la resolucion de ambas funciones se debe mostrar en un mensaje 
*/
// function diaLaboral(dia) {
//     if (dia >= 1 && dia <= 5) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function horaLaboral(hora) {
//     if (hora >= 9 && hora < 18) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function horarioLab() {
//     const fechaActual = new Date();
//     const horaActual = fechaActual.getHours();
//     const diaActual = fechaActual.getDay();
//     if (horaLaboral(fechaActual) && diaLaboral(fechaActual)) {
//         console.log("Horario Laboral");
//     } else {
//         console.log("No horario laboral");
//     }
// }
// horarioLab();


// Escribir una funcion que regrese la cantidad de valores true que hay en un array 
/* countTrue([true, false, false, true, false]) ➞ 2 countTrue([false, false, false, false]) ➞ 0 countTrue([]) ➞ 0 */
// Regresar 0 si el array es vacio 
let countTrue = [true, false, false, true, false];
function cantidadtrue(arr) {
    let ctrue = 0;
    arr.forEach(element => {
        if (element == true) {
            ctrue++;
        }
    });
    console.log(ctrue);
}
cantidadtrue(countTrue);

// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros 
// Usar recursion 
function mComunDivisor(a, b) {
    if (b === 0) {
        return a;
    } else {
        return mComunDivisor(b, a % b);
    }
}
console.log(mComunDivisor(5, 2));


// Encontrar los primeros n elementos de la serie fibonacci 
// Usar recursion
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…
// let cont = 0;
// let arrF = [];
function fibone(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibone(n - 1) + fibone(n - 2);
    }

}
console.log(fibone(1));


// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
function tetra(n) {
    let numero = (n * (n + 1) * (n + 2)) / 6;
    console.log(numero + " de la figura piramidal");
}
tetra(2);

// (nivel) -> cantidad de numeritos // Crear una funcion que tome el nombre de un pais y su area
// (nombre, a) // Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48% // ("USA", 9372610) -> "USA is 6.29%
function proporcion(pais, area) {
    console.log(pais + " es " + area * 100 / 148939390 + "%");
}
proporcion('rusia', 17098242);
proporcion("USA", 9372610);

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit
function zeroUno(n) {
    let arra = [1, 0];
    console.log(arra[n]);
}
zeroUno(0);

// Messenger bzzz // (0 ) n // Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"
// function mese(per) {
//     if (per.length == 0) {
//         console.log("No hay nadie en linea");
//     } else {
//         for (let i = 1; i <= per; i++) {
//             console.log("User " + i + " esta en linea");
//         }
//     }
// }
// mese(2);
