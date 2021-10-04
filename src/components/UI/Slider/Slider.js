import React from 'react'
import classes from './Slider.module.css'
//import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import { 
    SLIDER_HEADING_1,
    SLIDER_HEADING_2,
    SLIDER_SUBHEADING_1,
    SLIDER_SUBHEADING_2 
} from './../../../constants'

const Slider = () => {
    return(
        <div id="carouselIndicators" className={"carousel slide " + classes.Carousel}
        data-ride="carousel" data-interval="5000">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to='0'
                className='active'></li>
                <li data-target="#carouselIndicators" data-slide-to='1'
                className=''></li>
                {/*<li data-target="#carouselIndicators" data-slide-to='2'
                className=''></li>   */} 
            </ol>
            <div className="carousel-inner">
                <div className={"carousel-item active "+ classes.SliderItem1 + ' ' + classes.CarouselItem}>
                    <div className={"carousel-caption text-center "+ classes.Caption}>
                        <h1>{SLIDER_HEADING_1}</h1>
                        <h3>{SLIDER_SUBHEADING_1}</h3>
                        <NavLink to='/signin' className="btn btn-outline-light btn-lg m-2">Sign In</NavLink>
                        <NavLink to='/register' className="btn btn-outline-light btn-lg m-2">Register</NavLink>
                    </div>
                </div>
                <div className={"carousel-item "+ classes.SliderItem2 + ' ' + classes.CarouselItem}>
                    <div className={"carousel-caption text-center "+ classes.Caption}>
                    <h1>{SLIDER_HEADING_2}</h1>
                    <h3>{SLIDER_SUBHEADING_2}</h3>
                    <NavLink to='/signin' className="btn btn-outline-light btn-lg m-2">Sign In</NavLink>
                    <NavLink to='/register' className="btn btn-outline-light btn-lg m-2">Register</NavLink>
                    </div>
                </div>
                {/*<div className={"carousel-item "+ classes.SliderItem3 + ' ' + classes.CarouselItem}></div>*/}
            </div>
        </div>
    )

}

export default Slider;