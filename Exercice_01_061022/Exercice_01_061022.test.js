const {twoSum } = require("./Exercice_01_061022");

describe("twoSum",()=>{
   it("should work :",()=>{
    const samples=[
        {array :[2,7,11,15], target : 9,expected :[0,1]},
        {array:[3,2,3   ],target:6,expected:[0,2]},
        {array:[3,3],target:6,expected:[0,1]}
    ]
    for(const {array,target,expected} of samples){
        expect(twoSum(array,target)).toEqual(expected);
       }
   })
 
})
