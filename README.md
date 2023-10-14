# API de Gestión Universitaria

Este proyecto es una API desarrollada en 

| Tecnología         | Descripción                                |
| ------------------ | ------------------------------------------ |
| Node.js            | Entorno de tiempo de ejecución de JavaScript en el servidor. |
| Express            | Framework de Node.js para construir aplicaciones web y APIs. |
| MySQL              | Sistema de gestión de bases de datos relacional. |
| Otros              | (Listar aquí cualquier otra tecnología o biblioteca importante utilizada en el proyecto.) |


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


## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.

---


