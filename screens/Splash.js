import React from 'react';
import Colors from '../constants/Colors';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Splash(){
    const navigation = useNavigation();
    return (
        <LinearGradient colors={[Colors.blue800, Colors.blue500]} style={styles.rootContainer}>
           <ImageBackground  source={require('../assets/image/background.png')} 
                             resizeMode='cover' style={styles.rootContainer} 
                             imageStyle={styles.backgroundImage}>
                <View style={{flex: 1}}>
                    <View>
                        <LottieView
                            source={require('../assets/image/animation/dicesplash.json')}
                            autoPlay
                            loop={false}
                            style={{width: 400, height: 400}}
                            onAnimationFinish={() => {navigation.navigate('InsertNumber')}}   
                        />
                    </View>
                    <View style={styles.txtContainer}>
                        <Text style={styles.txt}>Guess The Number</Text>
                    </View>
                </View>
            </ImageBackground>      
        </LinearGradient>
    );
};

export default Splash;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    backgroundImage: {
      opacity: 0.3,
    },
    txtContainer:{
        alignItems:'center',
        justifyContent:'center',
        padding: 12,
        borderWidth: 3,
        borderColor: Colors.btnTxt,
        backgroundColor: Colors.btnInstructionBg,
        marginHorizontal: 24,
        marginVertical: 36,
    },
    txt:{
        fontFamily: 'Pacifico_400Regular',
        color: Colors.btnTxt,
        fontSize: 36,
    }
    
  });