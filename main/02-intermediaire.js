/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
function combine(tableau1, tableau2) {
    var tab = [];
    if (tableau1.length !== tableau2.length)
        return
    for (var i = 0; i < tableau1.length; i++) {
        tab[i * 2] = tableau1[i];
        tab[i * 2 + 1] = tableau2[i];
    }
    return tab;
}

var tab2 = ["apple", "banana", "orange", "lemon"];
var tab1 = [1, 2, 3, 4];

console.log(combine(tab1, tab2));

/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */

function rotate(tableau, offset) {
    var tab = [];
    var conteur = offset;
    for (var i = 0; i < tableau.length; i++) {
        if (i + conteur >= tableau.length) conteur = -i;
        tab[i] = tableau[i + conteur];
    }
    return tab
}
var tab1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotate(tab1, 2));
console.log(rotate(tab1, 4));
console.log(rotate(tab1, 6));
console.log(rotate(tab1, 0));

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */

function syracuse(nombre) {
    var number = nombre;
    var tab = [];
    tab[0] = number;
    for (var i = 1; i < 10; i++) {
        if (number % 2 === 0) {
            number /= 2;
        } else {
            number = number * 3 + 1;
        }
        tab[i] = number;
    }
    return tab;
}
var list = 14;
var list2 = 17
console.log(syracuse(list));
console.log(syracuse(list2));
