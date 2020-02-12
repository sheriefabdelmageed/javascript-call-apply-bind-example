const obj1 = { num: 5 };
const obj2 = { num: 5 };
const obj3 = { num: 5 };


const addNums = function (a, b, c) {
    return this.num + a + b + c;
}

let arr = [2, 3, 4];
console.log(addNums.call(obj1, ...arr)); // funcName.call(obj, funcParams)
console.log(addNums.apply(obj2, arr)); // funcName.apply(obj, [funcParams])
console.log(addNums.bind(obj3, arr)); // funcName.bind(obj, [funcParams]) >> return the function itself

//to execute bind
let bindObj = addNums.bind(obj3);
console.log(bindObj(...arr)); // bindObj(...arr) = bindObj(1,2,3) 
