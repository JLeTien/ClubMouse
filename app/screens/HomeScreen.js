import React, { useState, useEffect } from 'react';
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
import ExpoTHREE, { TextureLoader, Renderer } from 'expo-three';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { StatusBar } from 'expo-status-bar';
//open the database
function openDatabase() {
  const db = SQLite.openDatabase("db.db");
  return db;
}
const username = username;
const db = openDatabase();
const HomeScreen = () => {

  const onContextCreate = async (gl /*: not sure what should be here */) => {
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

    // add spheres to scene
    scene.add(world);

    // create render function
    const render = () => {
      requestAnimationFrame(render);
      // create rotate functionality
      // rotate around x axis
      // sphere.rotation.x += 0.01;

      // rotate around y axis
      world.rotation.y += 0.005

      renderer.render(scene, camera);
      gl.endFrameEXP();
    };

    // Sprite
    const map = new TextureLoader().load(require('../assets/Tree.png'));
    const material = new THREE.SpriteMaterial( { map: map } );
    const sprite = new THREE.Sprite( material );
    sprite.position.set(0, 0, 1);
    sprite.scale.set(0.25, 0.25, 0.25);
    
    // console.log(sprite)
    scene.add( sprite );

    // call render
    render();
  };
  const [username, setUsername] = useState('');
  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql("select value from users where id = 1", [], (tx, results) =>

          setUsername(results.rows.item(0).value)
        );
      },
    );
  })
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <Text style={styles.text} >Good Night {username}</Text>
      </View>
      <View>
        <GLView
          onContextCreate={onContextCreate}
          style={{ width: 500, height: 500 }} />
      </View>
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