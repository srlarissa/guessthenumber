import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = ({passToHomeHandler}) => {
    return (
        <View style={styles.container}>
            <LottieView 
                source={require('../assets/image/animation/dicesplash.json')}
                autoPlay
                loop={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Splash;
