import { View, StyleSheet, Text, Alert } from 'react-native';import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (min - max)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function Game({ userNumber }) {
	const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	const nextGuess = (direction) => {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			return;
		}
		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newRndNumber);
	};

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View>
					<PrimaryButton onPress={nextGuess.bind(this, 'lower')}>-</PrimaryButton>
					<PrimaryButton onPress={nextGuess.bind(this, 'greater')}>+</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

export default Game;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
});
