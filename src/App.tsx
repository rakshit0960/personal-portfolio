import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SectionWrapper from './components/SectionWrapper'

function App() {

  return (
    <>
      <SectionWrapper name='App'>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </SectionWrapper>
    </>
  )
}

export default App
