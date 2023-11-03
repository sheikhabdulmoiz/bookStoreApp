import {StyleSheet, StatusBar} from 'react-native';
import {useState, useEffect} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BooksContextProvider from './store/context/book-context';
const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={true}
        backgroundColor="#1E272E"
      />
      <BooksContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {showSplashScreen ? (
              <Stack.Screen name="splash" component={SplashScreen} />
            ) : (
              <>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="bookdetail" component={BookDetailScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </BooksContextProvider>
    </>
  );
};

export default App;
