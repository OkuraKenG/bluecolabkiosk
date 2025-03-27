import * as React from 'react';
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import ScrollingCarousel from './components/ScrollingCarousel';
import Standby from './components/Standby';
import { Box } from '@mui/material';
import background from './assets/background.mp4';
import logo from './assets/icons/Blue-CoLab-500-blue.png';


// Global Timer for stand-by screen. This will calculate 5 minues before the screen goes to standby


export default function App() {
  const [isStandby, setIsStandby] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [standbyTime, setStandbyTime] = useState(300000); //  300000= 5 minutes 5000 = 5 seconds (for testing)

  // Reset timer on any user interaction
  const resetInactivity = () => {
    setLastActivity(Date.now());
    if (isStandby) {
      setIsStandby(false); // If in standby, exit standby on interaction
    }
  };


  // Check for inactivity every second
  useEffect(() => {
    const checkInactivity = setInterval(() => {
      if (Date.now() - lastActivity >= standbyTime) {
        setIsStandby(true); // Switch back to Standby mode
        console.log('Standby mode activated');
      }
    }, 1000); // Check every second
    
    return () => clearInterval(checkInactivity);
  }, [lastActivity, standbyTime]);

  // Listen for user intatcion
  useEffect(() => {
    const defaultEvents = [
      // "mousedown",
      "touchstart",
      "keydown",
      "wheel",
      "resize",
    ];
    
    // Add event listeners to reset inactivity timer
    defaultEvents.forEach((event) => {
      window.addEventListener(event, resetInactivity);
    });

    return () => {
      defaultEvents.forEach((event) => {
        window.removeEventListener(event, resetInactivity);
      });
    }

  }, [resetInactivity]);


  const handleStart = () => {
    setFadeOut(true); // Start fade-out animation
    setTimeout(() => {
      setIsStandby(false); // Switch to carousel after fade-out
      resetInactivity(); // Ensure timer resets
    }, 500); // 0.5 second transition
  };

   


  return (
    <div className="relative w-full h-screen">
      {/* Background Video (remains constant) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={background} type="video/mp4" />
      </video>

      <div className="relative z-10 flex items-center justify-center h-full transition-opacity duration-1000">
        {isStandby ? (
          // Apply fade-out effect when transitioning
          <Standby onStart={handleStart} fadeOut={fadeOut} />
        ) : (
          <Container className="backdrop-blur-md m-5 p-5 rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <Box component="img" sx={{ height: 90 }} src={logo} />
            </div>
            <ScrollingCarousel />
          </Container>
        )}
      </div>
    </div>
  );
}
