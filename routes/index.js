import Splash from '../screens/Splash';
import GameScreen from '../screens/GameScreen';
import GameOverScreen from '../screens/GameOverScreen';
import StartGameScreen from '../screens/StartGameScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="InsertNumber" component={StartGameScreen} />
                <Stack.Screen name="Game" component={GameScreen} />
                <Stack.Screen name="GameOver" component={GameOverScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}