import React, {useState} from 'react';
import people from '../Data/data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () => {


    const [index, setIndex] = useState(0)
    const {name, job, id, image, text} = people[index]

    const randomPerson = () => {
        /**
         * Random Person is used to chose a random index in the array. However if the random
         * number that you select is equal to your current index it will move that new index up one.
         * @type {number}
         */
        const temp = Math.floor(Math.random() * people.length);
        index === id ? nextPerson(temp) : setIndex(temp);
    }
    const nextPerson = () => {
        /**
         * Next person is used to shift the array index you are looking at forward by 1.
         * However if you are at the end of the array then it will rest the index tot the start
         */
        index === people.length - 1 ? setIndex(0) : setIndex(index + 1)

    }
    const prevPerson = () => {
        /**
         * Previous Person works to shit the array index backwards by 1. However if you are at the
         * start of the array it will move you to the end of the array.
         */
        index === 0 ? setIndex(people.length - 1) : setIndex(index - 1)
    }


    return (
        <article className="review" key={id}>
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon"> <FaQuoteRight/></span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info"> {text}</p>

            <div className="button-container">

                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight/>
                </button>
            </div>

            <button className="random-btn" onClick={randomPerson}>
                surprise me
            </button>
        </article>

    )
        ;
};

export default Review;
