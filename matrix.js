function matrixTransposeAndMultiplication(initialValue,rows,column){

    var matrix = [];
    var transposeMatrix = [];
    let lastElem = [];
    let matrixMultiply = [];
    let newArray = [];
    for(var i=0; i<rows; i++) {
        matrix[i] = [];
        for(var j=0; j<column; j++) {
            matrix[i][j] = initialValue;
            initialValue = initialValue + 1;
        }
    }
    for(var n=0;n<column;n++){
        transposeMatrix[n]=[];
        for(var m=0;m<rows;m++)
        {
            transposeMatrix[n][m] = matrix[m][n];
        }
    }
    
    console.log(matrix);
    console.log(transposeMatrix);
    
    let checkMaximum = rows;
    if(checkMaximum<column){
        checkMaximum=column; 
    }
    
    let newArray2 = new Array(checkMaximum*checkMaximum);
    console.log(newArray2);
    // for(var q=0;q<rows;q++){
    //     console.log(q);
    //     for(var )
    // }
}


matrixTransposeAndMultiplication(3,4,2);