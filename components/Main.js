import {
	Box,
	Divider,
	IconButton,
	Input,
	Text,
	useBreakpointValue,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/react';

import data from '../data';
import React, { useEffect, useRef } from 'react';

import state from '../stor';

import { useSnapshot } from 'valtio';
import icn from './Icons';
import { nanoid } from 'nanoid';
function random(min, max) {
	const number = Math.round(Math.random() * (max - min) + min);

	return number;
}
const Boxes = ({ size }) => {
	const snap = useSnapshot(state);

	useEffect(() => {
		state.num = random(1, 12);
	}, []);

	const B = () => {
		return (
			<Wrap spacing={size} justify='center'>
				{snap.h.map((d, index) => (
					<WrapItem key={nanoid()}>
						<Box p='2' spacing={size}>
							<Text
								color='orange.400'
								fontWeight='bold'
								textAlign='center'
								p='2'>
								{snap.h[index] || index}
							</Text>
							<Divider color='yellow.300' />
							<IconButton
								my='2'
								isDisabled={snap.h[index] == snap.num}
								colorScheme='orange'
								aria-label='Search database'
								icon={icn[snap.h[index]]}
								w='6rem'
								h='6rem'
								borderRadius='50%'
								onClick={() => {
									state.total += 1;
									state.h[index] = random(1, 13);
								}}
							/>
						</Box>
					</WrapItem>
				))}
			</Wrap>
		);
	};

	return <B />;
};

export default function Main() {
	const size = useBreakpointValue({ base: '1.0rem', md: '1.8rem' });

	const snap = useSnapshot(state);
	const ref = useRef(2);

	const handleSubmit = (e) => {
		e.preventDefault();
		state.total = 0;

		state.num = nameEl.current.value;
		state.h = [];

		for (let index = 0; index < 4; index++) {
			state.h.push([random(1, 12)]);
		}
	};

	const Texts = ({ text, children }) => (
		<Text
			overflow='hidden'
			textOverflow='ellipsis'
			isTruncated
			color='yellow.600'
			textAlign='center'
			fontSize={size}
			fontFamily='initial'
			fontWeight='extrabold'>
			{text}
			<Text as={'span'} isTruncated color='yellow.500' fontSize={size}>
				{children}
			</Text>
		</Text>
	);
	const nameEl = React.useRef(null);
	const toast = createStandaloneToast();

	useEffect(() => {
		const ss = snap.h.filter((s) => s == snap.num).length;
		ss == 4 &&
			toast({
				title: 'Great',
				description: `Congratulations , You won with total clicks of ${snap.total}`,
				status: 'success',
				duration: 4000,
				isClosable: true,
			});
	}, [snap.h, snap.num, snap.total, toast]);

	return (
		<>
			<Wrap
				justify='space-evenly'
				mt='6%'
				spacing={{ base: '3xl', lg: '2xl', md: 'md', sm: 'sm' }}>
				<WrapItem>
					<Texts text='Total Clicks: '> {snap.total}</Texts>
				</WrapItem>
				<WrapItem>
					<Texts text='Your Lucky Number is: '> {snap.num}</Texts>
				</WrapItem>
			</Wrap>
			<VStack mt='1%' p='4' mx='4' spacing={size} justify='center'>
				<form onSubmit={handleSubmit}>
					<Input
						mt='10'
						defaultValue={snap.num}
						color='yellow.600'
						borderColor='yellow.800'
						p='2'
						textAlign='center'
						required
						min={1}
						max={12}
						step={1}
						type='number'
						ref={nameEl}
					/>
					<br />

					<Input
						p='2'
						mt='2'
						mb='4'
						type='submit'
						name='Submit'
						cursor='pointer'
					/>
				</form>

				{/* 				<HStack spacing='0'>
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
								*/}

				<Boxes size={size} />
			</VStack>
		</>
	);
}
