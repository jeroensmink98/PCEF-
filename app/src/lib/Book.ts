import { pb } from './Pocketbase';
import { BookStore } from './Stores';

export async function fetchBooks() {
	try {
		const resultList = await pb.collection('book').getFullList();
		BookStore.set(resultList)
	} catch (err) {
		console.log(err);
	}
}


