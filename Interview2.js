console.log("hello")


//-----Splice method-------- 
// const arr = [1,2,3]
// let a = arr.splice(1,1) // it takes 2 arguments first one is starting index and second one is how many elements to remove
// console.log(a)  //'2' is at 1 index and we have choose 1 element to remove so output is 2

// const arr1 = [1,2,3,4,5]


// it can be used to add elements from removed element places
// let c = arr1.splice(0,2,12,34)
// console.log(c)
// console.log(arr1)

//------slice method-----
// it is used to take out some values as slice defines . It takes 2 arguments first one is starting index and second one is end index but it gives value from end index - 1 in output
// const array  = [1,2,3,4,5,6]
// let d = array.slice(1,3)
// console.log(d)

//----Reverse, Concat and Join methods-------
// const array = [10,34,54,89,70]
// console.log(array.reverse()) // used to reverse an array [70,89,54,34,10]
//console.log(array.join('_')) // 10_34_54_89_70 it add comma by default
// const array1 = [77,120]
//console.log(array.concat(array1)) //[10,34,54,89,70,77,120]
//console.log(array +" "+ array1) // it is not used to add/concat  2 arrays because it will convert them in strings

//------IndexOf-----
// const array = [10,34,54,89,70]
// console.log(array.indexOf(54)) // gives you the index of an element present in array if an element is not present in array so it returns [-1]




//--------JS-Objects-------------
//In JS objects are key-value pairs
// way to write an object 
// recommended 
//const person = new Object();
// shortHand used now-a-days
// const dog = {
//     name:"tommy",
//     age:4,
//     color:'black'
// }
// accessing an properties in an object
// there are two ways to access an property
//1.-----Dot notation----
//console.log(dog.name) // tommy
//console.log(dog.age) // 4
//2.----Bracket notation----
//console.log(dog["name"]) // tommy
//console.log(dog["color"]) // black

//---Deleting an property from an object--
// delete dog.color // it will delete color from dog object
// console.log(dog) // {name:'tommy', age: 4}


//-----Nested object and accessing property from nested object----
// const dog = {
//     name:"tommy",
//     age:4,
//     breed:{
//         breeds:'labra',
//         colors:'white'
//     }
// }
// console.log(dog.breed["breeds"]) // labra

//------------Object Methods---------
// const dog = {name:'gautam', age: 34};
// Object.keys(dog); //name, age
// Object.values(dog) // gautam , 34






//--------Math Functions in JS---------

// console.log(Math.abs(-3))  // 3 gives you the absolute value
// console.log(Math.floor(3.55)) // 3 floor will lower your value to the nearest integer
// console.log(Math.ceil(3.23))  // 4 round up your value to nearest integer // floor means floor of room means lower and ceil means roof means round up
// console.log(Math.round(3.45)) 
// console.log(Math.pow(2,4)) // 2^4 = 16
// console.log(Math.sqrt(9)) // sqaure root of 9 = 3
// console.log(Math.max(10,34,5,65)) // gives maximum value 
// console.log(Math.min(10,3,454,2,4)) // minimum value 
 //console.log(Math.random()) // gives random number between 0 and 1


//-----------For Loop---
//for(intiailiser; Condition; increment){
// -----------code--------------
//}
//example 
// for(let i=0;i<10;i++){
//     console.log(i)  // 0,1,2,3,4,5,,7,8,9
// }

//----------For-Of-Loop-------
// const array = [1,2,3,4,5]
// for(let i of array){
//     console.log(i)   //1,2,3,4,5
// }



//-------------FORloop v/s For-Of-LOOP---------------
//1. for loop is difficult to write as sometimes you can put wrong values in condition or wrong increment but in for-of-loop is easy
//2. for loop have higher chances of error as discussed above .But for-of-loop have low chances.


//---------------While Loop--------

//var i =0;  //Initailiser
//while(i<10){  // condition
    //console.log(i)   //0,1,2,3,4,5,6,7,8,9.
  //  i++; // increment
//}

//-------------Shallow copy----------------
// Object.assign is used to copy one object properties into another object . it takes 2 arguments
// Object.assign(targetObject, assignObject)
// var person = {name:'abhishek', age:34}
// var another = {phone:90898};
// // copied person object properties in another object
// var a = Object.assign(another,person)
// console.log(a) //{phone: 90898, name: 'abhishek', age: 34 }
// // added a new property to 'another'
// another.address ="LA"
// console.log(a) //phone: 90898, name: 'abhishek', age: 34, address: 'LA'
// // added property will be reflected in another object not in person it is the process of shallow copy
// console.log(person) //{ name: 'abhishek', age: 34 }

// console.log(another) // { phone: 90898, name: 'abhishek', age: 34, address: 'LA' }


//---------------Deep Copy----------------
//Used to copy properties from nested object
// suppose if we want to change some property from person[target object] so it will also change in source object that's why we do deep copy



// var person = {name:'abhi',age:23, city:{name:"mumbai",street:'10'}}
// var p1 = person;
// var p2 = Object.assign({},person);
// console.log(p2.city.name) //mumbai
// var p3 = JSON.stringify(person)
// p3 = JSON.parse(p3)
// p3.city.name ="delhi"
// console.log(p3) //{ name: 'abhi', age: 23, city: { name: 'delhi', street: '10' } }


//-----------------LOCAL-STORAGE-----------
//There are few methods in local storage
//1. setItem ---> localstorage.setItem('name':'coder')

//2.getItem --->const p = localstorage.getItem('name');
// console.log(p) // 'coder'


//3. RemoveItem used to remove method from localstorage


//--------------Session-storage------------
// It is similar to local storage only difference is it saves data for a session only means if you reopen the window of your browser after using it once then it will be cleared from it.































