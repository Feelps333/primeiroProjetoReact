import { Header } from './components/header';
import { ProjetoContador } from './components/projetocontador';
import { Honda } from './components/Ronda';
import { Formulario } from './components/from'
import { List } from './components/Lista'
import { useState } from 'react';

const App = () => {
  let userADM: string = 'Felipe ADM'
  let verificacao: boolean = true
  const [clicked, setClicked ] = useState(false);

  const handleClick = () => {
    setClicked(!clicked)
  }
  if(verificacao){return (
    <div>
      <Formulario/>
      <List/>
      <button onClick={handleClick} style={{backgroundColor:clicked ? '#0000ff': '#ff0000'}}>mostra</button>
      {clicked && <Honda/> }
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