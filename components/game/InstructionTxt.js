import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const InstructionTxt = () => {
    return <Text style={styles.instructionTxt}>Insert your number:</Text>;
};

export default InstructionTxt;

const styles = StyleSheet.create({
    instructionTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.blue600,
        marginBottom: 8
    }
});