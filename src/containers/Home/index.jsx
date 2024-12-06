import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter } from "react-router";



function Home(){
  
    return(
      <div className="d-flex flex-column bg-dark text-white vh-100 p-4">
        <i className="bi bi-arrow-down fs-3"></i>
      {/* Seção Esquerda */}
      <div
        className="position-absolute text-start p-4 m-5"
        style={{ bottom: "0", left: "0" }}
      >
        <h1 className="p-1 mb-2 text-uppercase fw-bold">Otávio</h1>
        <p>Luiz Otávio<br />Portfólio</p>
        <div className="d-flex gap-3">
          <button className="btn btn-outline-light">
            <i className="bi bi-github"></i>
          </button>
          <button className="btn btn-outline-light">
            <i className="bi bi-instagram"></i>
          </button>
          <button className="btn btn-outline-light">
            <i className="bi bi-linkedin"></i>
          </button>
        </div>
      </div>

      {/* Navegação com Texto na Vertical */}
<nav className="container text-center position-relative">
  <div className=" justify-content-end">
    <a
      href="#inicio"
      className="text-decoration-none text-white position-absolute text-uppercase fw-bold p-1 mb-2"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        top: "400px", // Ajusta para o meio da tela
        left: "35%", // Alinhado à direita
      }}
    >
      Início
    </a>
    <a
      href="#sobre"
      className="text-decoration-none text-white position-absolute text-uppercase fw-bold p-1 mb-2"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        top: "400px", // Um pouco abaixo
        left: "50%",
      }}
    >
      Sobre
    </a>
    <a
      href="#portifolio"
      className="text-decoration-none text-white position-absolute text-uppercase fw-bold p-1 mb-2"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        top: "400px", // Mais abaixo
        left: "65%",
      }}
    >
      Portfólio
    </a>
    <a
      href="#projetos"
      className="text-decoration-none text-white position-absolute text-uppercase fw-bold p-1 mb-2"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        top: "400px",  // Próximo ao final
        left: "80%",
      }}
    >
      Projetos
    </a>
    <a
      href="#contato"
      className="text-decoration-none text-white position-absolute text-uppercase fw-bold p-1 mb-2"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        top: "400px", // Perto do rodapé
        left: "95%",
      }}
    >
      Contato
    </a>
  </div>
</nav>

    </div>


  );
}


export default Home;