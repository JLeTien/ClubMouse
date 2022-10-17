import React, { Component } from "react";
import { View, Text, TouchableOpacity, } from 'react-native'
import { Card, Avatar, } from 'react-native-paper';

class CalendarEntry extends Component {
  render() {
    return (
      <TouchableOpacity style={{ marginRight: 20, marginTop: 30 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {this.props.name == "Sleep" ? <Avatar.Icon icon="clock" /> : null}
              <Avatar.Icon icon="clock" />
              <Text>{this.props.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }
}

export default CalendarEntry;