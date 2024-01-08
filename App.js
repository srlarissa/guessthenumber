import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
   <LinearGradient colors={['#012030', '#13678A']} style={styles.rootContainer}>
      <ImageBackground  source={require('./assets/image/background.png')} 
                        resizeMode='cover'
                        style={styles.rootContainer}
                        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
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