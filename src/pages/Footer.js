import { TextField } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer_wrapper'>
                <div className='container footer'>
                    <div className='footer1'>
                        <img src="/assets/logo/1-black.png" alt="Logo" />
                        <p>There are many variations of passages of available but it is the majority of suffered that a alteration in that some dummy text.</p>
                    </div>
                    <div className='footer2'>
                        <h4>About</h4>
                        <ul>
                            <li><a href="/">Discover</a></li>
                            <li><a href="/">Find Travel</a></li>
                            <li><a href="/">Popular Destinations</a></li>
                            <li><a href="/">Reviews</a></li>
                        </ul>
                    </div>
                    <div className='footer2'>
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/">Customer Support</a></li>
                            <li><a href="/">Privacy & Policy</a></li>
                            <li><a href="/">Contact Channels</a></li>
                        </ul>
                    </div>
                    <div className='footer3'>
                        <h4>Join Our Community</h4>
                        <TextField variend="contained" label="Enter your Email" />
                    </div>
                </div>


            </div>
            <hr style={{ color: "black" }}></hr>
            <div className='copyright'>

                <p><strong>Copyright © Trick. All rights reserved</strong></p>
            </div>
        </>
    )
}

export default Footer