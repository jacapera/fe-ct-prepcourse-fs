/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimoElemento = array.length - 1;
   return array[ultimoElemento];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map(num => num + 1);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
//console.log(agregarItemAlFinalDelArray(["arroz"], "y"));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   const frase = palabras.join(' ');
   return frase;
}
//console.log(dePalabrasAFrase(["Hola", "Mundo!", "Fantastico"]));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let resultado = array.includes(elemento);
   return resultado;
}
//console.log(arrayContiene(["arbol", "hoja", "raiz"], "raiz"));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let resultado = 0;
   arrayOfNums.forEach( num => {
      resultado += num;
   });
   return resultado;
}
//console.log(agregarNumeros([5, 5, 5]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   resultadosTest.forEach(num => {
      suma += num ;
   });
   return suma / resultadosTest.length;
}
console.log(promedioResultadosTest([10, 10, 10, 10]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numeroMasGrande = Math.max(...arrayOfNums);
   return numeroMasGrande;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   //const arguments = [2, 2, 10];
   let resultado = arguments[0];
   if(arguments.length === 0) {
      return 0;
   } else if (arguments.length === 1) {
      return arguments[0];
   } else {
      for (let i = 1; i < arguments.length; i++) {
         resultado *= arguments[i];
      }
      return resultado;
   }
}
console.log(multiplicarArgumentos());

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let contador = 0;
   array.map(item => {
      if(item > 18) {
         contador++;
      }
   });
   return contador;
}
console.log(cuentoElementos([19, 10, 20, 6, 7]));

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
         return "Es fin de semana"
         break;
      case 2:
         return "Es dia laboral"
         break;
      case 3:
         return "Es dia laboral"
         break;
      case 4:
         return "Es dia laboral"
         break;
      case 5:
         return "Es dia laboral"
         break;
      case 6:
         return "Es dia laboral"
         break;
      case 7:
         return "Es fin de semana"
         break;
      default:
         break;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numString = num.toString();
   return numString.charAt(0) === '9';
}
//console.log(empiezaConNueve(98));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   const valorAComparar = array[0];

   for ( let i = 1; i < array.length; i++) {
      if (array[i] !== valorAComparar) {
         return false;
      }
   }

   return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
   const mesesEncontrados = [];

   for (let mes of array) {
      if(mesesBuscados.includes(mes)) {
         mesesEncontrados.push(mes);
      }
   }

   if (mesesEncontrados.length === mesesBuscados.length) {
      return mesesEncontrados;
   } else {
      return "No se encontraron los meses pedidos";
   }
}
//console.log(mesesDelAño(["Enero", "Febrero", "Mayo", "Marzo"]));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaSeis = [];
   for (let i = 0; i <= 10; i++) {
      //console.log(i*6);
      tablaSeis.push(i*6);
   }
   return tablaSeis;
}
console.log(tablaDelSeis());

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let resultado = array
      .map(num => num > 100 ? num : null)
      .filter(num => num !== null);
   return resultado;
}


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let resultado = [];
   let acumulador = 0;
   for (let i = 0; i < 10; i++) {
      resultado.push(num += 2);
      acumulador = num + 2;
      if (i === acumulador) {
         return "Se interrumpió la ejecución"
      }
   }
   return resultado;
}
//console.log(breakStatement(50));

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let resultado = [];
   for (let i = 0; i < 10; i++) {
      if (i === 4) {
         continue;
      }
      resultado.push(num += 2);
   }
   return resultado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
