var isDone = false;
var age = 25;
var userName = "Rakibul";
var numbers = [1, 2, 3, 4];
var tuple = ["Rakibul", 25];
var anything = "Could be anything";
console.log(isDone);
console.log(age, userName, numbers, tuple, anything);
console.log("boolean: ".concat(isDone, ", age:").concat(age, ", Username: ").concat(userName, ", numbers: ").concat(numbers, ", tuple:").concat(tuple, ", anything: ").concat(anything));
// union type
var userId;
userId = "101";
userId = 101;
userId = true;
console.log("UserId:".concat(userId));
function display(userId) {
    console.log(userId);
}
display("101");
display(101);
