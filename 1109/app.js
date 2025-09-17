// arreglo vacio
let productos = [];

// funcion para agregar un nombre al arreglo
function agregarProducto(){

    let producto = prompt("Ingresa el producto: ");
    
    if(producto){
        productos.push(producto);
        alert(` El Producto: ${producto} - fue agregado exitosamente!`);    
            
    }else{
        alert(`El producto esta vacio.`);
    }
}

function mostrarProductos(){

    if( productos.length === 0 ){

        alert(`No hay productos almacenados`);

    }else{

        let mensaje = "Productos Almacenados: \n";
        
        productos.forEach((producto, index)=>{
            mensaje += `${index + 1}.  ${producto}\n`;
        });
        alert(mensaje);
    }
}

function mostrarMenu(){
    let option;

    do{
        option=prompt(`
            Opciones disponibles:
            1.- Agregar Producto
            2.- Mostrar Productos
            3.- Salir
            "Elige una opcion"
            `);

            switch(option){
                case '1':
                    agregarProducto();
                    break;
                
                case '2':
                    mostrarProductos();
                    break;

                case '3':
                    alert(`Saliendo del programa ....`);
                    break;
                default:
                    alert(`Opcion no valida. Intente de nuevo`);
            }
    }while(option !== '3');

}

//iniciar programa
mostrarMenu();