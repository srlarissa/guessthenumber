import {    View, 
            StyleSheet,
            Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

const Card = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop:deviceWidth < 380 ? 18 : 36,
        marginHorizontal:24,
        backgroundColor: Colors.blue900,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,    
    }
});

export default Card;
