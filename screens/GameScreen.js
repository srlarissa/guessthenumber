import { useState, useEffect } from 'react';
import Colors from '../constants/Colors';
import {    View, 
            Text, 
            StyleSheet, 
            Alert,
            FlatList} from 'react-native';
import PrimaryTitle from '../components/UI/PrimaryTitle';
import NumberContainer from '../components/game/NumberContainer';
import { Plus, Minus } from 'phosphor-react-native';
import Card from '../components/game/Card';
import PrimaryButton from '../components/UI/PrimaryButton';

let minRef = 1;
let maxRef = 100;

const GameScreen = ({ userNumber, onGameOver, roundNumberHandler }) => {
    let initialGuess = generateRandomNumber(100, 1, userNumber);
    const [guessedNumber, setGuessedNumber] = useState(initialGuess);
    const [roundLogs, setRoundLogs] = useState([initialGuess]);

    useEffect(() => {
        if(guessedNumber === userNumber){
            onGameOver();
        }
    }, [guessedNumber, userNumber, onGameOver]);

    useEffect(() => {
        minRef = 1;
        maxRef = 100;
    },[]);

    function generateRandomNumber(max, min, exclude){
        const rndNumber = Math.floor(Math.random() * (max - min)) + min;
        if(rndNumber === exclude){
            return generateRandomNumber(maxRef, minRef, exclude);
        }else{
            return rndNumber;
        }
    }
    
    function nextGuessGenerator(direction){
        if(direction == 'lower' && guessedNumber > userNumber){
            maxRef = guessedNumber;
        }else if(direction == 'higher' && guessedNumber < userNumber){
            minRef = guessedNumber + 1;
        }else{
            return Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry', style: 'cancel'}]);
        }
        const newRndNumber = generateRandomNumber(maxRef, minRef, guessedNumber);
        setGuessedNumber(newRndNumber);
        roundNumberHandler();
        setRoundLogs((currentRoundLogs) => [newRndNumber, ...currentRoundLogs]);
    }
    return (
        <View style={styles.screen}>
            <PrimaryTitle>Opponent's Guess</PrimaryTitle>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <Card>
                <View style={styles.btnTitleContainer}>
                    <Text style={styles.higher}>Higher </Text>
                    <Text style={styles.or}>OR </Text>
                    <Text style={styles.lower}>Lower </Text>
                </View>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <PrimaryButton btnHandler={() => nextGuessGenerator('higher')}>
                            <Plus weight='bold' color={Colors.btnTxt} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.btn}>
                        <PrimaryButton btnHandler={() => nextGuessGenerator('lower')}>
                            <Minus weight='bold' color={Colors.btnTxt} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
            <FlatList
                data={roundLogs}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.roundLogItem}>
                        <Text style={styles.roundLogText}>{item}</Text>
                    </View>
                )}
            />
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
    cardContainer:{
       flexDirection: 'row', 
       alignItems: 'center',
       justifyContent: 'center',
    },
    btnContainer:{
        flexDirection: 'row',
        marginTop: 8,
    },
    btnTitleContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        flex:1,
    },
    higher:{
        fontFamily:'Mukta_800ExtraBold',
        color:Colors.higher,
        fontWeight: '800',
        fontSize: 28,
        textDecorationLine:'underline',
    },
    lower:{
        fontFamily:'Mukta_800ExtraBold',
        color:Colors.lower,
        fontWeight: '800',
        fontSize: 28,
        textDecorationLine:'underline',
    },
    or:{
        fontFamily:'Mukta_400Regular',
        color: Colors.btnTxt,
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 8,
    }

})
