import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="container mt-4">
      {/* menu principal */}
      <nav className="d-flex navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand logo-menu" href="#">
            <figure className="col-md-6 my-5">
              <img src="./images/logosmart.png" alt="Imagem de um relógio" className="img-fluid efeito-fotos" />
            </figure>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-text-right"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-center nav-link" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Smart Light
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Conheça
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Seja um parceiro
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Segmentos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Atendimento
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Button className="btn btn-primary my-3 color-smartlight efeito-button">
                  Entrar em sua conta
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
