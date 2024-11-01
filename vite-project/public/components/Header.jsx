import React from 'react';

function Header() {
  return (
    <header>
      <h2 className="fixed">SALVANDO VIDAS - SV</h2>
      <h1 className="title">Aprendé a salvar vidas</h1>
      <div className="nav-container">
        <nav>
          <ul>
            <li id="index">
              <a href="#index">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-up-right-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
                </svg> Inicio
              </a>
            </li>
            <li>
              <a href="WEB/HTML1/cards.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
                </svg> Cursos online
              </a>
            </li>
            {/* Add other nav links similarly */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
