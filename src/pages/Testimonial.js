import React from 'react'
import { Button } from '@mui/material'
import Testmobile from './Testmobile'
import { Clientsfeedback } from './Clientsfeedback'

const Testimonial = () => {
    return (
        <div className='testimonial_wrapper'>
            <div className='container'>
                <div className='testimonial_content'>
                    <small><strong>Testimonials</strong></small>
                    <h2>What our happy clients say</h2>
                    <Button varient="contained">Book Now</Button>
                </div>
                <div className='testimonial'>
                    <Clientsfeedback />
                </div>

                <div className='testimonial_mobile'>
                    <Testmobile />
                </div>
            </div>

        </div>
    )
}

export default Testimonial