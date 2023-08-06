import React, { useRef } from "react";

function Form() {
  //   const name = useRef("sergi");

  const nameInput = useRef();
  const surnameInput = useRef();
  const emailInput = useRef();

  const myBox = useRef();

  const Show = (e) => {
    e.preventDefault();
    console.log(nameInput.current.value);

    //myBox
    console.log(myBox);
    // myBox.current.classList.add("greenbackground");
    let { current: box } = myBox; //destructuring i reescrivint el nom per a box
    box.classList.add("greenbackground");
    box.innerHTML = "form sent";
  };

  return (
    <div>
      <h1>Form</h1>
      <div ref={myBox} className="myBox">
        <h2>texts with useRef</h2>
      </div>
      <form onSubmit={Show}>
        <input type="text" placeholder="Name" ref={nameInput}></input>
        <br />
        <input type="text" placeholder="Surname" ref={surnameInput}></input>
        <br />
        <input type="text" placeholder="email" ref={emailInput}></input>
        <br />
        <input type="submit" value="send" />
      </form>
      <button
        onClick={() => {
          nameInput.current.select();
        }}
      >
        start fill form
      </button>
    </div>
  );
}

export default Form;
