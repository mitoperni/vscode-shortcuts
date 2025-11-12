import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shortcuts from './pages/Shortcuts'
import Git from './pages/Git'
import Practice from './pages/Practice'

/**
 * VS Code Shortcuts Bootcamp - Refactored Application
 *
 * This is a professionally structured React application featuring:
 * - React Router v6 for navigation
 * - Context API for global state management
 * - Reusable component architecture
 * - Organized file structure
 * - Clean separation of concerns
 */
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shortcuts" element={<Shortcuts />} />
            <Route path="git" element={<Git />} />
            <Route path="practice" element={<Practice />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
