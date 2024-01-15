import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const GuessLog = ({guessNumber, guess}) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemTxtHL} >#{guessNumber}</Text>
            <Text style={styles.itemTxt} ><Text style={styles.itemTxtHL}>Guess:</Text> {guess}</Text>
        </View>
    );
};

export default GuessLog;    

const styles = StyleSheet.create({
    listItem:{
        backgroundColor: Colors.btnPlusMinus,
        borderColor:Colors.lower,
        borderRadius: 40,
        borderWidth: 2,
        padding: 12,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: Colors.androidShadow,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemTxt: {
        fontFamily: 'Mukta_400Regular',
        color: Colors.btnTxt,
        fontSize: 18,
    },
    itemTxtHL: {
        fontFamily: 'Mukta_800ExtraBold',
        color: Colors.btnTxt,
        fontSize: 18,
    }
});
