import React from 'react';
import { Elements,CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom';
import SplitCardFrom from './SplitCardFrom';

const stripePromise = loadStripe('pk_test_51IeBxrH56zWVrwg4lI8SeuXTd2INS0LkCKhaRgb4rILZSqVNKH9Aan2PGN7QxO2mIwTcqDHBmqTbHKkGnCIYtqoN00NRef1I42');

const ProscessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardFrom handlePayment={handlePayment}></SimpleCardFrom>
        </Elements>
    );
};

export default ProscessPayment;