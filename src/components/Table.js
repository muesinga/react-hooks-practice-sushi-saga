import React, {useState, useEffect} from "react";

function Table({ price, plates = [] }) {
  const [currentWallet, setCurrentWallet] = useState(100)

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

  // when we click on the sushi, the plate disappears. we need to move the currentWallet logic to App


  useEffect(() => {
   if (currentWallet > price) {
     setCurrentWallet(currentWallet - price)
   }
  }, [price])

  return (
    <>
      <h1 className="remaining">
        You have: ${currentWallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
