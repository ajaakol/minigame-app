import { useState } from 'react';import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
function StartGame() {
 const [enteredNumber, setEnteredNumber] = useState('');

 function numberInputHandler(enteredText) {
  setEnteredNumber(enteredText);
 }

 function confirmInputHandler() {}

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
  backgroundColor: '#3b021f',
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
  borderBottomColor: '#ddb52f',
  borderBottomWidth: 2,
  color: '#ddb52f',
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
