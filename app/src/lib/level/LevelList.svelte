<script lang="ts">
	import { LevelStore } from '$lib/Stores';
    import {onMount, onDestroy} from 'svelte';
    import {pb} from '$lib/Pocketbase';
	import LevelCreate from './LevelCreate.svelte';
	import { fetchLevels } from '$lib/Level';

    
    export async function deleteLevel(level: any){
        try{
            await pb.collection('level').delete(level.id);
            LevelStore.update((levels) => levels.filter((l) => l.id !== level.id));
        }catch(err){
           
        }
    }
    onMount(async () => {
        const levels: any = await fetchLevels()
        LevelStore.set(levels)
    })

    // css variables
    let table_header = ""
    let table_row = "border px-4 py-2 font-medium"
    let delete_button = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-3 rounded"
    
</script>
<LevelCreate/>
<hr>
<div class="levels">
        <div class="level">
            <div class="rounded-t-l overflow-hidden from-emerald-50 to-teal-100 p-3">
                <table class="min-w-full">
                <thead>
                    <tr>
                        <th class="{table_header}">Name</th>
                        <th class="{table_header}">Code</th>
                        <!-- No header for delete column -->
                    </tr>
                </thead>
                <tbody>
                    {#each $LevelStore as level }
                    <tr>
                        <td class="{table_row}">{level.level_name}</td>
                        <td class="{table_row}">{level.short_code}</td>
                        <td><button class="{delete_button}" on:click={() => deleteLevel(level)}>Delete</button></td>
                    </tr>
                    {/each}
                </tbody>
                </table>
            </div>
        </div>
</div>
