import { IconButton } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React from 'react';

import {
	DiApple,
	DiAndroid,
	DiAngularSimple,
	DiAppcelerator,
	DiAppstore,
	DiAtom,
	DiBingSmall,
	DiCodeBadge,
	DiCodeigniter,
	DiBlackberry,
	DiBootstrap,
	DiCoda,
	DiCss3,
	DiDebian,
	DiFirefox,
} from 'react-icons/di';

const icn = [
	<DiApple key={nanoid()} size='4rem' />,
	<DiAndroid key={nanoid()} size='4rem' />,
	<DiAtom key={nanoid()} size='4rem' />,
	<DiAppstore key={nanoid()} size='4rem' />,
	<DiBingSmall key={nanoid()} size='4rem' />,
	<DiAppcelerator key={nanoid()} size='4rem' />,
	<DiAngularSimple key={nanoid()} size='4rem' />,
	<DiBlackberry key={nanoid()} size='4rem' />,
	<DiBootstrap key={nanoid()} size='4rem' />,
	<DiCoda key={nanoid()} size='4rem' />,
	<DiCodeBadge key={nanoid()} size='4rem' />,
	<DiCodeigniter key={nanoid()} size='4rem' />,
	<DiCss3 key={nanoid()} size='4rem' />,
	<DiDebian key={nanoid()} size='4rem' />,
	<DiFirefox key={nanoid()} size='4rem' />,
];

export default icn;
