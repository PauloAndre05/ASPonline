import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Agendar } from './components/routes/agendar/Agendar';
import { Inicio } from './components/routes/inicio/Inicio';
import { Servicos } from './components/routes/servicos/Servicos';
import { Sobre } from './components/routes/sobre/Sobre';


import * as S from './stylesApp'
import { Perfil } from './components/layout/perfilDeInstituicao/Perfil';
import { PaginDeErro } from './components/routes/paginaDeErro/PaginaDeErro';
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css' ;
import { ConsultarAgenda } from './components/routes/consultarAgenda/ConsultarAgenda';
import { CancelarAgenda } from './components/routes/cancelar/CancelarAgenda';

function App() {
  return (
    <S.container>
      <ToastContainer theme='dark'/>
      <BrowserRouter>
        
        <Routes>

          <Route path='/' element={<Inicio/>} />
          <Route path='/servicos' element={<Servicos/>} />
          <Route path='/agendar' element={<Agendar/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/perfil/:id' element={<Perfil/>} />
          <Route path='*' element={<PaginDeErro/>} />
          <Route path='/agendar' element={<Agendar/>} />
          <Route path='/consultarAgenda' element={<ConsultarAgenda />} />
          <Route path='/cancelarAgenda' element={<CancelarAgenda />} />

        </Routes>
        
      </BrowserRouter> 
    </S.container>
    
  );
}

export default App;
