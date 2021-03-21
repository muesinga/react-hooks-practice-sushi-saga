import React, { useState } from "react";

function Sushi({id, name, img, price, setCurrentSushiPrice}) {
  const [emptyPlate, setEmptyPlate] = useState(false)

  function clearPlate(e) {
    setEmptyPlate(true);
    setCurrentSushiPrice(e.target.title)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={(e) => clearPlate(e)}>
        {/* Tell me if this sushi has been eaten! */}
        {emptyPlate ? null : (
          <img
            id={id}
            src={img}
            alt={name}
            title={price}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
