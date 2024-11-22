import { Button } from '@mui/material'
import React from 'react'

const Ticket = () => {
    return (
        <div className='ticket_wrapper'>
            <div className='container'>
                <div className='ticket_content'>
                    <small><strong>fleet travel ui kit</strong></small>
                    <h2>Book a ticket& just leave</h2>
                    <Button varient="contained">Book Now</Button>
                    <img src="/assets/ticket/1.png" alt="video" />
                </div>
            </div>
        </div>
    )
}

export default Ticket