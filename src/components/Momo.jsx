import React, { useState } from "react";

const Momo = ({ onGetRich, coins, setCoins }) => {
  const [coinPerClick, setCoinPerClick] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(30);
  const upgradeFactor = 2;

  return (
    <>
      <button className="momo" onClick={() => onGetRich(coinPerClick)}>
        <img className="momo-img" src="MOMO.png" alt="MOMO" />
      </button>

      <button
        disabled={coins < upgradeCost}
        onClick={() => {
          setCoins(coins - upgradeCost);
          setCoinPerClick(coinPerClick * upgradeFactor);
          setUpgradeCost(upgradeCost * upgradeFactor);
        }}
      >
        +30% cpc ({upgradeCost}$)
      </button>
    </>
  );
};

export default Momo;
