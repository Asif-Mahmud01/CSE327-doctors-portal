import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Book Your Appointment!</h1>
                    <p className="py-6">We provide good medical treament from well qualified doctors of Bangladesh. Book your appointment noW!</p>
                    <PrimaryButton><Link to='/appointment'>Book appointment</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;