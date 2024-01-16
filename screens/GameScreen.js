import Colors from '../constants/Colors';
import Card from '../components/game/Card';
import { useState, useEffect } from 'react';
import GuessLog from '../components/game/GuessLog';
import { Plus, Minus } from 'phosphor-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryTitle from '../components/UI/PrimaryTitle';
import PrimaryButton from '../components/UI/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import { useNavigation } from '@react-navigation/native';
import {    View, 
            Text, 
            StyleSheet, 
            Alert,
            FlatList,
            ImageBackground} from 'react-native';

let minRef = 1;
let maxRef = 100;

const GameScreen = ({ route }) => {
    const navigation = useNavigation();
    const { userNumber } = route.params;

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

    function onGameOver(){
        navigation.navigate('GameOver');
    }

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
        setRoundLogs((currentRoundLogs) => [newRndNumber, ...currentRoundLogs]);
    }
    return (
        <LinearGradient colors={[Colors.blue800, Colors.blue500]} style={styles.rootContainer}>
           <ImageBackground  source={require('../assets/image/background.png')} 
                             resizeMode='cover' style={styles.rootContainer} 
                             imageStyle={styles.backgroundImage}>
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
                    <View style={styles.guessList}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={roundLogs}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({ item }) => (
                            <GuessLog guessNumber={roundLogs.length - roundLogs.indexOf(item)} guess={item} />
                        )}
                    />
                    </View>
                </View>
            </ImageBackground>
        </LinearGradient>
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
    },
    guessList:{
        flex:1,
        padding: 16,
    },
    rootContainer: {
        flex: 1,
      },
      backgroundImage: {
        opacity: 0.3,
      },

})
