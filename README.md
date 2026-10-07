# YES — tienda (React + Vite)

Reconstrucción en React de la tienda YES: catálogo por categorías, modo claro/oscuro y diseño responsive.

## Correr
```bash
npm install
npm run dev      # desarrollo
npm run build    # genera /dist para subir al hosting
```

## Estructura
- `src/data/catalog.js` — catálogo (datos separados de la interfaz)
- `src/components/` — Header, Footer, ProductCard
- `src/pages/` — Home y Shop (rutas con react-router, HashRouter)
- `src/useTheme.js` — hook del modo claro/oscuro

## Pendiente
Carrito con envío a WhatsApp, buscador, fotos propias del catálogo y backend (PHP + MySQL).
