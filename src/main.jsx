import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import Home  from './containers/Home';
import Sobre from './containers/Sobre'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Home />
    <Sobre />
  </StrictMode>
);
