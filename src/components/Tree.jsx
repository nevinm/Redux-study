import React, { useState } from "react";
import { useCallback } from "react";

export const Tree = React.memo(({ data }) => {
  const [isNodeOpen, setIsNodeOpen] = useState({});

  const handleClick = useCallback((id) => {
    setIsNodeOpen((prevState) => {
      return {
        ...prevState,
        [id]: !prevState[id],
      };
    });
  });

  return (
    <>
      {data.map((node) => {
        const { id, label, children } = node;

        return (
          <ul key={id}>
            <div className="open-sesame" onClick={() => handleClick(id)}>
              <span>{label}</span>
              {children ? (isNodeOpen[id] ? "-" : "+") : ""}
            </div>
            {children && isNodeOpen[id] && <Tree data={children} />}
          </ul>
        );
      })}
    </>
  );
});
