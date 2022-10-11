import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS, ScrollView } from 'react-native'
import React, { useState } from 'react';
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
              'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'
            ]}
          months={[
            'January', 'Febraury', 'March', 'April', 'May',
            'June', 'July', 'August', 'September',
            'October', 'November', 'December',
          ]}
          previousTitle="<"
          nextTitle=">"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#66ff33"
          selectedDayTextColor="#000000"
          textStyle={{
            color: 'white',
          }}
          scaleFactor={375}
          onDateChange={onDateChange}
        />
        <View style={styles.container2}>
          <View style={styles.textStyle}>
            <Text style={styles.textStyle}>
              Selected Start Date :
              {selectedStartDate ? selectedStartDate.toString() : ''}
            </Text>
          </View>
        </View>
        {/* BOTTOM CONTAINER */}
        <ScrollView style={styles.container3}>
          <View style={styles.box}>
            <Text> Entry 1 </Text>
          </View>
          <View style={styles.box}>
            <Text> Entry 2 </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#302852',
  },
  container3: {
    flex: 1,
    backgroundColor: 'black',
  },
  textStyle: {
    marginTop: 15,
    color: 'white',
    textAlign: 'center'
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: "bold"
  },
  calendar: {
    color: 'white',
  },
  entry: {
    color: 'white',
  },
  box: {
    backgroundColor: '#65AC2D',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 100,
    borderRadius: 20
  },
});
AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default CalendarScreen