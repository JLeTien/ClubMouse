import { AppRegistry, View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Card, Avatar, Button } from 'react-native-paper';
import { Agenda, } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context'
import CalendarEntry from './components/CalendarEntry'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarScreen = ({ route }) => {
  const [items, setItems] = useState({});
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const [username1, setGetValue] = useState('');

  const [time, setTime] = useState([]);
  const [date, setDate] = useState([]);
  const [task, setTask] = useState([]);

  // Function to get the value from AsyncStorage
  AsyncStorage.getItem('Username').then(
    (value) =>
      // AsyncStorage returns a promise
      // Adding a callback to get the value
      setGetValue(value),
    // Setting the value in Text
  );


  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = 0; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = 1;
          if (strTime === "2022-10-13") {
            items[strTime].push({
              name: 'This is for me',
              height: 100,
              color: "pink"
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 100);
  };

  const getData = () => {
    var usernameVar = username1;
    var InsertAPIURL = "https://deco3801-clubmouse.uqcloud.net/getevent.php";   //API to render signup
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    var Data = {
      username: usernameVar,
    };
    fetch(InsertAPIURL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then((response) => {
        if (response[0].Message != "Nothing") {
          // setDate(response[0].Date);
          // setTime(response[0].Time);
          // setTask(response[0].Task);
        }
      })
      .catch((error) => {
        alert("Error Occured " + error);
      })
  }
  useEffect(() => {
    getData();
  }, [])

  const renderItem = (item) => {
    return (
      <CalendarEntry name={item.name}></CalendarEntry>
    );
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View stlye={styles.headingContainer}>
        <Text style={styles.heading}>Calendar</Text>
      </View>

      <View style={{ flex: 0.95 }}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          renderItem={renderItem}
          pastScrollRange={50}
          theme={{
            agendaKnobColor: "white",
            calendarBackground: "#2E1F56",
            selectedDayBackgroundColor: "white",
            selectedDayTextColor: "black",
            todayTextColor: 'black',
            dayTextColor: "#BEF0C3",
            monthTextColor: "white",
            selectedDotColor: "",
          }}
          style={{ backgroundColor: "black" }}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.pressContainer}>
              <Pressable
                style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              <Pressable
                style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>SAVE</Text>
              </Pressable>
            </View>

            <View style={styles.inputBox}>
              <TextInput placeholder="Add Title" style={{ color: "white", fontSize: 30 }} />
              <TextInput placeholder="Description" style={{ color: "white", fontSize: 20 }} />

              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{`Date:  ${selectedDate ? moment(selectedDate).format("MM/DD/YYYY") : "Please select date"}`}</Text>
                <Button title="Show Date Picker" onPress={showDatePicker} />
                <DateTimePickerModal
                  display={Platform.OS === 'ios' ? 'inline' : 'default'}
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                // date={date}
                // minimumDate={minimumDate}
                />
              </View>

            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#2E1F56',
  },
  headingContainer: {
    paddingBottom: 30
  },
  heading: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
  buttonContainer: {
    bottom: 90,
    right: 10,
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#65AC2D",
    position: "absolute",
    textAlign: "center",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5
  },
  plus: {
    fontSize: 45,
    color: "white",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  modalView: {
    backgroundColor: "#BBBEFE",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    flex: 0.5,
  },
  pressContainer: {
  },
  inputBox: {
    display: "flex",
    width: "90%",
    height: "80%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: '90%',
    borderRadius: 5,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    fontSize: 60
  },
});
AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default CalendarScreen