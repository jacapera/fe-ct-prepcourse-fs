/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   let resultado;
   if (x === y) {
      resultado = true;
   } else {
      resultado = false;
   }
   return resultado;
}
//console.log(sonIguales(3, 2));

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   let resultado;
   if (str1.length === str2.length) {
      resultado = true;
   } else {
      resultado = false;
   }
   return resultado;
}
//console.log(tienenMismaLongitud("jesus", "jesusww"));


function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   let resultado;
   if (num < 90) {
      resultado = true;
   } else {
      resultado = false;
   }
   return resultado;
}
//console.log(menosQueNoventa(100));

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   let resultado;
   if (num > 50) {
      resultado = true;
   } else {
      resultado = false;
   }
   return resultado;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   let resultado;
   if (num % 2 === 0) {
      resultado = true;
   } else {
      resultado = false;
   }
   return resultado;
}
//console.log(esPar(81));

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   let resultado;
   if (!(num % 2 === 0)) {
      resultado = true;
   } else {
      resultado = false;
   }
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
