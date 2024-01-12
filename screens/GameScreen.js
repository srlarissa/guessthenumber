import { useState } from 'react';
import Colors from '../constants/Colors';
import {    View, 
            Text, 
            StyleSheet, 
            Pressable, 
            Alert} from 'react-native';
import PrimaryTitle from '../components/UI/PrimaryTitle';
import NumberContainer from '../components/game/NumberContainer';
import { Plus, Minus } from 'phosphor-react-native';

const GameScreen = ({ userNumber }) => {
    let min = 1;
    let max = 100;
    let initialGuess = generateRandomNumber(max, min, userNumber);
    const [guessedNumber, setGuessedNumber] = useState(initialGuess);

    function generateRandomNumber(max, min, exclude){
        const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    
        if(rndNumber === exclude){
            return generateRandomNumber(max, min, exclude);
        }else{
            return rndNumber;
        }
    }
    
    function nextGuessGenerator(direction){
        if(direction == 'lower' && guessedNumber < userNumber){
            max = guessedNumber;
            
        }else if(direction == 'higher' && guessedNumber > userNumber){
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
            <View style={styles.btnContainer}>
                <Pressable onPress={() => nextGuessGenerator('higher')}>
                    <View style={styles.btn}>
                        <Plus weight='bold' color={Colors.btnTxt} />
                    </View>
                </Pressable>
                <View style={styles.btnTitleContainer}>
                    <Text style={styles.higher}>Higher </Text>
                    <Text style={styles.or}>OR </Text>
                    <Text style={styles.lower}>Lower </Text>
                    <Text style={styles.or}>?</Text>
                </View>
                <Pressable onPress={() => nextGuessGenerator('lower')}>
                    <View style={styles.btn}>
                        <Minus weight='bold' color={Colors.btnTxt} />
                    </View>
                </Pressable>
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
    btn:{
        backgroundColor:Colors.btnPlusMinusBg,
        borderWidth:2,
        borderColor: Colors.btnTxt,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        padding:24,
    },
    higher:{
        color:Colors.higher,
        fontWeight: '800',
        fontSize: 24,
        textDecorationLine:'underline',
    },
    lower:{
        color:Colors.lower,
        fontWeight: '800',
        fontSize: 24,
        textDecorationLine:'underline',
    },
    or:{
       color: Colors.btnTxt,
        fontSize: 24,
        fontWeight: '500',
    }

})
