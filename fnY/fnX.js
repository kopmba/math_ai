const cst = 'Ԑ';
const isOne = (element) => element == 1;
const isZero = (element) => element == 0;

/*
 @initialMatrix : the matrix build from vectors
 build computation matrix from matrix vectors
 */
function buildComputeMatrix(initialMatrix) {
    initialMatrix.forEach(m => {
        m.push(-1);
    });
}

/*
 @initialMatrix : the matrix build from vectors
 @fn the determinist param as linear equation y = ax + b
 build computation matrix from matrix vectors
 */
function buildComputeMatrix(initialMatrix, fn) {
    initialMatrix.forEach(m => {
        m.push(1);
    });
}

/*
 @matrix : the matrix to compute
 return @cmatrix
 create new ligne as linear equation if cols > rows
 */
function sumOfAllVectors(matrix) {
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
 @v1: the first vector
 @v2: the second vector
 return @matrix
 sum two matrix
 */
function sumOfVectors(v1, v2) {
    let newVect = [];
    for (let i = 0; i < v1.length; i++) {
        console.log('v1 + v2 : ', v1 + v2);
        newVect.push(v1[i] + v2[i]);
    }
    return newVect;
}

/*
 @matrix: the matrix to compute
 return @matrix
 permute two vectors from the array
 */
function permuteVectors(matrix) {
    var cmatrix = [];
    var i = 1;
    if(matrix[0].findIndex(isZero) >= 0) {
        while (i < matrix.length) {
            if(matrix[i].findIndex(isZero) >= 0) {
                i++;
            } else {
                cmatrix[0] = matrix[i];
                matrix[i] = matrix[0];
                matrix[0] = cmatrix[0];
                i = matrix.length;
            }
        }
    }
    return matrix;
}

/*
 @matrix: the matrix to compute
 return @matrix
 add new row to compute equation's system
 */
function redefineMatrixFromRowAndCol(matrix) {
    var cols = matrix[0].length - 1;
    var rows = matrix.length;

    if(cols > rows) {
      let vect = sumOfAllVectors(matrix);
      matrix.push(vect);
    }
    return matrix;
}

/*
 @mapper: the mapper containing the solutions of the equation
 @tabOp: the operation tab
 Check if the operation succeed
 @return false
 */
function tabChecker(mapper, tabOp) {
    var op_checker = tabOp.findIndex(isOne) + 1;
    if(mapper.get(op_checker) != 0) {
        return true;
    } else {
        console.log("Les variables définies ne permettent pas de générer un résultat!");
    }
    return false;
}

/*
 @vect: some vector
 @return tabOp
 Initialise an array to compute the equation system
 */
function initTabOp(vect) {
    for (let i = 0; i < vect.length-2; i++) {
        tabOp.push(0);
    }
    tabOp[length-1] = [1];
    return tabOp;
}

/*
 @vect some vector from matrix
 return @mapper
 Initialise the mapper to compute the equation system
 */
function initMapper(vect) {
    var mapper = new Map();
    for (let i = 0; i < vect.length - 1 ; i++) {
        mapper.set(i+1, 0);
    }
    mapper.set(cst, 0);
    return mapper;
}

/*
 @vect some vector from matrix
 @fn the determinist param as linear equation y = ax + b
 return @mapper
 Initialise the mapper to compute the equation system
 */
function initMapper(vect, fn) {
    var mapper = new Map();
    for (let i = 0; i < vect.length - 2 ; i++) {
        mapper.set(i+1, 0);
    }
    mapper.set(cst, 0);
    mapper.set(fn, 0);

    return mapper;
}

/*
 @vect some vector from matrix
 return @id
 Get the index in the operation tab where value is 1
 */
function initKeyId(vect) {
    return vect.length - 1;
}

/*
 @x: value to set
 return @x
 Set the value of x multiplying by minus
 return @x
 */
function val(x) {
    return -x;
}


/*
 @x: the numerical value
 @factor: the divider
 Use the factor to set the value of x
 return @x
 */
function valByFactor(x, factor) {
    return val(x)/factor;
}

function ComputeMatrix(matrix) {
    this.arr = [];
    this.tabOp = initTabOp(matrix[0]);
    this.mapper = initMapper(matrix[0]);
    this.cpl = [];
    this.matrix = matrix;
    this.keyId = initKeyId(matrix[0]);
    this.opId = 1;
}

/*
 @cpl: couple of values as (x1, x2, x3, cst, y)
 Set the couple of values
 */
ComputeMatrix.prototype.setCpl = function(cpl) {
    this.cpl = cpl;
}

/*
 Set the operation table
 */
ComputeMatrix.prototype.setTabOp = function(tabOp) {
    this.tabOp = tabOp;
}

/*
 @mapper: map to compute equation system
 @vect: vector to set the value binding specific key in the mapper
 Set the mapper binding the specific key with value of the vector when first key
 corresponds to the first index of array
 */
ComputeMatrix.prototype.add = function (mapper, vect) {
    for (let i = 0; i < vect.length - 1; i++) {
        let v = this.mapper.get(i+1);
        if(i != NaN) {
            this.mapper.set(i+1, vect[i] + v);
        } else {
            this.mapper.set(i+1, NaN);
        }
    }

    this.mapper.set(cst, vect[vect.length-1] + val(this.mapper.get(cst)));
}

/*
 @mapper: map to compute equation system
 @vect: vector to set the value binding specific key in the mapper
 @fn the determinist param as linear equation y = ax + b
 Set the mapper binding the specific key with value of the vector when first key
 corresponds to the first index of array
 */
ComputeMatrix.prototype.add = function (mapper, vect, fn) {
    for (let i = 0; i < vect.length - 2; i++) {
        let v = this.mapper.get(i+1);
        if(i != NaN) {
            this.mapper.set(i+1, vect[i] + v);
        } else {
            this.mapper.set(i+1, NaN);
        }
    }

    this.mapper.set(cst, vect[vect.length-2] + val(this.mapper.get(cst)));
    this.mapper.set(fn, vect[vect.length-1] + val(this.mapper.get(fn)));
}

/*
 @vect: vector to retrieve the cofactor
 Get the cofactor to multiply some row to handle operation
 @return @cofactor
 */
ComputeMatrix.prototype.cofactor = function (vect) {
    return vect[this.keyId-1];
}

/*
 @factor: the value use to divide the value in array
 @vect: vector use to set the value
 Use the couple as vector tho set the mapper
 */
ComputeMatrix.prototype.setCplToAdd = function (factor, vect) {
    this.setCpl(vect);
    for (let i = 0; i < vect.length ; i++) {
        let v = vect[i];
        if(i != this.keyId - 1) {
            this.cpl[i] = valByFactor(v, factor);
        } else {
            this.cpl[i] = NaN;
        }
    }
}

/*
 @vect: vector use to set the value
 Set the couple of values before by multiplying each value in array by the factor
 */
ComputeMatrix.prototype.setCplBeforeAdding = function (vect) {
    let factor = vect[this.keyId-1];
    for (let i = 0; i < vect.length ; i++) {
        if(i != this.keyId - 1) {
            this.cpl[i] = this.cpl[i] * factor;
        }
    }
}