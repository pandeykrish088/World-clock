import { Calendar } from "react-native-calendars";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React from "react"

export default class Calendars extends React.Component{

   results = []

 render(){
   return(
     <View style={styles.container}>

     <Calendar
     style = {styles.text}
     current = {"2021-01-01"}
     minDate = {"2021-12-01"}
     maxDate = {"2021-12-31"}
     onDayPress = {
       day => {
         console.log('selected day', day)
       }
     }

     monthFormat = {"yyyy mm"}
     onMonthChange = {
       month => {
         console.log("month change", month)
       }
     }
     />
     
     </View>
   )
 }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'top'
  },
  TitleContainer: {
    flex: 0.4,
    justifyContent: "center",
    marginHorizontal: 7,
    marginVertical: 20,
  },
  text: {
    color: "black",
    fontSize: 24,
  },
});
