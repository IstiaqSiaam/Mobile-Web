import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

const CourseScreen= (props) => {
    const{semester,CoursesList} = props.route.params;

    return(
        <View>
            <Text>{semester}</Text>
            <FlatList
            data={CoursesList}
            renderItem={function({item}){
                return(
                    <Text
                    style={styles.textstyle} 
                >{item.name}</Text>
                )
            }}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    textstyle:{
        fontSize:30,
        marginVertical:20,
        textAlign:"center"
    }
});

export default CourseScreen;