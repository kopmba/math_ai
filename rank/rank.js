var pivot = 1;
var replaceTab = [];
var operationTab = [1];
var sumMatVect = [];
var operationObject = [];

const isOne = (element) => element == 1;

/*
 @matrix : the matrix to compute
 return @cmatrix
 create new ligne to get the pivot
 */
function sumElements(matrix) { 
    var cmatrix = [];
    var sum = 0;
    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length ; j++) {
            sum = sum + matrix[i][j];
            cmatrix.push(sum);
        }
        sum = 0;
    }

    return cmatrix;
}
/*
 @vect: Some vector of the matrix
 return @max
 Get the max value in Array
 */
function max(vect) {
    return Math.max(...vect);
}

function rebuildMatrix(matrix, pivot) {
    for (let i = 0; i < matrix.length; i++ ) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = matrix[i][j]/pivot
        }
    }
}

function initReplacementTab(matrix) {
    let vect = [];
    vect.push(matrix[0]);
    return vect;
}

/*
 @Xo: the numerical value
 @Xn: the divider
 Use the factor to set the value of Xo
 return @Xo
 */
function cofactor(Xn, Xo) {
    let val = 1;

    if(Xn > Xo) {
        if(Xn > 0 && Xo > 0) {
            val = -1*val*(Xo/Xn);
        }

        if(Xn > 0 && Xo < 0) {
            val = val*(Xo/Xn);
        }

        if(Xn < 0 && Xo < 0) {
            val = -1*val*(Xo/Xn);
        }
    }

}

/*
 @matrix: The matrix to use 
 @return tabOp
 Initialise an array to compute the equation system
 */
function initOperationTab(matrix) {
    let len = matrix[0].length;
    for (let i = 1; i < len; i++) {
        operationTab.push(0);
    }
    return operationTab;
}

function initOperationObject(matrix) {
    let len = matrix[0].length;
    for (let i = 0; i < len; i++) {
        operationObject.push([]);
    }
}

function compare(Xo, Xn) {
    return Xo < Xn;
}

function sumVector(vect) {
    let s = 0;
    vect.forEach(v => {
        s = s + v;
    });
    return s;
}

function sumOfVectors(v1, v2, len) {
    let newVect = [];
    for (let i = 0; i < len; i++) {
        newVect.push(v1[i] + v2[i]);
    }
    return newVect;
}


function multiplyVectorByFactor(vect, factor) {
    let newVect = vect;
    for (let i = 0; i < newVect.length; i++) {
        newVect[i] = newVect[i] * factor;
    }
    return newVect;
}

function setOperationTab(opTab) {
    let i = 0;
    while (i < opTab.length) {
        if(opTab[i] == 1 && i != opTab.length - 1) {
            opTab[i+1] = 1;
			opTab[i] = 0;
            i = opTab.length;
        }
		
		if(i == opTab.length - 1) {
			opTab[i] = 0;
		}
        i++;
    }
}

function rank(matrix) {
    var count = 0;
    matrix.forEach(tab => {
        let _count = count;
       tab.forEach(v => {
          if (v == 0) {
              _count++
          }
       });

       if(_count != tab.length) {
           count++;
       }
    });
    return count;
}


