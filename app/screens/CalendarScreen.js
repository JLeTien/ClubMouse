import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Card, Avatar, Button } from 'react-native-paper';
import { Agenda, Calendar, CalendarList } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context'
import CalendarPicker from 'react-native-calendar-picker';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarScreen = () => {
  // const [selectedStartDate, setSelectedStartDate] = useState(null);
  // const onDateChange = (date) => {
  //   //function to handle the date change
  //   setSelectedStartDate(date);
  // };

  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = 1
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: '',
              height: 100,
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 30, marginTop: 30 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              {/* <Avatar.text label="S"></Avatar.text> */}
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.container}>
    //     <Text style={styles.titleStyle}>
    //       Calendar
    //     </Text>
    //     <CalendarPicker style={styles.calendar}
    //       startFromMonday={true}
    //       minDate={new Date(2018, 1, 1)}
    //       maxDate={new Date(2050, 6, 3)}
    //       weekdays={
    //         [
    //           'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'
    //         ]}
    //       months={[
    //         'January', 'Febraury', 'March', 'April', 'May',
    //         'June', 'July', 'August', 'September',
    //         'October', 'November', 'December',
    //       ]}
    //       previousTitle="<"
    //       nextTitle=">"
    //       todayBackgroundColor="#e6ffe6"
    //       selectedDayColor="#66ff33"
    //       selectedDayTextColor="#000000"
    //       textStyle={{
    //         color: 'white',
    //       }}
    //       scaleFactor={375}
    //       onDateChange={onDateChange}
    //     />
    //     <View style={styles.container2}>
    //       <View style={styles.textStyle}>
    //         <Text style={styles.textStyle}>
    //           Selected Start Date :
    //           {selectedStartDate ? selectedStartDate.toString() : ''}
    //         </Text>
    //       </View>
    //     </View>
    //     {/* BOTTOM CONTAINER */}
    //     <ScrollView style={styles.container3}>
    //       <View style={styles.box}>
    //         <Text> Entry 1 </Text>
    //       </View>
    //       <View style={styles.box}>
    //         <Text> Entry 2 </Text>
    //       </View>
    //     </ScrollView>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View stlye={styles.headingContainer}>
        <Text style={styles.heading}>Calendar</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          renderItem={renderItem}
          pastScrollRange={50}
          theme={{
            agendaKnobColor: "white",
            calendarBackground: "#302852",
            selectedDayBackgroundColor: "white",
            selectedDayTextColor: "black",
            todayTextColor: 'black',
            dayTextColor: "#BEF0C3",
            monthTextColor: "white",
            selectedDotColor: "",
          }}
        />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#302852',
  },
  headingContainer: {
    paddingBottom: 30
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
  heading: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },

});
AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default CalendarScreen