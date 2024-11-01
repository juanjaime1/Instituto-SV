import React from 'react';

function CourseCard({ image, altText, title, description, detailsLink }) {
  return (
    <div className="cards">
      <a href={detailsLink}>
        <img src={image} alt={altText} />
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
    </div>
  );
}

export default CourseCard;
