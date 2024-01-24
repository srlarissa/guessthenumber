import {    View, 
            Text, 
            StyleSheet,
            Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
const NumberContainer = ({ children }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.numberTxt}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        width:140,
        backgroundColor: Colors.numberBoxBg,
        borderWidth:5,
        borderColor: Colors.numberBox,
        margin: deviceWidth < 380 ? 12 : 24,
        padding: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    numberTxt:{
        color:Colors.numberBox,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight:'bold',
    }
})