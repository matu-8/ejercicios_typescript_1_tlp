// ejecricio 2 - encapsulamiento
//Modelá una clase CuentaBancaria:

    //titular (nombre del dueño de la cuenta), fijo desde que se crea.
    //saldo como private, arranca en el monto inicial que se le pase por constructor (no siempre 0).
    //Un historial de movimientos privado (arreglo interno) que registre cada depósito y retiro 
    // (podés guardar strings tipo "depósito: +2000" o un objeto con tipo y monto — elegí vos la forma, pero tiene que quedar fuera del alcance de quien usa la clase).
    //depositar(monto): rechaza (lanzá un Error) montos menores o iguales a 0 además de sumar al saldo.
    //retirar(monto): rechaza si el monto pedido supera el saldo disponible, y también si el monto es menor o igual a 0.
    //consultarSaldo(): number que devuelva el saldo actual.
    //obtenerHistorial(): string[] (o el tipo que hayas elegido) que devuelva el historial — pero sin exponer el arreglo interno real (si quien llama modifica lo que le devolviste, el historial de la cuenta no se tiene que alterar).
//Nadie de afuera puede tocar saldo ni el historial directamente, solo a través de esos métodos.

class CuentaBancaria {
    titular: string;
    private saldo: number;
    private historial : string[];

    constructor(titular: string, saldo: number, historial: string[]){
        this.titular = titular;
        this.saldo = saldo;
        this.historial = historial;
    }
    // Metodos
    depositar(monto: number){
        if(monto <= 0){
            throw new Error('No se ha realizado el depósito')
        }
        this.saldo += monto;
        this.historial.push(`Deposito: +$${monto}`)
        return `Se recibio ${monto}, el monto actual es ${this.saldo}`
    }
    retirar(monto: number){
        if(monto > this.saldo || monto < 0){
            throw new Error('El monto a retirar supera el saldo actual')
        }
        this.saldo -= monto
        this.historial.push(`Retiro: -$${monto}`)
        return `Se retiró el dinero de tu cuenta: $${monto}`    
    }
    consultarSaldo(): number{
        return this.saldo
    }
    obtenerHistorial(): string[]{
        return this.historial;
    }
}
const cuentaMatias = new CuentaBancaria("Matias", 30000, ['Se recibió: +30000'])

console.log(cuentaMatias.depositar(2000));
console.log(cuentaMatias.retirar(2000));
console.log(`Tu saldo actual es: ${cuentaMatias.consultarSaldo()}`)
console.log(`Historial de movimientos de la cuenta: ${cuentaMatias.obtenerHistorial()}`)