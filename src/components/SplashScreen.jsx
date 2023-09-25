import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

function SplashScreen() {
  const [loadingText, setLoadingText] = useState('');
  const websiteName = 'W E B W I Z A R D R Y';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        if (index < websiteName.length) {
          return prevText + websiteName[index++];
        } else {
          clearInterval(interval);
          setTimeout(() => {
            // Add any additional actions after the animation here
            // For example, redirect to the main page or load content
            console.log('Animation complete. Redirecting...');
          }, 3000); // Adjust the delay as needed
          return prevText; // Ensure that 'undefined' is not appended
        }
      });
    }, 200); // Adjust the animation speed as needed
  }, []);

  return (
    <div className="splash-screen">
      <div className="loading-text">{loadingText}</div>
    </div>
  );
}

export default SplashScreen;