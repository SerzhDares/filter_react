import React from 'react';
import "../App.css";
import cn from "classnames";

export default function Toolbar({filters, selected, onSelectFilter}) {

  return (
      <div className="toolbar">
        {[...filters].map(filter => (
          <button key={filter.key} 
          className={cn({"active_button": selected === filter.name})}
          onClick={() => onSelectFilter(filter.name)}>
            {filter.name}
          </button>
        ))}
      </div>
  )
}

