import {
	Box,
	Button,
	Center,
	HStack,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Text,
	VStack,
} from '@chakra-ui/react';

import data from '../data';
import React, { useRef } from 'react';

import state from '../stor';
import Image from 'next/image';

import { useSnapshot } from 'valtio';
function random(min, max) {
	const number = Math.round(Math.random() * (max - min) + min);

	return number;
}
const Boxes = () => {
	const snap = useSnapshot(state);

	const B = () => {
		return (
			<>
				{data.map((dd, index) => (
					<VStack key={dd.id}>
						<Box>
							<Text>{state.h[index]}</Text>
							<Image
								alt={dd.name}
								src={`/icn/${snap.h[index]}.svg`}
								width={100}
								height={100}
							/>
						</Box>

						<Button
							isDisabled={state.h[index] == snap.num}
							onClick={() => {
								state.total += 1;
								state.h[index] = random(1, 5);
							}}>
							{dd.name}
						</Button>
					</VStack>
				))}
			</>
		);
	};

	return (
		<>
			<HStack>
				<B />
			</HStack>
		</>
	);
};

export default function Main() {
	const snap = useSnapshot(state);
	const ref = useRef(2);

	const handleSubmit = (e) => {
		e.preventDefault();
		state.total = 0;

		state.num = nameEl.current.value;
		state.h = [];
		for (let index = 0; index < 5; index++) {
			state.h.push([random(1, 4)]);
		}
		/*	nameEl.current.value = state.h[0];
		state.num = nameEl.current.value; */
	};

	console.log('ok');

	const nameEl = React.useRef(null);
	return (
		<>
			<Center m='40'>Tota: {snap.total}</Center>
			<Center m='40'>
				<VStack>
					<Text>Your Lucky Number is: {snap.num}</Text>

					<form onSubmit={handleSubmit}>
						<input
							required
							min='1'
							name='name'
							max='5'
							step='1'
							type='number'
							ref={nameEl}
						/>

						<input type='submit' name='Submit' />
					</form>
				</VStack>
			</Center>

			{/* 			<Center m='40'>
				<HStack spacing='0'>
					{snap.h[0] === 1 && (
						<Box textAlign='right' bg='red' p='5' h='55px' w='50px'>
							{snap.h[1] !== 1 && <Text> 25%</Text>}
						</Box>
					)}
					{snap.h[1] === 1 && (
						<Box textAlign='right' bg='red' p='5' h='55px' w='50px'>
							{snap.h[2] !== 1 && <Text> 50%</Text>}
						</Box>
					)}
					{snap.h[2] === 1 && (
						<Box textAlign='right' bg='red' p='5' h='55px' w='50px'>
							{snap.h[3] !== 1 && <Text> 75%</Text>}
						</Box>
					)}
					{snap.h[3] === 1 && (
						<Box textAlign='right' bg='red' p='5' h='55px' w='50px'>
							{snap.h[4] !== 1 && <Text> 100%</Text>}
						</Box>
					)}
				</HStack>
			</Center> */}

			<Center mt='10%'>
				<Boxes />
			</Center>
		</>
	);
}
