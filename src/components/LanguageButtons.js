import React from 'react'

function LanguageButtons(props) {
    return (
        <div className="container-lang">
        { window.localStorage.lang }
            <a 
                className="waves-effect waves-light purple lighten-3 btn-small" 
                onClick={() => props.changeLang('ru')}
                style={{
                    fontWeight: window.props.lang == 'ru' ? 'bold' : 'regular'
                }}
            >
                ru
            </a>
            <a 
                className="waves-effect waves-light purple lighten-3 btn-small" 
                onClick={() => props.changeLang('en')}
                style={{
                    fontWeight: window.props.lang == 'en' ? 'bold' : 'regular'
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