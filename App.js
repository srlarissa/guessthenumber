import {  useState } from 'react';
import {  StyleSheet, 
          ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {
  const [playerNumber, setPlayerNumber] = useState();

  function playerPickedNumber(pickedNumber){
    setPlayerNumber(pickedNumber)
  }

  let screen = <StartGameScreen onConfirmNumber={playerPickedNumber}  />

  if(playerNumber){
    screen = <GameScreen />
  }

  return (
   <LinearGradient colors={['#012030', '#13678A']} style={styles.rootContainer}>
      <ImageBackground  source={require('./assets/image/background.png')} resizeMode='cover' style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        { screen }
      </ImageBackground>      
   </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  }
});