# Instrucciones de Instalación

Para instalar las dependencias del proyecto, utiliza el siguiente comando:

```bash
npm install
```

## Backend

1. **Instala Node.js**: Asegúrate de tener Node.js instalado en tu sistema.

2. **Dependencias del Backend**: Abre la consola y navega a la carpeta principal del proyecto. Ejecuta el siguiente comando para instalar todas las dependencias del backend:

```bash
npm install
```

3. Una vez instaladas las dependencias, utiliza el siguiente comando para compilar el código y ejecutar el servidor:

```bash
tsc && npm start
```

### Variables de Entorno (Backend)

Configura las siguientes variables de entorno en un archivo `.env` en la raíz del backend:

```env
DB_URL="url de la base de datos postgreSQL"
PORT="puerto a donde se va levantar el servidor"
MAILGUN_DOMAIN="dominio de mailgun"
MAILGUN_API_KEY="api key de mailgun"
JWT_SECRET="json web token secret para generar los tokens"
ACCESS_USER="usuario habilidato para el acceso a los endpoints"
```

## Frontend

### Instalación

1. **Dependencias del Frontend**: Ejecuta el siguiente comando para instalar las dependencias del frontend:

```bash
npm install
```

2. **Configuración de Variables de Entorno**: Antes de iniciar el frontend, configura las siguientes variables de entorno en un archivo `.env` en la raíz del frontend:

```env
VITE_REACT_APP_API_URL="url del backend"
VITE_ACCESS_USER="usuario habilidato para el acceso a los endpoints"
```

3. **Ejecución**: Después de configurar las variables de entorno y haber iniciado el servidor backend, ejecuta el siguiente comando para iniciar el proyecto frontend:

```bash
npm start
```

La aplicación se abrirá en tu navegador, conectada al servidor backend.