import React from 'react';

function AboutUs() {
  return (
    <>
      <section className="about-us" id="about-us">
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
          </svg>
          Somos una institución dedicada a enseñar todo lo que necesitas saber para desarrollarte en el ámbito de la <span className="red-span">Salud</span>
        </p> 
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
          </svg>
          Contamos con más de 40 años de trayectoria brindando conocimientos que salvan vidas!
        </p>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
          </svg>
          Ofrecemos capacitaciones con certificación propia, avalada por el ministerio de educación de la provincia de Córdoba y matriculación válida a nivel Nacional
        </p>
      </section>

      <article className="maps">
        <span className="maps-span">Encontranos en Córdoba!</span>
        <iframe
          className="ubication"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.019563336753!2d-64.18715932459857!3d-31.41358707426308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a282beee6753%3A0xe2c1a581a9756aa7!2sRivera%20Indarte%20175%2C%20X5003%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1722124015904!5m2!1ses!2sar"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </article>
    </>
  );
}

export default AboutUs;
