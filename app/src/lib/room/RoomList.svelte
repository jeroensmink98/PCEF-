<script lang="ts">
	import { BookStore, RoomStore } from '$lib/Stores';
	import { onMount, onDestroy } from 'svelte';
	import { pb } from '$lib/Pocketbase';
	import { fetchRooms } from '$lib/Room';
	import RoomCreate from './RoomCreate.svelte';

	export async function deleteRoom(room: any) {
		try {
			await pb.collection('room').delete(room.id);
			BookStore.update((books) => books.filter((r) => r.id !== room.id));
		} catch (err) {}
	}

	onMount(async () => {
		const rooms: any = await fetchRooms();
		RoomStore.set(rooms);
	});
</script>

<RoomCreate />
<div class="rooms">
	{#each $RoomStore as room}
		<div class="room">
			<div class="room_name">
				<p>{room.room_name}</p>
				<button on:click={() => deleteRoom(room)}>Delete</button>
			</div>
		</div>
	{/each}
</div>
