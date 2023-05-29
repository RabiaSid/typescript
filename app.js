// let num1  = 1;
// function calculate(num1: number, num2: number){
//     return num1 + num2
// }
// console.log(calculate(num1,2))
// function (numbers: Array<number>) {
//     return numbers.reduce((acc , item) => {
//         return acc + item;
//     }, 0);
// }
// console.log(Total([3,2,1]));
// const User = {
//     firstName : 'john',
//     lastname:'Doe',
//     role: 'professor'
// }
// console.log(User.firstName)
//Type arias
// type User = {
//     name: string,
//     age: number,
//     address?: string
// }
// if we add 'void' that mean we do not have any return in func
// function login(userData: User): void{
//     return 
// }))
// const user : User = {
//     name:'Rabia',
//     age:23,
//     // address: 'njsackjsh'
// }
// function login(userData: User): User{
//     return userData;
// }
// console.log(login(user))
// type ID = number | string;
// const UserId: ID = 123;
//InterFaces 
// interface Trasaction {
//     payerAccountNumber: number;
//     payeeAccountNumber: number;
// }
// interface BankAccount {
//     accountNUmber : number;
//     accountHolder: string;
//     balance: number;
//     inActive: boolean;
//     transaction: Trasaction[]
// } 
// const transaction1: Trasaction ={
//     payerAccountNumber: 123,
//     payeeAccountNumber: 321
// }
// const transaction2: Trasaction ={
//     payerAccountNumber: 12345,
//     payeeAccountNumber: 54321
// }
// const bankAccount :BankAccount = {
//     accountNUmber : 123,
//     accountHolder: 'john doe',
//     balance: 4000,
//     inActive: true,
//     transaction: [transaction1,transaction2]
// }
// interface Book{
//     name: string;
//     price: number;
// }
// interface Ebook extends Book{
//     fileSize: number;
//     format: string;
// }
// interface AudioBook extends Ebook{
//     duration: number;
// }
// const book: AudioBook = {
//     name:'atomic habits',
//     price: 25 ,
//     fileSize: 2,
//     format:'mnkj',
//     duration:22
// }
// interface  Book {
//     name: string;
//     price: number;
// }
// interface  Book {
//     size: number;
// }
// const book : Book ={
//     name:'atomic habits',
//     price: 25 ,
//     size: 2,
// }
//union
//   
function getFirstThree(x) {
    return x.slice(0.3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));
