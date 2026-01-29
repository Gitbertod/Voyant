# Voyant - Sistema de Gestión Empresarial

## Descripción General
Aplicación web fullstack para la empresa Voyant que incluye un sitio público corporativo y una intranet privada con sistema de gestión de usuarios, perfiles con códigos QR, y panel de administración completo.

## Arquitectura del Proyecto
- **Repositorio Frontend**: Cliente React separado
- **Repositorio Backend**: API REST con Node.js/Express separado
- **Dos áreas principales**:
  1. **Sitio Público**: Información corporativa y servicios de Voyant
  2. **Intranet**: Sistema privado con autenticación (acceso vía `/login`)

## Stack Tecnológico

### Frontend
- **Framework**: React 18+ con Vite
- **Puerto de desarrollo**: 5173
- **Estilos**: 
  - Tailwind CSS (principal)
  - CSS Modules (componentes específicos)
  - Flowbite (componentes de UI)
- **Routing**: React Router DOM
- **HTTP Client**: Axios para consumir la API
- **Características**:
  - Sistema de autenticación con JWT
  - Generación y visualización de códigos QR
  - Subida de imágenes (fotos de perfil)
  - Perfiles públicos accesibles vía QR

### Backend
- **Framework**: Express.js
- **Base de Datos**: MongoDB
- **Autenticación**: JWT (JSON Web Tokens)
- **Características**:
  - API RESTful
  - Gestión completa de usuarios
  - Control de sesiones y tokens
  - Manejo de roles (usuarios regulares vs administradores)

## Estructura de Usuarios

### Usuario Regular (Empleado)
- Edición de perfil personal
- Subida de foto de perfil
- Visualización de datos propios:
  - Cargo
  - Departamento
  - Estado (activo/inactivo)
- Código QR personal que redirige a perfil público
- Perfil público con datos no sensibles

### Administrador
- Dashboard administrativo completo
- Gestión de todos los usuarios:
  - Activar/desactivar usuarios
  - Editar información de cualquier usuario
  - Control total sobre datos de empleados
- Supervisión del sistema

## Flujo de Autenticación
1. Acceso a `/login` muestra formulario
2. Validación de credenciales contra API
3. Generación de JWT en backend
4. Almacenamiento de token en frontend
5. Protección de rutas de intranet con token
6. Verificación de token en cada petición

## Convenciones de Código

### General
- Usar ES6+ (async/await, arrow functions, destructuring)
- Manejo de errores con try-catch
- Código comentado en español
- Nombres de variables y funciones descriptivos en inglés

### Frontend (React)
- Componentes funcionales con Hooks (useState, useEffect, etc.)
- Props destructuradas en parámetros
- Imports organizados: librerías externas → componentes → estilos
- Tailwind como prioridad, CSS Modules para estilos específicos
- Axios con interceptors para manejo de tokens

### Backend (Express)
- Estructura MVC o similar
- Middlewares para autenticación/autorización
- Validación de datos en rutas
- Respuestas consistentes (JSON con status, message, data)

## Variables de Entorno Típicas

### Frontend
```
VITE_API_URL=http://localhost:[puerto-backend]
```

### Backend
```
PORT=[puerto-backend]
MONGODB_URI=mongodb://localhost:27017/voyant
JWT_SECRET=[tu-secreto]
JWT_EXPIRE=[tiempo-expiracion]
```

## Funcionalidades Clave Implementadas

### ✅ Área Pública
- Landing page corporativa
- Información de servicios de Voyant
- Perfiles públicos de empleados (vía QR)

### ✅ Área Privada (Intranet)
- Sistema de login con JWT
- Gestión de perfil personal
- Subida de fotos
- Visualización de datos laborales
- Código QR personal

### ✅ Panel de Administración
- Dashboard con métricas/lista de usuarios
- CRUD completo de usuarios
- Activación/desactivación de cuentas
- Edición de cargos y departamentos

## Notas Importantes para Claude

### Preferencias de Asistencia
- **Idioma**: Explicaciones en español
- **Nivel**: Desarrollador fullstack en aprendizaje con MERN
- **Priorizar**: Soluciones con el stack actual (MERN + Vite + Tailwind)
- **Evitar**: Tecnologías muy avanzadas o fuera del stack sin explicación previa

### Áreas de Conocimiento
- ✅ MERN stack
- ✅ React con Vite
- ✅ Tailwind CSS
- ⚠️ Linux (nivel básico, en aprendizaje)
- ❌ MCP (sin conocimiento aún, pero con interés futuro)
- ❌ Automatizaciones avanzadas (interés futuro)

### Al Proporcionar Soluciones
1. Explicar el "por qué" de cada solución
2. Incluir comentarios en español en el código
3. Considerar que hay dos repositorios separados
4. Tener en cuenta la arquitectura de autenticación JWT
5. Respetar la estructura de estilos (Tailwind + CSS Modules + Flowbite)
6. Mantener consistencia con React Router para navegación

## Problemas Comunes a Considerar
- CORS entre frontend (puerto 5173) y backend
- Gestión de tokens JWT (almacenamiento, renovación, expiración)
- Validación de roles para rutas de administrador
- Optimización de imágenes subidas
- Rutas protegidas en React Router
- Manejo de estados de autenticación global

## Próximas Funcionalidades Potenciales
- Sistema de notificaciones
- Gestión de departamentos
- Reportes y estadísticas
- Sistema de permisos más granular
- Integración de automatizaciones (futuro)
- Exploración de MCP (futuro)

---

**Última actualización**: Enero 2025  
**Desarrollador**: Gilberto  
**Estado del proyecto**: En desarrollo activo
