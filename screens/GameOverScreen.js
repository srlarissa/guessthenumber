import Colors from '../constants/Colors';
import LottieView from 'lottie-react-native';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryTitle from '../components/UI/PrimaryTitle';
import PrimaryButton from '../components/UI/PrimaryButton';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <PrimaryTitle>WELL DONE!</PrimaryTitle>
            </View>
            <View>
                <LottieView
                    source={require('../assets/image/animation/welldone.json')}
                    autoPlay
                    loop={false}
                    style={{width: 400, height: 400}}   
                />
            </View>
            <Text style={styles.summaryTxt}>Your phone needed <Text style={styles.summaryTxthighlight} >{roundsNumber}</Text> rounds to guess the number <Text style={styles.summaryTxthighlight} >{userNumber}</Text></Text>  
            <PrimaryButton btnHandler={onStartNewGame}>START NEW GAME</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        alignItems:'center',
    },
    titleContainer:{
        width:'100%',
    },
    summaryTxt:{
        fontFamily:'Mukta_500Medium',
        fontSize:24,
        color:Colors.btnTxt,
        textAlign:'center',
        marginBottom:24,
    },
    summaryTxthighlight:{
        color:Colors.higher,
        fontFamily:'Mukta_800ExtraBold',
    }
});
