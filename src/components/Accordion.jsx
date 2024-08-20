import React, { useState, useEffect } from "react";

export const Accordion = ({ data }) => {
  const [isActiveId, setIsActiveId] = useState(false);

  const handleClick = (id) => {
    const value = isActiveId === id ? null : id;
    setIsActiveId(value);
  };

  return (
    <ul>
      {data.map((node) => {
        const { id, title, content } = node;

        return (
          <li key={id}>
            <span className="open-sesame" onClick={() => handleClick(id)}>
              {title}
            </span>
            {isActiveId === id && <span>{content}</span>}
          </li>
        );
      })}
    </ul>
  );
};
