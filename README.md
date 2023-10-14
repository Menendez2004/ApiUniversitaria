# # API de Gestión Universitaria

Este proyecto es una API desarrollada en Node.js y Express que proporciona servicios para la gestión de procesos universitarios, como el registro de materias, estudiantes y nuevas carreras universitarias.

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Documentación](#documentación)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- Node.js
- MySQL
- Git

## Instalación

1. Clona el repositorio desde GitHub:

   ```bash
   git clone https://github.com/tuusuario/nombre-del-repositorio.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nombre-del-repositorio
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Configuración

Antes de ejecutar la API, asegúrate de configurar las variables de entorno necesarias. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=colores8Q
DB_DATABASE=api_udb
PORT=3307 # Puerto en el que se ejecutará el servidor
```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

La API estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

## Documentación

Puedes encontrar la documentación de la API en el archivo [API_DOCUMENTATION.md](API_DOCUMENTATION.md) para obtener información detallada sobre los endpoints, parámetros y respuestas.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Crea una rama con un nombre descriptivo:

   ```bash
   git checkout -b nombre-de-rama
   ```

2. Realiza tus cambios y asegúrate de que las pruebas pasen.

3. Realiza un commit de tus cambios:

   ```bash
   git commit -m "Descripción de tus cambios"
   ```

4. Sube tus cambios a GitHub:

   ```bash
   git push origin nombre-de-rama
   ```

5. Crea una solicitud de extracción (PR) en GitHub y describe tus cambios en detalle.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

---


