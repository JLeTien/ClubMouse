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
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = 1
          // for (let j = 0; j < numItems; j++) {
          //   items[strTime].push({
          //     name: '',
          //     height: 100,
          //     color: "pink"
          //   });
          // }
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
              <Avatar.Text label="S" color="white" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View stlye={styles.headingContainer}>
        <Text style={styles.heading}>Calendar</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Agenda
          // items={{
          //   '2022-10-11': [{ name: 'item 1 - any js object', height: 80 }],
          // }}
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