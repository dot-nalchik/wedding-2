import React, { ChangeEvent, useState } from 'react';
import './App.css';
import { pages } from './helpers';
import { Forms } from './pages';
import { EThemes } from './store/models/main';

function App() {
  const [theme, setTheme] = useState(EThemes.Classic);

  const Form = Forms[theme];

  const handleChangeTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as EThemes)
  }
  
  return (
    <div className="App">
      <select onChange={handleChangeTheme} value={theme}>
        {pages.map((page) => (
          <option
            key={page.value}
            value={page.value}
            selected={theme === page.value}
          >
            {page.name}
          </option>
        ))}
      </select>

      <Form />
    </div>
  );
}

export default App;
