<script lang="ts">
	import { SchoolStore } from '$lib/Stores';
    import {onMount, onDestroy} from 'svelte';
    import {pb} from '$lib/Pocketbase';
	import SchoolCreate from './SchoolCreate.svelte';

    
    export async function getSchools(){
        try{
            const resultList: any = await pb.collection('school').getFullList();
            SchoolStore.set(resultList)
        }catch(err){
            
        }
        
    }

    export async function deleteSchool(school: any){
        try{
            await pb.collection('school').delete(school.id);
            SchoolStore.update((schools) => schools.filter((s) => s.id !== school.id));
        }catch(err){
           
        }
    }

    onMount(getSchools)
</script>
<SchoolCreate/>
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