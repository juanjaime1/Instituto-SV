import React from 'react';
import CourseCard from './CourseCard';
import rcp from './IMG/Curso-RCP-Bomberos2022.jpg';
import primerosaux from './IMG/primerosauxilios640.jpg';
import facturacion from './IMG/facturacion.jpg';

function CourseList() {
  const courses = [
    {
      image: rcp, 
      altText: "RCP curso",
      title: "Curso RCP Completo",
      description: "Aprendelo en sólo 3 meses! 1 clase semanal, durante 12 semanas de capacitación",
      detailsLink: "WEB/HTML1/cards.html"
    },
    {
      image: primerosaux,
      altText: "Paramédico profesional",
      title: "Curso de Paramédico Profesional",
      description: "Aprendelo en sólo 30 meses! 1 clase semanal, durante 130 semanas de capacitación",
      detailsLink: "WEB/HTML1/cards.html"
    },
    {
      image: facturacion,
      altText: "Facturación Médica",
      title: "Curso de Facturación Médica",
      description: "En este curso aprenderás a interpretar documentos médicos, obras sociales, y más.",
      detailsLink: "WEB/HTML1/cards.html"
    }
  ];

  return (
    <section className="mas-vendidos">
      <h2>LOS MÁS ELEGIDOS</h2>
      <hr />
      <article className="contenedor-cursos">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            altText={course.altText}
            title={course.title}
            description={course.description}
            detailsLink={course.detailsLink}
          />
        ))}
      </article>
    </section>
  );
}

export default CourseList;
