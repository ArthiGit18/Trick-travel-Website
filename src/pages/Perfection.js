import React from 'react'
import { Button } from '@mui/material'

export const Perfection = () => {
    return (
        <div className='perfection_wrapper'>
            <div className='container'>
                <div className='perfection_content'>
                    <small><strong>3 steps for the perfect trip</strong></small>
                    <h2>Find Travel Perfection</h2>
                    <p>Find Travel Perfection</p>
                    <Button varient="contained">Book Now</Button>
                </div>
                <div className="perfection_list">
                    <div className='perfection_box'>
                        <img src="/assets/contexts/Frame 5.png" alt="context" />
                        <h3>Tell us what you want to do</h3>
                        <small>Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</small>
                    </div>
                    <div className='perfection_box'>
                        <img src="/assets/contexts/Frame 5 (1).png" alt="context" />
                        <h3>Tell us what you want to do</h3>
                        <small>Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</small>
                    </div>
                    <div className='perfection_box'>
                        <img src="/assets/contexts/Frame 6.png" alt="context" />
                        <h3>Tell us what you want to do</h3>
                        <small>Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
