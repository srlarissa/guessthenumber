import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const InstructionBox = ({title}) => {
    return (
        <View style={styles.container}>
            {title}
            <Text style={styles.instructionText}>Step 1: Insert a number between 1 and 99 then press Confirm.</Text>
            <Text style={styles.instructionText}>Step 2: On the next screen a opponent's guess will show.</Text>
            <Text style={styles.instructionText}>Step 3: If your number is higher than the opponent's guess, press the plus button, or else press the minus one. </Text>
            <Text style={styles.instructionText}>Step 4: Repeat steps 2 and 3 until the opponent's guess is equal to your number.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.btnTxt,
        borderWidth: 2,
        backgroundColor: Colors.btnInstructionBg,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 12,
        marginTop: 52,
        padding:18,
    },
    instructionText: {
        fontFamily:'Mukta_500Medium',
        color: Colors.btnTxt,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 12,
    },
});

export default InstructionBox;
