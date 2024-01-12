import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
const NumberContainer = ({ children }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.numberTxt}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        width:140,
        backgroundColor: Colors.numberBoxBg,
        borderWidth:5,
        borderColor: Colors.numberBox,
        margin: 24,
        paddingVertical:24,
        paddingHorizontal:24,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    numberTxt:{
        color:Colors.numberBox,
        fontSize: 52,
        fontWeight:'bold',
    }
})