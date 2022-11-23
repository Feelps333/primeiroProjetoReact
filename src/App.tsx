import { useState} from 'react';

const App = () => {
  const [numero, setNumero] = useState(0);

  const handleButtonClick = () => {
    setNumero(10);
  }

  return (
    <div>
      O numero é: {numero}
      <br />
      <button onClick={handleButtonClick}>clique aqui</button>
    </div>
  );
}

export default App;