import React, { useEffect, useState } from 'react';
import './App.css';
import 'carbon-components/css/carbon-components.css';
import { CustomForm } from './components/form';
import { HeaderBaseWNavigation } from './components/HeaderBar';
import { CustomDataTable } from './components/CustomDataTable';

interface AppProps {
}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <HeaderBaseWNavigation />
      <CustomForm />
      <hr />
      <CustomDataTable />

    </div>
  );
}

export default App;
