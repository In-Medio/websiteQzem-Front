import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

function ReviewSlider({reviews}) {
    const options = {
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ]
    }

    return (
            <div className="feedback-area ptb-100">
                <div className="container">
                    {reviews.length > 0 && (
                        <OwlCarousel className="feedback-slides owl-carousel owl-theme" {...options}>
                        {reviews?.map(review => (
                        <div className="single-feedback-item" key={review.id}>
                            <h3>{review.attributes.title}</h3>

                            <p>{review.attributes.description}</p>
                        </div>
                        ))}
                    </OwlCarousel>
                    )}
                </div>
            </div>
    );
}

export default ReviewSlider;