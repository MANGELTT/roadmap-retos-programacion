// Aritmeticos
console.log("7 x 3 = " + 7 * 3);
console.log(7 + 5);
console.log(7%9);

//Logicos
let A = 8;
let B = 10;

if (!(A > B)){
    console.log("Factos");
}
else{
    console.log("No Factos");
} 

console.log(B>A | B<A ? "Joto" : "Guapo");

console.log(B>A & B<A ? "Joto" : "Guapo");


//Identidad
console.log(5 === 5);
console.log(5 === '5');
console.log(5 !== 5); 
console.log(5 !== '5');
console.log(5 == 5);
console.log(5 == '5'); 
console.log(5 != 5);
console.log(5 != '6'); 


for (let i = 0; i < 5; i++){
    console.log("Hola cliente " + i);
}

console.log(~6);