import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, switchLanguage } = useContext(LanguageContext);  
  
  return (
    <div>
      <select value={language} onChange={(e) => switchLanguage(e.target.value)}>
        <option value="fr">Fr</option>
        <option value="en">Eng</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
