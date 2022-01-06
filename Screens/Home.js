import React, { useContext, useEffect, useState } from "react";
import Calendar from "./Calendar";
import World_clock from "./World_clock";
import Stop_watch from "./Stop_watch";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();


export default class App extends React.Component {
  render(){
    return (
        <NavigationContainer>
          <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: "white" }}
            tabBarOptions={{
              showLabel: false,
              activeBackgroundColor: "orange",
              inactiveBackgroundColor: "blue",
              activeTintColor: "blue",
              inactiveTintColor: "orange",
            }}
          >

            <Tab.Screen
              name="Clock"
              component={World_clock}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <AntDesign name="clockcircleo" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Stop Watch"
              component={Stop_watch}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <AntDesign name="stopwatch" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Calendar"
              component={Calendar}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <AntDesign name="timer" size={size} color={color} />
                ),
              }}
            />
            
          </Tab.Navigator>
        </NavigationContainer>
   
    );
}
}


