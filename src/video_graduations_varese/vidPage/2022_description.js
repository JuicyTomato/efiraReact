import React from 'react';
import './style.css';

const LaureaPage = () => {
  return (
    <div>
      {/* nav */}
      <div className="nav">
        <a href="../../index.html">
          <button className="photos_trasparent_button">
            <img className="nav__logo" src="../../images/00_general/logoEfira.png" alt="" />
          </button>
        </a>

        <button className="avatar_button menu-btn">
          <i className="fas fa-bar">
            <a href="../../easter_eggs/avatarChoice.html">
              <img className="nav__avatar" src="../../images/00_general/netflix-avatar.png" alt="" />
            </a>
          </i>
        </button>
        {/* Rimuovi l'immagine easter egg sopra se non è necessaria */}
      </div>

      {/* header */}
      <header className="banner_2022">
        <div className="banner__contents">
          <h1 className="banner__title">Laurea 2022</h1>

          {/* Descrizione sopra */}
          {/* Sarebbe da cambiare font */}
          <h1 className="upper_banner_description">
            Questo è un video per la descrizione di un cuore, nostalgico di amori e tragedie...
          </h1>

          <div className="banner_play_buttons">
            <a href="../play/laurea_varese_2022.html">
              <button className="play_button">▶ Play</button>
            </a>

            <a href="../trailer/trailer_laurea_varese_2022.html">
              <button className="banner__button">Trailer</button>
            </a>
          </div>

          <h1 className="banner__description">
            Cast: Quelli che vedete<br />
            Regia: Pure<br />
            Materiale: Comprato apposta<br />
            Special guests: Achille<br />
          </h1>
        </div>

        <div className="banner--fadeBottom"></div>
      </header>

      {/* Aggiungi il resto del tuo HTML qui */}

      {/* Sito foot */}
      <div style={{ textAlign: 'center' }}>
        <span className="foot_phrase" style={{ color: 'white' }}>
          Efira® è un prodotto originale Efira Entertainment®
        </span>

        <br />
      </div>
    </div>
  );
};

export default LaureaPage;
