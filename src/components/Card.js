import React, { useEffect, useState} from "react";
import items from "./items";
import Tags from './Tags';
import LanguageButtons from "./LanguageButtons";

const generateRandomIndex = (itemsLength) => {
  return Math.floor(Math.random() * itemsLength)
}

function Card() {
  const [currentItemIndex, setcurrentItemIndex] = useState(0) 
  const [currentLang, setCurrentLang] = useState(window.localStorage.lang || 'en')
  const [currentTag, setCurrentTag] = useState('')
  const [imageURL, setImageURL] = useState('')

  useEffect(() => {
    const getPicture = (query) => {
      console.log(query)
      fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=kM9jNzrqeEYtTdNfikpbmyB9LSRT0rNji43OuHSmzmc&per_page=20`
      )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setImageURL(data.results[0].urls.regular);
    });
    }
  
    const query = filteredItemsByTag(currentTag)[currentItemIndex].imageTopic
    getPicture(query)
  }, [currentItemIndex, currentTag])

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
        <LanguageButtons changeLang={changeLang} currentLang={currentLang} />
        <div className="card-container"> 
          <div className="card-title">
            <div>
              <img src={"./img/icon.svg"} alt="icon" />
            </div>
            <div className="card-right">
              <h1>Science fragments</h1>
              <h2 id="first-title">This is a place where I collect all the new science stuff I learn </h2>
            </div> 
          </div>
          <h2 id="second-title">This is a place where I collect all the new science stuff I learn </h2> 
          <div className="card">
            <img src={imageURL} />
            <div className="card-content">{ currentItem }</div>
          </div>
          <button className="next-btn" href="#" onClick={changeItem}>Next fragment {'>'}</button>
          <Tags changeTag={changeTag} currentTag={currentTag}/>
        </div>
      </div>
    );
}

export default Card;

// https://api.unsplash.com/search/photos?page=1&query=dna&client_id=kM9jNzrqeEYtTdNfikpbmyB9LSRT0rNji43OuHSmzmc&per_page=20
// https://api.unsplash.com/search/photos?page=1&query=dna&client_id=kM9jNzrqeEYtTdNfikpbmyB9LSRT0rNji43OuHSmzmc&per_page=20