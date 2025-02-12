import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Valeur par défaut: français

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
