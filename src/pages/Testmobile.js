import React, { useState, useEffect } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
const Testmobile = () => {
    const testimonials = [
        { img: "/assets/test/1.png", name: "Joshibbha Nerfil" },
        { img: "/assets/test/2.png", name: "Qurieeya" },
        { img: "/assets/test/3.png", name: "Stifhen Mathiwev" },
        { img: "/assets/test/4.png", name: "Lee Hollad" },
        { img: "/assets/test/5.png", name: "Riafshan Ho" },
        { img: "/assets/test/6.png", name: "Manna Thomas" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically move to the next slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(timer); // Cleanup timer on unmount
    }, [testimonials.length]);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
            <>
                <div className='testimonial1'>
                    <img src={testimonials[currentIndex].img} alt={`Person ${currentIndex + 1}`} />
                    <h3>{testimonials[currentIndex].name}</h3>
                    <p>Qui occaecat velit et ullamco dolor.Laborum sint qui aliqua cupidatat officia. Ut laborum exercitation occaecat aliqua ex mollit commodo enim commodo ut consequat incididunt labore pariatur. Deserunt tempor nulla proident excepteur aute eu occaecat minim mollit. Fugiat consequat nisi ut occaecat minim veniam ea magna aliquip laborum dolore magna.</p>
                </div>
                <div className="testimonial_buttons">
                    <button onClick={handlePrev}><ArrowCircleLeftOutlinedIcon /></button>
                    <button onClick={handleNext}><ArrowCircleRightOutlinedIcon /></button>
                </div>
            </>
    );
};

export default Testmobile;
