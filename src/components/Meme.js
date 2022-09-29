import React from "react"
import memesData from '../memesData'

export default function Meme() {


    function getMemeImage() {

        // pegando array do JSON
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        console.log(url)

    }

    return (

        <main>

            <div className="form">

                <input className="form--input" placeholder="Top text" type="text" />
                <input className="form--input" placeholder="Bottom text" type="text" />

                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>

            </div>

        </main>

    )

}