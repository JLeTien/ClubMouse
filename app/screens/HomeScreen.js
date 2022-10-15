import React, { useState, useEffect, useCallback } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as SQLite from "expo-sqlite"
import CustomButton from '../../CustomButton';
import {
  Scene,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  SphereGeometry,
} from 'three';
import ExpoTHREE, { TextureLoader, Renderer, THREE } from 'expo-three';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {

  const onContextCreate = ( gl ) => {
    // three.js implementation
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    gl.canvas = { width: gl.drawingBufferWidth, height: gl.drawingBufferHeight };

    // set camera position away from sphere
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    // set size of buffer to be equal  to drawing buffer width
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // image for world
    const worldTexture = new TextureLoader().load(require('../assets/WorldPlane.png'));

    // create sphere
    // define geometry
    const worldGeometry = new SphereGeometry(1, 36, 36);
    const worldMaterial = new MeshBasicMaterial({
      map: worldTexture
    });

    const world = new Mesh(worldGeometry, worldMaterial);

    // add world to scene
    scene.add(world);

    // Sprite
    // addSprite();

    // Sprite
    function addSprite() {

      // random y location
      yPos = randomPlacement();

      const map = new TextureLoader().load(require('../assets/Dog2.png'));
      const material = new THREE.SpriteMaterial({ map: map });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(0, yPos, 1);
      sprite.scale.set(0.25, 0.25, 0.25);
      scene.add(sprite);
      world.add(sprite)
    }

    function randomPlacement() {
      randInt = Math.floor(Math.random() * 6);
      return (randInt / 10);
    }

    // create render function
    const render = () => {
      requestAnimationFrame(render);
      // create rotate functionality
      // rotate around x axis
      // sphere.rotation.x += 0.01;

      // rotate around y axis
      world.rotation.y += 0.005
      // group.rotation.y += 0 .005

      if (global.addSprite) {
        console.log("we made it");
        addSprite();
        global.addSprite = false;
      }

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    // call render
    render();
  };

  const [username, setGetValue] = useState('');
  AsyncStorage.getItem('Username').then(
    (value) =>
        // AsyncStorage returns a promise
        // Adding a callback to get the value
        setGetValue(value),
    // Setting the value in Text
);

  const [title, setTitle] = useState("Welcome");
  const [time, setTime] = useState(null);
  React.useEffect(() => {
    
    const timer = setInterval(() => {
      var hours = new Date().getHours();
      setTime(new Date().toLocaleString());
      if(hours> 18 && hours <24 ){
        setTitle("Good Evening");
      }else if (hours> 1 && hours <10){
        setTitle("Good Morning");
      }else if (hours> 10 && hours <18){
        setTitle("Good Afternoon");
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  
  return (
    // <SafeAreaView style={styles.background}>
    <ImageBackground source={require('../assets/Space.jpg')} style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2E1F56"
    }}>

    <View style={styles.top}>
      <Text style={styles.text}>{time}</Text> 
      <Text style={styles.text}>{title} {username}</Text> 
      </View>
      <View>
        <GLView
          onContextCreate={onContextCreate}
          style={{ width: 500, height: 500 }} />
      </View>

    </ImageBackground>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    paddingTop: 0,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flex: 0.2,
  },
  middle: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom: 100,
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    elevation: 3,
  },
  heading: {
    color: "white",
    fontSize: 40,
  },
  text: {
    color: "white",
    fontSize: 20,
  }
})

export default HomeScreen