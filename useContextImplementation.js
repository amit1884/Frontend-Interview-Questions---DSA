

// CounterProvider.js
import React, { useState } from 'react';
import { createContext } from 'react';
export const CounterContext = createContext();


const CounterProvider = ({ children }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => setCount1(prev => prev + 1);
  const incrementCount2 = () => setCount2(prev => prev + 1);

  return (
    <CounterContext.Provider
      value={{
        count1,
        count2,
        incrementCount1,
        incrementCount2,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
// Button1.js
import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Button1 = () => {
  const { count1, incrementCount1 } = useContext(CounterContext);

  return (
    <button onClick={incrementCount1}>
      Button 1 Count: {count1}
    </button>
  );
};

export default Button1;


// Button2.js
import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Button2 = () => {
  const { count2, incrementCount2 } = useContext(CounterContext);

  return (
    <button onClick={incrementCount2}>
      Button 2 Count: {count2}
    </button>
  );
};

export default Button2;


// App.js
import React from 'react';
import CounterProvider from './CounterProvider';
import Button1 from './Button1';
import Button2 from './Button2';

const App = () => {
  return (
    <CounterProvider>
      <div style={{ padding: '20px' }}>
        <h2>Shared Counter via useContext</h2>
        <Button1 />
        <br /><br />
        <Button2 />
      </div>
    </CounterProvider>
  );
};

export default App;
