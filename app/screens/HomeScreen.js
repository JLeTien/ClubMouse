import React, {useState,useEffect} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {
  Scene,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  SphereGeometry,
} from 'three';
import ExpoTHREE, { TextureLoader, Renderer } from 'expo-three';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {

  const onContextCreate = async ( gl /*: not sure what should be here */) => {
    // three.js implementation
    const scene = new Scene();
    const camera = new PerspectiveCamera (75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
    gl.canvas = {width: gl.drawingBufferWidth, height: gl.drawingBufferHeight};

    // set camera position away from sphere
    camera.position.z = 2;

    const renderer = new Renderer({ gl });
    // set size of buffer to be equal  to drawing buffer width
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

    // image for world
    const worldTexture = new TextureLoader().load(require('../assets/WorldPlane.png'));

    // image for clouds
    const cloudsTexture = new TextureLoader().load(require('../assets/WorldClouds.png'));

    // create sphere
    // define geometry
    const worldGeometry = new SphereGeometry(1, 36, 36);
    const cloudGeometry = new SphereGeometry(1, 38, 38);
    const worldMaterial = new MeshBasicMaterial({ 
      map: worldTexture
   });
   const cloudsMaterial = new MeshBasicMaterial({ 
    map: cloudsTexture
  });

    const clouds = new Mesh(cloudGeometry, cloudsMaterial);
    const world = new Mesh(worldGeometry, worldMaterial);

    // add spheres to scene
    scene.add(world);
    //scene.add(clouds);

    // *** CURRENT ISSUE WITH WORLD *** 
    // Adding world with map is fine, adding both world and clouds is an issue.
    // Tried adding a scene of transparent clouds however the shape built is black and not transparent so overides the world
    // Also weird appearancs of the two spheres overlapping each other, perhaps sizing issue?
    // Both images for clouds and world are useable

    // create render function
    const render = () => {
      requestAnimationFrame(render);
      // create rotate functionality
      // rotate around x axis
      // sphere.rotation.x += 0.01;

      // rotate around y axis
      world.rotation.y += 0.005
      clouds.rotation.y += 0.010

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    // call render
    render();
  };
  // const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}> 
        <Text style={styles.text}>Good Night Anthony</Text>
      </View>
      <View>
        <GLView 
        onContextCreate={onContextCreate}
        style={{width: 400, height: 400}}/>
      </View>
      {/* <View syle={styles.middle}>
        <Text style={styles.text}>{time}</Text>
      </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#302852"
  },
  top: {
    paddingTop: 20,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flex: 0.2,
  },
  middle: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom:100,
    flex: 1,
  },
  bottom: {
    flex: 1,
  },
  button: {
    flexDirection: 'row', 
        height: 50,
        width:200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        elevation:3,
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