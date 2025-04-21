import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ThemeProvider } from './components/contexts/theme-provider'
import AppWrapper from './components/AppWrapper'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppWrapper>
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
