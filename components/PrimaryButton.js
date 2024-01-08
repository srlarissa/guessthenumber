import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, btnHandler }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable  onPress={btnHandler} 
                        android_ripple={{ color:'#3D5A73' }}
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
        backgroundColor: '#103778',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
});

export default PrimaryButton;
