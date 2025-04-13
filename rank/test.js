var rank = require('rank');

var matrix = [[1, -1, 2, 1], [1, 2, -1, 1], [2, 1, -4, 1]];

//Use the function to test the value of your computation
function test() {

    console.log("Initialisation de la matrix : ");
    console.log(matrix);
    sumMatVect = rank.sumElements(cmatrix);
    console.log("Somme des vecteurs de la matrix : ");
    console.log(sumMatVect);
    //get pivot
    pivot = rank.pivot * rank.max(sumMatVect);
    console.log("Le pivot : ");
    console.log(pivot);
    //rebuild matrix
    rank.rebuildMatrix(matrix, pivot);
    console.log("La nouvelle matrix : ");
    console.log(matrix);
    //get operation index
    let opTab = rank.initOperationTab(matrix);
    let operationIndex = rank.operationTab.findIndex(isOne);
    console.log("La table d'operation : ");
    console.log(opTab);
    console.log("L'index de notre premiere valeur : ");
    console.log(operationIndex);
    //let Vo = matrix[0][operationIndex];

    //init replacement tab
    let irtab = rank.initReplacementTab(matrix);
    console.log("La matrix de remplacement : ");
    console.log(irtab);

    //init operation object
    rank.initOperationObject(matrix);

    console.log("L'objet d'operation matricielle : ");
    console.log(operationObject);

    let multiply = matrix[0];
    let m = multiply;
    let vect = rank.multiplyVectorByFactor(m, 2);
    console.log("Matrice avant multiplication : ");
    console.log(matrix[0]);
    console.log("Matrice apres multiplication : ");
    console.log(vect);

    let sumVect = rank.sumOfVectors(matrix[0], matrix[1], 4);
    console.log("Matrice apres sum : ");
    console.log(sumVect);
    let _rank = rank(matrix);
    console.log("Le rang de la matrice : ");
    console.log(_rank);
}

