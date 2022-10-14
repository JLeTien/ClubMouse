import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet, Modal, TouchableOpacity, Pressable } from 'react-native'
import { Card, Avatar, Button } from 'react-native-paper';



class CalendarEntry extends Component {
    render() {
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
              <Text>{this.props.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
        )
    }
}

export default CalendarEntry;