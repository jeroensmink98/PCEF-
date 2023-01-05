<script lang="ts">
	import { pb } from '$lib/Pocketbase';
	import { LevelStore } from '$lib/Stores';

	let levelName = '';
	let levelShortCode = '';

	export async function addLevel() {
		try {
			let data = {
				level_name: levelName,
				short_code: levelShortCode.toUpperCase()
			};

			const newLevel: any = await pb.collection('level').create(data);
			LevelStore.update((levels) => [...levels, newLevel]);
		} catch (err) {
			console.log('error creating level');
		}
	}
</script>

<form on:submit={addLevel}>
	<label for="levelName">Level Name:</label>
	<input type="text" id="levelName" bind:value={levelName} />
	<label for="levelShortcode">Shortcode:</label>
	<input type="text" id="levelShortcode" bind:value={levelShortCode} />
	<button type="submit">Create Level</button>
</form>
