import { proxy } from 'valtio';

const state = proxy({
	h: [1, 2, 3, 4, 5],
	total: 0,
	num: 5,
});

export default state;
