import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi.js"

function SushiContainer(p) {
  const [isIndex, setIndex] = useState(0)
  let sushiArray = p.sushi
  let currentSushi = sushiArray.slice(isIndex, isIndex+4)

  // function updateIndex() {
  //   setIndex(isIndex+4)
  // }

  const updateIndex = () => {
    setIndex(isIndex+4)
  }


  const showAllSushi = 
    currentSushi.map((sushi) => (
      <Sushi key={sushi.id} id={sushi.id} name={sushi.name} img={sushi.img_url} price={sushi.price} setCurrentSushiPrice={p.setCurrentSushiPrice} />
      ))
  
  return (
    <div className="belt">
      {showAllSushi}
      <MoreButton updateIndex={updateIndex}/>
    </div>
  );
}

export default SushiContainer;
