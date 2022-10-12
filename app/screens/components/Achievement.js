import React, { Component } from "react";
import {
    View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity

} from "react-native";

class Achievement extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={this.props.unlocked == this.props.requirement ? styles.bigContainer : styles.bigContainer2}>
                    <View style={{ flex: 2 }}>
                        <View style={styles.smallContainer}>
                            <View style={{ flex: 1, padding: 10 }}>
                                <Image style={styles.image} source={this.props.imageUri} />
                            </View>
                        </View>
                    </View>
                    {this.props.unlocked == "yes" ?
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.title}>{this.props.name}</Text>
                            <Text style={styles.desc}>{this.props.desc}</Text>
                        </View> :
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.title}>{this.props.name}</Text>
                            <Text style={styles.desc}>{this.props.desc}</Text>
                        </View>}
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    bigContainer: {
        height: 170,
        width: 120,
        marginLeft: 20,
        backgroundColor: '#BEF0C3',
        borderRadius: 30,
    },
    bigContainer2: {
        height: 170,
        width: 120,
        marginLeft: 20,
        backgroundColor: 'white',
        opacity: 0.3,
        borderRadius: 30,
        position: ""
    },
    smallContainer: {
        flex: 1,
        backgroundColor: '#57CC99',
        borderRadius: 30,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    descriptionContainer: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    image2: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        tintColor: "#2d3436"
    },
    title: {
        textAlign: "center",
        fontSize: 10
    },
    desc: {
        textAlign: "center",
        fontSize: 8
    }
})

export default Achievement;