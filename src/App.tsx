import { Header } from './components/header';
import { ProjetoContador } from './components/projetocontador';
import { Honda } from './components/Ronda';

const App = () => {
  let user: string = 'Felipe'
  let userADM: string = 'Felipe ADM'
  let verificacao: boolean = true

  if(verificacao){return (
    <div>
      <Header title={user}/>
      <Honda/>
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