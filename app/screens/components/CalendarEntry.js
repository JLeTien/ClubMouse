import React, { Component } from "react";
import {
    View, Text, StyleSheet, Image

} from "react-native";

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
                            <Text>{item.name}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default CalendarEntry;