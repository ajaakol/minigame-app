import {
 StyleSheet,
 ImageBackground,
 SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Game from './screens/Game';
import StartGame from './screens/StartGame';
import Colors from './constants/colors';

export default function App() {
 const [userNumber, setUserNumber] = useState();

 function pickedNumberHandler(pickedNumber) {
  setUserNumber(pickedNumber);
 }

 let screen = <StartGame onPickNumber={pickedNumberHandler} />;

 if (userNumber) {
  screen = <Game />;
 }

 return (
  <LinearGradient
   colors={[Colors.primary700, Colors.accent500]}
   style={styles.rootScreen}>
   <ImageBackground
    source={require('./assets/images/background.png')}
    resizeMode='cover'
    imageStyle={styles.backgroundImage}
    style={styles.rootScreen}>
    <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
   </ImageBackground>
  </LinearGradient>
 );
}

const styles = StyleSheet.create({
 rootScreen: {
  flex: 1,
 },
 backgroundImage: {
  opacity: 0.15,
 },
});
