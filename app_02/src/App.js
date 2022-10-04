import { useState, useEffect } from "react";

function App() {

  const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false);

  function handleButtonClick(){
    setHasUserClickedOnButton(!hasUserClickedOnButton);
  }

  useEffect(() => {
    console.log(hasUserClickedOnButton)
  }, [hasUserClickedOnButton])

  return (
    <>
      <h1>useState</h1>

      <button onClick={handleButtonClick}>Clique aqui</button>
      <br />
      <br />
    
      { hasUserClickedOnButton ? 'Usúario Clicou' : null }

    </>
  );
}

export default App;