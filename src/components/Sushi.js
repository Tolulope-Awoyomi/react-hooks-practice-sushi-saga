import React, {useState} from "react";

function Sushi({sushi, removeSushi, amount, setAmount}) {
  const [eaten, setEaten] = useState(false)

  function handleClick() {
    setEaten(true)
    removeSushi(sushi.id)
    subtractAmount()
  }

  function subtractAmount(){
    if (amount >= sushi.price ) {
      setAmount(amount - sushi.price)
  } else {
    return null
  }
}
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {(eaten) && (amount >= sushi.price) ? null : (
          <img
            src={sushi.img_url}
            alt={ "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
