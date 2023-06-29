import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [fourSushi, setFourSushi] = useState([])
  const [amount, setAmount] = useState(100)

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((sushis) => setSushis(sushis))
  }, [])

  function removeSushi(id){
    const filteredSushi = sushis.filter(sushi => {
      if (sushi.id !== id) {
        return sushi
      }
    })
    setFourSushi(filteredSushi)
  }


  return (
    <div className="app">
      <SushiContainer amount={amount} setAmount={setAmount} sushis={sushis} setSushis={setSushis} removeSushi={removeSushi} fourSushi={fourSushi} setFourSushi={setFourSushi}/>
      <Table amount={amount}/>
    </div>
  );
}

export default App;
