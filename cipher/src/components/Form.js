import React, { useState } from 'react';
import caesarShift from './Cipher';
import './Form.css';

function Form() {
  const [data, setData] = useState(null);
  const [key, setKey] = useState(0);
  const [print, setPrint] = useState(false);
  const desc =
    'The Caesar Cipher algorithm is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.';

  function getData(event) {
    setData(event.target.value);
    setPrint(false);
  }
  function getKey(event) {
    setKey(parseInt(event.target.value));
  }
  return (
    <div className="from-block">
      <div className="description">
        <p>{desc}</p>
      </div>
      <form className="text-form">
        <textarea placeholder="Enter your text!" onChange={getData}></textarea>
      </form>
      <div className="cipher-type">
        <input
          type="number"
          placeholder="Shift by 1-25"
          className="number"
          onChange={getKey}
        ></input>
        <button
          className="btn"
          onClick={() => {
            setPrint(true);
          }}
        >
          Encryp / Decrypt
        </button>
      </div>
      <div className="decrypt-form">
        <div className="decrypt-div">
          {print ? <p>{caesarShift(`${data}`, key)}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Form;
