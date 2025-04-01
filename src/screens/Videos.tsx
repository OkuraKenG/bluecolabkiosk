import { Box, Typography } from '@mui/material';
import * as React from 'react';
import About from '../assets/videos/Blue-CoLab.mp4';
import fellowship from '../assets/videos/fellowship.webm'
// import Timelapse from '../assets/videos/Timelapse.mp4'
import Sonification from '../assets/videos/Choate Pond Sonification, Pace 1080.mp4'
import Clear_Water_Sail from '../assets/videos/Clearwater sails.mp4'

// Cosntant for the Video Style and type
const VideoStyle: React.FC<{ src: string; type: string }> = ({ src, type }) => (
    <video width="500" preload="auto" controls controlsList=" nodownload noremoteplayback noplaybackrate" disablePictureInPicture style={{borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}}>
    <source src={src} type={type} />
    Your browser does not support the video tag.
  </video>
);

export default function Videos() {
    return (<Box sx={{ textAlign: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ mb: 4 }}>Watch educational videos on water science!</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
            <VideoStyle src={About} type="video/mp4" />

            <VideoStyle src={fellowship} type="video/webm" />

            {/* <VideoStyle src={Timelapse} type="video/mp4" /> */}

            <VideoStyle src={Sonification} type="video/mp4" />

            <VideoStyle src={Clear_Water_Sail} type="video/mp4" />
        </Box>
    </Box>)
}   