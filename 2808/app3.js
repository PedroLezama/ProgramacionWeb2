//IF
//  if(condicion => false){
    
//  }else{
    
//  }

// let clave = prompt("Ingresa numero ")
// if(clave >= 10){
//     //clave => true
//     console.log("Numero mayor a 10");
    
// }else{
//     console.log("Numero menor a 10");
    
// }
// console.log("Continua Flujo");

// let port = 3008;
// if(port){
//     console.log("Definicion de puerto correcto");
    
// }else{
//     console.log("Error en puerto");
    
// }

let var1 = parseInt(prompt("Ingresa primer valor"));
let var2 = parseInt(prompt("Ingresa segundo valor"));
let var3 = parseInt(prompt("Ingresa tercer valor"));

if(var1 > var2 && var2 > var3){
    console.log("El numero "+var1+" es el mayor");
    
    console.log("El numero "+ var3 +" es el menor ");
    
}
if(var3 > var2 && var2 > var1){
     console.log("El numero "+var3+" es el mayor");
    console.log("El numero "+var1+" es el menor");
    
}

if(var1 == var2 && var1 != var3){
    console.log("El primer y segundo numero son iguales ");
    
}
if(var1 == var2 && var2 == var3){
    console.log("Todos los numeros son iguales");
    
}

