import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Sobre(){
  
    return(
        <div className="d-flex flex-column align-items-center text-center bg-dark text-white p-5 vh-100">
        <h1 className="display-4 fw-bold">Olá sou Otávio</h1>
        <p className="fs-4">Full-stack developer from Brazil.</p>
        <div className='display-6 fw-bold '><p>Alguém..</p></div>
        <div className="mt-auto">
          <p>Scroll</p>
          <i className="bi bi-arrow-down fs-3"></i>
        </div>
      </div>
   
    )
}

export default Sobre;