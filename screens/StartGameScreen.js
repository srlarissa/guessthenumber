import { useState } from 'react';
import PrimaryTitle from '../components/UI/PrimaryTitle'
import PrimaryButton from '../components/UI/PrimaryButton';
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import Colors from '../constants/Colors';

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
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Insert your number:</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop:24,
        marginHorizontal:24,
        backgroundColor: Colors.blue900,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.blue600,
        marginBottom: 8,
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