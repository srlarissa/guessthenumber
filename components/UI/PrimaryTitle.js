import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const PrimaryTitle = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
};

export default PrimaryTitle;

const styles = StyleSheet.create({
    title:{
        fontFamily: 'Arial',
        fontSize: 24,
        fontWeight:'bold',
        color: Colors.title,
        backgroundColor: Colors.titleBg,
        textAlign: 'center',
        borderWidth: 2,
        borderColor:Colors.title,
        padding:12,
    }
})