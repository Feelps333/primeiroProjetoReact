const App = () => {

  const handleButtonClick = () => {
    alert("O botão foi clicado!")
  }
  return (
    <div>
      <button onClick={handleButtonClick}>clique aqui</button>
    </div>
  );
}

export default App;