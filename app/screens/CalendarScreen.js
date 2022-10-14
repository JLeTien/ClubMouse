import { AppRegistry, View, Text, StyleSheet, Modal, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Card, Avatar, Button } from 'react-native-paper';
import { Agenda, } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context'
import CalendarEntry from './components/CalendarEntry'
import AsyncStorage from '@react-native-async-storage/async-storage';



const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarScreen = ({route}) => {
  const [items, setItems] = useState({});

  const [username1, setGetValue] = useState('');

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
    var Data ={
      username: usernameVar,
    };
    fetch(InsertAPIURL,{
      method:'POST',
      headers:headers,
      body: JSON.stringify(Data) //convert data to JSON
    })
    .then((response)=>response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
    .then((response)=>{
      if (response[0].Message != "Nothing") {
        console.log(response);
      }
    })
    .catch((error)=>{
      alert("Error Occured " + error);
    })
  }
  useEffect(() => {
    getData();
  })

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
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              // CHANGE PRESS TO ADD ENTRY
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>SAVE</Text>
            </Pressable>
            <Text style={styles.modalText}>Hello World!</Text>
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
    backgroundColor: "black",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 0.87
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  }, buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default CalendarScreen