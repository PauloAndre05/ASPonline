import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/layout/NavBar/NavBar';
import { Agendar } from './components/routes/agendar/Agendar';
import { Inicio } from './components/routes/inicio/Inicio';
import { Servicos } from './components/routes/servicos/Servicos';
import { Sobre } from './components/routes/sobre/Sobre';
import { Footer } from './components/layout/footer/Footer'

function App() {
  return (
    <div>
     
      <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path='/' element={<Inicio/>} />
          <Route path='/servicos' element={<Servicos/>} />
          <Route path='/agendar' element={<Agendar/>} />
          <Route path='/sobre' element={<Sobre/>} />

        </Routes>

        <Footer/>
      </BrowserRouter> 
  
    </div>
    
  );
}

export default App;
