import * as React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mobileapp from '../assets/icons/Mobile.png';
import games from '../assets/icons/games.png';
import datatomusic from '../assets/icons/Data_to_Music.png';
import photogal from '../assets/icons/Photo_Gal.png';
import pond_data from '../assets/icons/PondWaterData.png';
import rtk from '../assets/icons/RTK.png';
import videos from '../assets/icons/videos.png';
import weather from '../assets/icons/weather.png';
import CardForCarousel from './CardForCarousel';
import about from '../assets/icons/about-00605be862d7b603.png';
import waterreports from '../assets/icons/waterreports-23ea9c613afdb295.png';
import PondWaterData from '../screens/PondWaterData';
import Weather from '../screens/Weather';
import DataToMusic from '../screens/DataToMusic';
import Games from '../screens/Games';
import AboutUs from '../screens/AboutUs';
import Videos from '../screens/Videos';
import PhotoGallery from '../screens/PhotoGallery';
import MobileApp from '../screens/MobileApp';
import WaterReport from '../screens/WaterReports';
import RightToKnow from '../screens/RightToKnow';

export default function ScrollingCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const widgets = [
        {
            title: 'Pond Water Data',
            image: pond_data,
            children: (
                <PondWaterData />
            ),
        },
        {
            title: 'Weather',
            image: weather,
            children: (
              <Weather />  
            ),
        },
        {
            title: 'Data to Music',
            image: datatomusic,
            children: (
                <DataToMusic />
            ),
        },
        { // Here is where to store Cronin Cruise Jeopardy and other games
            title: 'Games',
            image: games,
            children: (
               <Games />
            ),
        },
        {
            title: 'Right to Know (RTK)',
            image: rtk,
            children: (
                <RightToKnow />
            ),
        },
        {
            title: 'Water Reports',
            image: waterreports,
            children: <WaterReport />,
        },
        {
            title: 'Mobile App',
            image: mobileapp,
            children: (
                <MobileApp />
            ),
        },
        {
            title: 'Photo Gallery',
            image: photogal,
            children: (
               <PhotoGallery />
            ),
        },
        {
            title: 'Videos',
            image: videos,
            children: (
                <Videos />
            ),
        },
        {
            title: 'About Us',
            image: about,
            children: <AboutUs />,
        },
    ]

    return <Carousel responsive={responsive}
        infinite={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        renderDotsOutside={true}
    >
        {
            widgets.map((item, index: number) => {
                return <CardForCarousel key={index} title={item.title} image={item.image}>
                    {item.children}
                </CardForCarousel>;
            })
        }

    </Carousel>;
}
