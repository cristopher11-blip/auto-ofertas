**** Auto Ofertas ****

Este proyecto es una Plataforma Completa para gestionar ofertas de vehículos, incluyendo:

- Backend** (Node.js + Express + MySQL)
Pasos:
1. cd auto-ofertas-backend
2. npm install
3. node server.js
********************************************
  
- Frontend Web** (HTML + CSS + JavaScript)
Pasos:
1. cd auto-ofertas-frontend
2. npx http-server .

********************************************
  
- Aplicación Móvil** (React Native + Expo)
Pasos:
1. cd auto-ofertas-mobile
2. npm install
3. npx expo start
4. Escanea el QR con Expo Go 
*********************************************

- Base de Datos 
Pasos:
1. Abra http://localhost/phpmyadmin
2. Cree la base de datos auto_ofertas (utf8_general_ci)
3. Vaya a “Importar”
4. Seleccione el archivo auto_ofertas.sql
5. Presione “Continuar”
✅ Base instalada correctamente

********************************************
Rutas

GET /vehiculos → Todos
GET /vehiculos?tipo=1 → Autos 🚗
GET /vehiculos?tipo=2 → Camionetas 🚙
GET /vehiculos?tipo=3 → Motos 🏍️


Requisitos Previos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Expo CLI](https://docs.expo.dev/)
  ```bash
  npm install -g expo-cli

Autor: Cristopher Rugel