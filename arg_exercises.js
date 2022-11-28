function sum(...args) {
    let res = 0;
    args.forEach((el) => {
        res += el;
    })
    return res;
}

// console.log(sum(1,2,3,4,5,6)); //21

Function.prototype.myBind = function(context, ...bindArgs) {
    let that = this;
    return function(...callArgs) {
        return that.apply(context, [...bindArgs, ...callArgs]);
    }
}

function curriedSum(numArgs) {
    let args = [];
    return function _innerFunc(num) {
        args.push(num);
        if (args.length === numArgs) {
            let sum = 0;
            args.forEach((el) => {
                sum += el;
            })
            return sum;
        } else {
            return _innerFunc;
        }
    }
}

// console.log(curriedSum(3)(10)(11)(12)); //33

Function.prototype.myCurry = function(numArgs) {
    let args = [];
    let func = this;
    return function _innerFunc(num) {
        args.push(num);
        if (args.length === numArgs) {
            return func.apply(func, args);
        } else {
            return _innerFunc;
        }
    }
}