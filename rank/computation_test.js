var rank = require('rank');

var matrix = [[1, -1, 2, 1], [1, 2, -1, 1], [2, 1, -4, 1]];


//This method needs localStorage api
function compute(matrix) {
    //sum of elements of mat
    sumMatVect = rank.sumElements(matrix);

    //get pivot
    pivot = rank.pivot * rank.max(sumMatVect);

    //rebuild matrix
    rebuildMatrix(matrix, pivot);

    //get operation index
    let opTab = rank.initOperationTab(matrix);
    let operationIndex = rank.operationTab.findIndex(isOne);

    //let Vo = matrix[0][operationIndex];

    //init operation tab
    rank.initOperationTab(matrix);

    //init replacement tab
    rank.initReplacementTab(matrix);

    //init operation object
    rank.initOperationObject(matrix);

    let _matrix = matrix;

    let len = matrix.length;
    _matrix[0].forEach(Vo => {
        for (let i = 1; i < len; i++) {
            Vi = _matrix[i][operationIndex];
            let vectOp = [];
            //compare Vo and Vi
            if(compare(Vo, Vi)) {
               let factor = rank.cofactor(Vi, Vo);
               //multiply factor by line i
                let vect = rank.multiplyVectorByFactor(_matrix[i], factor);

                //sum of vector line 0 with line i
                vectOp = rank.sumOfVectors(_matrix[0], vect, vect.length);

                //push operation in tab
                rank.replaceTab.push(vectOp);

            } else {
                //push operation in tab
                replaceTab.push(matrix[i]);
            }

            //set vector of line i
            _matrix[i] = replaceTab[i];
        }
        
        //to trace information
        operationObject[operationIndex].push(replaceTab);
        setOperationTab(opTab);
        operationIndex = opTab.findIndex(isOne);
		
		initReplacementTab(matrix);
    });

}