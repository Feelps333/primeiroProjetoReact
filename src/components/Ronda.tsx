import { useState} from 'react';

export const Honda = () => {
  const [HondaIniciadas, setHonda] = useState(0);
  const [HondaConcluidas, setHondaConcluidas] = useState(0);

  const HondaIniciada = () => {
    setHonda(HondaIniciadas + 1)
  }
  const HondaConcluida = () => {
    setHondaConcluidas(HondaConcluidas + 1)
  }
  return(
    <div>
      <h2>Rondas Iniciadas {HondaIniciadas}</h2>
      <h2>Rondas Concluidas {HondaConcluidas}</h2>
      <button onClick={HondaIniciada}>Inicia Ronda</button>
      <button onClick={HondaConcluida}>conclui Ronda</button>
    </div>
  )
}