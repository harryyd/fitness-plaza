import React, { useState, useEffect } from 'react'

const Checkwidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Function to update screenWidth state
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    // Effect to update screenWidth on window resize
    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []); // Empty dependency array to run effect only once on mount

    return (
        <div>
             <p>Screen Width: {screenWidth}px</p>
        </div>
    )
}

export default Checkwidth
