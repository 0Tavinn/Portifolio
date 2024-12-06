import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sobre() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : ''}`}>
      {/* Resto do seu conteúdo, utilizando as classes do Bootstrap */}
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default Sobre;

