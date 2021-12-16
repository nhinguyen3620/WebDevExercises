// var day = prompt("Enter a day: ").toLowerCase();

// if (day === "monday") {
//     console.log("This is Monday")
// }


/*
array methods:
+ push(): add to the end
+ pop(): return and remove the end
+ shift(): return and remove the start
+ unshift(): add to the start
+ concat(): merge 2 or more arrays, does not change existing array, instead return a new array 
+ include(): check if the array includes a given element, return boolean value
+ indexOf(): return the 1st index at which a given elelemt appears, or -1 if not present 
+ reverse(): reverse an array in place (modify the original array)
+ slice(start, end): return a portion of an arr from [start, end). start and end are optional. (not modify original arr)
+ splice (start, deleteCount, item)
+ sort(): sort arr in place (not reliable)
*/
// let arr = [1, 2, 3]
// arr.push(4);    //[1, 2, 3, 4]
// arr.pop();      //[1, 2, 3]
// let a = arr.pop(); //a = 3, arr = [1, 2]
// arr.unshift(0); //[0, 1, 2]
// arr.shift();    //[1, 2]
// let b = arr.shift() //b = 1, arr = [2]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3)

// let arr1 = [1, 2, 3];
// //arr1.reverse();
// arr2 = arr1.reverse(); 
// console.log(arr1);

// let arr = [1, 2, 3, 4, 5]
// let arr1 = arr.slice(1); //[2, 3, 4, 5]
// let arr2 = arr.slice(3, 5); //[4, 5]
// let arr3 = arr.slice(3, 8); //[4, 5]
// let arr4 = arr.slice(-3); //[3, 4, 5] get the last 3
// console.log(arr4); 

// let arr = [0, 1, 2, 3, 4, 5];
// arr.splice(3, 1); // [0, 1, 2, 4, 5] delete 3
// arr.splice(3, 2); // [0, 1, 2] delete 4, 5
// console.log(arr);

// let ar = [0, 2, 3, 4, 5]
// ar.splice(1, 0, 1); //insert 1 into index 1
// console.log(ar);

// let arr1 = [0, 3, 4, 5]
// arr1.splice(1, 0, 1, 2) //insert 1, 2 from index 1
// console.log(arr1);

// let arr = [0, 1, 14, 15, 2, 2500, 3]
// arr.sort(); //[0, 1, 14, 15, 2, 2500, 3] -> not reliable
// console.log(arr);

// const obj = {
//     name: "Jack",
//     age: 21,
//     colors: ["red", "blue", "pink"]
// };

//access obj: obj["age"] or obj.age

///////////////////
//loop over array//
///////////////////
// let arr = [1, 2, 3, 4];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let num of arr) {
//     console.log(num);
// }

// let string = "this is a string!";
// for (let char of string) {
//     console.log(char);
// }

///////////////////
//loop over object//
///////////////////
// const obj = {
//     a: 64,
//     b: 65,
//     c: 66
// }
// for (let key in obj) {
//     console.log(`${key} has value ${obj[key]}`);
// }

// //iterate thru keys
// for (let key of Object.keys(obj)) {
//     console.log(key);
// }

// //iterate thru values
// for (let val of Object.values(obj)) {
//     console.log(val);
// }

////////////////////
/* forEach method */
////////////////////
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// num.forEach(function (element) {
//     if (element % 2 === 0) 
//         console.log(element);
// });

////////////////////
/* map method: create a new array */
////////////////////
// let arr = num.map(function (element) {
//     return element * 2;
// })
//same as
// let arr = num.map((element) => {
//     return element * 2;
// })
//arr = [2,4,6,8,10,12,14,16,18]

////////////////////
/* arrow function */
////////////////////
// const add = function (x, y) {
//     return x + y;
// }
// //is the same as
// const add = (x, y) => {
//     return x + y;
// }
// //arrow function implicit return, only works when having only 1 expression
// const add = (x, y) => (
//     x + y
// );


////////////////////
/* filter: create new array with all elements passing the test in the function*/
////////////////////
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const odd = num.filter(n => {
//     return n % 2 === 1;
// })
// console.log(odd);


////////////////////
/* setTimeout: delay execution, 2 args(callback, # of ms) */
////////////////////
// setTimeout(() => {
//     console.log("hello");
// }, 3000)

////////////////////
/* setInterval: repeat execution every .. ms, 2 args(callback, # of ms) */
////////////////////
// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000);
// clearInterval(id);

////////////////////
/* every: return true if every element passes*/
////////////////////
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const check = num.every(num => num < 10); //check is true
// const check = num.every(num => num < 9); //check is false

////////////////////
/* some: return true if at least 1 element passes */
////////////////////
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const check = num.some(num => num === 9); //check is true

////////////////////
/* spread in function call */
////////////////////
// let num = [3, 2, 1, 4];
// const minNum = Math.min(...num); //same as Math.min(3,2,1,4)

// console.log(..."hello"); //h e l l o, same as console.log('h','e','l','l','o')

////////////////////
/* spread with array literals */
////////////////////
// let x = [1, 2, 3];
// let y = [4, 5, 6];
// let arr = [...x, ...y, 7]; //[1,2,3,4,5,6,7]
// let stringArr = [..."hello"] //['h','e','l','l','o']

////////////////////
/* spread with objects */
////////////////////
// const obj1 = {
//     a: 4,
//     b: 9
// }
// const obj2 = {
//     g: 2,
//     b: 5
// }
// const obj = { ...obj1, ...obj2, d:0 }; //when there is conflict, order matters, the latter takes precedence
// //obj = {a: 4, b: 5, g: 2, d:0}

////////////////////
/* rest params: collects all remaining args into an actual array */
////////////////////
// function sum(...nums) { //nums is now an array
//     return nums.reduce((total, element) => {
//         return total + element;
//     })
// }
// sum(3, 5, 2);

////////////////////
/* destructure arrays: unpack values from array */
////////////////////
// let num = [1, 2, 3, 4, 5, 6];
// const [first, second, ...everythingelse] = num; //first = 1, second = 2, everythingelse = [3,4,5,6]

////////////////////
/* destructure objects */
////////////////////
const obj = {
    name: 'a',
    email: 'b',
    born: 1999
}

const { name: myname, email: myemail, born: birthyear } = obj; //myname: 'a', myemail: 'b', birthyear: 1999
const { name, email, born} = obj; //name: 'a', email: 'b', born: 1999
//give a default value 
const { name, die = "N/A"} = obj;