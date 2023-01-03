<script lang="ts">
    import {pb} from '$lib/Pocketbase';
	import { ClassStore } from '$lib/Stores';
	import { add_classes } from 'svelte/internal';

    let classSubject =''

    export async function addClass(){
        try{
            let data = {
                subject: classSubject
            }

            const newClass: any = await pb.collection('class').create(data);
            ClassStore.update((classes) => [...classes, newClass])
            
        }catch(err){
            console.log('error creating class');
        }
    }
</script>

<form on:submit={addClass}>
    <label for="subject">Subject:</label>
    <input type="text" id="subject" bind:value={classSubject} />
    <button type="submit">Create class</button>
</form>