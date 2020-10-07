import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FacultyListScreen from "./src/screens/FacultyListScreen";
import SemesterScreen from "./src/screens/SemesterScreen";
import CourseScreen from "./src/screens/CourseScreen";

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName = "Home">
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="Profile" component={ProfileScreen}/>
        <stack.Screen name="Faculty" component={FacultyListScreen}/>
        <stack.Screen name="Semester" component={SemesterScreen}/>
        <stack.Screen name="Courses" component={CourseScreen}/>
      </stack.Navigator>
    </NavigationContainer>
     
  );
}

export default App;
