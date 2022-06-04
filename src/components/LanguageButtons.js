import React from 'react'

function LanguageButtons(props) {
    return (
        <div className="container-lang">
            <a 
                className="waves-effect waves-light purple lighten-3 btn-small" 
                onClick={() => props.changeLang('ru')}
                style={{
                    fontWeight: props.currentLang == 'ru' ? 'bold' : ''
                }}
            >
                ru
            </a>
            <a 
                className="waves-effect waves-light purple lighten-3 btn-small" 
                onClick={() => props.changeLang('en')}
                style={{
                    fontWeight: props.currentLang == 'en' ? 'bold' : ''
                }}
            >
                en
            </a>
        </div> 
    )      
}

export default LanguageButtons;

const person = {
    name: 'foo'
}

const isFoo = person.name === "foo" ? true : false