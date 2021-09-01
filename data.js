import { nanoid } from 'nanoid';
import { snapshot, useSnapshot } from 'valtio';
import state from './stor';

const snap = snapshot(state);
const data = [
	{ h: 0, id: nanoid(), name: 'B1' },
	{ h: 0, id: nanoid(), name: 'B2' },
	{ h: 0, id: nanoid(), name: 'B3' },
	{ h: 0, id: nanoid(), name: 'B4' },
];

export default data;
