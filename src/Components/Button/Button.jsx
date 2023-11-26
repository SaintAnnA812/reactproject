import '../Word/Word.scss'
import React from 'react'

export default function Button({ children, clickHandler }) {
    return (
        <button onClick={clickHandler}>{children}</button>
    )
}