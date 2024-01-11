import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = ({ onConfirmNumber  }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    function enteredNumberHandler(playerNumber){
        setEnteredNumber(playerNumber);
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!', 'The number has to be between 1 and 99!', [{text: 'Ok', style: 'destructive', onPress: resetInputHandler}])
            return
        }
        onConfirmNumber(chosenNumber);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    return (
        <View style={styles.inputContainer}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop:100,
        marginHorizontal:24,
        backgroundColor: '#151F30',
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold', 
        color: '#0593A2',
        borderBottomColor: '#0593A2',
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
});

export default StartGameScreen;