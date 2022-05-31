import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import '../src/style.css'
import App from "./App";
;

const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App /> 

  </React.StrictMode>
);
