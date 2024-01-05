import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput  style={styles.numberInput} 
                        maxLength={2} 
                        keyboardType='number-pad'
                        autoCapitalize='none'
                        autoCorrect={false} 
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
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
});

export default StartGameScreen;