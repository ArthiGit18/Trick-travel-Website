import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Button } from '@mui/material';

export const Guideline = () => {
    return (
        <div className='guideline_wrapper'>
            <div className='container'>
                <div className='guideline'>
                    <div className='guideline_content'>
                        <strong>Take A Tour</strong>
                        <h2>Discover Our Travel Guideline</h2>
                        <p>An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
                        <ul>
                            <li><CheckCircleOutlineOutlinedIcon className='icon_guide' /> Luctus risusd diam eget</li>
                            <li><CheckCircleOutlineOutlinedIcon className='icon_guide' /> Donec enim  congue magna</li>
                            <li><CheckCircleOutlineOutlinedIcon className='icon_guide' /> Blandit sit amet non magna</li>
                        </ul>
                        
                        <Button className=''>Learn More</Button>
                    </div>
                    <div className='guideline_img'>
                        <img src="/assets/fligth/IMG (6).png" alt="flight" />
                    </div>
                </div>
            </div>
        </div>
    )
}
