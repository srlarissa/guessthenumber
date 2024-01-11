import { Text, StyleSheet } from 'react-native';

const PrimaryTitle = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
};

export default PrimaryTitle;

const styles = StyleSheet.create({
    title:{
        fontFamily: 'Arial',
        fontSize: 24,
        fontWeight:'bold',
        color: '#BBE8F2',
        backgroundColor: 'rgba(187,232,242,0.2)',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#BBE8F2',
        padding:12,
    }
})