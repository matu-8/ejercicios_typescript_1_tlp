//abstraccion ejercicio 1

const enum categoria {
  ALMACEN = 'almacen',
  ELECTRONICA = 'electronica',
  LIMPIEZA = 'limpieza',
  HOGAR = 'hogar'
}

class Producto {
    nombre: String
    precio: number
    categoria: String
    stock: number
  constructor(nombre: string, precio: number, categoria: string, stock: number){
  this.nombre = nombre;
  this.precio = precio;
  this.categoria = categoria;
  this.stock = stock;
  }
  descrcibir(): String {
    return `Producto: ${this.nombre} (${this.categoria}): $${this.precio} - ${this.stock} unidades.`
  }
  
  hayStock(cantidad: number): boolean{
   let esNegativo:boolean = cantidad > 0 ? true : false
   if(esNegativo){
     console.log('Stock disponible')
    }  else {
     console.log('Faltante de stock, reponer')
   }
   return esNegativo;
  }
  venderUnidades(cantidad: number){
    //let aviso: string = this.hayStock(cantidad) ? 'Producto vendido' : 'No se ha realizado la venta'
    if(this.hayStock(cantidad)){
      let resta: number = cantidad - 1
      console.log('Producto vendido,', `stock restante: ${resta}`)
    } else {
      console.log('No se ha realizado la venta')
    }
  }
  aplicarDescuento(porcentaje: number): number{
    let numParaCalculo = porcentaje / 100;
    let descAplicado = this.precio * numParaCalculo;
    let precioFinal = this.precio - descAplicado; 
    return precioFinal;
  }
}

//instancio la clase 
let leche = new Producto('Leche', 1800, categoria.ALMACEN, 10)

console.log(leche.descrcibir())
console.log(leche.hayStock(leche.stock))
console.log(leche.venderUnidades(leche.stock))
console.log('Precio final con descuento: ', leche.aplicarDescuento(10))