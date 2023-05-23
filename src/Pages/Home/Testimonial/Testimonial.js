import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people01.png';
import people2 from '../../../assets/images/people02.jpg';
import people3 from '../../../assets/images/people03.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Md. Mahdi',
            img: people1,
            review: 'Excellent service, courtesy, one of best hospital experiences!Good. A good experience. Everything went well. No complaints no delays no pain a very well seen procedure.',
            location: 'Faridpur'
        },
        {
            _id: 2, 
            name: 'Nila Islam',
            img: people2,
            review: 'Wonderful. Great ARNP. Made it a very easy draw ... no delays. No pain involved. Very good, polite, knowledgeable and competent quite good.',
            location: 'Bogra'
        },
        {
            _id: 3, 
            name: 'Abdul Karim',
            img: people3,
            review: 'Your personnel are so friendly and greet me with a smile, even if they dont know me. How pleasant it is in your atmosphere. Thank you.',
            location: 'Mirpur'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;