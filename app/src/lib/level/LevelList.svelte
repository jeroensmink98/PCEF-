<script lang="ts">
	import { LevelStore } from '$lib/Stores';
    import {onMount, onDestroy} from 'svelte';
    import {pb} from '$lib/Pocketbase';
	import LevelCreate from './LevelCreate.svelte';


    
    export async function getLevels(){
        try{
            const resultList: any = await pb.collection('level').getFullList();
            LevelStore.set(resultList)
        }catch(err){
            
        }
        
    }

    export async function deleteLevel(level: any){
        try{
            await pb.collection('level').delete(level.id);
            LevelStore.update((levels) => levels.filter((l) => l.id !== level.id));
        }catch(err){
           
        }
    }

    onMount(getLevels)
</script>
<LevelCreate/>
<div class="levels">
    {#each $LevelStore as level }
        <div class="level">
            <div class="level_name">
                <p>name: <b>{level.level_name}</b> code: <b>{level.short_code}</b></p>
                <button on:click={() => deleteLevel(level)}>Delete</button>
            </div>
        </div>
    {/each}
</div>