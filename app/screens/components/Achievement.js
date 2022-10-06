import React, { Component } from "react";
import {
    View, Text, StyleSheet, Image

} from "react-native";

class Achievement extends Component {
    render() {
        return (
            <View style={{ height: 170, width: 120, marginLeft: 20, backgroundColor: '#BEF0C3', borderRadius: 30 }}>
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 1, backgroundColor: '#57CC99', borderRadius: 30, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                        <View style={{ flex: 1, padding: 10 }}>
                            <Image style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }} source={this.props.imageUri} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, paddingTop: 10 }}>
                    <Text style={{ textAlign: "center", fontSize: 10 }}>{this.props.name}</Text>
                    <Text style={{ textAlign: "center", fontSize: 8 }}>{this.props.desc}</Text>
                </View>
            </View>
        )
    }
}


export default Achievement;