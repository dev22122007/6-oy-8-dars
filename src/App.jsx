import { useEffect, useState } from 'react';
import './App.css'
import image from './assets/Emoji.svg'
import translationEn from './components/en/function.js'
import translationUz from './components/uz/function.js'
import translationRu from './components/ru/function.js'
import { Vortex } from "react-loader-spinner"
import image1 from './assets/Group 1.png'
import { NavLink } from 'react-router-dom'
import i18next from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next'

 let language = localStorage.getItem("change")?JSON.parse(localStorage.getItem("change")):"en";

i18next.use(initReactI18next).init({
  resources:{
    en: {translation: translationEn}, 
    uz: {translation: translationUz},
    ru: {translation: translationRu}
  },
  lng:`${language}`,
  fallbackLng:'en'
})


function App() {
  const [darkLight, setDarkLight] = useState(JSON.parse(localStorage.getItem("dark")))
  const [isLoading, setIsLoading] = useState(true)
  const changeLang = (value) => {i18next.changeLanguage(value)};
  const {t} = useTranslation();

  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  useEffect(() => {
    setDarkLight(darkLight)
  }, [])

  function darkMode(e) {
    e.preventDefault();
    let dark = []; 
    if (localStorage.getItem("dark")) {
      dark = JSON.parse(localStorage.getItem("dark"));
    }

    let darkLights;
    if (JSON.parse(localStorage.getItem("dark")) == "darkMode") {
      darkLights = ''
      localStorage.setItem("dark", JSON.stringify(darkLights));
      setDarkLight(darkLights)
    } else {
      darkLights = 'darkMode'
      localStorage.setItem("dark", JSON.stringify(darkLights));
      setDarkLight(darkLights)
    }

  }

  function changeLangHandler(e) {
    localStorage.setItem("change", JSON.stringify(e.target.value));
    changeLang(e.target.value);
  }
  
  return (
    <>
    <main id={isLoading  && 'main'} className={darkLight}>
   
    {isLoading && <Vortex
  visible={true}
  height="100"
  width="100"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'red', 'blue', 'blue', 'orange', 'orange']}
  />}
    
    {!isLoading && <div className="container">
      <nav className='navbar'>
        <div className="actions">
          <button className='nav-dark' onClick={darkMode}>{t("dark")}</button>
          <select onChange={changeLangHandler} className='select' name="languages" id="languages">
            <option defaultChecked className="language" value="en">English</option>
            <option className="language" value="uz">Uzbek</option>          
            <option className="language" value="ru">Russian</option>          
          </select>
        </div>
        <ul>
          <NavLink to="/">{t("about")}</NavLink>
          <NavLink to="/skills">{t("skills")}</NavLink>
          <NavLink to="/project">{t("project")}</NavLink>
          <NavLink to="/contact">{t("contact")}</NavLink>
        </ul>
      </nav>
      <div className="hero">
        <div className="hero-text">
           <h1> {t("hi")} <img src={image} alt="emoji image" /> ,<br /> {t("charles")}, <br /> {t("dev")}</h1>
           <p>{t("herotext")}</p>
           <div className="buttons">
            <a href="#" className="hire">{t("hire")}</a>
            <a href="#" className="projects">{t("projectB")}</a>
           </div>
        </div>
        <img className='hero-image' src={image1} alt="hero image" />
      </div>
     </div>}
    </main>
    </>
  )
}

export default App