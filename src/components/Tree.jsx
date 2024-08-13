import React, { useState } from "react";
import { Children } from "react";

export const Tree = ({ data }) => {
  console.log("data -->", data);

  return (
    <>
      {data.map((currentNode) => {
        const { label, id, children } = currentNode;
        const [isOpen, setIsOpen] = useState(false);

        const openNode = () => {
          setIsOpen((prevState) => !prevState);
        };

        return (
          <ul key={id}>
            <p onClick={openNode} style={{ cursor: "pointer" }}>
              {label}
              {children && isOpen ? "-" : "+"}
            </p>
            {children && isOpen && (
              <li>
                <Tree data={children} />
              </li>
            )}
          </ul>
        );
      })}
    </>
  );
};
