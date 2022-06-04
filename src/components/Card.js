import React, { useState} from "react";
import items from "./items";
import Tags from './Tags';
import LanguageButtons from "./LanguageButtons";

const generateRandomIndex = (itemsLength) => {
  return Math.floor(Math.random() * itemsLength)
}

function Card() {
  const [currentItemIndex, setcurrentItemIndex] = useState(0) 
  const [currentLang, setCurrentLang] = useState(window.localStorage.lang || 'ru')
  const [currentTag, setCurrentTag] = useState('')

  const changeItem = () => {
    const newItemsIndex = generateRandomIndex(filteredItemsByTag(currentTag).length)
    setcurrentItemIndex(newItemsIndex)
  }

  const filteredItemsByTag = (tag) => {
    if (tag === '') {
      return items
    }
    const fiteredItems = items.filter(item => {
      if (item.tags.includes(tag)) {
        return true
      } else {
        return false
      }
    })
    return fiteredItems
  }

  function changeTag(tag) {
    setCurrentTag(tag)
    const newItemsLength = filteredItemsByTag(tag).length
    const newRandomIndex = generateRandomIndex(newItemsLength)
    setcurrentItemIndex(newRandomIndex)
  }

  function changeLang(lang) {
    window.localStorage.lang = lang
    setCurrentLang(lang)
  }


    return (
      <div>
      {currentTag}
      <LanguageButtons changeLang={changeLang} currentLang={currentLang} />
        <div className="container-card"> 
     <div className="row">
    <div className="col s12 m6">
      <div className="card pink lighten-1">
        <div className="card-content white-text">
          <p>{ filteredItemsByTag(currentTag)[currentItemIndex].content[currentLang] }</p>
        </div>
        <div className="card-action">
          <a href="#" onClick={changeItem}>Next</a>
        </div>
      </div>
    </div>
  </div>
      </div>
       <Tags changeTag={changeTag} />
        <div class="container-reset">
        <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => changeTag('')}>Reset tags
          <i class="material-icons right">send</i> 
      </button>

       </div>
      </div>
    );
}

export default Card;