import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const PrimaryButton = ({ children, btnHandler }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable  onPress={btnHandler} 
                        android_ripple={{ color:Colors.androidShadow }}
                        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',

    },
    buttonInnerContainer: {
        backgroundColor: Colors.blue700,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: Colors.btnTxt,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});

export default PrimaryButton;
