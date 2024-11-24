"use strict";
/*Assignment - 01*/
/* function Greeting(firstName:string){
        console.log(`Hello ${firstName}`);
 }

 Greeting('Pradeep');
*/
/*Assignment - 02*/
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
/*Assignment - 03 */
console.log('Assignment - 03');
function isLegal(age) {
    return (age > 18);
}
console.log(isLegal(20));
/*Assignment - 04 */
console.log('Assignment - 04');
function calc(func, ...nums) {
    return func(...nums);
}
function sum1(...nums) {
    return nums.reduce((acc, sum) => acc + sum, 0);
}
console.log(calc(sum1, 1, 2, 3, 4));
function delayedCall(func) {
    setTimeout(func, 2000);
    if (func.length != 0)
        return 5;
    return;
}
delayedCall(() => console.log('Hello there'));
/*Assignment - 05*/
console.log('Assignment - 05');
;
function isLegal_UserType(user) {
    return user.age > 18;
}
let user = {
    username: "Pradeep",
    age: 23,
    address: "test"
};
console.log(isLegal_UserType(user));
