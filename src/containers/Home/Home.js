import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Slider from '../../components/UI/Slider/Slider';
import { getAuthToken } from '../../store/selectors/selectors';

const Home = () => {
    const token = useSelector(getAuthToken)
    return(
        <>
         {token? <Redirect to="/upload" /> :<Slider />}
        </>
    );
}


export default Home;