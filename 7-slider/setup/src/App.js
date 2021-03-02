import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App() {
    const [index, setIndex] = useState(0)
    const [reviews, setReviews] = useState(data)

    useEffect(() => {
        const lastIndex = reviews.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex){
            setIndex(0)
        }
    }, [index, reviews])

    useEffect( () => {
        let slider = setInterval( () => {setIndex(index +1)}, 3000);
        return () => clearInterval(slider)

    }, [index])


    return (
        <section className="section">
            <div className="title">
                <h2><span>/</span>Reviews</h2>
            </div>

            <div className="section-center">
                {
                    reviews.map((person, personIndex) => {
                        const {name, id, title, quote, image} = reviews[personIndex]

                        let position = 'nextSlide';

                        personIndex === index ? position = 'activeSlide' : position = position;
                        personIndex === index - 1 || (index == 0 && personIndex === reviews.length - 1) ? position = 'lastSlide' : position = position;
                        return (
                            <article key={id} className={position}>
                                <img className="person-img" src={image} alt={name}/>
                                <h4>{name}</h4>
                                <p className="title">{title}</p>
                                <p className="text">{quote}</p>
                                <FaQuoteRight className="icon"/>
                            </article>
                        );
                    })
                }


                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft/>
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight/>
                </button>

            </div>
        </section>
    );
}

export default App;
