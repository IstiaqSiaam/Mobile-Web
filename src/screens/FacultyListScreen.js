import React from 'react';
import {Text, StyleSheet, View,FlatList} from 'react-native';

const ListOfFaculties = [
    {name: "Dr. Muhammad Mahbub Alam, Professor", key:"1"},
    {name: "Md. Hasanul Kabir, Professor", key:"2"},
    {name: "Mohayeminul Islam, Associate Professor", key:"3"},
    {name: "Ridwan Kabir, Lecturer", key:"4"},
    {name: "Njayou Youssouf, Lecturer", key:"5"},
    {name: "Tasnim Ahmed, Lecturer", key:"6"},
    {name: "Fardin Saad, Lecturer", key:"7"}
];

const FacultyListScreen =() => {
    return(
        <View style = {styles.viewstyle}>
            <FlatList
            horizontal={false}
            data={ListOfFaculties}
            renderItem={function({item}){
            return <Text Style={styles.textstyle}>{item.name}</Text>
            }}
            >
            </FlatList>

        </View>
    )
};

const styles = StyleSheet.create({    
    viewstyle:{
        borderColor: "blue",
        backgroundColor: "lightgreen"
    },
    textstyle:{
        fontSize:30,
        color:"blue",
        textAlign:"center",
        marginVertical:30
    }   
});

export default FacultyListScreen;