import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, setSushis, removeSushi, fourSushi, amount, setAmount}) {
  const [fourSushis, setFourSushis] = useState(0)

  const sushiLine = sushis 
  .slice(fourSushis, fourSushis + 4)
  .map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} removeSushi={removeSushi} fourSushi={fourSushi} amount={amount} setAmount={setAmount}/>
  })

  // (sushiIndex + 4) % sushis.length
    // is a way to wrap back around to the beginning of the array once we get to the end
    // using the remainder (%) operator

  function moreSushis() {
    setFourSushis((fourSushis) => (fourSushis + 4) % sushis.length);
  }
  return (
    <div className="belt">
      {sushiLine} 
      <MoreButton moreSushis={moreSushis}/>
    </div>
  );
  }

export default SushiContainer;
