import React from 'react';

function Header() {
  return (
    <header id="inicio">
      <h1>Como sobreviver em qualquer planeta</h1>

      <p>Seu modo mais hard começa aqui</p>

      <nav aria-label="Navegação principal">
        <ul>
          <li>
            <a href="#inicio">Início</a>
          </li>

          <li>
            <a href="#tecnicas">Técnicas</a>
          </li>

          <li>
            <a href="#equipamentos">Equipamentos</a>
          </li>

          <li>
            <a href="#abrigo">Abrigo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;