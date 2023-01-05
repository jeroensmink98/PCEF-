import { pb } from '$lib/Pocketbase';

export async function fetchClasses() {
	try {
		const resultList: any = await pb.collection('class').getList(1, 999, {
			expand: 'book, level, teacher'
		});
		return resultList;
	} catch (err) {
		console.log(err);
	}
}
