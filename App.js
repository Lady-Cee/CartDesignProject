import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from './app/screens/ProductScreen';
import { useFonts } from 'expo-font';




export default function App() {
  const Stack = createNativeStackNavigator();

  const[fontsLoaded] = useFonts({
    'Inter-Black': require('./app/assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./app/assets/fonts/Inter-Bold.ttf'),
    'Inter-Regular': require('./app/assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./app/assets/fonts/Inter-SemiBold.ttf'),
  })
  
  if (!fontsLoaded){
    return null;
  }
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown:false,
            }}/>

        <Stack.Screen
          name='ProductScreen'
          component={ProductScreen}
          options={{
            headerShown:false,
            }}/>
      </Stack.Navigator>

    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
