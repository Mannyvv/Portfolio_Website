import "./index.scss";
import { useState, useEffect } from "react";

const Quote = () => {
 

  

    return (
        <div className="quotes">
            <div className="quotes__container">
                <blockquote className="blockquote text-center">
                    <h1 className="quote-text mb-0">
                    "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human."
                    </h1>
                    <cite className="blockquote-footer">
                        Alan Turing <br />
                    </cite>
                </blockquote>
            </div>
        </div>
    );
};

export default Quote;
