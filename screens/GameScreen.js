import { View, StyleSheet } from 'react-native';
import PrimaryTitle from '../components/PrimaryTitle';

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <PrimaryTitle>Opponent's Guess</PrimaryTitle>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    },
})
