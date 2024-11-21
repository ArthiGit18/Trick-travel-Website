import React from 'react'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Counts = () => {
  return (
    <div className='counts_wrapper'>
        <div className='container counts_box'>
            <div className='count_1'>
                <Person2OutlinedIcon />
                <span>28k</span> 
                <small>Total</small>
            </div>
            <div className='count_1'>
                <FmdGoodOutlinedIcon />
                <span>12k</span> 
                <small>Total Tours</small>
            </div>
            <div className='count_1'>
                <LanguageOutlinedIcon />
                <span>64k</span> 
                <small>Social Likes</small>
            </div>
            <div className='count_1'>
                <StarBorderRoundedIcon />
                <span>14k</span> 
                <small>5 Star Ratings</small>
            </div>
        </div>
    </div>
  )
}

export default Counts