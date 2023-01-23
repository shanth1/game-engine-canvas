/*
    Linear transformation is a function with lineal rules
    transformation - function

    Linear:
    1. Lines remain lines
    2. Origin remains fixed

    Grid lines remain parallel and evenly spaces

    2x2 Matrix. Columns define basis vector (i, j)

    [[ix, jx], [iy, jy ]]

    Multiplying a vector by a matrix allows you to understand
    what the transformation does with the vector
*/

/**
 * The product of two matrices (space transformations) is the composition matrix
 * (the result of transformation)
 */

/**
 * The determinant of the transformation
 * determinant is coefficient of changing area of transformation
 */

export class Matrix {
    constructor(array) {
        this.m = array.length;
        this.n = array[0].length;
        this.array = array;
    }

    consoleMatrix = () => {
        console.log(this.array);
    };

    getDeterminant = () => {};
    transpose = () => {};

    addMatrix = (matrix) => {};
    multiplyMatrix = (matrix) => {};
    multiplyScalar = (scalar) => {}; // scale
}

export class DiagonalMatrix extends Matrix {
    constructor() {}
}

export class ScalarMatrix extends DiagonalMatrix {
    constructor(n, scalar) {}
}

export class UnitMatrix extends ScalarMatrix {
    constructor(n) {}
}

export class NullMatrix extends Matrix {
    constructor(m, n) {
        const array = [];
        for (let i = 0; i < m; i++) {
            array.push([]);
            for (let j = 0; j < n; j++) {
                array[i].push(0);
            }
        }
        super(array);
    }
}
