let array=["fruits",12345,true,"cars"]
console.log(array.toString())//joins element in array with , as divider

console.log(array.join(""))//joins all the elements from array to string

array.pop()//remove last element in an array
console.log(array)
array.push(1122)//add element at the end array
console.log(array)

array.shift()//remove the first element from array
console.log(array)

array.unshift("xyz")//add the new element to array at the beginning
console.log(array)

let boys=["akkhill","santosh"]
let girls=["xyx","abcd"]
let num=[123,987]
let both=boys.concat(girls,num)//join multiple array
console.log(both)
boys.splice(2, 0, "avinash" , "abhishek")//add or to remove the element from an array based on index value
console.log(boys,typeof boys)

girls.sort()
console.log(girls)//sort in alphabetical order

let x=[10,50,30,20,100]
x.sort(function(a,b){return a-b})//number sorting in ascending order
console.log(x)

let y=[50,60,100,10,80,70]
y.sort(function(a,b){return b-a})//number sorting in decending order
console.log(y)

//for loop
let a = [20,10,40,50,90]
for(let i=0; i<a.length; i++)
{
console.log(a[i])
}

//for of loop
for(let i of a)
{
    console.log(i)
}

//for in loop
for(let i in a)
{
    console.log(a[i])
}

var arr=["fruits",123,true,{car: "baleno"}]
array[1]=1122// to change the array value based on index
console.log(typeof arr[1],"testing",arr[1])
