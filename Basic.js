let arr = [1,'zaid',4];
arr.push('abcd');//can push elements at the end 
let a = arr.pop();//removes the last element from array and returns the element

let b = arr.shift();//removes first element from array and returns the element
arr.unshift('abcd');//adds the element at the start of the arary

let obj={
    //key value pairs
    'key': 'Value',
    'k e y': 'value'

} 

obj.key;//to access the value in object
obj['k e y'];//to access value in object. this method when there are spaces in key
delete obj.key;// deleting property

let obj1 = {
    'obj2': {
        //key value pairs,
    },
    'arrr' : [1,2,3,4,5],
}
let c= obj1.obj2.key;//accessing nested objects
let d = obj1.arrr[0];//accessing array elements in object


let arr1 = [
    {
        //key value pairs
    },

    {
        //key value pairs
        'list' : [1,2,3,4],
    }
]
let e = arr1[1].list[3];//accessing objects in arrays


Math.random();//gives random number b/w 0&1
Math.floor(Math.random() * 10);//floor- rounds DOWN to nearest whole number. 


//var vs let vs const
//1. let and const do not let us declare a variable twice
//2. a variable declared with const cannot be changed. in an array we can change element using index
//3. var variables are either global or function variables. 
//4. let and const variables are block scoped { }

Object.freeze(object_name);// we cannot make changes in the object

//Rest operator
const sum = (function(){
    return function sum(...args){// '...' is a rest operator used to take variable arguements, converts arguements into an array
        return args.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,2,3,4));

//Spread operator
const array1 = ['jan','feb'];
let array2;
(function(){
    array2=[...array1];//spread operator makes a copy of array1 and stores in array2
    array1[0]='may';//this womt affect array2;
})();


//Destructuring assignment for objects
let f={
    x:3.6,
    y:4,
    z:5
};
let {x:g,y:h,z:i}=f;//assigning x,y,z values from f object to g,h,i variables 

//destructuring nested objects
const local_forecast = {
    today : { min: 72, max: 83 },
    tomorrow : { min: 73, max:84}
};
function getMaxOfTmrw(forecast){
    const { tomorrow :  { max: maxOfTmrw}} = forecast;//assigning max temp of tomorrow from localforecast to maxoftmrw variable
    return maxOfTmrw;
}

//destructuring from arrays
let [j,k, ,l]=[1,2,3,4,5,6,7];// assigning j,k,l to 1,2,4. they are assigned in order. to skip 3 we add extra ','.

//destructuring from array using rest operator.
const source = [1,2,3,4,5,6,7,8];
const [ , , ...array3] = source;// we assign all the elements of source to array3 leavng out first two elements.

//passing arguements using destructuring 
let m={
    x:3.6,
    y:4,
    z:5,
    a:7,
    b:8,
    c:9
};
function half({x,a}){//taking only two properties of 'm' object instead of passing the whole object
    return x+a;
}
half(m);//takes only x and a from 'm' object;

//template literals
let n= `klfadbvhbdf ${m.x}`;