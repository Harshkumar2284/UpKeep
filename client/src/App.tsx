import Navbar from "./components/layout/Navbar"
import Landing from "./pages/Landing"
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
        </Routes>
        
      </Router>
    </>
  )
}

export default App
