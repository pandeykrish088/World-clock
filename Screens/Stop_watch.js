import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Stopwatch, Timer } from "react-native-stopwatch-timer"
import { useTheme } from "react-native-paper";



export default class Stop_watch extends Component{
constructor() {
  super();
  this.state = {
   timerStart: false,
   stopWatchStart: false,
   totalDuration: 90000,
   timerReset: false,
   stopWatchReset: false
  }

  this.toggleTimer = this.toggleTimer.bind(this)
  this.resetTimer = this.resetTimer.bind(this)
  this.toggleStopWatch = this.toggleStopWatch.bind(this)
  this.resetStopWatch = this.resetStopWatch.bind(this)
}

 toggleTimer() {
   this.setState({
     timerStart: !this.state.timerStart, timerReset: false
   })
 }

 resetTimer() {
 this.setState({
     timerStart: false, timerReset: true
   })
 }

toggleStopWatch() {
   this.setState({
     stopWatchStart: !this.state.stopWatchStart, stopWatchReset: false
   })
 }

 resetStopWatch() {
   this.setState({
     stopWatchStart: false, stopWatchReset: true
   })
 }

 getFormatedTime(time) {
   this.currentTime = time

 }

 render(){
   return(
     <View style={styles.container}>
     <Stopwatch laps msecs start={this.state.stopWatchStart}

      reset={this.state.stopwatchReset} 
      
      getTime={this.getFormattedTime} 
      />

     <TouchableHighlight
     onPress={this.toggleStopWatch}
     >
   <Text style={{ textAlign: "center" }}>{!this.state.stopWatchStart ? "Start" : "Stop"}</Text>
     </TouchableHighlight>
     
     </View>
   )
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center"
  },
  TitleContainer: {
    justifyContent: "center",
    marginHorizontal: 15,
    marginVertical: 20,
  },
  text: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 24,
  },
});
