import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {pages} from './helpers';
import {Forms} from './pages';
import {EThemes} from './store/models/main';
import logo from "./images/Group1.svg"
import National from "./pages/National/National";

function App() {
  const [theme, setTheme] = useState(EThemes.Classic);

  const Form = Forms[theme];

  const handleChangeTheme = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as EThemes)
  }

  function openClassic() {
    setTheme(EThemes.Classic)
  }

  function openAquarell() {
    setTheme(EThemes.Aquarell)
  }

  function openGold() {
    setTheme(EThemes.Gold)
  }

  function openBlackAndWhite() {
    setTheme(EThemes.BlackAndWhite)
  }

  function openModern() {
    setTheme(EThemes.Modern)
  }

  function openNational() {
    setTheme(EThemes.National)
  }

  return (
      <div className="App">
        <div className="selector_box">
          <img src={logo} alt="logo"/>
          <div className="selectTheme">
            <button onClick={openClassic}>Классика</button>
            <button onClick={openBlackAndWhite}>ЧБ</button>
            <button onClick={openGold}>Золото</button>
            <button onClick={openNational}>Национальный</button>
            <button onClick={openModern}>Модерн</button>
            <button onClick={openAquarell}>Акварель</button>
          </div>
          <a className="mobilePhone" href="tel:+79999999999">+7999 999-99-99</a>
        </div>
        {/*<select onChange={handleChangeTheme} value={theme}>*/}
        {/*  {pages.map((page) => (*/}
        {/*    <option*/}
        {/*      key={page.value}*/}
        {/*      value={page.value}*/}
        {/*      selected={theme === page.value}*/}
        {/*    >*/}
        {/*      {page.name}*/}
        {/*    </option>*/}
        {/*  ))}*/}
        {/*</select>*/}
        <Form/>
      </div>
  );
}

export default App;
