import { AppRegistry, View, Text, ImageBackground, StyleSheet, Image, SnapshotViewIOS, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import {Card, Avatar} from 'react-native-paper';
import {Agenda} from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../CustomInput';
import CustomButton from '../../CustomButton';

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
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Work at 8am',
              height: Math.max(50, Math.floor(Math.random() * 150)),
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
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
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

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-08-28'}
        renderItem={renderItem}
      />
    </View>
  );
};

AppRegistry.registerComponent('IosFonts', () => IosFonts);
export default CalendarScreen