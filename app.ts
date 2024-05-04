///Declaring Int
let price: number
price: 500

//Decalring String
let apple: String
apple = "iPhone 15 Pro Max"

// Declaring Booleans
let isPink: boolean
isPink=true

// Decalring Arrays
let numbersArray: number[]
numbersArray = [1,2,3,4,6]


//Decalring Objects
let userObject:{
    name: string,
    age: number,
    isAdmin ?: boolean,
    phoneNumber: string
}

userObject ={
    name : "Ayush Desai",
    age : 21,
    isAdmin : true,
    phoneNumber: "+919099162356"
}

userObject ={
    name : "Ayush Desai",
    age : 21,
    phoneNumber: "+919099162356"
} // Doesn't throw error cayse isAdmin is denoted as option in the ObjectType

// Any Type, can accept value of anytype, only use it when not sure what type might be given in input

let testAny: any;

testAny: 12
testAny: "Hello World"


//Functions
let sayHello = ()=>{
    console.log("Hello from Typescript")
}
//These two functions are the exact same thing, if you do not mention what the function is returning then TypeScript figures that out automatically.
let numMultiple = (num: number)=>{
    return num*2;
}

let numMultiple2 = (num: number): number =>{
    return num*2;
}

let numMultiple3 = (num:number): void =>{
    //return num*2; Can't do that because we stated this function WILL NOT reutrn anything.
    //So perform an operation but do not return something.
}

// Two parameter Function

let sumMultiple = (num1:number, num2:number, another?:number)=>{
    // return num1+num2+another; //Wrong Way
    if(another){
        return num1+num2+another
    }
    else{
        return num1+num2
    }
}

//Now if you are desrcibing numerous objects in a function as Parameter then you might have aesthetic issues and that's is where TYPE ALIASES comes in.

//TYPE ALIAS, just create a sepreate type and then use it in a function

type userType={
    name:String,
    age: number,
    isAdmin: boolean,
    phoneNumber?: String
}

let betterFunction = (user:userType)=>{
    console.log(user.isAdmin)
}


//Function Prototype using TYPE ALIASES
type UserType2 = {
    username: string,
    age: number,
    phone ?: string,
    theme: "light" | "dark"
}

const userWithTheme : UserType2 = {
    username: "ayush",
    age: 21,
    phone: "+91 9099162356",
    theme: "dark"
}


//INTERFACES

interface IUser{
    username: String,
    email: String,
    age: number
}

interface IEmployee extends IUser{
    employeeId: String,
}

const employee: IEmployee = {
    employeeId: "123ABC",
    username: "ayush",
    email: "ayush@apple.com",
    age: 12
}

const user: IUser = {
    username: "emma",
    email: "emma@example.com",
    age: 21
}