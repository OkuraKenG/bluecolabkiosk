import * as React from 'react';
import { Box, Typography } from '@mui/material';
import BCLogo from '../assets/icons/logo512.png';

// Current Time Hook for Standby Screen
const CurrentTime = () => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    },[]);
    return (
        <Typography variant="h3" className="text-white">
            {time.toLocaleTimeString()}
        </Typography>
    );
};


export default function Standby({ onStart, fadeOut }: { onStart: () => void , fadeOut: boolean }) {
    return (
        <Box 
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-60 
            transition-all duration-800 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={onStart}
        >
            <img src={BCLogo} alt="BCLogo" className="mb-4" />
            <Typography variant="h1" className="text-white">
                What do you know about water?
            </Typography>

            <Typography variant="h2" className="text-white animate-pulse">
                Tap to Start
            </Typography>

            {/* Current Time in Bottom Right */}
            <Box className="absolute bottom-4 right-4">
                <CurrentTime />
            </Box>
        </Box>
    );
}