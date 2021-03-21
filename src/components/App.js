import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() { 
  const [allSushi, updateAllSushi] = useState([])
  const [currentSushiPrice, setCurrentSushiPrice] = useState(null)

  console.log(currentSushiPrice)
  // console.log(allSushi[currentSushi-1])
  // console.log(currentSushi ? allSushi.filter(sushi => sushi.id === parseInt(currentSushi))[0].price : null)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => { updateAllSushi(data)
      });
  }, []);

  // console.log(allSushi)

  return (
    <div className="app">
      <SushiContainer sushi={allSushi} setCurrentSushiPrice={setCurrentSushiPrice}/>
      <Table price={currentSushiPrice} />
    </div>
  );
}

export default App;
