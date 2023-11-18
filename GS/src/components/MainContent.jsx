import React from 'react';
import { title, description } from '../assets/texts';

const MainContent = () => {
  return (
    <main>
      <img src="/images/mainImage.jpg" alt="Imagem Principal" />
      <div className="main-content">
        <div className="main-left">
          <h2>{title}</h2>
        </div>
        <div className="main-right">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;