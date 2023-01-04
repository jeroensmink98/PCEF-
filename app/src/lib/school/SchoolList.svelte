<script lang="ts">
	import { SchoolStore } from '$lib/Stores';
    import {onMount, onDestroy} from 'svelte';
    import {pb} from '$lib/Pocketbase';
	import SchoolCreate from './SchoolCreate.svelte';
	import { fetchSchools } from '$lib/School';


    export async function deleteSchool(school: any){
        try{
            await pb.collection('school').delete(school.id);
            SchoolStore.update((schools) => schools.filter((s) => s.id !== school.id));
        }catch(err){
           
        }
    }
    onMount(async () => {
        const schools: any = await fetchSchools()
        SchoolStore.set(schools)
    });
</script>
<SchoolCreate/>
<hr>
<div class="schools">
    {#each $SchoolStore as school }
        <div class="school">
            <div class="school_name">
                <p>{school.school_name}</p>
                <button on:click={() => deleteSchool(school)}>Delete</button>
            </div>
        </div>
    {/each}
</div>