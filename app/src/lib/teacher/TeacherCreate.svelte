<script lang="ts">
	import { pb } from '$lib/Pocketbase';
	import { TeacherStore } from '$lib/Stores';

	let teacherName = '';
	let teacherCode = '';

	export async function addTeacher() {
		try {
			let data = {
				teacher_name: teacherName
			};

			const newTeacher: any = await pb.collection('teacher').create(data);
			TeacherStore.update((teachers) => [...teachers, newTeacher]);
		} catch (err) {
			console.log('error creating teacher');
		}
	}
</script>

<form on:submit={addTeacher}>
	<label for="teacherName">Teacher Name:</label>
	<input type="text" id="teacherName" bind:value={teacherName} />
	<button type="submit">Create Teacher</button>
</form>
