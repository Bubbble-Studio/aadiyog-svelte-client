import { goto } from '$app/navigation';
import { authStore } from '$lib/store/authStore';
import { userDataStore } from '$lib/store/userDataStore';

export const validateSession = (onFailure = () => {}) => {
	try {
		console.log('validate session');
		const user = JSON.parse(localStorage?.getItem('user'));
		const token = localStorage?.getItem('token');
		console.log(user, token);
		if (!token && !user) return;
		if (!token || !user) throw new Error();
		userDataStore.set(user);
		authStore.set(token);
	} catch (err) {
		console.log(err);
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		onFailure();
	}
};