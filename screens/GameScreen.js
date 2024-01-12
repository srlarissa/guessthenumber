import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryTitle from '../components/UI/PrimaryTitle';
import NumberContainer from '../components/game/NumberContainer';
import GameBtn from '../components/game/GameBtn';
import Colors from '../constants/Colors';

function generateRandomNumber(max, min, exclude){
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if(rndNumber === exclude){
        return generateRandomNumber(max, min, exclude);
    }else{
        return rndNumber;
    }
}
const GameScreen = ({ userNumber }) => {
    const min = 1;
    const max = 100;
    let initialGuess = generateRandomNumber(max, min, userNumber);
    const [guessedNumber, setGuessedNumber] = useState(initialGuess);
    return (
        <View style={styles.screen}>
            <PrimaryTitle>Opponent's Guess</PrimaryTitle>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <View style={styles.btnContainer}>
                <GameBtn>+</GameBtn>
                <View style={styles.btnTitleContainer}>
                    <Text style={styles.higher}>Higher </Text>
                    <Text style={styles.or}>OR </Text>
                    <Text style={styles.lower}>Lower </Text>
                    <Text style={styles.or}>?</Text>

                </View>
                <GameBtn>-</GameBtn>
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:12,
    },
    btnTitleContainer:{
        flexDirection: 'row',

    },
    higher:{
        color:Colors.higher,
        fontWeight: 'bold',
        fontSize: 24,
    },
    lower:{
        color:Colors.lower,
        fontWeight: 'bold',
        fontSize: 24,
    },
    or:{
       color: Colors.btnTxt,
        fontSize: 24,
    }

})
