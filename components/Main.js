import {
	Box,
	Button,
	Center,
	Divider,
	HStack,
	Input,
	layout,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	SimpleGrid,
	Spacer,
	Text,
	VStack,
	Wrap,
	WrapItem,
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
			<Center>
				{data.map((dd, index) => (
					<SimpleGrid
						p='2'
						columns={[1, null, 1]}
						key={dd.id}
						spacing='30px'
						justify='center'
						align='center'
						minChildWidth='50px'
						spacingX='40px'
						spacingY='20px'>
						<Image
							alt={dd.name}
							src={`/icn/${snap.h[index]}.svg`}
							width={100}
							height={100}
						/>

						<Divider />
						{state.h[index]}
						<Button
							color='yellow.800'
							variant='solid'
							colorScheme='yellow'
							isDisabled={state.h[index] == snap.num}
							onClick={() => {
								state.total += 1;
								state.h[index] = random(1, 11);
							}}>
							Click
						</Button>
					</SimpleGrid>
				))}
			</Center>
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
		for (let index = 0; index < 12; index++) {
			state.h.push([random(1, 4)]);
		}
	};

	const Texts = ({ children }) => (
		<Text
			isTruncated
			shadow='sm'
			color='yellow.600'
			textAlign='center'
			fontSize='2rem'
			fontFamily='initial'
			fontWeight='extrabold'>
			{children}
		</Text>
	);
	const nameEl = React.useRef(null);
	return (
		<>
			<Center>
				<SimpleGrid
					columns={[1, null, 1]}
					spacing='50px'
					justify='center'
					align='center'>
					<HStack justify='stretch' minW='28rem'></HStack>
					<Texts>Total Clicks: {snap.total}</Texts>
					<Texts>Your Lucky Number is: {snap.num}</Texts>

					<form onSubmit={handleSubmit}>
						<Input
							defaultValue={snap.num}
							color='yellow.600'
							borderColor='yellow.800'
							
							w='3.5rem'
							p='2'
							textAlign='center'
							required
							min='1'
							name='name'
							max='11'
							step='1'
							type='number'
							ref={nameEl}
						/>
						<br />

						<Input
							w='5rem'
							p='2'
							m='2'
							type='submit'
							name='Submit'
							cursor='pointer'
						/>
					</form>

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

					<Boxes />
				</SimpleGrid>
			</Center>
		</>
	);
}
