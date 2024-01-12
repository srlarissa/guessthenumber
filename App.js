import {  useState } from 'react';
import {  StyleSheet, 
          ImageBackground,
          SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors';


export default function App() {
  const [playerNumber, setPlayerNumber] = useState();

  function playerPickedNumber(pickedNumber){
    setPlayerNumber(pickedNumber)
  }

  let screen = <StartGameScreen onConfirmNumber={playerPickedNumber}  />

  if(playerNumber){
    screen = <GameScreen userNumber={playerNumber}/>
  }

  return (
   <LinearGradient colors={[Colors.blue800, Colors.blue500]} style={styles.rootContainer}>
      <ImageBackground  source={require('./assets/image/background.png')} 
                        resizeMode='cover' style={styles.rootContainer} 
                        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootContainer}>
          { screen }
        </SafeAreaView>
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