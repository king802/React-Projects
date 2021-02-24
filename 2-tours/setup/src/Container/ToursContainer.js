import React from 'react';
import TourComponent from '../Component/TourComponent';

const ToursContainer = ({tours, removeTour}) => {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"/>
            </div>
            <div>
                {
                    tours.map((tour) => {
                        return <TourComponent key={tour.id} {...tour} removeTour={removeTour}/>
                    })}
            </div>
        </section>


    );
};

export default ToursContainer;
