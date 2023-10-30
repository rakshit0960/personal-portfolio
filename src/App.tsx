import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SectionWrapper from './components/SectionWrapper'

function App() {

  return (
    <>
      <SectionWrapper name='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Home />
      </SectionWrapper>
    </>
  )
}

export default App
