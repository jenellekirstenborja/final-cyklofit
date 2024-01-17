import { View, Text,FlatList, ImageBackground,Platform, Image, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import React from 'react';
import { images, FONTS, COLORS, SIZES } from '../constants';
import Button from '../components/Button';
import { Ionicons } from "@expo/vector-icons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { cyclistTrainingData } from '../constants/data';


const Sprinting = ({ navigation }) => {
  return (
    <View className="">
    {/* destination image */}
    <ImageBackground source={require('../assets/images/training1.jpg')}  style={{width: wp(100), height: hp(50)}} />

    {/* back button */}
    <SafeAreaView style={{position:'absolute',marginVertical:20,}}>
        <TouchableOpacity
            onPress={()=> navigation.goBack()}
            className=""
        >
<Ionicons name="arrow-back-circle" size={55} color={COLORS.white} />
          
        </TouchableOpacity>
     
    </SafeAreaView>

    {/* title & descritpion & booking button */}
    <View style={{borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor:COLORS.background,padding:25,  marginTop:-206,justifyContent:'space-between', }}>

         <Text style={[styles.title]}>Sprinting</Text>

         <FlatList
           data={cyclistTrainingData}
           keyExtractor={(item) => item.id}
           renderItem={({item})=>(
            <TouchableOpacity 
            onPress={() =>navigation.navigate("Home")}
            style={{
              height: 150, width: "100%",marginBottom:30,
             }}>
              <Image
                source={item.image}
                resizeMode='cover'
                style={{
                  height: "100%", width: "100%", borderRadius: 14
                }}/>
              <View style={{
                position: "absolute",
                bottom: 12,
                left: 6 }}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: SIZES.width - ( 16 * 2 + 6 * 2 ) }}>
                  <View>
                  <Text style={[styles.description]}>{item.name}</Text>
                <Text style={{
                  fontSize: 12,
                  fontFamily: 'regular',
                  color: COLORS.white
                }}>{item.distance} km away</Text>
                  </View>
                 
                </View>
              </View>
            </TouchableOpacity>
           )}
         />
      </View> 

</View>
  )
}

const styles = StyleSheet.create({
    background: { 
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#171725",
        paddingHorizontal: 20,
    },
    logo: {
        height: SIZES.width * .8,
        width:  SIZES.width * .8
    },
    title: { 
        ...FONTS.h6, 
        textAlign: "left",
        color: COLORS.white,
        marginBottom:18,
    },
    description: { 
        ...FONTS.h6, 
        textAlign: "left",
        color: COLORS.white,
    },
    btn: {
        width: SIZES.width - 44
    },
    bottomContainer: { 
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 12
    }
})

export default Sprinting