

// function greet(fname:string):void {
//  console.log(`Hello ${fname}`);
 
// }


// greet("Soumyendu");


// function sum(a: number,b:number):number{

//     return a+b;
// }

// const a:number = sum(9,2);

// console.log(a);




// function b(f: () => void): void {
//     setTimeout(f, 1000);
// }

// b(function a(): void {
//     console.log("I am a function that is showed after 1000ms");   
// });

// interface User {
//     age: number,
//     name: string,
//     email?: string,

// }

// function isLegal (user:User){
// console.log(user.age);

// }

// isLegal({
//     age:19,
//     name:"isbcb",
//     email:"siuuu@gmail.com"
// })


type Input = number | string;


function firstEl<T>(arr:T[]):T{
 return arr[0];
}

const val = firstEl(["sii","mendu"]);

console.log(val.toUpperCase()); // it should have figured it out it ki it is string 
                               // but it is of type Input
