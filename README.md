# Ejercicios de TypeScript (TLP)

Este proyecto contiene soluciones para la guía de ejercicios desarrollados en TypeScript (`ej1.ts`, `ej2.ts`, `ej3.ts`, `ej4.ts`, `ej5.ts`).  
---

## Prerrequisitos

- **Node.js** (versión 16.13 o superior instalada).

---
>[!WARNING]
> Este proyecto fue gestionado con pnpm, seguir las instrucciones que siguen a continuacion.
---
## Configuración e Instalación

No necesitas instalar `pnpm` de forma global en tu sistema. El proyecto aprovecha **Corepack**, la herramienta nativa de Node.js, para descargar y ejecutar automáticamente la versión exacta del gestor de paquetes requerida.

1. **Abrir la terminal** en la raíz del proyecto.

2. **Activar Corepack:**

   ```bash
   corepack enable
   ```

3. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

   (Corepack descargará la versión requerida de `pnpm` definida en el proyecto y procederá con la instalación de los módulos).

---

## Ejecución y Prueba de los Ejercicios

Puedes probar cualquiera de los archivos `.ts` de forma directa o mediante la compilación estándar de TypeScript.

### Opción 1: Ejecución directa con `tsx` (Recomendada)

Ejecuta cualquier ejercicio sin generar archivos JavaScript intermedios:

```bash
pnpm dlx tsx ej1.ts
```

(Sustituye `ej1.ts` por `ej2.ts`, `ej3.ts`, `ej4.ts` o `ej5.ts` según el archivo que desees evaluar).

### Opción 2: Compilación tradicional con `tsc`

1. Compila el código TypeScript a JavaScript:

   ```bash
   pnpm exec tsc
   ```

2. Ejecuta el archivo resultante con Node:

   ```bash
   node ej1.js
   ```
