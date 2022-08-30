import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

function StartGame({ onPickNumber }) {
 const [enteredNumber, setEnteredNumber] = useState('');

 function numberInputHandler(enteredText) {
  setEnteredNumber(enteredText);
 }

 function resetInputHandler() {
  setEnteredNumber('');
 }

 function confirmInputHandler() {
  const chosenNumber = parseInt(enteredNumber);

  if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
   Alert.alert(
    'Invalid number!',
    'Number has to be a number between 1 and 99.',
    [
     {
      text: 'okay',
      style: 'destructive',
      onPress: resetInputHandler,
     },
    ],
   );

   return;
  }

  onPickNumber(chosenNumber);
 }

 return (
  <View style={styles.inputContainer}>
   <TextInput
    style={styles.numberInput}
    maxLength={2}
    keyboardType='number-pad'
    autoCorrect={false}
    autoCapitalize='none'
    value={enteredNumber}
    onChangeText={numberInputHandler}
   />

   <View style={styles.buttonsContainer}>
    <View style={styles.buttonContainer}>
     <PrimaryButton>Reset</PrimaryButton>
    </View>
    <View style={styles.buttonContainer}>
     <PrimaryButton onPress={confirmInputHandler}>
      Confirm
     </PrimaryButton>
    </View>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 inputContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
  marginHorizontal: 24,
  marginTop: 100,
  backgroundColor: Colors.primary800,
  borderRadius: 8,
  elevation: 4,
  shadowColor: 'black',
  shadowOffset: {
   width: 0,
   height: 2,
  },
  shadowRadius: 6,
  shadowOpacity: 0.25,
 },
 numberInput: {
  height: 50,
  width: 50,
  fontSize: 32,
  borderBottomColor: Colors.accent500,
  borderBottomWidth: 2,
  color: Colors.accent500,
  marginVertical: 8,
  fontWeight: 'bold',
  textAlign: 'center',
 },
 buttonsContainer: {
  flexDirection: 'row',
 },
 buttonContainer: {
  flex: 1,
 },
});

export default StartGame;
