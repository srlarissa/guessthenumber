import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children }) => {
    function pressed() {
        console.log('pressed');
    }
    return (
        <Pressable onPress={pressed}>
            <View style={styles.container}>
                <Text>{children}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#103778',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2,
    },
});

export default PrimaryButton;
