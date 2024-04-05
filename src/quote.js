import React from "react";
import './quote.css';
import { useState } from "react";

const Quote = () => {
    const [author, setauthor] = useState('');
    const [quote,setquote] = useState('LOADING....');
    const handlerandom = async()=>{
        const response = await fetch('https://api.quotable.io/random');
        console.log(response)
        const data = await response.json();
        console.log(data)
        setauthor(data.author)
        setquote(data.content)
        // const formatquote = await quote.
    }

    return (
        <main>
            <h1>Quote of the day</h1>
            <h2 id="quote">{quote}</h2>
            <h3>
                <span>—</span>
                <span id="author">{author}</span>
            </h3>
            <div class="buttons">
                <button id="new-quote" onClick={handlerandom}>New Quote</button>
                
            </div>
        </main>
    )
}

export default Quote