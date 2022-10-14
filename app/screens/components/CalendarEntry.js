import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet, Modal, TouchableOpacity, Pressable } from 'react-native'
import { Card, Avatar, Button } from 'react-native-paper';



class CalendarEntry extends Component {
    render() {
        return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 320401397f7328c0884d4d50ce7615395a36cb8f
        )
    }
}

export default CalendarEntry;