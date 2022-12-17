import { Header } from './components/header';
import { ProjetoContador } from './components/projetocontador';

const App = () => {
  let user: string = 'Felipe'
  return (
    <div>
      <Header title={user}/>
      <ProjetoContador/>
    </div>
  );
}

export default App;