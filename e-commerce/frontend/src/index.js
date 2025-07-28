import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShopContext } from './context/ShopContext';
import ShopContextProvider from './context/ShopContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopContext.Provider>
    <App />
    </ShopContext.Provider>
);
reportWebVitals();
