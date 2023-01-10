/*
Une poule est sur un échiquier E de hauteur H et de largeur L. Elle est placée sur la case en haut à gauche d'indice (0,0).
Sur chaque case d'indice (i,j), il y a un certain nombre de graines Eij. Elle peut seulement faire deux mouvements :
- Aller sur la case en dessous
- Aller sur la case à droite
Il faut écrire un algorithme qui permet de savoir quel est le nombre maximal M de graines que la poule peut 
manger en rejoignant la case en base à droite d'indice (H-1, L-1). */

let E = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 0, 9],
]

//M = 25
// 2 chemins possibles
// 6 chemins possibles

function analyzeMaxValuePossible(array) {
    let H = array.length -1
    let L = array[0].length-1
    let posX = 0
    let posY = 0
    let nextValue

    while (posX < L && posY < H ) {
        if (posX <L-1 && posY < H-1 ) {
            nextValue = Math.max(...[E[posX][posY + 1], E[posX + 1][posY]])
            if (nextValue === E[posX[posY + 1]]) {
                posY++
            } else {
                posX++
            }
        } else if (posX <=L) {
            nextValue = E[posX][posY + 1]
            posY++
        } else if (posY <= H ) {
            nextValue = E[posX + 1][posY]
            posX++
        }
      
    }
}

analyzeMaxValuePossible(E)
