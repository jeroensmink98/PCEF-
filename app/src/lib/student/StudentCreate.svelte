<script lang="ts">
	import { fetchClasses } from '$lib/Class';
	import { pb } from '$lib/Pocketbase';
	import { ClassStore } from '$lib/Stores';
	import { onMount } from 'svelte';


    let english_name = '';
    let khmer_name = '';
    let sex = '';
    let nationality = 'Cambodian';
    let phone_parents = '';
    let active = '';
    let dateOfEntry = '';
    let village = '';
    let studentClass = '';

	let classes: any = [];


	onMount(async () => {
		classes = await fetchClasses();
	});

	export async function addStudent() {
		try {
			let data = {
                english_name: english_name,
                khmer_name: khmer_name,
                nationality: nationality,
                village: village,
                active: active,
                date_of_entry: dateOfEntry,
                class: studentClass,
			};

            console.log(data);
            

			const newStudent: any = await pb.collection('student').create(data);
			ClassStore.update((classes) => [...classes, newStudent]);
		} catch (err) {
			console.log(err);

			console.log('error creating class');
		}
	}
</script>

<form on:submit|preventDefault={addStudent}>
	<label for="englishName">English Name:</label>
	<input type="text" id="englishName" bind:value={english_name} />

	<label for="khmerName">Khmer Name:</label>
	<input type="text" id="khmerName" bind:value={khmer_name} />

	<label for="sex">Sex</label>
	<select id="sex" bind:value={sex}>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>

	<label for="nationality">Nationality</label>
    <select id="active" bind:value={nationality}>
        <option value="Cambodian">Cambodian</option>
        <option value="Thai">Thai</option>
      </select>

    <label for="nationality">Village:</label>
	<input type="text" id="nationality" bind:value={village} />

    <label for="phoneParents">Phone Parents:</label>
	<input type="text" id="phoneParents" bind:value={phone_parents} />

    <label for="active">Active</label>
    <select id="active" bind:value={active}>
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>

    <label for="entry-date">Date of entry</label>
  <input type="datetime" id="entry-date" bind:value={dateOfEntry} />

	<label for="class">Class:</label>
	<select id="class" name="class" bind:value={studentClass}>
		{#each $ClassStore as c}
			<option value={c.id}>{c.class_id}</option>
		{/each}
	</select>

	<br />
	<button type="submit">Create Student</button>
</form>
