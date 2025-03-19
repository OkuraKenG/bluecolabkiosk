import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import ScrollingCarousel from './components/ScrollingCarousel';
import Standby from './components/Standby';
import { Box } from '@mui/material';
import background from './assets/background.mp4';
import logo from './assets/icons/Blue-CoLab-500-blue.png';

export default function App() {
  const [isStandby, setIsStandby] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleStart = () => {
    setFadeOut(true); // Start fade-out animation
    setTimeout(() => {
      setIsStandby(false); // Switch to carousel after fade-out
    }, 500); // .5 second transition
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
