import React, { useEffect } from 'react';
import './style.css';

//Per la navigazione
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



//impot images
import logoEfira from './images/00_general/logoEfira.png';
import bell from "./images/00_general/bell.png"
import avatar from "./images/00_general/netflix-avatar.png"


//posters importati
import { generateEfiraOriginalsArray, generateVaresegraduations, generateSaccoGraduations, generatePodcasts, 
  generatePolicSanpa, generateHumanitas, generatesettoreSanRaffa, generateMonza, generateNovara, generateBrescia, 
  generatePavia } from './posters.js';
import LaureaPage from './video_graduations_varese/vidPage/2022_description.js';


//const dichiarate per posters importati
const efiraOriginalsArray = generateEfiraOriginalsArray();
const vareseGraduations = generateVaresegraduations();
const saccoGraduations = generateSaccoGraduations();
const podcast = generatePodcasts();

const policSanpa = generatePolicSanpa();
const humanitas = generateHumanitas();
const settoreSanRaffa = generatesettoreSanRaffa();
const monza = generateMonza();
const novara = generateNovara();
const brescia = generateBrescia();
const pavia = generatePavia();



function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav');
      if (window.scrollY >= 100) {
        nav.classList.add('nav__black');
      } else {
        nav.classList.remove('nav__black');
      }
    };

    // Aggiungi il listener per lo scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Rimuovi il listener quando il componente si smonta
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  /*const handleAvatarButtonClick = () => {
    toggleSidebar(true);
  };*/

  const handleCloseButtonClick = () => {
    toggleSidebar(false);
  };

  const toggleSidebar = (active) => {
    const sideBar = document.querySelector('.side-bar');
    sideBar.classList.toggle('active', active);
  };

  // Script per far muovere il dropdown menu avatar
  document.addEventListener('DOMContentLoaded', function () {
    const avatarButton = document.querySelector('.avatar_button');
    const closeButton = document.querySelector('.close-btn');

    avatarButton.addEventListener('click', () => toggleSidebar(true));
    closeButton.addEventListener('click', () => toggleSidebar(false));
  });



  const Row = ({ title, posters }) => (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {posters.map((poster, index) => (
          <a key={index} href={poster.link}>
            <button className={poster.buttonClass}>
              <img className={poster.imageClass} src={poster.imageSrc} alt="" />
            </button>
          </a>
        ))}
      </div>
    </div>
  );
  
  
  
  const rowsData = [
    {
      //array posters verticali
      title: "EFIRA ORIGINALS",
      posters: efiraOriginalsArray
    },
    {
      title: "Podcasts",
      posters: podcast
    },
    {
      title: "Varese's Graduations",
      posters: vareseGraduations
    },
    {
      title: "Sacco's Graduations",
      posters: saccoGraduations
    },
    {
      title: "Polic-sanpa's Graduations",
      posters: policSanpa
    },
    {
      title: "Humanitas' Graduations",
      posters: humanitas
    },
    {
      title: "Settore-San Raffa's Graduations",
      posters: settoreSanRaffa
    },
    {
      title: "Monza's Graduations",
      posters: monza
    },
    {
      title: "Novara's Graduations",
      posters: novara
    },
    {
      title: "Brescia's Graduations",
      posters: brescia
    },
    {
      title: "Pavia's Graduations",
      posters: pavia
    }
  ];

  
  return (



//Qui aggiunto per navigazione... Uso NAVIGATE?

//Se togli fino a </Switch> funziona (Anche <Router> in fondo è da togliere)

<Router>
<Link to="/video_graduations_varese/vidPage/2022_description.js">
        <button className="photos_trasparent_button_little">
          <img className="row__poster" src={laureeVarese2022} alt="" />
        </button>
      </Link>

      {/* bla bla bla*/}

      <Switch>
        {/* altre Routeszszszszsz*/}
        
        {/* Prova */}
        <Route path="/video_graduations_varese/vidPage/2022_description.js">
          
        </Route>
      </Switch>






    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Efira Entertainment</title>
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          charSet="utf-8"
        ></script>
      </head>
      <body>
        <div id="nav" className="nav">
          <a href="index.html">
            <button className="photos_trasparent_button">
              <img
                className="nav__logo"
                src={logoEfira}
                alt=""
              />
            </button>
          </a>

          <div>
            <div className="dropdown">
              <button className="dropbtn">
                <img
                  className="nav__avatar bell_position"
                  src={bell}
                  alt=""
                />
              </button>
              <div className="dropdown-content" style={{ right: 0 }}>
                <a href="#">
                  AVVISO<br />
                  Il sito è ancora Work in progress... Per qualsiasi errore
                  sentire Pepe detto Peto
                </a>
              </div>
            </div>

            <img
              className="nav__avatar"
              src={avatar}
              alt=""
            />

            <div className="side-bar">
              <div className="close-btn" onClick={handleCloseButtonClick}>
                <i className="fas fa-times"></i>
              </div>

        {/*Il menù a tendina che esce... Non la uso, ma nel caso*/}
              {/*<div className="menu">
                <div className="item">
                  <a className="sub-btn">
                    <i className="fas fa-table"></i>Table
                    <i className="fas fa-angle-right dropdown"></i>
                  </a>
                  <div className="sub-menu">
                    <a href="#" className="sub-item">
                      2018
                    </a>
                    <a href="#" className="sub-item">
                      2019
                    </a>
                    <a href="#" className="sub-item">
                      2020
                    </a>
                    <a href="#" className="sub-item">
                      2021
                    </a>
                  </div>
                </div>
                <div className="item">
                  <a href="/dashboard/settings/settings.html">
                    <i className="fas fa-cogs"></i>Settings
                  </a>
                </div>
                <div className="item">
                  <a href="dashboard/about/about.html">
                    <i className="fas fa-info-circle"></i>Buy me a cofee
                  </a>
                </div>
                <div className="item">
                  <a href="dashboard/about/about.html">
                    <i className="fas fa-info-circle"></i>About
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <header className="banner">
          <div className="banner__contents">
            <h1 className="banner__title">Productions</h1>
            <div className="banner__buttons">
              <a href="photos_collections/photosButton.html">
                <button className="banner__button">Foto vacanzine</button>
              </a>
              <a href="#">
                <button className="banner__button">Foto prepost</button>
              </a>
            </div>
            <h1 className="banner__description">
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Integer eu neque aliquam,
              <br />
              vestibulum diam vitae, porta odio.
              <br />
              Nam felis ante, sodales vehicula libero eu, iaculis...
            </h1>
          </div>
          <div className="banner--fadeBottom"></div>
        </header>

        {/* Altri componenti HTML qui */}


{/* map posters e titoli */}
<div>
      {rowsData.map((rowData, index) => (
        <Row key={index} title={rowData.title} posters={rowData.posters} />
      ))}
    </div>


{/* Scrittina finale */}
        <div style={{ textAlign: 'center' }}>
          <span className="foot_phrase" style={{ color: 'white' }}>
            Efira® è un prodotto originale Efira Entertainment®
          </span>
          <br />
        </div>
        
      </body>      
    </div>





</Router>
  );
}

export default App;