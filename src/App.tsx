import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ThemeContext } from './components/contexts/ThemeContext'
import { useState } from 'react'
import AppWrapper from './components/AppWrapper'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)

  return (
    <div className= {darkTheme ? "dark" : ""}>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <AppWrapper>
          <Routes>
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/' element={<HomePage />} />
          </Routes>
      </AppWrapper>
    </ThemeContext.Provider>
    </div >
  )
}

export default App
