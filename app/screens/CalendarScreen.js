import { AppRegistry, View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react';
import { Card, Avatar, Button } from 'react-native-paper';
import { Agenda, } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context'
import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const CalendarScreen = () => {
  const [items, setItems] = useState({});

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

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

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        //console.log(strTime);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = 1;
          // if (strTime === "2022-10-13") {
          //   for (let j = 0; j < numItems; j++) {
          //     items[strTime].push({
          //       name: '',
          //       height: 100,
          //       color: "pink"
          //     });
          //   }
          // }

        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 2000);
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
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
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
                style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>SAVE</Text>
              </Pressable>
            </View>

            <View style={styles.inputBox}>
              <TextInput placeholder="Add Title" style={{ color: "white", fontSize: 30 }} />
              <TextInput placeholder="Description" style={{ color: "white", fontSize: 20 }} />

              <Text>{`Date:  ${selectedDate ? moment(selectedDate).format("MM/DD/YYYY") : "Please select date"}`}</Text>
              <Button title="Show Date Picker" onPress={showDatePicker} />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
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
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    flex: 0.87,
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