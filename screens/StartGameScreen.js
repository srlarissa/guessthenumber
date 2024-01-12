import { useState } from 'react';
import Colors from '../constants/Colors';
import Card from '../components/UI/Card';
import PrimaryTitle from '../components/UI/PrimaryTitle'
import PrimaryButton from '../components/UI/PrimaryButton';
import InstructionTxt from '../components/game/InstructionTxt';
import { View, TextInput, StyleSheet, Alert } from 'react-native';

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
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
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
});

export default StartGameScreen;