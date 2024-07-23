function Calculator(){
    let value =0;

    function method(callback){
        return function(num){
            value=callback(value,num)
            return this;
        }
    }

    return {
        add: method((value,num)=>value+num),
        subtract: method((value,num)=>value-num),
        multiply: method((value,num)=>value*num),
        mod: method((value,num)=>value%num),
        result:()=>value
    }
}

const calc= Calculator()

const res= calc.add(10).multiply(5).result()
console.log(res)
