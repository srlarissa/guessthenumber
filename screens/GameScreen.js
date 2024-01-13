import { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import {    View, 
            Text, 
            StyleSheet, 
            Pressable, 
            Alert} from 'react-native';
import PrimaryTitle from '../components/UI/PrimaryTitle';
import NumberContainer from '../components/game/NumberContainer';
import { Plus, Minus } from 'phosphor-react-native';
import Card from '../components/game/Card';

const GameScreen = ({ userNumber, onGameOver }) => {
    let min = 1;
    let max = 100;
    let initialGuess = generateRandomNumber(100, 1, userNumber);
    const [guessedNumber, setGuessedNumber] = useState(initialGuess);

    useEffect(() => {
        if(guessedNumber === userNumber){
            onGameOver();
        }
    }, [guessedNumber, userNumber, onGameOver]);

    function generateRandomNumber(max, min, exclude){
        const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    
        if(rndNumber === exclude){
            return generateRandomNumber(max, min, exclude);
        }else{
            return rndNumber;
        }
    }
    
    function nextGuessGenerator(direction){
        if(direction == 'lower' && guessedNumber > userNumber){
            max = guessedNumber;
            
        }else if(direction == 'higher' && guessedNumber < userNumber){
            min = guessedNumber + 1;
        }else{
            return Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry', style: 'cancel'}]);
        }
        const newRndNumber = generateRandomNumber(max, min, guessedNumber);
        setGuessedNumber(newRndNumber);
    }
    return (
        <View style={styles.screen}>
            <PrimaryTitle>Opponent's Guess</PrimaryTitle>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <Card>
                <View style={styles.cardContainer}>
                    <Pressable onPress={() => nextGuessGenerator('higher')}>
                        <View style={styles.btn}>
                            <Plus weight='bold' color={Colors.btnTxt} />
                        </View>
                    </Pressable>
                    <View style={styles.btnTitleContainer}>
                        <Text style={styles.higherLower}>Higher </Text>
                        <Text style={styles.or}>OR </Text>
                        <Text style={styles.higherLower}>Lower </Text>
                    </View>
                    <Pressable onPress={() => nextGuessGenerator('lower')}>
                        <View style={styles.btn}>
                            <Minus weight='bold' color={Colors.btnTxt} />
                        </View>
                    </Pressable>
                </View>
            </Card>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
    },
    cardContainer:{
       flexDirection: 'row', 
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTitleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    btn:{
        backgroundColor:Colors.btnPlusMinusBg,
        borderWidth:2,
        borderColor: Colors.btnTxt,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        padding:24,
    },
    higherLower:{
        color:Colors.btnTxt,
        fontWeight: '800',
        fontSize: 22,
        textDecorationLine:'underline',
    },
    or:{
       color: Colors.btnTxt,
        fontSize: 20,
        fontWeight: '500',
    }

})
