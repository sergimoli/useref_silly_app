import React, { useEffect, useRef, useState } from "react";

function Example() {
  const [numSalute, setNumSalute] = useState(0);
  const salutesInQueue = useRef(numSalute);

  useEffect(() => {
    salutesInQueue.current = numSalute;
    setTimeout(() => {
      //   console.log("message in queue " + numSalute);
      console.log("message in queue " + salutesInQueue.current);
    }, 2000);
  }, [numSalute]);

  const SendSalute = () => {
    console.log("salute sent!");
    setNumSalute(numSalute + 1);
  };
  return (
    <div>
      <h1>example with href</h1>
      <h2>Salutes sent: {numSalute}</h2>
      <button onClick={SendSalute}>Sent Salute!</button>
      <hr />
    </div>
  );
}

export default Example;
