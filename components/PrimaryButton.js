import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children }) => {
    function pressed() {
        console.log('pressed');
    }
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable  onPress={pressed} 
                        android_ripple={{ color:'#0593A2' }}
                        style={styles.buttonInnerContainer}
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
});

export default PrimaryButton;
