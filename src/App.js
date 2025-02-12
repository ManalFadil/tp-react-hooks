import React, { createContext, useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';  
import ProductContainer from './components/ProductContainer';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector'; 

export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {/* Envelopper tout avec LanguageProvider */}
      <LanguageProvider>
        <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
          <header className="my-4">
            <h1 className="text-center">Catalogue de Produits</h1>
            <div className="d-flex justify-content-end gap-2">
              <ThemeToggle />
              {/* Ajoute ici le sélecteur de langue */}
              <LanguageSelector /> 
            </div>
          </header>
          <main>
  <ProductContainer />
</main>
        </div>
      </LanguageProvider>
    </ThemeContext.Provider>
  );
};

export default App;
