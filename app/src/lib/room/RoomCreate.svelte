<script lang="ts">
	import { pb } from '$lib/Pocketbase';
	import { fetchSchools } from '$lib/School';
	import { RoomStore } from '$lib/Stores';
	import { onMount } from 'svelte';

	let roomName = '';
	let schoolId = '';
	let schools: any = [];

	export async function addRoom() {
		try {
			let data = {
				room_name: roomName,
				school: schoolId
			};

			const newRoom: any = await pb.collection('room').create(data);
			RoomStore.update((rooms) => [...rooms, newRoom]);
		} catch (err) {
			console.log('error creating room');
		}
	}

	onMount(async () => {
		schools = await fetchSchools();
	});
</script>

<form on:submit={addRoom}>
	<label for="roomName">Room Name:</label>
	<input type="text" id="roomName" bind:value={roomName} />

	<label for="school">School:</label>
	<select id="school" name="school" bind:value={schoolId}>
		{#each schools as school}
			<option value={school.id}>{school.school_name}</option>
		{/each}
	</select>

	<button type="submit">Create Room</button>
</form>
