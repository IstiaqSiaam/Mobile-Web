import React from 'react';
import {Text, StyleSheet, View,Image,TouchableOpacity, Button } from 'react-native';


const HomeScreen = (props)=>{
    console.log(props);
    return(
        <View>
            

            <TouchableOpacity
            onPress = {function(){
                alert("Welcome to IUT")
            }}>
            <Image
            style = {styles.imagestyle}
            source={require("./../../assets/Islamic_University_of_Technology_(coat_of_arms).png")}
            />
            <Text style = {styles.textstyle}>Welcome to IUT</Text>
            </TouchableOpacity>
            <Button
            title="View Profile"
            onPress= {function(){
                props.navigation.navigate("Profile");
            }}
            />
             <Button
            title="Semester Wise Course List"
            onPress= {function(){
                props.navigation.navigate("Semester");
            }}
            />
             <Button
            title="List of Faculty Members"
            onPress= {function(){
                props.navigation.navigate("Faculty");
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textstyle:{
        fontSize: 30,
        color:"blue",
        textAlign:"center"
    },
    imagestyle:{
        marginLeft:60
    }
});

export default HomeScreen;