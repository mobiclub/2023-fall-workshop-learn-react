import { useEffect, useState } from "react";
import { useInterval } from "react-interval-hook";
import "../styles.css";

const Hacker = ({
  handleHacks,
  handlePurchase,
  interval,
  image,
  name,
  cost,
  production,
  coins
}) => {
  const [count, setCount] = useState(0);
  const { start } = useInterval(
    () => handleHacks(production * count),
    interval,
    {
      autoStart: false,
      immediate: false
    }
  );

  useEffect(() => {
    if (count === 1) {
      start();
    }
  }, [count]);

  return (
    <button
      className="hacker"
      onClick={() => {
        setCount(count + 1);
        handlePurchase(cost);
      }}
      onLongPress={() => {
        setCount(count + 1);
        handlePurchase();
      }}
      disabled={cost > coins}
    >
      <div className="hacker-left">
        <img className="hacker-img" src={image} alt={`${name}`} />
        <div className="hacker-info">
          <h3 className="hacker-name">{name}</h3>
          <p className="hacker-rate">${production}/s</p>
        </div>
      </div>

      <div className="hacker-stats">
        <p className="hacker-count">{count}</p>
      </div>

      <p className="hacker-cost">{cost}$</p>
    </button>
  );
};

export default Hacker;
