// Yes Yes work in progress - V
import React from 'react';
import { View, Image, Text } from 'react-native';
const QRPlaceholder = require('@/assets/images/QR Placeholder.png');

export default function MobileApp() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image 
                    style={{ width: 300, height: 600 }} 
                    source={require("../assets/images/icons/MobileNewUI.png")} 
                    alt="Mobile App" 
                />
            </View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 20 }}>
                <Text style = {{fontSize: 40}}>Access our research data and information on the go.</Text>
                <Text style = {{fontSize: 20}}>Stay updated with real-time notifications.</Text>
                <Text style = {{fontSize: 20}}>Download our mobile app for better access.</Text>
            </View>
            {/* Gotta add the QR Place holder here somewhere for Apple and Android -V*/}
            <Image style={{ width: 200, height: 200, position: 'absolute', bottom: 0, right: 0 }} 
                source={QRPlaceholder}
            />
                
        </View>
    );
}
