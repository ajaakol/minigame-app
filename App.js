import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';

export default function App() {
 return (
  <LinearGradient
   colors={['#4e0329', '#ddb52f']}
   style={styles.rootScreen}>
   <ImageBackground
    source={require('./assets/images/background.png')}
    resizeMode='cover'
    imageStyle={styles.backgroundImage}
    style={styles.rootScreen}>
    <StartGame />
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
