import Colors from '../constants/Colors';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryTitle from '../components/UI/PrimaryTitle';
import PrimaryButton from '../components/UI/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import {    View, 
            Text, 
            StyleSheet, 
            ImageBackground,
            Dimensions  } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const GameOverScreen = ({ route }) => {

    const { roundsNumber, userNumber } = route.params;
    const navigation = useNavigation();

    function newGameHandler(){
        navigation.navigate('InsertNumber');
    }

    return (
        <LinearGradient colors={[Colors.blue800, Colors.blue500]} style={styles.rootContainer}>
           <ImageBackground  source={require('../assets/image/background.png')} 
                             resizeMode='cover' style={styles.rootContainer} 
                             imageStyle={styles.backgroundImage}>
                <View style={styles.screen}>
                    <View style={styles.titleContainer}>
                        <PrimaryTitle>WELL DONE!</PrimaryTitle>
                    </View>
                    <View>
                        <LottieView
                            source={require('../assets/image/animation/victory.json')}
                            autoPlay
                            loop={false}
                            style={{width: deviceWidth < 380 ? 150 : 300, height: deviceWidth < 380 ? 150 : 300}}   
                        />
                    </View>
                    <Text style={styles.summaryTxt}>Your phone needed <Text style={styles.summaryTxthighlight} >{roundsNumber}</Text> rounds to guess the number <Text style={styles.summaryTxthighlight} >{userNumber}</Text></Text>  
                    <PrimaryButton btnHandler={newGameHandler}>START NEW GAME</PrimaryButton>
                </View>
            </ImageBackground>
        </LinearGradient>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        alignItems:'center',
        marginTop: deviceHeight < 600 ? 0 : 24,
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
    },
    rootContainer: {
        flex: 1,
      },
      backgroundImage: {
        opacity: 0.3,
      },
});
