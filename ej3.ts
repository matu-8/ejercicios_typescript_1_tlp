// ejercicio 3 herencia
// Modelá:
//Clase base Empleado con nombre (protected), antiguedad en años (protected, cantidad de años trabajados) y calcularSueldo() que devuelve 0 (la clase base no sabe calcular sueldos reales, cada subclase decide cómo).
//Un método describir(): string en Empleado que devuelva algo como "Juan (3 años) — sueldo: $...", usando this.calcularSueldo() — este método no se reescribe en las subclases,
// ya funciona para cualquier tipo de empleado gracias al polimorfismo de calcularSueldo().
//EmpleadoFijo extends Empleado, agrega sueldoBase y sobreescribe calcularSueldo(): devuelve sueldoBase, más un bono por antigüedad de un 2% del sueldoBase por cada año trabajado.

class Empleado {
    protected nombre: string;
    protected antiguedad: number;

    constructor(nombre:string, antiguedad: number){
        this.nombre = nombre;
        this.antiguedad = antiguedad;

    }
    calcularSueldo(): number{
        return 0;
    }
    describir(): string{
        return `empleado: ${this.nombre} -- ${this.antiguedad} Años`
    }
}
class EmpleadoFijo extends Empleado {
    sueldoBase: number;

    constructor(nombre:string, antiguedad: number, sueldoBase: number){
        super(nombre, antiguedad)
        this.sueldoBase = sueldoBase;

    }
    calcularSueldo(){
        return this.sueldoBase + (this.antiguedad * (this.sueldoBase * 2/100))
    } 
}
const empleadoDePlanta = new EmpleadoFijo('Matias', 5, 10000);
console.log(empleadoDePlanta.describir())
console.log(`Sueldo total mas bonificacion por antigüedad:${empleadoDePlanta.calcularSueldo()}`)