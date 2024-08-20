import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseOver = (index) => {
    setHover(index + 1);
  };

  const handleMouseOut = () => {
    setHover(0);
  };

  const renderStars = () => {
    return Array(totalStars).fill(0).map((_, index) => {
      return (
        <>
          <Star
            hovered={index < hover}
            selected={index < rating}
            onClick={() => handleClick(index)}
            onMouseOut={handleMouseOut}
            onMouseOver={() => handleMouseOver(index)}
          />
        </>
      );
    });
  };

  return <div className="star-container">{renderStars()}</div>;
};

const Star = ({
  selected = false,
  hovered = false,
  onClick,
  onMouseOver,
  onMouseOut,
}) => {
  const activeStar = "★";
  const disabledStar = "☆";
  const hoveredStar = "✭";

  const starSymbol = hovered
    ? hoveredStar
    : selected
    ? activeStar
    : disabledStar;

  console.log("starSymbol -->", starSymbol);
  return (
    <div
      style={{
        cursor: "pointer",
        fontSize: "2rem",
        transition: "transform 0.2s ease-in-out",
      }}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {starSymbol}
    </div>
  );
};

export default StarRating;
