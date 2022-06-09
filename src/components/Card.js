import React, { useEffect, useState} from "react";
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
  const [imageURL, setImageURL] = useState('')

  const getUserslist = () => {
    fetch(`https://dummyapi.io/data/v1/user?limit=10`, {
      headers: {
        "app-id": "629c6413720007a945062d5e"
      }
     })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    // const imageURL = data.results[0].urls.regular
    // console.log(imageURL)
    // setImageURL(data.results[0].urls.regular)
    // const imageURL = data.results[0].urls.regular
    console.log(imageURL)
    setImageURL(data.data[1].picture)
  });
  }

  const getUserProfile = (id) => {
    fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: {
        "app-id": "629c6413720007a945062d5e"
      }
     })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    // const imageURL = data.results[0].urls.regular
    // console.log(imageURL)
    // setImageURL(data.results[0].urls.regular)
    // const imageURL = data.results[0].urls.regular
    console.log(imageURL)
    setImageURL(data.data[1].picture)
  });
  }

  useEffect(() => {
    fetch('')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setImageURL(data.data[1].picture)
    })
  }, [currentLang, currentItemIndex, currentTag])

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

  const currentItem = filteredItemsByTag(currentTag)[currentItemIndex].content[currentLang]

    return (
      <div>
      {currentTag}
      <LanguageButtons changeLang={changeLang} currentLang={currentLang} />
        <div className="container-card"> 
     <div className="row">
    <div className="col s12 m6">
      <div className="card pink lighten-1">
        <div className="card-content white-text">
          <img src={imageURL} style={{ width: '300px'}} />
          <p>{ currentItem.content }</p>
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