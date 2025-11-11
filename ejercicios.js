// FUNDAMENTOS DE PROGRAMACIÃ“N - PRÃCTICA
// Nombre del estudiante: _________________
// Fecha: _________________

// ============================================
// SECCIÃ“N 1: VARIABLES Y TIPOS DE DATOS (10 puntos)
// ============================================

/**
 * Ejercicio 1.1: Declarar variables (2 puntos)
 * Crea tres variables con tu informaciÃ³n personal
 * @returns {Object} - Objeto con nombre, edad y carrera
 */
function miInformacion() {
  // Declaración de constantes
  const nombre = "Ariff";
  const edad = 17;
  const carrera = "TSU en Desarrollo de Software";
  
  return { nombre, edad, carrera };
}

/**
 * Ejercicio 1.2: Operaciones aritmÃ©ticas bÃ¡sicas (3 puntos)
 * @param {number} a - Primer nÃºmero
 * @param {number} b - Segundo nÃºmero
 * @returns {Object} - Objeto con suma, resta, multiplicaciÃ³n y divisiÃ³n
 */
function operacionesBasicas(a, b) {
  // Adición de el signo correspondiente
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = a / b;
  
  return { suma, resta, multiplicacion, division };
}

/**
 * Ejercicio 1.3: Ãrea de un rectÃ¡ngulo (2 puntos)
 * @param {number} base - Base del rectÃ¡ngulo
 * @param {number} altura - Altura del rectÃ¡ngulo
 * @returns {number} - Ãrea del rectÃ¡ngulo
 */
function areaRectangulo(base, altura) {
  return base*altura; // Devuelve formula del área
}

/**
 * Ejercicio 1.4: ConversiÃ³n de temperatura (3 puntos)
 * Convierte grados Celsius a Fahrenheit
 * FÃ³rmula: F = C * 9/5 + 32
 * @param {number} celsius - Temperatura en Celsius
 * @returns {number} - Temperatura en Fahrenheit
 */
function celsiusAFahrenheit(celsius) {
  const Fahrenheit = celsius * (9/5) + 32; // Aplica la fórmula de conversión
  return Fahrenheit;
}

// ============================================
// SECCIÃ“N 2: CONDICIONALES (15 puntos)
// ============================================

/**
 * Ejercicio 2.1: NÃºmero par o impar (3 puntos)
 * @param {number} numero - NÃºmero a evaluar
 * @returns {string} - "par" o "impar"
 */
function parOImpar(numero) {
  let paridad;
  if (numero%2 == 0) { // Determina si el numero es par o no
    paridad = "par";
  }
  else{
    paridad = "impar";
  }
  return paridad;
}

/**
 * Ejercicio 2.2: CalificaciÃ³n (4 puntos)
 * @param {number} nota - Nota del 0 al 100
 * @returns {string} - "Aprobado" si nota >= 60, "Reprobado" si no
 */
function evaluarNota(nota) {
    let estado;
    if (nota>=60){ // Determina si aprobó o no
      estado = "Aprobado"
    }
    else{
      estado = "Reprobado"
    }
  return estado;
}

/**
 * Ejercicio 2.3: El mayor de tres nÃºmeros (4 puntos)
 * @param {number} a - Primer nÃºmero
 * @param {number} b - Segundo nÃºmero
 * @param {number} c - Tercer nÃºmero
 * @returns {number} - El nÃºmero mayor
 */
function mayorDeTres(a, b, c) {
  let mayor 
  if (a >= b && a >= c) { // Determina si "a" es mayor que los demás
    mayor = a;
  } 
  else if (b >= a && b >= c) { // Determina si "b" es mayor que los demás
    mayor = b;
  } 
  else {  // Sino, entonces c es mayor
    mayor = c;
  }
  
  
  return mayor;
}

/**
 * Ejercicio 2.4: ClasificaciÃ³n de edad (4 puntos)
 * @param {number} edad - Edad de la persona
 * @returns {string} - "menor" (0-17), "adulto" (18-64), "mayor" (65+)
 */
function clasificarEdad(edad) {
    if (edad >= 0 && edad <= 17){ // Determina si es menor
      edad = "menor"
    }
    else if (edad >= 18 && edad <= 64){ // Determina si es adulto
      edad = "adulto"
    }
    else { // Sino, entonces es mayor
      edad = "mayor"
    }
  return edad;

}

// ============================================
// SECCIÃ“N 3: FUNCIONES Y BUCLES (20 puntos)
// ============================================

/**
 * Ejercicio 3.1: Factorial (5 puntos)
 * Calcula el factorial de un nÃºmero (n! = n * (n-1) * (n-2) * ... * 1)
 * Ejemplo: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * @param {number} n - NÃºmero entero positivo
 * @returns {number} - Factorial de n
 */
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) { // Iteración para multiplicar por el siguiente
    resultado *= i; 
  }
  return resultado;
}

/**
 * Ejercicio 3.2: Suma de nÃºmeros del 1 al n (4 puntos)
 * @param {number} n - NÃºmero lÃ­mite
 * @returns {number} - Suma de 1 + 2 + 3 + ... + n
 */
function sumaHastaN(n) {
  let i = 1;
  let suma = 0;

  while(i<=n){ // Iteración para sumar cada número hasta n
    suma += i;
    i++;
  }
  return suma;
}

/**
 * Ejercicio 3.3: Tabla de multiplicar (5 puntos)
 * @param {number} numero - NÃºmero para generar su tabla
 * @returns {Array} - Array con los resultados de numero x 1 hasta numero x 10
 * Ejemplo: tablaMultiplicar(3) debe retornar [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
 */
function tablaMultiplicar(numero) {
  const tabla = [];

  for (let i = 1; i <= 10; i++) { 
    tabla.push(numero * i); // Inserta la multiplicación correspondiente en el arreglo tabla
  }
  return tabla;
}

/**
 * Ejercicio 3.4: NÃºmeros pares hasta n (6 puntos)
 * @param {number} n - NÃºmero lÃ­mite
 * @returns {Array} - Array con todos los nÃºmeros pares desde 2 hasta n
 * Ejemplo: numerosPares(10) debe retornar [2, 4, 6, 8, 10]
 */
function numerosPares(n) {
  const pares = [];
  for (let i = 2; i <= n; i += 2) { // Avanza de 2 en 2 hasta n
    pares.push(i);
  }
  return pares;
}

// ============================================
// SECCIÃ“N 4: ARRAYS (25 puntos)
// ============================================

/**
 * Ejercicio 4.1: Suma de elementos de un array (4 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - Suma de todos los elementos
 */
function sumaArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) { // Ciclo para recorrer arreglo y sumar cada elemento
    suma += numeros[i];
  }
  return suma;
}

/**
 * Ejercicio 4.2: Promedio de un array (5 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - Promedio de los nÃºmeros
 */
function promedioArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++){ // Suma cada elemento
    suma += numeros[i];
  }

  let promedio = suma / numeros.length; // Obtiene el promedio con la longitud de el arreglo y la suma
  return promedio;
}

/**
 * Ejercicio 4.3: Encontrar el mÃ¡ximo (6 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @returns {number} - El nÃºmero mÃ¡s grande del array
 */
function encontrarMaximo(numeros) {
  //Método para devolver el máximo del arreglo con ... para mandarlo como una lista de argumentos
  return Math.max(...numeros);
}

/**
 * Ejercicio 4.4: Filtrar nÃºmeros mayores a un valor (5 puntos)
 * @param {Array<number>} numeros - Array de nÃºmeros
 * @param {number} limite - Valor lÃ­mite
 * @returns {Array<number>} - Nuevo array solo con nÃºmeros mayores al lÃ­mite
 * Ejemplo: filtrarMayores([1, 5, 3, 8, 2], 4) debe retornar [5, 8]
 */
function filtrarMayores(numeros, limite) {
  const mayores = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) { // Si el número es mayor al límite se agrega
      mayores.push(numeros[i]);
    }
  }
  return mayores;
}

/**
 * Ejercicio 4.5: Invertir un array (5 puntos)
 * @param {Array} arr - Array a invertir
 * @returns {Array} - Nuevo array con los elementos en orden inverso
 * Ejemplo: invertirArray([1, 2, 3, 4]) debe retornar [4, 3, 2, 1]
 */
function invertirArray(arr) {
  const invertido = [];
  for (let i = arr.length - 1; i >= 0; i--) { // Recorre el arreglo desde el final hasta el inicio
    invertido.push(arr[i]);
  }
  return invertido;
}

// ============================================
// SECCIÃ“N 5: ARRAYS BIDIMENSIONALES (30 puntos)
// PreparaciÃ³n para matrices
// ============================================

/**
 * Ejercicio 5.1: Crear una matriz (6 puntos)
 * Crea una matriz de filas x columnas llena de ceros
 * @param {number} filas - NÃºmero de filas
 * @param {number} columnas - NÃºmero de columnas
 * @returns {Array<Array<number>>} - Matriz de ceros
 * Ejemplo: crearMatriz(2, 3) debe retornar [[0, 0, 0], [0, 0, 0]]
 */
function crearMatriz(filas, columnas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) { 
    matriz.push(new Array(columnas).fill(0)); // Crea la fila usando 0 como columnas
  }
  return matriz;
}

/**
 * Ejercicio 5.2: Suma de elementos de una matriz (6 puntos)
 * @param {Array<Array<number>>} matriz - Matriz de nÃºmeros
 * @returns {number} - Suma de todos los elementos
 * Ejemplo: sumaMatriz([[1, 2], [3, 4]]) debe retornar 10
 */
function sumaMatriz(matriz) {
  let suma = 0;

  for (let i = 0; i < matriz.length; i++) { // Recorre cada fila
    for (let j = 0; j < matriz[i].length; j++) { // Recorre cada columna de la fila
      suma += matriz[i][j];
    }
  }
  
  return suma;
}

/**
 * Ejercicio 5.3: Obtener una fila (5 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceFila - Ãndice de la fila (empezando en 0)
 * @returns {Array<number>} - La fila especificada
 * Ejemplo: obtenerFila([[1, 2], [3, 4], [5, 6]], 1) debe retornar [3, 4]
 */
function obtenerFila(matriz, indiceFila) {
  const fila = matriz[indiceFila];
  return fila;
}

/**
 * Ejercicio 5.4: Obtener una columna (7 puntos)
 * @param {Array<Array<number>>} matriz - Matriz
 * @param {number} indiceColumna - Ãndice de la columna (empezando en 0)
 * @returns {Array<number>} - Array con los elementos de la columna
 * Ejemplo: obtenerColumna([[1, 2], [3, 4], [5, 6]], 0) debe retornar [1, 3, 5]
 */
function obtenerColumna(matriz, indiceColumna) {
  const columna = [];
  for (let i = 0; i < matriz.length; i++) { // Recorre cada fila 
    columna.push(matriz[i][indiceColumna]); // Toma el valor en la columna indicada
  }
  return columna;
}

/**
 * Ejercicio 5.5: Transponer una matriz (6 puntos)
 * La transpuesta intercambia filas por columnas
 * @param {Array<Array<number>>} matriz - Matriz original
 * @returns {Array<Array<number>>} - Matriz transpuesta
 * Ejemplo: transponer([[1, 2, 3], [4, 5, 6]]) debe retornar [[1, 4], [2, 5], [3, 6]]
 */
function transponer(matriz) {
  const transpuesta = [];
    // Recorre columnas
  for (let i = 0; i < matriz[0].length; i++) {
    const fila = [];
    // Recorre filas
    for (let j = 0; j < matriz.length; j++) {
      fila.push(matriz[j][i]);
    }
    transpuesta.push(fila);
  }
  
  return transpuesta;
}

// ============================================
// NO MODIFIQUES ESTA LÃNEA - NECESARIA PARA LOS TESTS
// ============================================
module.exports = {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
};
