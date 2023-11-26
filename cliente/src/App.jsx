import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Estudiantes  from './pages/Estudiantes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/estudiantes"/>} />
        <Route path='/estudiantes' element={<Estudiantes/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;