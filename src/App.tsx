import { Header } from './components/header';
import { ProjetoContador } from './components/projetocontador';
import { Honda } from './components/Ronda';
import { Formulario } from './components/from'
import { List } from './components/Lista'
import { useState } from 'react';

const App = () => {
  let userADM: string = 'Felipe ADM'
  let verificacao: boolean = true
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show)
  }
  if(verificacao){return (
    <div>
      <Formulario/>
      <List/>
      <button onClick={handleClick}>mostra</button>
      {show && <Honda/> }
    </div>
  )}else {
    return (
      <div>
        <Header title={userADM}/>
        <ProjetoContador/>
      </div>
    )
  }
}
export default App;