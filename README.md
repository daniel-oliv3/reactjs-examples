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


## useState
- Example: https://reactjs.org/docs/hooks-state.html












##



##

- By:  **Daniel Oliveira**

  - `Instagram` - https://www.instagram.com/danieloliv3/
  - `Facebook` - https://web.facebook.com/danielsapup3/
  - `Twitter` - https://twitter.com/danielsapup3/
  - `Linkedin` - https://www.linkedin.com/in/danielsapup3/

  ##