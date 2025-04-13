var fnX = require('fnX');

function test() {
    const tab = [[1, -1, 2, -1], [1, 2, -1, -1], [2, 1, -4, -1]];
    const _tab = [[1, -1, 2, -1], [1, 2, -1, -1], [2, 1, -4, -1]];
    const _tabp = [[1, 0, 2, -1], [1, 2, -1, -1], [2, 1, -4, -1]];
    const _tabrc = [[1, 0, 2, -1], [1, 2, -1, -1]];
    var tabOp = fnX.initTabOp(tab[0]);
    var mapper = fnX.initMapper(tab[0]);
    var cpl = [];
    var compute = new fnX.ComputeMatrix(tab);
    console.log(compute);
    tabChecker(mapper, tabOp);
    console.log("Notre nouvelle map après modification : ", compute);

    console.log('valeur de x negatif : ', fnX.val(3));

    console.log('val by factor : ', fnX.valByFactor(3, -2));

    console.log('cofacteur du premier vecteur : ', compute.cofactor(tab[0]));

    compute.setCplToAdd(compute.cofactor(tab[0]), tab[0])
    console.debug('Value to add : ', compute.cpl);

    compute.setCplBeforeAdding(tab[1])
    console.debug('Value before adding : ', compute.cpl);

    compute.add(compute.mapper, [1, NaN, NaN, -2]);
    console.log('Notre mapper : ', compute.mapper);

    console.log('sum of vectors', sumOfAllVectors(_tab));
    console.log('sum of vectors and new matrix : ', sumOfVectors(_tab[0], _tab[1]), _tab);
    console.log('permutations of vectors', permuteVectors(_tabp));
    console.log('matrice quand les rows < cols', redefineMatrixFromRowAndCol(_tabrc));
}
