import { Header } from './components/header';
import { ProjetoContador } from './components/projetocontador';
import { Honda } from './components/Ronda';
import { Formulario } from './components/Formulario'
import { List } from './components/Lista'
import { useState } from 'react';
import { Botao} from './components/Botao'

const App = () => {
  return (
    <div>
      <Formulario/>
      <Botao/>
    </div>
  )
}
export default App;