import React, { useState } from "react";
import { useCallback } from "react";

const Star = React.memo(
  ({ selected = false, hovered = false, onClick, onMouseOut, onMouseOver }) => {
    const activeStar = "★";
    const hoveredStar = "✭";
    const nonSelectedStar = "☆";

    const starDisplay = selected
      ? activeStar
      : hovered
      ? hoveredStar
      : nonSelectedStar;

    return (
      <div
        className="star"
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      >
        {starDisplay}
      </div>
    );
  }
);

export const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = useCallback((index) => {
    setRating(index + 1);
  }, []);

  const handleHover = useCallback((index) => {
    setHover(index + 1);
  }, []);

  const handleHoverOut = useCallback(() => {
    setHover(0);
  }, []);

  return (
    <div className="star-container">
      {Array(totalStars)
        .fill(undefined)
        .map((_, index) => {
          return (
            <Star
              key={index}
              onClick={() => handleClick(index)}
              onMouseOver={() => handleHover(index)}
              onMouseOut={handleHoverOut}
              selected={rating > index}
              hovered={hover > index}
            />
          );
        })}
    </div>
  );
};
