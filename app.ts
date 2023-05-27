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

interface Trasaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNUmber : number;
    accountHolder: string;
    balance: number;
    inActive: boolean;
    transaction: Trasaction[]
} 

const bankAccount ={
    accountNumber:
}