import { View, Text, StyleSheet } from 'react-native';
import PrimaryTitle from '../components/UI/PrimaryTitle';

const GameOverScreen = () => {
    return (
        <View style={styles.screen}>
            <PrimaryTitle>GAME OVER</PrimaryTitle>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    },
});
