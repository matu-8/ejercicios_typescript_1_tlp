//Sobre la jerarquía del ejercicio 3, agregá:
//
//    EmpleadoPorHoras extends Empleado con horasTrabajadas y valorHora, y su propia versión de calcularSueldo() (horas × valor hora, sin bono por antigüedad).
//    EmpleadoPorComision extends Empleado con ventasDelMes y porcentajeComision, y su propia versión de calcularSueldo() (ventas × porcentaje).
//
//Armá un arreglo Empleado[] con varias instancias mezclando las tres subclases (EmpleadoFijo, EmpleadoPorHoras, EmpleadoPorComision) y recorrelo con un for,
// llamando calcularSueldo() en cada una sin preguntar de qué tipo es cada empleado.
//
//Sumá también una función (no un método de clase) calcularNomina(empleados: Empleado[]): number que devuelva el total a pagar sumando el calcularSueldo() de todos.

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
//No se usa por haberse utilizado en el ejercicio  anterior (ejercicio 3)
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

class EmpleadoPorHoras extends Empleado {
  protected horasTrabajadas: number;
  valorHoras: number;
  constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHoras: number){
    super(nombre, antiguedad);
    this.horasTrabajadas = horasTrabajadas;
    this.valorHoras = valorHoras;
  }
  calcularSueldo(): number {
    return this.valorHoras * this.horasTrabajadas;
  }
}

class EmpleadoPorComision extends Empleado {
  ventasMes: number;
  procentajeComision: number;

  constructor(nombre: string, antiguedad: number, ventasMes: number, procentajeComision: number){
    super(nombre, antiguedad);
    this.ventasMes = ventasMes;
    this.procentajeComision = procentajeComision;
  }
  calcularSueldo(): number {
    return this.ventasMes * this.procentajeComision/100;
  }
}
//instancias
const empleadoFijo = new EmpleadoFijo('Matias', 3, 10000);
const empleadoPorComision = new EmpleadoPorComision('Matias', 3, 10000, 10);
const empleadoTurnoManiana = new EmpleadoPorHoras('Matias', 3, 40, 5000);

const empleados: Empleado[] = [empleadoFijo, empleadoPorComision, empleadoTurnoManiana];
empleados.forEach(empleado => {
  console.log(`saldo correspondiente: ${empleado.calcularSueldo()}`)
})
