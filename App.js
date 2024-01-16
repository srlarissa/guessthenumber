import 'react-native-gesture-handler';
import {  useState } from 'react';
import {  StyleSheet, 
          ImageBackground,
          SafeAreaView,
          ActivityIndicator } from 'react-native';
import Colors from './constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Mukta_800ExtraBold, Mukta_400Regular, Mukta_500Medium } from '@expo-google-fonts/mukta';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';

import { AppRoutes } from './routes';

export default function App() {  
  const [fontsLoaded] = useFonts({
    Mukta_800ExtraBold,
    Mukta_400Regular,
    Mukta_500Medium,
    Pacifico_400Regular,
  });

  return (
        <LinearGradient colors={[Colors.blue800, Colors.blue500]} style={styles.rootContainer}>
           <ImageBackground  source={require('./assets/image/background.png')} 
                             resizeMode='cover' style={styles.rootContainer} 
                             imageStyle={styles.backgroundImage}>
             <SafeAreaView style={styles.rootContainer}>
               { fontsLoaded ?  <AppRoutes /> : <ActivityIndicator color={Colors.btnTxt} />}
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