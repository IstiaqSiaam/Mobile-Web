import React from 'react';
import {Text, StyleSheet, View,Image,TouchableOpacity, Button } from 'react-native';



const ProfileScreen = ()=>{
    
    return(
        <View>
            <Image style={styles.imagestyle} source={require("./../../assets/download.png")}/> 
            <Text style={styles.textstyle}>Name: Istiaq Bin Salam Siaam</Text>
            <Text style={styles.textstyle}>Student ID: 170042014</Text>
            <Text style={styles.textstyle}>Room No: 404 , South Hall of Residence</Text>
            <Text style={styles.textstyle}>Email: istiaqsiaam@iut-dhaka.edu</Text>
             
        </View>
    )
}

const styles = StyleSheet.create({
    textstyle:{
        fontSize:25,
        color:"green",
        textAlign:"center"
    },
    imagestyle:{
        marginLeft:65
    }
});

export default ProfileScreen;