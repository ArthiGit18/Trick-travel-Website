import React from 'react'

const Popular = () => {
  return (
    <div className='popular_wrapper'>
        <div className='container'>
            <div className='popular_content'>
                <strong>3 steps for the perfect trip</strong>
                <h2>Popular Destinations</h2>
                <p>An enim nullam tempor gravida donec enim  congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.</p>
            </div>
            <div className='popular_attractions'>
                <div className='attraction'>
                    <img src="/assets/popular/3.png" alt="ttraction place" />
                    <h3>Europe</h3>
                    <small>From <strong>$540</strong>per day</small>
                </div>
                <div className='attraction'>
                    <img src="/assets/popular/1.png" alt="ttraction place" />
                    <h3>Africa wild</h3>
                    <small>From <strong>$540</strong>per day</small>
                </div>
                <div className='attraction'>
                    <img src="/assets/popular/2.png" alt="ttraction place" />
                    <h3>Scandinavia</h3>
                    <small>From <strong>$540</strong>per day</small>
                </div>
                <div className='attraction'>
                    <img src="/assets/popular/1.png" alt="ttraction place" />
                    <h3>Africa wild</h3>
                    <small>From <strong>$540</strong>per day</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popular