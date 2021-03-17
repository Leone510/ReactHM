import React, {useReducer} from 'react';
import './styles/normalize.css';
import './App.css';
import './styles/style.css';
import Step from './components/step'
import {storageStates, reducer} from './store/reducer';
import {StoreContext} from './store/context';

function App() {
  const [storage, dispatch] = useReducer(reducer, storageStates);

  return (
    <StoreContext.Provider value={{storage, dispatch}}>
      <div className="App">
        <header/>
        <main>
          <Step/>
        </main>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
