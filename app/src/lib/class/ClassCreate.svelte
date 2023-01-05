<script lang="ts">
	import { fetchBooks } from '$lib/Book';
	import { fetchLevels } from '$lib/Level';
	import { pb } from '$lib/Pocketbase';
	import { fetchRooms } from '$lib/Room';
	import { ClassStore } from '$lib/Stores';
	import { fetchTeachers } from '$lib/Teacher';
	import { onMount } from 'svelte';

	let newClassSubject = '';
	let newClassStartTime = '';
	let newClassEndTime = '';
	let newClassTeacher = '';
	let newClassBook = '';
	let newClassLevel = '';
	let newClassId = '';
	let newClassRoom = '';

	let levels: any = [];
	let teachers: any = [];
	let books: any = [];
	let rooms: any = [];

	onMount(async () => {
		books = await fetchBooks();
		levels = await fetchLevels();
		teachers = await fetchTeachers();
		rooms = await fetchRooms();
	});

	export async function addClass() {
		try {
			let data = {
				subject: newClassSubject,
				level: newClassLevel,
				teacher: newClassTeacher,
				book: newClassBook,
				start_time: newClassStartTime,
				end_time: newClassEndTime,
				class_id: newClassId,
				room: newClassRoom
			};

			const newClass: any = await pb.collection('class').create(data);
			ClassStore.update((classes) => [...classes, newClass]);
		} catch (err) {
			console.log(err);

			console.log('error creating class');
		}
	}
</script>

<form on:submit|preventDefault={addClass}>
	<label for="subject">Subject:</label>
	<input type="text" id="subject" bind:value={newClassSubject} />

	<label for="startTime">Start time:</label>
	<input type="text" id="startTime" bind:value={newClassStartTime} />

	<label for="startTime">End time:</label>
	<input type="text" id="startTime" bind:value={newClassEndTime} />

	<label for="classId">Class ID</label>
	<input type="text" id="classId" bind:value={newClassId} />

	<label for="teacher">Teacher:</label>
	<select id="teacher" name="teacher" bind:value={newClassTeacher}>
		{#each teachers as teacher}
			<option value={teacher.id}>{teacher.teacher_name}</option>
		{/each}
	</select>

	<label for="room">Room:</label>
	<select id="room" name="room" bind:value={newClassRoom}>
		{#each rooms as room}
			<option value={room.id}>{room.room_name}</option>
		{/each}
	</select>

	<label for="book">Book:</label>
	<select id="book" name="book" bind:value={newClassBook}>
		{#each books as book}
			<option value={book.id}>{book.book_name}</option>
		{/each}
	</select>

	<label for="level">Level:</label>
	<select id="level" name="level" bind:value={newClassLevel}>
		{#each levels as level}
			<option value={level.id}>{level.level_name}</option>
		{/each}
	</select>

	<br />
	<button type="submit">Create Class</button>
</form>
