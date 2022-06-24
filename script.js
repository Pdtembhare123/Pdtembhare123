// var keyword Global Scope
var course= "Salesforce";
console.log(course)
course="The Salesforce King Prashant";
console.log(course)

function abc(){
var anotherCourse="Hero to Hero in Lwc";
console.log(anotherCourse)
}
abc()

//console.log(anotherCourse)

// var block scope
if(2===2){
var abc=10
console.log(abc)
}

console.log(abc)

// Let keyword does not support Global Scope 
let test="This is Let Keyword in Js"
console.log(test)
test="This is Let Keyword its uses max in our js instead of var"
console.log(test)
// we cant re  declared let keyword 
let test="Test unsuccessfull"
console.log(test)

if(2==2){

let xyz="Please Check the scope in Block"
console.log(xyz)
}
// trying to call outside the Block but we cant access the keyword outside the block 
//console.log(xyz)

//Const keyword cant be updated and also cant be re declared

const tata1="Test const Keyword"
console.log(tata1)

var abc=[];
console.log(typeof abc)

var abc="This Is Prashant";
console.log(typeof abc)


//Equality Comaparision
//Normal Comaparision (==) || only compare values
console.log(3=="3")
console.log("Prashant" == "Prashant")
console.log("Prashant" == "prashant")

// Strict comparision (===) || Only compare  data types
console.log(3=="3")
console.log(3===3) 

//undefined 
var x
console.log(x)
//null
var y=null
console.log(y)
console.log(x==y)

                           //Spread Operator

// array in Js 

var a=["Prashant","tembhare","Dongargaon"]
console.log(a)
console.log(a[0])
console.log(a[1])

//obj in js 

var obj={
"Fname": "Prashant",
"Lname": "Tembhare",
"Age": "29",
"Company Name":"Salesforce Developer"
}
obj.Hobies="Cricket"
console.log(obj)
console.log(obj.Fname)
console.log(obj.Lname)
console.log(obj.Age)
console.log(obj["Company Name"])
//console.log(obj.Company Name)
//console.log(obj.Age)

//1. Expanding of Array

let gretting="Salesforce Developer"
console.log(gretting)
let CharList=[...gretting]
console.log(CharList)

//Combinig Array 
let companies1=["Amazon","Meta","Instagram"]
let companies2=["WhatsApp","Google"]
let companies3=[companies1 +" "+companies2]
console.log(companies3)
// instead of concatinates we can use Spread operators
console.log(...companies1,...companies2)

// adding values to an array
let w=["P","T"]

console.log(w)
let z=[...w ,"Salesforce" ]
console.log(z)

//combining objects
let obj12={name: "Prashant", Age: 27, date: "12/05/1993"}
console.log(obj12)
let obj13={name:"Tembhare", age:29 , "next":"Hello"}
let obje14={...obj12,...obj13}
console.log(obje14)

// Shallow Copy its works on One Level 
// we cant be use Push method in it bcz if We push the element the c also update and also d update
let c=["Test","Test1","Test2"]
console.log(c)
let d=[...c,"Test3"]
console.log(d)

// Nested Copy

var arrObj1=[
{name:"Prashant"},
{name:"Salesforce"}
]
//var arrObj2=[...arrObj1]
//console.log(arrObj2)
//arrObj2[0].name="Sr.Prashant"
//console.log(arrObj2)
//console.log(arrObj1)


// hack for nested copy
var arrObj2=JSON.parse(JSON.stringify(arrObj1))
console.log(arrObj2)
arrObj2[0].name="Shubham"
console.log(arrObj2)


// Destructuring  also we say Extract Data
// Array Destructuring

let arr=["Amazon","Google"]

let [comp1,comp2]=arr
console.log(comp1)
console.log(comp2)

// Object Destructuring

let options={
title:"Salesforce",
date:"27/05/2022",
Type:"CRM"
}
let {title,date,Type}=options
console.log(title)
console.log(date)
console.log(Type)


// String Interpolation
//using back-ticks
//in realTime we maximum time use Back-ticks

var name ="Salesforce Developer";

console.log(`Hello, ${name}`);

var a=10;
var b=20;
console.log(`the sum of ${a} and ${b} is ${a+b}`)

var AccountId="1234Aaa4a39AAf";
console.log(`https://prashant1993-dev-ed.lightning.force.com/lightning/o/Task/home ${AccountId}`)


//String Methods in Js 

// 1)include() method
// its return a true or false if 
// string contains  the charactors of a specified String 

let str="This is Salesforce World Where you can make your career";

let str1=str.includes("is")
console.log(str1)


// 2) indexOf()
// its extract the the index of a String 
//Charactors where present in String

let str2=str.indexOf("Salesforce")
console.log(str2)

// 3) startWith()
//its check the Starting charactors in String and returns true or False

console.log(str.startsWith("This"))

// 4)Slice()
// Check the index numbers of charactors and slicing all 
// charactors between index number

let str4="Test TEABDIS ID  correct"
let str5=str4.slice(0,10)
console.log(str5)

// 5)toLowerCase() & toUpperCase()

console.log(str4.toLowerCase())
console.log(str4.toUpperCase())

// 6) trim()
// remove whiteSpaces in String

let str6="    Test Salesforce Data Check    "
console.log(str6.trim())
console.log(str6)


// JSON/Object Operations

// Object.key()
// returns objects key form of Array 

let object11={
name:"Prashant",
age:29,
company:"Infofeat Tech"
}
console.log(Object.keys(object11))

// Object.values()
//returns objects values form of Array
console.log(Object.values(object11))

// JSON.Stringify()
// returns String  format from given objects
let objedt= JSON.stringify(object11)
console.log(objedt)

// JSON.Parse()
// Its return object all key and values 
console.log(JSON.parse(objedt))


// Arrays Method 

// 1) map()
// array.methodName(function(currentItem,index, actualArray) 

var array1=[10,5,55,2,12]

let newArray=array1.map(function(currentItem,index,array){
console.log(`The CurrentItem is ${currentItem} index is ${index} array is ${array}`);
return currentItem *2
})
console.log(newArray)

// 2) filter()
let newArray1=array1.filter(function(currentItem,index,array){

   return currentItem >10


})
console.log(newArray1)

// 3) every()

let checkList=[10,18,4,25]

let checkAgeList= checkList.every(function(currentItem){

   return currentItem >=4
})
console.log(checkAgeList)

// 4) some()
let varg=[10,20,30,40,50]

let varga=varg.some(function(currentItem){

       return currentItem >60

})
console.log(varga)

// sort()

let great=[10,25,75,30]

console.log(great.sort())

// sorting number

let greates=great.sort(function(a,b){

   return b-a
})
console.log(greates)

//reduce()

//array.reduce(function(total,currentItem,index,array){
    
//},initialValue)
 let num=[12,78,30]

 let sum=num.reduce(function(total,currentItem){

   return total+currentItem
 })
 console.log(sum)

let varsyudg=num.forEach(function(currentItem) {
     console.log(currentItem)
 })

 console.log(varsyudg)