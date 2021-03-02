import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App() {
    const [index, setIndex] = useState(0)
    const [reviews, setReviews] = useState(data)

    const {name, id, title, quote, image} = reviews[index]

    const nextReview = () => {
        if (index === reviews.length-1){
            setIndex(0)
        }else {
            setIndex(index+1)
        }
    }
    const prevReview = () => {
        if (index === 0){
            setIndex(reviews.length-1)
        }else {
            setIndex(index-1)
        }
    }

    return (
        <section className="section">
            <div className="title">
                <h2><span>/</span>Reviews</h2>
            </div>

            <div className="section-center">

                <article key={id} className="">
                    <img className="person-img" src={image} alt={name}/>
                    <h4>{name}</h4>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className="icon"/>
                </article>
                <button className="prev" onClick={() => prevReview()}>
                    <FiChevronLeft/>
                </button>
                <button className="next" onClick={() => nextReview()}>
                    <FiChevronRight/>
                </button>

            </div>
        </section>
    );
}

export default App;
