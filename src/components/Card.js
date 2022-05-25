import React, { useState} from "react";
import items from "../components/items";

function Card() {

  //  const [textValue, setTextValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const changeTextValue = () => {
    const itemsNumber = items.length;
    // setTextValue(items[Math.floor(Math.random() * itemsNumber)].[lang]])
        setTextValue(items[Math.floor(Math.random() * itemsNumber)].content)
  }

    return (
        <div> 
     <div class="row">
    <div class="col s12 m6">
      <div class="card pink lighten-1">
        <div class="card-content white-text">
          <p>{textValue}</p>
        </div>
        <div class="card-action">
          <a href="#" onClick={changeTextValue}>Next</a>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
}

export default Card;