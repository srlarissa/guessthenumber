import {  useState } from 'react';
import {  StyleSheet, 
          ImageBackground,
          SafeAreaView,
          ActivityIndicator } from 'react-native';
import Colors from './constants/Colors';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts, Mukta_800ExtraBold, Mukta_400Regular, Mukta_500Medium } from '@expo-google-fonts/mukta';

export default function App() {
  const [fontsLoaded] = useFonts({
    Mukta_800ExtraBold,
    Mukta_400Regular,
    Mukta_500Medium
  });

  const [playerNumber, setPlayerNumber] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  function playerPickedNumber(pickedNumber){
    setPlayerNumber(pickedNumber)
    setGameOver(false)
  }

  function gameOverHandler(){
    setGameOver(true)
  }

  let screen = <StartGameScreen onConfirmNumber={playerPickedNumber}  />

  if(playerNumber){
    screen = <GameScreen userNumber={playerNumber} onGameOver={gameOverHandler} />
  }

  if(gameOver && playerNumber){
    screen = <GameOverScreen />
  }

  return (
        <LinearGradient colors={[Colors.blue800, Colors.blue500]} style={styles.rootContainer}>
           <ImageBackground  source={require('./assets/image/background.png')} 
                             resizeMode='cover' style={styles.rootContainer} 
                             imageStyle={styles.backgroundImage}>
             <SafeAreaView style={styles.rootContainer}>
               { fontsLoaded ? screen : <ActivityIndicator color={Colors.btnTxt} />}
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