import { useState } from 'react'
import '../Word/Word.scss'


export default function Word(props) {
    const [word, setWord] = useState(false);


    function changeWord() {
        setWord(!word)
    }



    return (
        <div className="container__word">
            <h1>Word</h1>
            <p>[trancrition]</p>
            <button onClick={changeWord}>Проверить</button>
            <p className={'change__word' === true ? 'Перевод' : null} ></p>


        </div >
    )
}