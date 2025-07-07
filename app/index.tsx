import React, { useState, useEffect, useMemo } from 'react';
import ScrollingCarousel from "@/components/ScrollingCarousel";
import Head from "expo-router/head";
import { View, Text, Easing, TouchableOpacity, ScrollView} from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useWidgets } from '@/hooks/useWidgets';
import Standby from "@/components/Standby"; 


const assetId = require('../assets/videos/background.mp4');

export default function Index() {
  const widgets = useWidgets();

  const [windowDimensions, setWindowDimensions] = useState<
    {
      width: number | undefined,
      height: number | undefined
    }>({ width: undefined, height: undefined });
  const [index, setIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { height, width } = windowDimensions;


  const config = useMemo(() => ({
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }), []);


  // Animation values
  const carouselLocation = useSharedValue(0); // Start at 0 (off-screen or hidden)
  const viewAreaHeight = useSharedValue(0); // Start at 0 (off-screen or hidden)
  const viewAreaColor = useSharedValue("#efefefdd");
  const viewAreaWidth = useSharedValue(0);
  const viewAreaBorderRadius = useSharedValue(15);
  const viewAreaMarginTop = useSharedValue(10);
  // Standby screen
  const [isStandby, setIsStandby] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const[lastActivity, setLastActivity] = useState(Date.now());
  const[standbyTime] = useState(300000); //  300000 = 5 minutes 4000 = 4 seconds (for testing)

  const resetInactivity = () => {
    setLastActivity(Date.now());
    if (isStandby) {
      setIsStandby(false);
    }
  };

  useEffect(() => {
    const checkInactivity = setInterval(() => {
      if (Date.now() - lastActivity >= standbyTime) {
        setIsStandby(true);
        console.log('Standby mode activated');
      }
    }, 1000);
  
    return () => clearInterval(checkInactivity);
  }, [lastActivity, standbyTime]);
  
  useEffect(() => {
    const defaultEvents = [
      "touchstart",
      "resize",
      "mousedown",
      "wheel",
      "keydown",
    ];
  
    defaultEvents.forEach((event) => {
      window.addEventListener(event, resetInactivity);
    });
  
    return () => {
      defaultEvents.forEach((event) => {
        window.removeEventListener(event, resetInactivity);
      });
    };
  }, []);

  const handleStart = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsStandby(false);
      resetInactivity();
    }, 500);
  };
    
  useEffect(() => {
    if (height && width) {
      // Animate it in when height is available
      carouselLocation.value = withTiming(height * 0.75, config);
      viewAreaHeight.value = withTiming(height * 0.73, config);
      viewAreaWidth.value = withTiming(width * 0.98, config);
    }
  }, [config, height, carouselLocation, viewAreaHeight, viewAreaWidth, width]);

  const carouselLocationStyle = useAnimatedStyle(() => {
    return {
      top: carouselLocation.value,
    };
  });

  const viewAreaHeightStyle = useAnimatedStyle(() => {
    return {
      height: viewAreaHeight.value,
      backgroundColor: viewAreaColor.value,
      width: viewAreaWidth.value,
      borderRadius: viewAreaBorderRadius.value,
      marginTop: viewAreaMarginTop.value
    };
  });

  return (
    <>
      <Head>
        <title>Blue CoLab Kiosk</title>
        <meta name="description" content="Blue CoLab Kiosk" />
      </Head>
  
      <View style={{ flex: 1, position: 'relative' }}>
        {/* Background Video (ALWAYS present) */}
        <video
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
          autoPlay
          loop
          muted
        >
          <source src={assetId} type="video/mp4" />
        </video>
  
        {/* 🌟 CONDITIONAL: Standby or Main Page */}
        {isStandby ? (
          <Standby onStart={handleStart} fadeOut={fadeOut} />
        ) : (
          <>
            {/* 🌟 Main Page */}
            {height && width && (
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Animated.View
                  style={[
                    {
                      padding: 15,
                      alignItems: 'center',
                      paddingBottom: 30,
                      width: '100%',
                    },
                    viewAreaHeightStyle,
                  ]}
                >
                  <ScrollView
                    style={{ width: '100%' }}
                    contentContainerStyle={{ alignItems: 'center' }}
                    showsVerticalScrollIndicator={true}
                    persistentScrollbar={true}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginBottom: 10,
                      }}
                    >
                      {widgets[index].title}
                    </Text>
                    {widgets[index].screen}
                  </ScrollView>
                </Animated.View>
  
                <View
                  style={{
                    position: 'relative',
                    bottom: 40,
                    padding: 10,
                    borderRadius: 10,
                    zIndex: 15,
                    width: '98%',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      if (height && !isExpanded) {
                        carouselLocation.value = withTiming(height * 1.05, config);
                        viewAreaHeight.value = withTiming(height, config);
                        viewAreaColor.value = withTiming("#efefefff", config);
                        viewAreaWidth.value = withTiming(width, config);
                        viewAreaBorderRadius.value = withTiming(0, config);
                        viewAreaMarginTop.value = withTiming(0, config);
                        setIsExpanded(!isExpanded);
                      } else if (height && isExpanded) {
                        carouselLocation.value = withTiming(height * 0.75, config);
                        viewAreaHeight.value = withTiming(height * 0.73, config);
                        viewAreaColor.value = withTiming("#efefefdd", config);
                        viewAreaWidth.value = withTiming(width * 0.98, config);
                        viewAreaBorderRadius.value = withTiming(15, config);
                        viewAreaMarginTop.value = withTiming(10, config);
                        setIsExpanded(!isExpanded);
                      }
                    }}
                  >
                    <Text
                      style={{
                        color: 'black',
                        alignContent: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 18,
                      }}
                    >
                      {isExpanded ? "△ Shrink △" : "▽ Expand ▽"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
  
            {/* 🌟 Carousel floating on screen */}
            {height && width && (
              <Animated.View
                style={[
                  carouselLocationStyle,
                  {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    zIndex: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 1,
                  },
                ]}
              >
                <ScrollingCarousel
                  widgets={widgets}
                  height={height}
                  width={width}
                  setIndex={setIndex}
                />
              </Animated.View>
            )}
          </>
        )}
      </View>
    </>
  );
  
}
