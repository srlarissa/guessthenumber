import { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import Card from '../components/game/Card';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryTitle from '../components/UI/PrimaryTitle'
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/UI/PrimaryButton';
import InstructionBox from '../components/UI/InstructionBox';
import InstructionTxt from '../components/game/InstructionTxt';
import {    View, 
            TextInput, 
            StyleSheet, 
            Alert, 
            ImageBackground,
            BackHandler,
            Dimensions,
            KeyboardAvoidingView,
            ScrollView  } from 'react-native';

const deviceHeight = Dimensions.get('window').height;

const StartGameScreen = () => {    
    /** 
    * This useEffect prevents the user from going back to the splash screen.
    */
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
    }, []);

    const navigation = useNavigation();

    const [enteredNumber, setEnteredNumber] = useState('');

    function enteredNumberHandler(playerNumber){
        setEnteredNumber(playerNumber);
    }

    /** 
    * Function that validates if the input is between 1 and 99 and navigates to the Game screen.
    */
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!', 'The number has to be between 1 and 99!', [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        navigation.navigate('Game', {userNumber: chosenNumber})
        setEnteredNumber('');
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    return (
        <LinearGradient colors={[Colors.blue800, Colors.blue500]} style={styles.rootContainer}>
            <ScrollView style={styles.rootContainer}>
                <ImageBackground  source={require('../assets/image/background.png')} 
                                resizeMode='cover' style={styles.rootContainer} 
                                imageStyle={styles.backgroundImage}>
                    <KeyboardAvoidingView behavior="position" style={styles.rootContainer}>
                        <View style={styles.screen}>
                            <PrimaryTitle>Guess The Number</PrimaryTitle>
                            <Card>
                                <InstructionTxt />
                                <TextInput  style={styles.numberInput} 
                                            maxLength={2} 
                                            keyboardType='number-pad'
                                            autoCapitalize='none'
                                            autoCorrect={false} 
                                            onChangeText={enteredNumberHandler}
                                            value={enteredNumber}
                                />
                                <View style={styles.buttonsContainer}>
                                    <View style={styles.buttonContainer}>
                                        <PrimaryButton btnHandler={resetInputHandler}>Reset</PrimaryButton>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <PrimaryButton btnHandler={confirmInputHandler}>Confirm</PrimaryButton>
                                    </View>
                                </View>
                            </Card>
                            <InstructionBox title={<PrimaryTitle>Instructions</PrimaryTitle>} />
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        marginTop: deviceHeight < 400 ? 0 : 24,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold', 
        color: Colors.blue600,
        borderBottomColor: Colors.blue600,
        borderBottomWidth: 2,
        marginVertical: 8,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
      },
      backgroundImage: {
        opacity: 0.3,
      },
});

export default StartGameScreen;