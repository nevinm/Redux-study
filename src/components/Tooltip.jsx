import { useState } from "react";

export const ToolTip = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const hoverHandle = () => {
    setIsVisible(true);
  };

  const hoverOut = () => {
    setIsVisible(false);
  };

  console.log("isVisible -->", isVisible);
  return (
    <>
      <div
        onMouseOver={hoverHandle}
        onMouseLeave={hoverOut}
        className="tooltip-container"
      >
        {isVisible && (
          <div className="tooltip">
            <span>Random tool tip appears</span>
          </div>
        )}
        {children}{" "}
      </div>
    </>
  );
};

export const ToolTipHeading = () => {
  return (
    <ToolTip>
      <h1>Hover for tooltip</h1>
    </ToolTip>
  );
};
