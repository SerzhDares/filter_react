import React from 'react';
import "../App.css";

export default function ProjectList({projects}) {
  return (
    <div className="display_projects">
        {[...projects].map(({key, img, category}) => (
            <img key={key} src={img} alt={category} />
        ))}
    </div>
  )
}

