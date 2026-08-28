# Zahobreña

Web corporativa y gestor de disponibilidad para los seis apartamentos turísticos de Zahobreña, en Zahora (Cádiz).

La landing presenta los alojamientos, sus servicios, galería de imágenes y datos de contacto. También incorpora una sección de reservas con dos niveles de acceso:

- **Visitantes:** consultan, por apartamento, los periodos ocupados sin acceder a información personal ni económica de las reservas.
- **Propietario:** inicia sesión en la misma sección para crear, modificar y cancelar reservas, con datos de huésped, precio y notas internas.

## Tecnologías

- React 18 y Vite para la interfaz.
- Tailwind CSS junto con estilos específicos para el módulo de reservas.
- Función serverless de Vercel en `api/reservas.js`.
- Vercel KV como almacenamiento persistente de reservas.

## Estructura principal

```text
src/
  components/
    Reservations.jsx    Interfaz pública y panel del propietario
api/
  reservas.js           API protegida y acceso a Vercel KV
public/                 Fotografías y logotipo del establecimiento (no incluido)
.env.example            Variables de entorno necesarias
```

## Privacidad

La API devuelve al público solo el apartamento y las fechas de ocupación. Los datos del huésped, precio y notas solo se devuelven tras autenticar la solicitud como administrador.

## Desarrollo local

El proyecto utiliza los comandos habituales de Vite: `npm install`, `npm run dev` y `npm run build`.
