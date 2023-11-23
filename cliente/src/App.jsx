import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Form from './pages/Form';
import Estudiantes  from './pages/Estudiantes'
import Navigation  from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/estudiantes"/>} />
        <Route path='/estudiantes' element={<Estudiantes/>} />
        <Route path='/form-estudiantes' element={<Form/>} />
      </Routes>
      <Navigation/>
    </BrowserRouter>
  );
}


export default App;

