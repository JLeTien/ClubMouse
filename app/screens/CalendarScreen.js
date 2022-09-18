import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import {Card, Avatar} from 'react-native-paper';
import {Agenda, Calendar} from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context'
import CalendarPicker from 'react-native-calendar-picker';

const CalendarScreen = () => {
const [selectedStartDate, setSelectedStartDate] = useState(null);


  const onDateChange = (date) => {
    //function to handle the date change
    setSelectedStartDate(date);
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Calendar
        </Text>
        <CalendarPicker style={styles.calendar}
          startFromMonday={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={
            [
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
          months={[
            'January',
            'Febraury',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          previousTitle="Previous"
          nextTitle="Next"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          textStyle = {{
              color: 'white',
          }}
          scaleFactor={375}
          onDateChange={onDateChange}
        />
        <View style={styles.textStyle}>
          <Text style={styles.textStyle}>
            Selected Start Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#302852',
    padding: 16,
  },
  textStyle: {
    marginTop: 10,
    color: 'white'
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    color: 'white'
  },
  calendar: {
    color: 'white'
  }
});
AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default CalendarScreen