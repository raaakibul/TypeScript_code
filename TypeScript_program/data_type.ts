let isDone: boolean = false;
let age: number = 25;
let userName: string = "Rakibul";
let numbers: number[] = [1, 2, 3, 4];
let tuple: [string, number] = ["Rakibul", 25];
let anything: any = "Could be anything";

console.log(isDone);
console.log(age,userName,numbers,tuple,anything);

console.log(`boolean: ${isDone}, age:${age}, Username: ${userName}, numbers: ${numbers}, tuple:${tuple}, anything: ${anything}`);

// union type
let userId: string | number | boolean;
userId = "101";
userId = 101;
userId = true;
console.log(`UserId:${userId}`);

function display(userId:string|number){
    console.log(userId);
}
display("101");
display(101);