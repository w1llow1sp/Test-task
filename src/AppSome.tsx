import React, {ChangeEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import images
import RU from './assets/flags/RU.png'
import EN from './assets/flags/EN.png'
import EN1 from './assets/flags/EN1.png'
import DE from './assets/flags/DE.png'
import IT from './assets/flags/IT.png'
import PL from './assets/flags/PL.png'
import ARROW from './assets/arrow.svg'
// add uuid
import {v1} from 'uuid'
//

export type LangugesType = {
  id:string,
  picture:string
  lang:string
  isSelect:boolean
}

function App() {
  // create states

  const [languages, setLanguages] = useState<Array<LangugesType>>([
    {id:v1(), picture:RU, lang:'Русский', isSelect:false},
    {id:v1(), picture:EN, lang:'Английский', isSelect:true},
    {id:v1(), picture:EN1, lang:'Английский', isSelect:false},
    {id:v1(), picture:DE, lang:'Немецкий', isSelect:true},
    {id:v1(), picture:IT, lang:'Итальянский',isSelect:false},
    {id:v1(), picture:PL, lang:'Польский', isSelect:false}
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const [isShow, setIsShow] = useState<boolean>(true);
  const [isIconFlipped, setIsIconFlipped] = useState<boolean>(false);

  //ФУНКЦИИ ДЛЯ languages

  //Функция для переключения isShow
  const selectToggler = (ID:string,newSelect:boolean) => {
    setLanguages([...languages.map(lang => lang.id ===ID ? {...lang,isSelect:newSelect} : lang )])
  }
  //Функция для поиска
  const filteredLanguages = languages.filter((lang) =>
      lang.lang.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //мапим то, что пришло с isSelect === true
  const selectedLanguages = languages
      .filter(lang => lang.isSelect)
      .map(lang => (<span>{lang.lang}</span>));

  //отмапленный стейт
  const mappedLanguages = filteredLanguages.map((lang) => {
    const inputToggler = (e:ChangeEvent<HTMLInputElement>) => {
      selectToggler(lang.id,e.currentTarget.checked)
    }
    return (
        <div key={lang.id}>
          <img src={lang.picture} alt={lang.lang}/>
          <span>{lang.lang}</span>
          <input type={'checkbox'} checked={lang.isSelect} onChange={inputToggler}/>
        </div>
    )

  })

  const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const VisibilityToggler = () => {
    setIsShow(!isShow)
    setIsIconFlipped(!isIconFlipped);
  }

  return (
    <div className="App">
      <div className={'dropdownHeader'}>
        <span></span>
        <button onClick={VisibilityToggler} className={'button'}>
          <span className={`icon ${ isIconFlipped ? 'flipped' : ''}`}/>

        </button>
        {selectedLanguages}
      </div>
      {isShow === true
          ? <div className={'dropdownBody'}>
            <div className="searchBar">
              <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Поиск по имени"
              />
            </div>
            {mappedLanguages}
          </div>
          : <div></div>
      }
    </div>
  );
}

export default App;
