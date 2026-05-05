# Gestión de Solicitudes

Aplicación web desarrollada con Angular y Supabase para la gestión de solicitudes de usuario.

## Descripción

Este proyecto permite simular el acceso de un usuario mediante un login sencillo basado en email y, a partir de ahí, gestionar solicitudes asociadas a dicho email.

La aplicación cuenta con tres pantallas principales:

- **Login**
- **Solicitudes**
- **Mis Solicitudes**

El login no realiza autenticación real contra base de datos, sino que recoge un email válido y lo utiliza como referencia para consultar y registrar solicitudes en Supabase.

---

## Funcionalidades implementadas

### 1. Enrutado de páginas
Se ha implementado navegación entre las siguientes rutas:

- **Login**
- **Solicitudes**
- **Mis Solicitudes**

---

### 2. Login inicial
La aplicación comienza con una pantalla de login donde:

- el usuario introduce su email
- se valida que el formato del email sea correcto
- si es válido, se guarda en sesión para utilizarlo en el resto de pantallas

> Nota: este login es una simulación y no comprueba si el email existe realmente en una base de datos.

---

### 3. Página de Solicitudes
Desde esta página el usuario puede:

- **cerrar sesión** mediante el botón **Log out**
- **ir a la página "Mis Solicitudes"**
- **abrir el formulario de nueva solicitud**

---

### 4. Creación de nueva solicitud
La nueva solicitud se crea mediante un formulario con los siguientes campos:

- **Título**
- **Descripción**
- **Categoría**
- **Prioridad**
- **Email**

Se han aplicado validaciones con `Validators` para controlar requisitos de obligatoriedad, formato y longitud.

Además:

- se evita el envío duplicado mientras la solicitud se está procesando
- se gestionan errores durante el guardado
- si el envío se realiza correctamente, se muestra un mensaje de confirmación
- el botón de envío queda deshabilitado si el formulario no es válido

El formulario también puede cerrarse manualmente pulsando la **X** de la esquina superior derecha.

---

### 5. Inserción en Supabase
Las solicitudes se almacenan en una tabla de Supabase.

Al realizar el envío:

- se inserta el registro en Supabase
- se controla si la operación ha fallado
- se informa al usuario del resultado

---

### 6. Página "Mis Solicitudes"
En esta pantalla se muestra un listado con las solicitudes asociadas al email con el que se inició sesión.

Características del listado:

- carga de solicitudes por email
- ordenación por fecha descendente
- visualización en formato desplegable para consultar el detalle de cada solicitud

---

### 7. Filtros de solicitudes
La pantalla "Mis Solicitudes" incluye filtros para facilitar la búsqueda:

- filtro por **título**
- filtro por **prioridad**
- combinación de ambos filtros
- botón para **limpiar filtros**

El filtrado se actualiza dinámicamente conforme el usuario interactúa con los controles.

---

### 8. Navegación de vuelta
En la página "Mis Solicitudes" se ha añadido un botón **Volver**, que devuelve al usuario a la página de solicitudes.

---

## Flujo de uso

1. El usuario accede a la pantalla de login.
2. Introduce un email válido.
3. Entra en la página de solicitudes.
4. Desde ahí puede:
   - crear una nueva solicitud
   - consultar sus solicitudes
   - cerrar sesión
5. Si accede a "Mis Solicitudes", verá únicamente las solicitudes asociadas a su email.
6. Puede aplicar filtros por título y prioridad.
7. Puede volver a la pantalla anterior mediante el botón **Volver**.

---

## Validaciones y control de errores

### Validaciones del formulario
Se han aplicado validaciones para asegurar que los datos introducidos cumplan las restricciones definidas.

Entre ellas:

- campos obligatorios (Todos menos categoría)
- longitud mínima y máxima (Titulo: 6 - 60, Descripción: 20 - 500)
- formato válido de email
- límites en prioridad (1-5)

### Control de errores
Se contemplan distintos escenarios:

- formulario inválido
- errores al guardar en Supabase
- prevención de envíos duplicados
- mensajes de error visibles para el usuario
- mensaje de confirmación cuando la solicitud se registra correctamente
- inició sesión sin un email

---

## Tecnologías utilizadas

- **Angular**
- **TypeScript**
- **Supabase**
- **Angular Reactive Forms**
- **Angular Signals**
- **Angular Material** (`MatExpansionPanel`)
- **CSS**

---

## Cómo ejecutar el proyecto

### Requisitos previos
- Node.js
- Angular CLI
- proyecto de Supabase configurado

### Configuración de entorno
Crear el archivo `src/environments/environment.ts` con este contenido:

```ts
export const environment = {
  production: false,
  supabaseUrl: 'TU_SUPABASE_URL',
  supabaseKey: 'TU_SUPABASE_ANON_KEY',
};
```

### Instalación
```bash
npm install
```text

### Ejecución en desarrollo
```bash
ng serve
```text

La aplicación estará disponible en:

```bash
http://localhost:4200
```text

---

## Estructura funcional del proyecto

- **Login**: recogida y validación del email
- **Solicitudes**: acceso a acciones principales
- **Nueva solicitud**: formulario de alta
- **Mis Solicitudes**: listado, ordenación y filtrado

---

## Autor

Proyecto realizado por Alvaro Sierra García.
