 /*Assignment - 01*/
/* function Greeting(firstName:string){
        console.log(`Hello ${firstName}`);
 }

 Greeting('Pradeep');
*/

 /*Assignment - 02*/

function sum(a:number,b:number) : number{
       return a+b;
}

console.log(sum(1,2));

/*Assignment - 03 */

console.log('Assignment - 03');

function isLegal(age:number){
      return (age>18);
}

console.log(isLegal(20));

/*Assignment - 04 */
console.log('Assignment - 04');

function calc(func : (...nums : number[])=> number,...nums : number[]) : number{
       return func(...nums);
}

function sum1(...nums : number[]) : number{
       return nums.reduce((acc,sum)=>acc+sum,0);
}

console.log(calc(sum1,1,2,3,4));

function delayedCall(func : ()=>void){
       setTimeout(func,2000);
}

delayedCall(()=>console.log('Hello there'));
