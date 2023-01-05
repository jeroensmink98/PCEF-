import { pb } from './Pocketbase';

export async function fetchBooks() {
	try {
		const resultList = await pb.collection('book').getFullList();
		return resultList;
	} catch (err) {
		console.log(err);
	}
}
