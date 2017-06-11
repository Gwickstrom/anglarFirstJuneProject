//Interfaces allow us to create objects with multiple types, and test against them when checking the type, for example:

//Not using an Interface
function printName(use: {name: string}): void{
    console.log(user.name);
    return;
}
//Using an Interface
interface UserInterface {
    name: string
    cellNumber?: number;
}
function printName(user: UserInterface): void{
    console.log(user.name);
    return;
}
//Bonus - Optionals
//We can also make types as optional, meaning, the properties could exist on the object, or not, and still be valid.
<!--
interface Userinterface {
    name: string
    cellNumber?: number;
}
function printName(user: UserInterface): void{
    console.log(user.name);
    if(user.cellNumber){ console.log(user.cellNumber)}
    return;
}
-->
