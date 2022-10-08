/*
! Pascal's Triangle

TODO : Given an integer numRows, return the first numRows of Pascal's triangle.
TODO : In Pascal's triangle, each number is the sum of the two numbers directly above it.

* Example 1:
* Input: numRows = 5
* Output: 
*   [     [1],
*        [1,1],
*       [1,2,1],
*      [1,3,3,1],
*     [1,4,6,4,1]
    ]
*/

var pascalTriangle = function(numRows) {
    let array=[[1]];
    for(let i=0;i<numRows-1;i++){
        let precedentLine=array[i];
        let newLine=[];
        for(let j=0;j<precedentLine.length+1;j++){
            if(j>0 && j<precedentLine.length){
                let sum=precedentLine[j-1]+precedentLine[j];
                newLine.push(sum);
            }
            else 
                newLine.push(1);
        }
        array.push(newLine);
        }
    return array;
 }


module.exports={
    pascalTriangle
}