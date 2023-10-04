import "./../styles.css";

import { useState } from "react";

import Hacker from "./../components/Hacker.jsx";
import Momo from "./../components/Momo.jsx";
import { CodeBlock } from "@/components/CodeBlock";

export const MOMOClicker = () => {
  const [coins, setCoins] = useState(0);

  const earnCoins = (amount: number) => {
    setCoins(coins + amount);
  };

  const spendCoins = (amount: number) => {
    setCoins(coins - amount);
  };

  return (
    <div className="App">
      <section className="clicker-section">
        <h1>{coins.toFixed(0)} coins</h1>

        <Momo
          coins={coins}
          setCoins={setCoins}
          onGetRich={(income: number) => setCoins(coins + income)}
        />
      </section>

      <h2>Hackers</h2>
      <section className="hacker-section">
        <Hacker
          interval={1000}
          handleHacks={earnCoins}
          handlePurchase={spendCoins}
          image={"Long.png"}
          name="Long"
          cost={50}
          production={5}
          coins={coins}
        />

        <Hacker
          interval={1000}
          handleHacks={earnCoins}
          handlePurchase={spendCoins}
          image={"EvilLong.png"}
          name="Short"
          cost={150}
          production={20}
          coins={coins}
        />
        <CodeBlock language='javascript' Url='https://codesandbox.io/s/cool-framework-f3sc82?file=/src/App.js'>
					{ComponentExample}
				</CodeBlock>
      </section>
    </div>
  );
}

const ComponentExample = `

See the code for yourself!
`
/*
  - add rest of hackers
  - style hackers
  - style momo
  - fine-tune values

  - add particles (stretch)
*/
