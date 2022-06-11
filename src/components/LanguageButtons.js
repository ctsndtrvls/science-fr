import React from 'react'

function LanguageButtons(props) {
    return (
        <div className="container-lang">
            <a 
                className="waves-effect waves-light purple lighten-3 btn-small" 
                onClick={() => props.changeLang('en')}
                style={{
                    fontWeight: props.currentLang == 'en' ? 'bold' : ''
                }}
            >
                en
            </a>
            <a 
                className="waves-effect waves-light purple lighten-3 btn-small" 
                onClick={() => props.changeLang('de')}
                style={{
                    fontWeight: props.currentLang == 'de' ? 'bold' : ''
                }}
            >
                de
            </a>
        </div> 
    )      
}

export default LanguageButtons;