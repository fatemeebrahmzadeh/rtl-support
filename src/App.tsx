import React from 'react';
import './App.scss';
import useRTL, { RTLContext } from './hooks/useRTL';
import ToggleRTL from './ToggleRTL';

function App() {
  const [isRTL, setIsRTL] = useRTL();
  const greetText = isRTL ? '!مرحبا بالعالم' : 'Hello world!';
  return (
    <RTLContext.Provider value={{ value: isRTL, setValue: setIsRTL }}>
      <div className='App'>
        <div className='App-paragraph'>
        <h3 className='App-paragraph-1'>{greetText}</h3>
        <h3 className='App-paragraph-2'>test</h3>
        </div>
        <ToggleRTL />
      </div>
    </RTLContext.Provider>
  );
}

export default App;
