import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function StoryScreen() {
  return (
    <ScrollView style={{ padding: 20, }} showsVerticalScrollIndicator={false}>
      {/* Title */}
      <Text style={{fontSize:24, fontWeight:'bold' , textAlign:'center', color:'#002D72', marginBottom:20,}}>
        At Seidenberg School, we believe students can make a difference today,
        before they launch their careers of tomorrow.
      </Text>

      {/* Top Image */}
      <Image
        source={require("../assets/images/general/Three-labs.jpg")}   
        style={{ width: '100%', height: 400, borderRadius: 8, marginBottom: 16 }}
        resizeMode="cover"
      />

      {/* Content Sections */}
      <Text style = {{fontSize: 20 , fontWeight:'bold' , marginBottom:20 , color:'#002D72'}}>
        Do you know if your water is safe before you drink it?
      </Text>
      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        Let us answer that for you: No. We aim to change that.
      </Text>

      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        We are a team of students, interns, graduate assistants, faculty, and
        staff who work to advance the technology, information, and warning
        systems that will bring you that information.
      </Text>

      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        At our technology lab overlooking the Hudson River, our Choate Pond lab
        on campus, and our data lab in the Goldstein Academic Center, Blue CoLab
        is dedicated to the proposition that you have the{" "}
        <Text style = {{fontWeight:'bold'}}>right-to-know</Text> the quality of your
        water before you drink it, swim in it, fish it, or even swamp your canoe.
      </Text>

      {/* Section Titles */}
      <Text style = {{fontSize: 20, fontWeight:'bold', marginBottom:8 ,color:'#002D72'}}>
        Water Contamination Risks
      </Text>

      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        Chances are the water you use is safe, but millions have found out too
        late that is not the case. Just one sip of water contaminated with
        pathogens, such as bacteria, viruses, or parasites, can cause severe
        illness in a matter of hours. Yet, still today, a conventional lab
        requires 24 - 48 hours to report analyses of samples that may only be
        taken weekly, or less.
      </Text>

      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        In <Text style = {{fontWeight:'bold'}}>Milwaukee (1993)</Text>, 400,000 residents
        were made ill and 100 died due to drinking water contaminated with
        cryptosporidium. Residents in <Text style = {{fontWeight:'bold'}}>Hoosick Falls</Text> and{" "}
        <Text style = {{fontWeight:'bold'}}>Newburgh, NY</Text> were exposed to highly
        toxic PFAS and may have been for years without knowing it.
      </Text>

      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        Water contamination is endemic across the planet, making hundreds of
        millions of people ill, including tens of millions in the United States.
        The best defense against this threat are innovations that enable{" "}
        <Text style = {{fontWeight:'bold'}}>real-time</Text>, technological detection of
        water contaminants before they can reach our taps or recreational
        waters.
      </Text>

      {/* Blue CoLab's Approach */}
      <Text style ={{fontSize: 20, fontWeight:'bold', marginBottom:20 ,color:'#002D72'}}>
        Blue CoLab's Hands-On Approach
      </Text>

      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        To advance these innovations, Blue CoLab is decidedly{" "}
        <Text style = {{fontWeight:'bold'}}>“hands-on.”</Text> Our students dive into:
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text style= {{fontSize:16 , color: '#374151'}} >• Operation of real-time sensors and instruments</Text>
        <Text style= {{fontSize:16 , color: '#374151'}} >• Management, visualization, and sonification of data</Text>
        <Text style= {{fontSize:16 , color: '#374151'}} >• UX, web, GIS, and app development</Text>
        <Text style= {{fontSize:16 , color: '#374151'}} >• System cybersecurity</Text>
      </View>

      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        They work in a <Text style = {{fontWeight:'bold'}}>team-based environment</Text>,
        using our own labs, instruments, equipment, and servers.
      </Text>

      <Text style = {{fontSize: 16 , marginBottom:16 , color:'#374151'}}>
        Blue CoLab stands for everything that makes Seidenberg School a special
        place — harnessing innovation on behalf of society, and providing
        students with skill-based experiences that lead to a career meaningful
        to them, and to society.
      </Text>

      {/* Closing Statement */}
      <Text style={{fontSize: 18, textAlign: 'center', marginTop: 20, color: '#4B5563', fontStyle:'italic'}}>
        "All of us at Blue CoLab look forward to seeing you on the team."
      </Text>
      <Text style={{fontSize: 18, textAlign: 'center', marginTop: 20, color: '#4B5563', fontStyle:'italic'}}>
        — John Cronin, Blue CoLab Director
      </Text>
    </ScrollView>
  );
}
