import { Button } from '@mui/material'
import React from 'react'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

const Discover = () => {
    return (
        <div className='discover_wrapper'>
            <div className='container discover_section'>
                <div className='discover_header'>
                    <h2>Discover Weekly</h2>
                    <p>An enim nullam tempor sapien gravida donec enim ipsum</p>
                </div>
                <div className='discover_actions'>
                    <div className='discover_btns'>
                        <Button varient="contained">Domestic</Button>
                        <Button varient="outlines">Foreign</Button>
                    </div>
                    <div className='discover_arows'>
                        <ArrowCircleLeftOutlinedIcon className='mui_icon' />
                        <ArrowCircleRightOutlinedIcon className='mui_icon' />
                    </div>
                </div>
                <div className='discover'>
                    <div className='discover_place'>
                        <img src="/assets/discover/1.png" alt="place" />
                        <div className='discover_context'>
                            <h4>Venice, Rome & Milan</h4>
                            <div className='discover_context_actions'>
                                <small>Karineside</small>
                                <p><span class="strikethrough">$699</span>$548</p>
                            </div>
                            <hr></hr>
                            <div className='discover_context_actions'>
                                <small>Tue, Jul 20 - Fri, Jul 23</small>
                                <strong><StarRateRoundedIcon />4.9</strong>
                            </div>
                        </div>
                    </div>
                    <div className='discover_place'>
                        <img src="/assets/discover/2.png" alt="place" />
                        <div className='discover_context'>
                            <h4>Venice, Rome & Milan</h4>
                            <div className='discover_context_actions'>
                                <small>Karineside</small>
                                <p><span class="strikethrough">$699</span>$548</p>
                            </div>
                            <hr></hr>
                            <div className='discover_context_actions'>
                                <small>Tue, Jul 20 - Fri, Jul 23</small>
                                <strong><StarRateRoundedIcon />4.9</strong>
                            </div>
                        </div>
                    </div>
                    <div className='discover_place'>
                        <img src="/assets/discover/3.png" alt="place" />
                        <div className='discover_context'>
                            <h4>Venice, Rome & Milan</h4>
                            <div className='discover_context_actions'>
                                <small>Karineside</small>
                                <p><span class="strikethrough">$699</span>$548</p>
                            </div>
                            <hr></hr>
                            <div className='discover_context_actions'>
                                <small>Tue, Jul 20 - Fri, Jul 23</small>
                                <strong><StarRateRoundedIcon />4.9</strong>
                            </div>
                        </div>
                    </div>
                    <div className='discover_place'>
                        <img src="/assets/discover/4.png" alt="place" />
                        <div className='discover_context'>
                            <h4>Venice, Rome & Milan</h4>
                            <div className='discover_context_actions'>
                                <small>Karineside</small>
                                <p><span class="strikethrough">$699</span>$548</p>
                            </div>
                            <hr></hr>
                            <div className='discover_context_actions'>
                                <small>Tue, Jul 20 - Fri, Jul 23</small>
                                <strong><StarRateRoundedIcon />4.9</strong>
                            </div>
                        </div>
                    </div>
                    <div className='discover_place'>
                        <img src="/assets/discover/5.png" alt="place" />
                        <div className='discover_context'>
                            <h4>Venice, Rome & Milan</h4>
                            <div className='discover_context_actions'>
                                <small>Karineside</small>
                                <p><span class="strikethrough">$699</span>$548</p>
                            </div>
                            <hr></hr>
                            <div className='discover_context_actions'>
                                <small>Tue, Jul 20 - Fri, Jul 23</small>
                                <strong><StarRateRoundedIcon />4.9</strong>
                            </div>
                        </div>
                    </div>
                    <div className='discover_place'>
                        <img src="/assets/discover/6.png" alt="place" />
                        <div className='discover_context'>
                            <h4>Venice, Rome & Milan</h4>
                            <div className='discover_context_actions'>
                                <small>Karineside</small>
                                <p><span class="strikethrough">$699</span>$548</p>
                            </div>
                            <hr></hr>
                            <div className='discover_context_actions'>
                                <small>Tue, Jul 20 - Fri, Jul 23</small>
                                <strong><StarRateRoundedIcon />4.9</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Discover