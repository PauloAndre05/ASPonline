import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Agendar } from './components/routes/agendar/Agendar';
import { Inicio } from './components/routes/inicio/Inicio';
import { Servicos } from './components/routes/servicos/Servicos';
import { Sobre } from './components/routes/sobre/Sobre';
import { Direcoes } from './components/layout/direcoes/Direcoes'


import * as S from './stylesApp'
import { ActualizarAgenda } from './components/routes/actualizarAgenda/ActualizarAgenda';
import { ConsultarAgenda } from './components/routes/consultarAgenda/ConsultarAgenda';
import { Agendar2 } from './components/routes/agendar2/Agendar2';
import { Perfil } from './components/layout/perfilDeInstituicao/Perfil';
import { PaginDeErro } from './components/routes/paginaDeErro/PaginaDeErro';

function App() {
  return (
    <S.container>
     
      <BrowserRouter>
        
        <Routes>

          <Route path='/' element={<Inicio/>} />
          <Route path='/servicos' element={<Servicos/>} />
          <Route path='/agendar' element={<Agendar/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/tabelaDirecoes' element={<Direcoes/>} />
          <Route path='/actualizarAgenda'element={<ActualizarAgenda/>} />
          <Route path='/consultarAgenda'element={<ConsultarAgenda/>} />
          <Route path='/agendar2'element={<Agendar2/>} />
          <Route path='/perfil/:id' element={<Perfil/>} />
          <Route path='*' element={<PaginDeErro/>} />
        </Routes>
        
      </BrowserRouter> 
    </S.container>
    
  );
}

export default App;
