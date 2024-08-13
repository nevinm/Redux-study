import React, { useState, useEffect } from "react";

export const Accordion = ({ data }) => {
  const [activeId, setActiveId] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <ul>
        {data.map(({ id, title, content }) => {
          const isActive = id === activeId;

          console.log("isActive -->", isActive);
          return (
            <li
              className="accordion-item"
              onClick={() => handleAccordionClick(id)}
              key={id}
            >
              <h3>{title}</h3>
              {isActive && <p>{content}</p>}
            </li>
          );
        })}
      </ul>
    </>
  );
};
