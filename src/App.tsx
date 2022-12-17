import { Header } from './components/header';
import { ProjetoContador } from './components/projetocontador';
import { Honda } from './components/Ronda';
import { Formulario } from './components/from'

const App = () => {
  let userADM: string = 'Felipe ADM'
  let verificacao: boolean = true

  if(verificacao){return (
    <div>
      <Formulario/>
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