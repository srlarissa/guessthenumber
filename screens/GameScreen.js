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
            ImageBackground,
            Dimensions  } from 'react-native';

let minRef = 1;
let maxRef = 100;

const deviceHeight = Dimensions.get('window').height;

const GameScreen = ({ route }) => {
    const navigation = useNavigation();
    const { userNumber } = route.params;

    let initialGuess = generateRandomNumber(100, 1, userNumber);
    const [guessedNumber, setGuessedNumber] = useState(initialGuess);
    const [roundLogs, setRoundLogs] = useState([initialGuess]);
    
    /** 
    * This useEffect analizes if the game is over calling the onGameOver function.
    */
    useEffect(() => {
        if(guessedNumber === userNumber){
            onGameOver();
        }
    }, [guessedNumber, userNumber, onGameOver]);
    
    /** 
    * This useEffect sets the min and max values to the initial values everytime the screen is rendered.
    */
    useEffect(() => {
        minRef = 1;
        maxRef = 100;
    },[]);
    
    /** 
    * This function navigates to the GameOver screen.
    */
    function onGameOver(){
        navigation.navigate('GameOver', {roundsNumber: roundLogs.length, userNumber: userNumber});
    }
    
    /** 
    * This function generates the first random number the opponent will guess.
    * @summary - This function generates a number between the min and the max values, and if the number is the same as the userNumber, it generates another number.
    * @param {number} max - The max value the random number can be.
    * @param {number} min - The min value the random number can be.
    * @param {number} exclude - The number choosed by the user, so the random number can't be the same on the first round.
    * @return {number} - The first guess of the opponent.
    */
    function generateRandomNumber(max, min, exclude){
        const rndNumber = Math.floor(Math.random() * (max - min)) + min;
        if(rndNumber === exclude){
            return generateRandomNumber(maxRef, minRef, exclude);
        }else{
            return rndNumber;
        }
    }
    
    /** 
    * Next guess generator function that updates the min and max value, generates a new random number and keeps a log of the guesses.
    * @summary Depending on the direction, this function updates the min or max value and generates a new random number between them.
    * Then, the new generated number is set as the new guessedNumber and added to the roundLogs array. 
    * @param {string} direction - The direction the user chose between higher or lower. This way is possible to adapt the min and max values 
    * and generate a new random number.
    */
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
        marginTop: deviceHeight < 600 ? 0 : 24,
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
