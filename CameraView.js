import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraView({ navigation }) {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.current.takePictureAsync();
      
      navigation.navigate('ImagemCapturada', { photo });
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.text} onPress={flipCamera}>Virar</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.text} onPress={takePicture}>Capturar</Text>
          </View>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 15,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
