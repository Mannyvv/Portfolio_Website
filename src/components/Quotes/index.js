import "./index.scss";
import { useState, useEffect } from "react";

const Quote = () => {
    const [randomQuote, setRandomQuote] = useState({ q: "Loading...", a: "" });

    useEffect(() => {
        fetch("https://zenquotes.io/api/random", {
            method: "GET",
            mode: "cors", 
            headers: {
                "Accept": "application/json"
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if (Array.isArray(data) && data.length > 0) {
                setRandomQuote(data[0]); 
            } else {
                throw new Error("Unexpected API response format");
            }
        })
        .catch((error) => {
            console.error("Error fetching quotes:", error);
            setRandomQuote({ q: "Failed to load quote.", a: "Try again later" });
        });
    }, []);

    return (
        <div className="quotes">
            <div className="quotes__container">
                <blockquote className="blockquote text-center">
                    <h1 className="quote-text mb-0">
                        {randomQuote.q}
                    </h1>
                    <cite className="blockquote-footer">
                        {randomQuote.a}
                    </cite>
                </blockquote>
            </div>
        </div>
    );
};

export default Quote;
