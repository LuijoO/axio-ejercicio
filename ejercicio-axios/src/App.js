import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <div className="top-border" aria-hidden="true" />
        <div className="header-inner">
          <a href="/" className="brand" aria-label="Astebece2">
            <span className="brand-text">Astebece2</span>
            <span className="brand-icon" aria-hidden="true" />
          </a>

          <nav className="primary-nav" aria-label="Navegación principal">
            <ul>
              <li className="nav-item nav-home">
                <a href="/" aria-label="Inicio">
                  <span className="home-icon" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item">
                <details className="nav-dropdown">
                  <summary>
                    Patologías
                    <span className="chevron" aria-hidden="true" />
                  </summary>
                  <ul className="dropdown-menu">
                    <li><a href="/patologias/dermatologicas">Dermatológicas</a></li>
                    <li><a href="/patologias/respiratorias">Respiratorias</a></li>
                    <li><a href="/patologias/cardiovasculares">Cardiovasculares</a></li>
                  </ul>
                </details>
              </li>
              <li className="nav-item"><a href="/cursos">Cursos</a></li>
              <li className="nav-item"><a href="/eventos">Eventos</a></li>
              <li className="nav-item"><a href="/servicios">Servicios</a></li>
              <li className="nav-item">
                <details className="nav-dropdown">
                  <summary>
                    Productos
                    <span className="chevron" aria-hidden="true" />
                  </summary>
                  <ul className="dropdown-menu">
                    <li><a href="/productos/nuevos">Nuevos lanzamientos</a></li>
                    <li><a href="/productos/favoritos">Más vendidos</a></li>
                    <li><a href="/productos/promociones">Promociones</a></li>
                  </ul>
                </details>
              </li>
              <li className="nav-item"><a href="/actualidad">Actualidad</a></li>
            </ul>
          </nav>

          <div className="header-utilities">
            <a className="utility-link" href="/contacto">
              <span className="utility-icon icon-inbox" aria-hidden="true" />
              Contacto 24
            </a>
            <a className="utility-link" href="/garantias">
              <span className="utility-icon icon-shield" aria-hidden="true" />
              Garantías
            </a>
            <button className="avatar-button" type="button" aria-label="Perfil">
              <span className="avatar" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
