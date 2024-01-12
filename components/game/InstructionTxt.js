import { Text, StyleSheet } from 'react-native';

const InstructionTxt = () => {
    return <Text style={styles.instructionTxt}>Insert your number:</Text>;
};

export default InstructionTxt;

const styles = StyleSheet.create({
    instructionTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.blue600,
        marginBottom: 8,
    },
});