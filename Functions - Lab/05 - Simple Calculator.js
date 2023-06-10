function calculator(numOne, numTwo, operation) {
    const functions = {
        multiply: function(a,b) {
            return a*b;            
        },
      
        divide: function(a,b) {
            return a/b;
        },
        add: function(a,b){
            return a+b;
        },
        subtract: function(a,b){
            return a-b;
        }
      };
      
      const funcName = operation;
      
      console.log(functions[funcName](numOne,numTwo));

}
calculator(5,10,"multiply")
