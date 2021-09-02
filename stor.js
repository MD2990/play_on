import { proxy } from 'valtio';

const state = proxy({
	h: [2, 9, 6, 1],
	total: 0,
	num: 1,
});

export default state;
