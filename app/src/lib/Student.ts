import { pb } from "./Pocketbase";

export async function fetchStudents() {
	try {
		const resultList: any = await pb.collection('student').getList(1, 999, {
			expand: 'book, level, teacher'
		});
		return resultList;
	} catch (err) {
		console.log(err);
	}
}
