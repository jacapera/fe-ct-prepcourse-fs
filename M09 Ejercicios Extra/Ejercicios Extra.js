/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arregloPadre = [];
   for ( let clave in objeto ) {
      arregloPadre.push([clave, objeto[clave]]);
   }
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objetoAux = {};
   for ( let i = 0; i < string.length; i++ ) {
      let letra = string[i];
      if ( !objetoAux[letra] ) {
         objetoAux[letra] = 1;
      } else {
         objetoAux[letra]++;
      }
   }
   let keys = Object.keys(objetoAux);
   keys.sort();
   let resultado = {};
   for ( let i = 0; i < keys.length; i++ ) {
      let clave = keys[i];
      resultado[clave] = objetoAux[clave];
   }
   //console.log(keys.sort());
   return resultado;
}
//console.log(numberOfCharacters("aabbbccdddkklasferewa"));

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let mayusculas = "";
   let minusculas = "";

   /** -----------------------------------------
    * Opcion 1 recorriendo el string con un for
    */ //---------------------------------------
   // for ( let i = 0; i < string.length; i++ ) {
   //    if ( string[i] === string[i].toUpperCase() ) {
   //       mayusculas += string[i];
   //    } else {
   //       minusculas += string[i];
   //    }
   // }

   /** ------------------------------------------------------------------------
    * Opción 2 separar el string en arreglos de letras y utilizando metodos de
    * arreglos para separar las mayusculas de las minusculas
    */ // ---------------------------------------------------------------------
   const letras = string.split("");
   mayusculas = letras.filter( letra => letra === letra.toUpperCase() ).join("");
   minusculas = letras.filter( letra => letra === letra.toLowerCase() ).join("");

   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let palabras = frase.split(' ');
   let palabrasInvertidas = palabras.map( palabra => {
      return palabra.split('').reverse().join('');
   });
   let fraseModificada = palabrasInvertidas.join(' ');

   return fraseModificada;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   const numeroString = numero.toString();
   const numeroInvertido = numeroString.split('').reverse().join('');

   if (numeroString === numeroInvertido) {
      return "Es capicua"
   } else {
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   /** ---------------------------------------------------------------------------
    * Opcion 1 utilizando replace() con una expresion regular para identificar
    * los caracteres a reemplazar por '', g se utiliza para hacer que la búsqueda
    * y el reemplazo se realicen en todas las ocurrencias en el string.
    */ // ------------------------------------------------------------------------
   //let resultado = string.replace(/[abc]/g, "");

   /** -------------------------------------------------------------------------------
    * Opcion 2 dividir string en un arreglo de caracteres con split(''), filtrar por
    * los caracteres a eliminar con filter(), y volver a unir en un string resultante
    * con join('')
    */ // ----------------------------------------------------------------------------
   let letrasAEliminar = ["a", "b", "c"];
   let resultado = string.split('').filter( letra => !letrasAEliminar.includes(letra)).join('');

   return resultado;
}
//console.log(deleteAbc("akkbllctt"));

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort( (a,b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   const interseccion = [];
   for (let num of array1) {
      if ( array2.includes(num)) {
         interseccion.push(num);
      }
   }

   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
