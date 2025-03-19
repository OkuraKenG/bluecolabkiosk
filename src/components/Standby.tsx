import * as React from 'react';
import { Box, Typography } from '@mui/material';
import BCLogo from '../assets/icons/logo512.png';

export default function Standby({ onStart, fadeOut }: { onStart: () => void , fadeOut: boolean }) {
    return (
        <Box 
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-60 
            transition-all duration-800 ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            onClick={onStart}
        >
            <img src={BCLogo} alt="BC Logo" className="mb-4" />
            <Typography variant="h3" className="text-white animate-pulse">
                Tap to Start
            </Typography>
        </Box>
    );
}
