"use strict";
// function greet(fname:string):void {
//  console.log(`Hello ${fname}`);
// }
// greet("Soumyendu");
// function sum(a: number,b:number):number{
//     return a+b;
// }
// const a:number = sum(9,2);
// console.log(a);


function b(f) {
    setTimeout(f, 1000);
}
b(function a() {
    console.log("I am a function that is showed after 1000ms");
});
