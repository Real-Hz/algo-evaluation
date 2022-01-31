/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
function pnn(nombre) {
    if (nombre > 0) {
        return "POSITIVE"
    } else if (nombre < 0) {
        return "NEGATIVE"
    } else {
        return "NUL"
    }
}
console.log(pnn(20))
console.log(pnn(-12))
console.log(pnn(0))

/**
 * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
 * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
 */

 function pairs(nombres) {
    var tabp = [];
    var tabi = 0;
    for (var nbre = 0; nbre < nombres.length;
        nbre++) {
        if (nombres[nbre] % 2 === 0) {
            tabp[tabi] =
                nombres[nbre];
            tabi++;
        }
    }
    return tabp
}
var tableau = [1, 2, 14, 17, 57, 98, 134, 976, 1233, 1556];
console.log(pairs(tableau))
