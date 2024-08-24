  // js allows to change the value of the variable in the real time.
// it is an dynamic language. a ke andr koi aur type ka bhi va data dala ja skta h in real time 
let a = 67;
a = 32
console.log(a);
a = "anish";
console.log(a)
// a name of the varibale cannot be declared starting with a number 
// let 8anis = 99 // this will show the error
// reserved keywords in js cannot be use as the name of the  varibale 
// eg let var = " akns". var here is reserved.
// js is case senstive

// differnce between var and let
var b = 90;
{
    var b = "ANISH"
    console.log(b);
}
console.log(b);
// block k ansdr likhne se value dono jgh change ho gya.
let c = 90;
{
    let c = "ANISH"
    console.log(c);
}
console.log(c);
// in let the varibale  value that we declared in the block remains different than that outside

//const value cannot be change
// we have to assing a value into the const meaning const a; is incorrect const a = 99; is correct
