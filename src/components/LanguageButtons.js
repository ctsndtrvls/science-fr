import React from 'react'

function LanguageButtons(props) {
    return (
        <div className="container-lang">
            <button     
                onClick={() => props.changeLang('en')}
                style={{
                    fontWeight: props.currentLang == 'en' ? 'bold' : '',
                    backgroundColor: props.currentLang == 'en' ? '#EA596E' : '',
                    color: props.currentLang == 'en' ? '#FFF' : '#818181'
                }}
            >
                En
            </button>
            <button
                onClick={() => props.changeLang('de')}
                style={{
                    fontWeight: props.currentLang == 'de' ? 'bold' : '',
                    backgroundColor: props.currentLang == 'de' ? '#EA596E' : '',
                    color: props.currentLang == 'de' ? '#FFF' : '#818181'
                }}
            >
                De
            </button>
        </div> 
    )      
}

export default LanguageButtons;