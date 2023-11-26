import { useState } from 'react'
import '../../style/Word.scss'


export default function Word(props) {
    const [word, setWord] = useState(false);


    function changeWord() {
        setWord(!word)
    }



    return (
        <div className="container__word">
            <h1>Word</h1>
            <p>[trancrition]</p>
            <button className='word__btn' onClick={changeWord}>Проверить</button>
            {word === true ? 'word__btn' : 'Перевод'}


        </div >
    )
}