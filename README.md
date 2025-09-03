# AutoGroup React App

Una aplicación web moderna para concesionario de automóviles construida con React, Vite, pnpm y Tailwind CSS.

## 🚗 Características

- **Diseño Responsivo**: Interfaz moderna y adaptable a todos los dispositivos
- **Navegación SPA**: Single Page Application con React Router
- **Componentes Reutilizables**: Arquitectura modular y mantenible
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Búsqueda Inteligente**: Sistema de búsqueda de vehículos
- **Modales Interactivos**: Información detallada de marcas y tipos de vehículos
- **Formulario de Contacto**: Sistema de contacto funcional

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework CSS utilitario
- **React Router** - Enrutamiento de la aplicación
- **Font Awesome** - Iconos vectoriales
- **Google Fonts** - Tipografías personalizadas

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación principal
│   ├── Hero.jsx            # Sección principal
│   ├── ExploreBrands.jsx   # Exploración por marcas
│   ├── SearchSection.jsx   # Búsqueda de vehículos
│   ├── FeaturedModels.jsx  # Modelos destacados
│   ├── VehicleTypes.jsx    # Tipos de vehículos
│   ├── ContactPage.jsx     # Página de contacto
│   └── Footer.jsx          # Pie de página
├── App.jsx                 # Componente principal
├── main.jsx                # Punto de entrada
└── index.css               # Estilos globales y Tailwind
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- pnpm (gestor de paquetes)

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd autohub-react
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   pnpm run dev
   ```

4. **Construir para producción**

   ```bash
   pnpm run build
   ```

5. **Vista previa de la construcción**
   ```bash
   pnpm run preview
   ```

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

- `primary`: #ffd700 (Dorado)
- `dark`: #1a1a1a (Negro principal)
- `dark-secondary`: #2a2a2a (Negro secundario)

### Fuentes

- **Playfair Display**: Títulos y elementos destacados
- **Montserrat**: Texto del cuerpo y navegación

### Componentes

Cada componente está diseñado para ser fácilmente personalizable. Puedes modificar:

- Colores y estilos
- Contenido y texto
- Imágenes y assets
- Funcionalidades específicas

## 📱 Responsividad

La aplicación está completamente optimizada para:

- **Móviles**: Diseño adaptativo con navegación hamburguesa
- **Tablets**: Layout intermedio optimizado
- **Desktop**: Experiencia completa con todos los elementos

## 🔍 Funcionalidades Principales

### Búsqueda de Vehículos

- Búsqueda en tiempo real
- Filtrado por marca y modelo
- Resultados con interfaz modal

### Exploración por Marca

- Información detallada de Subaru y Suzuki
- Modelos disponibles
- Modales informativos interactivos

### Tipos de Vehículos

- Categorías: SUV, Sedán, Hatchback, Camioneta
- Descripciones detalladas
- Imágenes representativas

### Formulario de Contacto

- Campos validados
- Información de contacto completa
- Horarios y servicios

## 🚀 Despliegue

### Netlify

1. Conectar repositorio Git
2. Configurar comando de construcción: `pnpm run build`
3. Directorio de publicación: `dist`

### Vercel

1. Importar proyecto desde Git
2. Framework preset: Vite
3. Comando de construcción automático

### GitHub Pages

1. Configurar GitHub Actions
2. Construir y desplegar automáticamente

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama para nueva funcionalidad
3. Commit los cambios
4. Push a la rama
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:

- Email: info@autohub.com
- Teléfono: +57 (1) 123-4567

---

**AutoGroup** - Tu concesionario de confianza para Subaru y Suzuki 🚗✨
