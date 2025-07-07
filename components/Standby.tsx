import * as React from 'react';
import { View, Text, Image, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
const BCLogo = require('../assets/images/logo512.png');

// Current Time Hook for Standby Screen
const CurrentTime = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', fontFamily:'Segoe UI'}}>
      {time.toLocaleTimeString()}
    </Text>
  );
};

export default function Standby({
  onStart,
  fadeOut,
}: {
  onStart: () => void;
  fadeOut: boolean;
}) {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
      onTouchStart={onStart} // <--- works cross-platform
    >
      <Image source={BCLogo} style={{ width: 700, height: 700, marginBottom: 20 }} />

      <Text style={{ fontSize: 60, color: 'white'}}>
        What do you know about water?
      </Text>

      <Animated.Text
        style={{
          fontSize: 28,
          color: 'white',
          fontWeight: 'bold',
          marginTop: 12,
          opacity: pulseAnim,
        }}
      >
        Tap to Start
      </Animated.Text>

      {/* Current Time and Version Bottom Right */}
      <View style={{ position: 'absolute', bottom: 16, right: 16, alignItems: 'flex-end' }}>
        <CurrentTime />
        <Text style={{ color: 'white' }}>v2025.4.1.1034</Text>
      </View>
    </Animated.View>
  );
}

/* On index.tsx, the Standby component works with : 

  - isStandby: (true/false) — shows standby screen or main content

  - fadeOut: (true/false) — controls fading animation

  - lastActivity: (timestamp) — tracks last user interaction

  - standbyTime: (ms) — how long until it goes to standby

  - resetInactivity(): when user touches/clicks/presses anything, reset the timer

  - checkInactivity: every second, check if user is inactive

  - handleStart(): when tapping "Start", fades out standby screen and enters main app

*/