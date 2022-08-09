let compra, cantidad, Total1 , tareas  /// Declaro las principales variables  

class Producto {   // Creo la clase, para poder basarme en el armado de mis productos
    constructor(id,nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    //porcAumento = 1.x, siendo x el aumento
    aumentarPrecio(porcAumento) {
        this.precio *= porcAumento //this.precio = precio * porcAumento
    }
    //porcDisminucion = 0.x, siendo x el descuento
    disminuirPrecio(porcDisminucion) {
        this.precio *= porcDisminucion
    }

    aumentarStock(nuevoStock) {
        this.stock += nuevoStock //this.stock = this.stock + nuevoStock
    }

    disminuirStock(nuevoStock) {
        if((this.stock - nuevoStock) < 0) {
            console.log(`El producto ${this.nombre} no puede tener stock negativo`)
        } else {
            this.stock -= nuevoStock //this.stock = this.stock - nuevoStock
        }

    }

}



const producto1 = new Producto(12548, "Cafe_Con_Leche", "Le cafe", 120, 40)
const producto2 = new Producto(14856, "Cafe_Con_Chocolate", "Nescafe", 110, 40)
const producto3 = new Producto(78944, "Cafe_Expreso", "Nespresso", 99, 40)
const producto4 = new Producto(65327, "Tisana", "Marina", 61, 40)
const producto5 = new Producto(63215, "Chocolate_Semi_Amargo", "Le cafe", 600, 40)
const producto6 = new Producto(84951, "Cafe_Americano", "Le cafe", 156, 40)


function comprartodo(compra, cantidad, Total1, producto1, producto2, producto3, producto4, producto5, producto6 ){  //Creo un funcion, para poder ser utilizada mas abajo, y no escribir tanto codigo
    switch(compra) {
        case 1:
            
            console.log(`Usted Eligio ${producto1.nombre} ,tiene un precio de ${producto1.precio} pesos`)
                cantidad  = parseInt(prompt("Cuanto vas a comprar ?" )) 
                console.log (`Sera un total de ${cantidad*producto1.precio} Pesos`)
                Total1 = cantidad*producto1.precio
                console.log (Total1)
                producto1.disminuirStock (cantidad)
                console.log (`Queda ${producto1.stock} cajas en almacen`)
        break
        case 2:
            console.log(`Usted Eligio ${producto2.nombre} ,tiene un precio de ${producto2.precio} pesos`)
                cantidad  = parseInt(prompt("Cuanto vas a comprar ?" )) 
                console.log (`Sera un total de ${cantidad*producto2.precio} Pesos`)
                Total1 = cantidad*producto2.precio
                console.log (Total1)
                producto2.disminuirStock (cantidad)
                console.log (`Queda ${producto2.stock} cajas en almacen`)
        break
        case 3:
            console.log(`Usted Eligio ${producto3.nombre} ,tiene un precio de ${producto3.precio} pesos`)
                cantidad  = parseInt(prompt("Cuanto vas a comprar ?" )) 
                console.log (`Sera un total de ${cantidad*producto3.precio} Pesos`)
                Total1 = cantidad*producto3.precio
                console.log (Total1)
                producto3.disminuirStock (cantidad)
                console.log (`Queda ${producto3.stock} cajas en almacen`)        

        break
        case 4:
            console.log(`Usted Eligio ${producto4.nombre} ,tiene un precio de ${producto4.precio} pesos`)
                cantidad  = parseInt(prompt("Cuanto vas a comprar ?" )) 
                console.log (`Sera un total de ${cantidad*producto4.precio} Pesos`)
                Total1 = cantidad*producto4.precio
                console.log (Total1)
                producto4.disminuirStock (cantidad)
                console.log (`Queda ${producto4.stock} cajas en almacen`)      
        break

        case 5:
            console.log(`Usted Eligio ${producto5.nombre} ,tiene un precio de ${producto5.precio} pesos`)
                cantidad  = parseInt(prompt("Cuanto vas a comprar ?" )) 
                console.log (`Sera un total de ${cantidad*producto5.precio} Pesos`)
                Total1 = cantidad*producto5.precio
                console.log (Total1)
                producto5.disminuirStock (cantidad)
                console.log (`Queda ${producto5.stock} cajas en almacen`) 
        break
        case 6:
            console.log(`Usted Eligio ${producto6.nombre} ,tiene un precio de ${producto6.precio} pesos`)
                cantidad  = parseInt(prompt("Cuanto vas a comprar ?" )) 
                console.log (`Sera un total de ${cantidad*producto6.precio} Pesos`)
                Total1 = cantidad*producto6.precio
                console.log (Total1)
                producto6.disminuirStock (cantidad)
                console.log (`Queda ${producto6.stock} cajas en almacen`) 
        break
        default:
            alert("Articulo no existente")

    }
}


function CargarStock(stock, cantidad, producto1, producto2, producto3, producto4, producto5, producto6 ){  //Creo un funcion, para poder ser utilizada mas abajo, y no escribir tanto codigo
    switch(stock) {
        case 1:
            
            console.log(`Usted Eligio ${producto1.nombre} ,tiene un stock de ${producto1.stock} cajas` )
                cantidad  = parseInt(prompt("Cuanto Stock  vas a cargar ?" )) 
                producto1.aumentarStock (cantidad)
                console.log (`Tienes un total de  ${producto1.stock} cajas en almacen`)
        break
        case 2:
            console.log(`Usted Eligio ${producto2.nombre} ,tiene un stock de ${producto2.stock} cajas` )
                cantidad  = parseInt(prompt("Cuanto Stock  vas a cargar ?" )) 
                producto2.aumentarStock (cantidad)
                console.log (`Tienes un total de  ${producto2.stock} cajas en almacen`)
        break
        case 3:
            console.log(`Usted Eligio ${producto3.nombre} ,tiene un stock de ${producto3.stock} cajas` )
            cantidad  = parseInt(prompt("Cuanto Stock  vas a cargar ?" )) 
            producto3.aumentarStock (cantidad)
            console.log (`Tienes un total de  ${producto3.stock} cajas en almacen`)       

        break
        case 4:
            console.log(`Usted Eligio ${producto4.nombre} ,tiene un stock de ${producto4.stock} cajas` )
                cantidad  = parseInt(prompt("Cuanto Stock  vas a cargar ?" )) 
                producto4.aumentarStock (cantidad)
                console.log (`Tienes un total de  ${producto4.stock} cajas en almacen`)   
        break

        case 5:
            console.log(`Usted Eligio ${producto5.nombre} ,tiene un stock de ${producto5.stock} cajas` )
                cantidad  = parseInt(prompt("Cuanto Stock  vas a cargar ?" )) 
                producto5.aumentarStock (cantidad)
                console.log (`Tienes un total de  ${producto5.stock} cajas en almacen`)
        break
        case 6:
            console.log(`Usted Eligio ${producto6.nombre} ,tiene un stock de ${producto6.stock} cajas` )
                cantidad  = parseInt(prompt("Cuanto Stock  vas a cargar ?" )) 
                producto6.aumentarStock (cantidad)
                console.log (`Tienes un total de  ${producto6.stock} cajas en almacen`)
        break
        default:
            alert("Articulo no existente")

    }
}






alert("Hola, estas son las tareas: 1 Comparar Articulos, 2 Ingresar articulos , 3 Cargar Stock") 


tareas = parseInt(prompt("Que deseas hacer?") )

switch(tareas) {
    case 1:

    alert ("Articulos Existentes  1.- Cafe_Con_Leche, 2.- Cafe_Con_Chocolate, 3.- Cafe_Expreso, 4.- Tisana, 5.- Chocolate_Semi_Amargo, 6.- Cafe_Americano")

        let respuesta 

        do {

             compra = parseInt(prompt("Que Articulo vas a comprar?" )) 

             comprartodo(compra, cantidad, Total1, producto1, producto2, producto3, producto4, producto5, producto6 )
                    //console.log (Total1)
            do {
                respuesta = prompt("¿Desea seguir comprando?").toLowerCase()
            } while(respuesta != "si" && respuesta != "no")

        } while(respuesta != "no")

    break


    case 2:

        const cafes = [producto1, producto2, producto3, producto4, producto5, producto6]


        console.table(cafes)
        
        
        let respuestas 
        
        do {
        
            const cafe = new Producto(parseInt(prompt("Ingrese el codigo")), prompt("Ingrese el nombre"), prompt("Ingrese la marca"), parseInt(prompt("Ingrese el precio")), parseInt(prompt("Ingrese el stock")))
        
            cafes.push(cafe)
        
                do {
                     respuestas = prompt("¿Desea Ingresar mas Productos ?").toLowerCase()
                 } while(respuestas != "si" && respuestas != "no")
        
        } while(respuestas != "no")
        
        console.table(cafes)

        break
        case 3:

            alert ("Articulos Existentes  1.- Cafe_Con_Leche, 2.- Cafe_Con_Chocolate, 3.- Cafe_Expreso, 4.- Tisana, 5.- Chocolate_Semi_Amargo, 6.- Cafe_Americano")
        
                let respuest 
        
                do {
        
                    stock = parseInt(prompt("Que Articulo vas a cargar Stock?" )) 
        
                    CargarStock(stock, cantidad, producto1, producto2, producto3, producto4, producto5, producto6)

                            //console.log (Total1)
                    do {
                        respuest = prompt("¿Desea seguir Cargando Stock?").toLowerCase()
                    } while(respuest != "si" && respuest != "no")
        
                } while(respuest != "no")
        
            break
        default:
            alert("No Existe la tarea")


    }
