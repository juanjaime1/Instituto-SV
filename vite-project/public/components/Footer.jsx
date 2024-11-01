import React from 'react';

function Footer() {
  return (
    <footer className="footer-container" id="contact">
      <div>
        <h3 className="datos-contacto">Datos de contacto</h3>
        <hr />
        <ul className="linea-contacto">
          <li>
            <a href="tel:0800-123-4567">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
              Teléfono 0800-123-4567
            </a>
          </li>
        </ul>
      </div>
      <div className="copy-div">
        <p className="copy">Copyright © Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
