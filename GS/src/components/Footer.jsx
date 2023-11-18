import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Texto no rodapé</p>
      <div className="footer-content">
        <div className="footer-image">
          <img src="/images/image1.jpg" alt="Imagem 1" />
          <p>Texto 1</p>
        </div>
        <div className="footer-image">
          <img src="/images/image2.jpg" alt="Imagem 2" />
          <p>Texto 2</p>
        </div>
        <div className="footer-image">
          <img src="/images/image3.jpg" alt="Imagem 3" />
          <p>Texto 3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;