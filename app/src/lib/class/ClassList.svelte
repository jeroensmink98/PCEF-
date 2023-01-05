<script lang="ts">
	import { ClassStore } from '$lib/Stores';
	import { get } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import { pb } from '$lib/Pocketbase';
	import ClassCreate from './ClassCreate.svelte';
	import { fetchClasses } from '$lib/Class';

	let classes: any = [];

	export async function deleteClass(c: any) {
		try {
			await pb.collection('class').delete(c.id);
			ClassStore.update((classes) => classes.filter((c) => c.id !== c.id));
		} catch (err) {}
	}

	onMount(async () => {
		classes = await fetchClasses();
		console.log(await get(ClassStore));

		ClassStore.set(classes.items);
	});
</script>

<ClassCreate />
<hr />
<div class="classes">
	{#each $ClassStore as c (c.id)}
		<div class="class">
			<div class="class_name">
				<p>name: <b>{c.subject}</b></p>
				<p>book: <b>{c.expand?.book?.book_name}</b></p>
				<p>level: <b>{c.expand?.level?.level_name}</b></p>
				<p>teacher: <b>{c.expand?.teacher?.teacher_name}</b></p>
				<p>start_time: <b>{c.start_time}</b></p>
				<p>end_time: <b>{c.end_time}</b></p>
				<button on:click={() => deleteClass(c)}>Delete</button>
			</div>
		</div>
	{/each}
</div>
