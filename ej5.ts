//ejercicio 5 getters y setters: Modelá una clase Persona:
//
//    dni como private readonly, se recibe por constructor.
//    nombre público, sin restricciones.
//    edad como atributo privado, con un get edad() que la devuelva y un set edad(valor) que rechace valores negativos o mayores a 120 (lanzando un Error en ambos casos).
//    email como atributo privado, con un set email(valor) que rechace (lanzando un Error) valores que no contengan "@", y un get email() que lo devuelva.
//    Un get de solo lectura esMayorDeEdad que devuelva true si edad >= 18 (no guarda ese valor, lo calcula al leerlo).
//    Un get de solo lectura datosPublicos que devuelva un string con nombre y esMayorDeEdad, pero sin dni ni email (son datos sensibles que no se exponen juntos con el resto).

class Persona {
  private readonly dni: string;
  nombre: string;
  private edad: number;
  private email: string;
  constructor(dni: string, nombre: string, edad: number, email: string) {
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }
  //toda funcion ya sean getters, setters o metodos se realizan fuera del constructor.
  // edad
  get consultaEdad(): number {
    return this.edad;
  }
  set setEdad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error('Edad inválida');
    }
    this.edad = valor;
  }
  //email
  get consultaEmail(): string {
    return this.email;
  }
  set setEmail(valor: string) {
    this.email = valor;
    if (!valor.includes('@')) {
      throw new Error('Email inválido');
    }
  }
  //validacion mayor de edad
  get esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }
  // datos publicos
  get datosPublicos(): string {
    return `Nombre: ${this.nombre}, Mayor de edad: ${this.esMayorDeEdad}`;
    }
  }
const matias = new Persona('44567890', 'Matias', 22, 'mat@gmail.com');
console.log(matias.setEmail = 'matias@gmail.com');
console.log(matias.datosPublicos);
console.log(matias.consultaEmail);
