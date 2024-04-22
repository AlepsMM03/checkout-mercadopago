## README

### Descripción
Este código implementa un proceso de pago utilizando la plataforma de MercadoPago. Permite a los usuarios realizar compras de productos o servicios de forma segura y confiable.

### Requisitos previos
Antes de utilizar este código, asegúrate de tener instalado Node.js y npm en tu sistema. Además, necesitarás una cuenta de MercadoPago y una API Key válida para interactuar con su API.

### Instalación
1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando npm:
   ```bash
   npm install
   ```

### Uso
1. Abre una terminal y navega hasta el directorio donde has clonado este repositorio.
2. Ejecuta el servidor local con el siguiente comando:
   ```bash
   npm start
   ```
3. Abre tu navegador web y accede a `http://localhost:3000`.
4. Introduce los detalles de tu producto o servicio y haz clic en el botón "Comprar".
5. Se abrirá una ventana de pago seguro proporcionada por MercadoPago donde podrás completar la transacción.

### Estructura del proyecto
- **`app.js`**: Contiene el código JavaScript para el frontend que interactúa con la API de MercadoPago.
- **`server.js`**: Es el archivo principal del servidor Express que maneja las solicitudes HTTP y la lógica de negocio.
- **`package.json`**: Archivo de configuración del proyecto Node.js que incluye las dependencias y scripts necesarios.
- **`public/index.html`**: La página HTML donde se muestra el producto o servicio y se inicia el proceso de pago.

### Autor
- **Alejandro Montes** - [GitHub](https://github.com/AlepsMM03)
