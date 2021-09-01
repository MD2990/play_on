import { proxy } from 'valtio';

const state = proxy({
	h: [1, 2, 3, 4, 5,6,7,8,9,10,11],
	total: 0,
	num: 5,
});

export default state;
