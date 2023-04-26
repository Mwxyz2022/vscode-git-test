import React, { useState } from 'react'

import sendMessage from '../comands/interactions'

const Main = () => {
    const [text, setText] = useState('')

    const inpHandler = e => {
        setText(e.target.value)
    }

    return (
        <>
            <div className="main">
                <div className="container">
                    <input className="input" type="text" onChange={inpHandler} value={text} />
                    <button className="input-btn">send...</button>
                </div>
            </div>
        </>
    )
}

export default Main
