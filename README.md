## REACT HOOKS

**Criando o projeto React**
```
npx create-react-app app_01
```
**Roda o projeto**
```
npm start
```

- Exemplo: app_01

## useState
- Example: https://reactjs.org/docs/hooks-state.html

**Example useState**
```js
//App.js
import { useState } from "react";

function App() {

  const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false);

  function handleButtonClick(){
    setHasUserClickedOnButton(true);
  }

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
```

## useEffect
- Example: https://reactjs.org/docs/hooks-effect.html
- Exemplo: app_02

**Example useEffect**
```js
//App.js
import { useState, useEffect } from "react";

function App() {

  const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false);

  function handleButtonClick(){
    setHasUserClickedOnButton(!hasUserClickedOnButton);
  }

  useEffect(() => {
    console.log(hasUserClickedOnButton);
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
```










##



##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

  ##