import "./index.scss";
import { useState, useEffect } from "react";


const Quote = () => {
    const [randomQuote, setRandomQuote] = useState(null);

    const getRandomQuote = (quotesArray) => {
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        const quote = quotesArray[randomIndex];
        console.log("This is the single quote", quote);
        setRandomQuote(quote);
    }

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch quotes');
                }
            })
            .then((data) => {
                console.log("The data went through", data);
               
                getRandomQuote(data);
            })
            .catch((error) => {
                console.error('Error fetching quotes:', error);
            });
    }, []);




    return (
        <div className="quotes">
            <div className="quotes__container">
                <blockquote className="blockquote text-center">
                    <h1 className="quote-text mb-0">
                        {randomQuote ? randomQuote.text : "Loading..."}
                    </h1>
                    <cite className="blockquote-footer">
                        {randomQuote ? randomQuote.author : ""}
                    </cite>
                </blockquote>
            </div>
        </div>
    );
}

export default Quote;