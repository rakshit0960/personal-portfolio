import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SectionWrapper from './components/SectionWrapper'
import { ThemeContext } from './components/contexts/ThemeContext'
import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? "dark" : ""}>
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
          <SectionWrapper name='App'>
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
          </SectionWrapper>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
