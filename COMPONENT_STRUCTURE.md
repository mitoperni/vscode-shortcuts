# 📦 Estructura de Componentes

## Árbol de Componentes

```
App (BrowserRouter + AppProvider)
└── Layout
    ├── Header
    │   ├── Logo + Brand
    │   ├── Language Switcher (EN/ES)
    │   └── Theme Toggle (Dark/Light)
    │
    ├── Navigation Tabs
    │   ├── Home
    │   ├── Shortcuts
    │   ├── Git
    │   └── Practice
    │
    ├── Outlet (Render current page)
    │   │
    │   ├── Home Page
    │   │   ├── Hero Section
    │   │   ├── StatCard × 3 (Favorites, Learned, Accuracy)
    │   │   └── Features Grid
    │   │
    │   ├── Shortcuts Page
    │   │   ├── StatCard × 3
    │   │   ├── OS Toggle
    │   │   ├── Search Bar
    │   │   ├── Category Filters
    │   │   └── ShortcutCard × N
    │   │
    │   ├── Git Page
    │   │   ├── Page Header
    │   │   ├── GitCommandCard × N (grouped by category)
    │   │   └── Workflow Section
    │   │
    │   └── Practice Page
    │       ├── Start Screen
    │       │   ├── Instructions
    │       │   ├── OS Selector
    │       │   └── Statistics
    │       └── Active Practice
    │           ├── Question Display
    │           ├── Answer Input
    │           ├── Feedback
    │           └── Action Buttons
    │
    └── Footer
```

## 🗂️ Descripción de Componentes

### 📱 Layout & Navigation

#### `Layout.jsx`
- **Propósito**: Estructura principal con header, contenido y footer
- **Props**: Ninguna (usa Outlet de React Router)
- **Estado**: Ninguno
- **Dependencias**: Header, Footer, Outlet

#### `Header.jsx`
- **Propósito**: Navegación principal y controles globales
- **Props**: Ninguna (usa Context)
- **Estado Global**: theme, i18n language
- **Features**:
  - Logo y branding
  - Cambio de idioma (EN/ES)
  - Toggle de tema (dark/light)
  - Tabs de navegación con active state

#### `Footer.jsx`
- **Propósito**: Información del pie de página
- **Props**: Ninguna
- **Estado**: Ninguno

### 📄 Pages (Páginas)

#### `Home.jsx`
- **Propósito**: Página de inicio con dashboard
- **Props**: Ninguna (usa Context)
- **Estado Global**: favorites, learned, practiceStats
- **Componentes Hijos**: StatCard × 3
- **Features**:
  - Hero section con CTA buttons
  - Estadísticas del usuario
  - Grid de features

#### `Shortcuts.jsx`
- **Propósito**: Lista de atajos de VS Code
- **Props**: Ninguna
- **Estado Local**: searchTerm, selectedCategory
- **Estado Global**: os, favorites, learned
- **Componentes Hijos**: StatCard × 3, ShortcutCard × N
- **Features**:
  - Filtrado por categoría
  - Búsqueda de texto
  - Toggle Windows/Mac
  - Contador de resultados

#### `Git.jsx`
- **Propósito**: Lista de comandos Git
- **Props**: Ninguna
- **Estado**: Ninguno
- **Componentes Hijos**: GitCommandCard × N
- **Features**:
  - Comandos agrupados por categoría
  - Workflow section con pasos

#### `Practice.jsx`
- **Propósito**: Modo práctica interactivo
- **Props**: Ninguna
- **Estado Local**: practiceMode, practiceOS, currentQuestion, userAnswer, feedback
- **Estado Global**: practiceStats
- **Features**:
  - Generación aleatoria de preguntas
  - Validación de respuestas
  - Sistema de puntuación
  - Feedback visual

### 🎴 Reusable Cards

#### `StatCard.jsx`
- **Propósito**: Card para mostrar estadísticas
- **Props**:
  ```jsx
  {
    icon: string,           // Emoji o icono
    title: string,          // Título de la estadística
    value: string|number,   // Valor principal
    subtitle: string,       // Texto opcional
    variant: string,        // Color: primary, success, info, etc
    progressBar: number     // Porcentaje opcional (0-100)
  }
  ```
- **Ejemplo**:
  ```jsx
  <StatCard
    icon="⭐"
    title="Favorites"
    value={15}
    variant="primary"
  />
  ```

#### `ShortcutCard.jsx`
- **Propósito**: Card individual para un atajo
- **Props**:
  ```jsx
  {
    shortcut: {
      id: string,
      action: string,
      windows: string,
      mac: string,
      category: string
    }
  }
  ```
- **Estado Global**: os, favorites, learned
- **Actions**: toggleFavorite, toggleLearned
- **Features**:
  - Muestra el atajo según OS
  - Botón de favorito
  - Botón de aprendido
  - Título y descripción traducidos

#### `GitCommandCard.jsx`
- **Propósito**: Card individual para comando Git
- **Props**:
  ```jsx
  {
    command: {
      command: string,
      desc: string
    }
  }
  ```
- **Features**:
  - Muestra el comando
  - Descripción traducida
  - Estilo diferenciado

### 🎯 Context API

#### `AppContext.jsx`
- **Propósito**: Estado global de la aplicación
- **Provider**: AppProvider
- **Hook**: useAppContext()

**Estado Gestionado**:
```javascript
{
  // UI States
  theme: 'dark' | 'light',
  os: 'windows' | 'mac',

  // User Data (persisted in LocalStorage)
  favorites: string[],        // Array of shortcut IDs
  learned: string[],          // Array of shortcut IDs
  practiceStats: {
    correct: number,
    total: number
  },

  // Actions
  setTheme: (theme) => void,
  setOs: (os) => void,
  toggleFavorite: (id) => void,
  toggleLearned: (id) => void,
  updatePracticeStats: (isCorrect) => void
}
```

**LocalStorage Keys**:
- `theme`
- `os`
- `favorites`
- `learned`
- `practiceStats`

### 📊 Data Files

#### `shortcutsData.js`
```javascript
export const shortcutsData = {
  essentials: [...],
  editing: [...],
  navigation: [...],
  search: [...],
  multicursor: [...],
  code: [...],
  files: [...],
  display: [...],
  debug: [...],
  terminal: [...]
}

export const getAllShortcuts = () => [...]
export const getCategoryCount = (category, favorites, learned) => number
export const categories = [...]
```

#### `gitCommandsData.js`
```javascript
export const gitCommands = {
  basics: [...],
  sync: [...],
  branching: [...],
  merge: [...],
  stash: [...],
  undo: [...],
  advanced: [...]
}

export const gitCategories = [...]
```

## 🔄 Flujo de Datos

### 1. Theme Change
```
User clicks theme button
→ Header calls setTheme()
→ AppContext updates theme state
→ useEffect saves to LocalStorage
→ All components re-render with new theme
```

### 2. Toggle Favorite
```
User clicks favorite button on ShortcutCard
→ ShortcutCard calls toggleFavorite(id)
→ AppContext updates favorites array
→ useEffect saves to LocalStorage
→ Card re-renders with filled star
→ StatCards update counts
```

### 3. Practice Mode
```
User clicks "Start Practice"
→ Practice.jsx generates random question
→ User types answer and submits
→ Answer is validated
→ updatePracticeStats() updates global stats
→ useEffect saves to LocalStorage
→ New question is generated after 2s
```

### 4. Navigation
```
User clicks "Shortcuts" tab in Header
→ React Router changes route to /shortcuts
→ Layout Outlet renders Shortcuts page
→ Shortcuts page loads data from shortcutsData
→ Shortcuts uses Context for os, favorites, learned
→ ShortcutCards render with current data
```

## 🎨 Styling Strategy

- **Bootstrap 5.3**: Grid, utilities, base components
- **Custom CSS**: `/src/styles/App.css`
  - CSS Variables para theming
  - Gradientes modernos
  - Animations y transitions
  - Responsive breakpoints
  - Dark/Light mode support

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large**: > 992px

## 🌐 Internacionalización

- **Library**: react-i18next
- **Languages**: English (en), Spanish (es)
- **Files**:
  - `/src/i18n/config.js`
  - `/src/i18n/locales/en/translation.json`
  - `/src/i18n/locales/es/translation.json`

**Usage**:
```jsx
import { useTranslation } from 'react-i18next'

const { t, i18n } = useTranslation()

// Translate
<h1>{t('common.appTitle')}</h1>

// Change language
i18n.changeLanguage('es')
```

---

**Esta estructura permite**:
- ✅ Fácil mantenimiento
- ✅ Componentes reutilizables
- ✅ Testing individual
- ✅ Escalabilidad
- ✅ Código limpio y organizado
